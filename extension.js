const vscode = require('vscode');

let outputChannel;

function logMsg(message, level = "INFO") {
	const timestamp = new Date().toISOString().split('T')[1].replace('Z', '');
	const formatted = `[${timestamp}] [${level}] [PTSD-ENGINE] ${message}`;
	if (outputChannel) {
		outputChannel.appendLine(formatted);
	}
	console.log(formatted);
}

// --- HELPER EXTRACTORS ---
function getExtractors(document, position) {
	const lineText = document.lineAt(position.line).text;
	const charIdx = position.character;

	const lineExact = lineText;
	const lineWithin = lineText.trim();

	// Container Extraction (Quotes, Brackets, Braces, Parentheses)
	let quoted = '';
	const pairs = [
		{ open: '"', close: '"' },
		{ open: "'", close: "'" },
		{ open: "`", close: "`" },
		{ open: '[', close: ']' },
		{ open: '{', close: '}' },
		{ open: '(', close: ')' }
	];

	let narrowestLength = Infinity;

	for (const pair of pairs) {
		let searchStart = 0;
		while (searchStart < lineText.length) {
			const startIdx = lineText.indexOf(pair.open, searchStart);
			if (startIdx === -1) break;

			let endIdx = -1;
			if (pair.open === pair.close) {
				endIdx = lineText.indexOf(pair.close, startIdx + 1);
			} else {
				let balance = 1;
				for (let j = startIdx + 1; j < lineText.length; j++) {
					if (lineText[j] === pair.open) balance++;
					if (lineText[j] === pair.close) balance--;
					if (balance === 0) {
						endIdx = j;
						break;
					}
				}
			}

			if (endIdx !== -1) {
				if (charIdx >= startIdx && charIdx <= endIdx + 1) {
					const innerContent = lineText.slice(startIdx + 1, endIdx);
					const matchLength = endIdx - startIdx;

					if (matchLength < narrowestLength) {
						narrowestLength = matchLength;
						quoted = innerContent;
					}
				}
				searchStart = startIdx + 1;
			} else {
				break;
			}
		}
	}

	// Identifier Extraction
	let identifier = '';
	const idRegex = /[a-zA-Z_$][a-zA-Z0-9_$]*(?:\.[a-zA-Z_$][a-zA-Z0-9_$]*)*/g;
	let match;
	while ((match = idRegex.exec(lineText)) !== null) {
		const start = match.index;
		const end = start + match[0].length;
		if (charIdx >= start && charIdx <= end) {
			identifier = match[0];
			break;
		}
	}

	// Word Extraction
	let word = '';
	const wordRange = document.getWordRangeAtPosition(position);
	if (wordRange) {
		word = document.getText(wordRange);
	}

	return { lineExact, lineWithin, quoted, identifier, word };
}

// --- ADVANCED MARKDOWN CONTEXT TRACER ---
function getMarkdownContexts(document, lineIndex) {
	if (document.languageId !== 'markdown') {
		return { immediate: '', path: '' };
	}

	const headers = [];

	// Scan upward from the matched line to trace the full structural tree hierarchy
	for (let i = lineIndex; i >= 0; i--) {
		const text = document.lineAt(i).text.trim();
		if (text.startsWith('#')) {
			const match = text.match(/^(#+)\s+(.*)$/);
			if (match) {
				const level = match[1].length;
				const title = match[2];
				headers.push({ level, title, raw: text });
			}
		}
	}

	if (headers.length === 0) {
		return { immediate: ' [Root]', path: ' [Root]' };
	}

	// Capture the immediate parent (the very first header hit going up)
	const immediate = ` ${headers[0].raw}`;

	// Reconstruct the nested path by enforcing descending order of header levels
	const pathTree = [];
	let currentLevel = Infinity;

	for (const header of headers) {
		if (header.level < currentLevel) {
			pathTree.unshift(header.raw); // Insert parent at the beginning
			currentLevel = header.level;
		}
	}

	const path = ` ${pathTree.join(' > ')}`;
	return { immediate, path };
}

// --- MASTER MATCH ENGINE ---
function findMatches(document, type, tokens) {
	const results = [];
	const totalLines = document.lineCount;
	const target = tokens[type];

	logMsg(`Executing findMatches for target type '${type}': "${target || ''}" across ${totalLines} lines...`, "DEBUG");

	if (!target) {
		logMsg(`Target token for '${type}' is empty or null. Aborting findMatches.`, "WARN");
		return results;
	}

	for (let i = 0; i < totalLines; i++) {
		const rawText = document.lineAt(i).text;
		let isMatch = false;

		if (type === 'lineExact') {
			// Normalize spaces/tabs: trim ends and turn any sequence of tabs/spaces into a single space
			const normalize = (str) => str.trim().replace(/[\t ]+/g, ' ');
			isMatch = (normalize(rawText) === normalize(target));
		} else {
			isMatch = rawText.includes(target);
		}

		if (isMatch) {
			const contexts = getMarkdownContexts(document, i);
			results.push({
				lineIndex: i,
				text: rawText,
				immediateSection: contexts.immediate,
				pathSection: contexts.path
			});
		}
	}
	logMsg(`findMatches completed: Found ${results.length} matching lines for '${type}'.`, "INFO");
	return results;
}

// --- VERB SELECTION PICKER ---
async function promptVerbAndExecute(editor, chosenType, matches, tokens) {
	const targetValue = tokens[chosenType];
	logMsg(`Presenting Step 2 Action Verb QuickPick for ${matches.length} matches of [${chosenType}: "${targetValue}"]...`, "INFO");
	const verbSelection = await vscode.window.showQuickPick([
		{ label: '🔍 Browse via QuickPick', detail: `Fluidly scroll matching lines for "${targetValue}"`, value: 'browse' },
		{ label: '⬇️ Next Instance Match', detail: 'Leap cursor down onto the subsequent match.', value: 'next' },
		{ label: '⬆️ Previous Instance Match', detail: 'Leap cursor up onto the preceding match.', value: 'prev' },
		{ label: '📋 Copy Matching Lines', detail: 'Save matching rows to your clipboard cache.', value: 'copy' },
		{ label: '💉 Inject Matching Lines Below', detail: 'Insert text array directly beneath your line position.', value: 'inject' }
	], { placeHolder: `⚡ Action Verb: Choose how to handle ${matches.length} matches for [${chosenType}: "${targetValue}"]` });

	if (!verbSelection) {
		logMsg("User cancelled Step 2 action verb selection.", "INFO");
		return;
	}

	logMsg(`User selected action verb: '${verbSelection.value}'. Proceeding to execution...`, "INFO");
	executeVerb(editor, chosenType, verbSelection.value, matches, editor.selection.active.line);
}

// --- MAIN EXTENSION ACTIVATION ---
function activate(context) {
	outputChannel = vscode.window.createOutputChannel("PTSD String Detective");
	context.subscriptions.push(outputChannel);
	outputChannel.show(true); // Bring output channel to foreground on startup without stealing editor focus

	logMsg("==========================================================================", "STARTUP");
	logMsg("🚀 PTSD String Detective v1.0.1 Extension Host Activating...", "STARTUP");
	logMsg(`Environment: Node ${process.version}, VS Code ${vscode.version || 'Unknown'}`, "STARTUP");
	logMsg("Output Channel 'PTSD String Detective' initialized and displayed.", "STARTUP");

	const searchTypes = ['lineExact', 'lineWithin', 'quoted', 'identifier', 'word'];
	const verbs = ['browse', 'next', 'prev', 'copy', 'inject'];

	logMsg("Registering master command: 'ptsd.orchestrate'...", "REGISTER");
	// 1. Master Dual Picker Orchestrator (Filtered to omit empty choices)
	let orchestrateCmd = vscode.commands.registerCommand('ptsd.orchestrate', async () => {
		logMsg(">>> COMMAND TRIGGERED: 'ptsd.orchestrate' <<<", "EXEC");
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			logMsg("Execution halted: No active text editor found.", "ERROR");
			vscode.window.showWarningMessage('No active text editor found. Please open and focus a document to use PTSD.');
			return;
		}

		logMsg(`Active document: "${editor.document.fileName}" (Lang: ${editor.document.languageId}), Cursor: Ln ${editor.selection.active.line + 1}, Col ${editor.selection.active.character}`, "DEBUG");
		const tokens = getExtractors(editor.document, editor.selection.active);
		logMsg(`Harvested tokens: exact="${tokens.lineExact}", within="${tokens.lineWithin}", quoted="${tokens.quoted}", id="${tokens.identifier}", word="${tokens.word}"`, "DEBUG");

		const pickerOptions = [];
		if (tokens.lineExact) pickerOptions.push({ label: 'Exact Match', description: `"${tokens.lineExact}"`, value: 'lineExact' });
		if (tokens.lineWithin) pickerOptions.push({ label: 'Trimmed Line Within', description: `"${tokens.lineWithin}"`, value: 'lineWithin' });
		if (tokens.quoted) pickerOptions.push({ label: 'Quoted Text Within', description: `"${tokens.quoted}"`, value: 'quoted' });
		if (tokens.identifier) pickerOptions.push({ label: 'Identifier Within', description: `"${tokens.identifier}"`, value: 'identifier' });
		if (tokens.word) pickerOptions.push({ label: 'Word Within', description: `"${tokens.word}"`, value: 'word' });

		logMsg(`Valid non-empty search target options: ${pickerOptions.length}`, "INFO");
		if (pickerOptions.length === 0) {
			logMsg("Execution halted: No valid text tokens found under cursor.", "WARN");
			vscode.window.showWarningMessage('No valid text tokens found under cursor.');
			return;
		}

		logMsg("Presenting Step 1 QuickPick target selection...", "INFO");
		const typeSelection = await vscode.window.showQuickPick(pickerOptions, { placeHolder: '🧠 STEP 1: Select search target type' });
		if (!typeSelection) {
			logMsg("User cancelled Step 1 target selection.", "INFO");
			return;
		}

		logMsg(`Step 1 accepted: User selected target type '${typeSelection.value}' -> "${tokens[typeSelection.value]}"`, "INFO");
		const matches = findMatches(editor.document, typeSelection.value, tokens);
		if (matches.length === 0) {
			logMsg(`No matching instances found for '${typeSelection.value}'.`, "WARN");
			vscode.window.showWarningMessage('No matching instances found.');
			return;
		}

		await promptVerbAndExecute(editor, typeSelection.value, matches, tokens);
	});
	context.subscriptions.push(orchestrateCmd);

	logMsg(`Registering 5 standalone search loops: ${searchTypes.join(', ')}...`, "REGISTER");
	// 2. Standalone Base Search Types Loops (Search Type -> Verb Picker)
	searchTypes.forEach(type => {
		let searchCmd = vscode.commands.registerCommand(`ptsd.search.${type}`, async () => {
			logMsg(`>>> COMMAND TRIGGERED: 'ptsd.search.${type}' <<<`, "EXEC");
			const editor = vscode.window.activeTextEditor;
			if (!editor) {
				logMsg("Execution halted: No active text editor found.", "ERROR");
				vscode.window.showWarningMessage('No active text editor found. Please open and focus a document to use PTSD.');
				return;
			}

			const tokens = getExtractors(editor.document, editor.selection.active);
			if (!tokens[type]) {
				logMsg(`No valid target token found for "${type}" search.`, "WARN");
				vscode.window.showWarningMessage(`No valid target token found for "${type}" search.`);
				return;
			}

			const matches = findMatches(editor.document, type, tokens);
			if (matches.length === 0) {
				logMsg(`No matches found for target: "${tokens[type]}"`, "WARN");
				vscode.window.showWarningMessage(`No matches found for target: "${tokens[type]}"`);
				return;
			}

			await promptVerbAndExecute(editor, type, matches, tokens);
		});
		context.subscriptions.push(searchCmd);
	});

	logMsg(`Registering 25 direct action combinations (${searchTypes.length} targets × ${verbs.length} verbs)...`, "REGISTER");
	// 3. Standalone Direct Actions Combinations (Direct Mapping: No Pickers)
	searchTypes.forEach(type => {
		verbs.forEach(verb => {
			let comboCmd = vscode.commands.registerCommand(`ptsd.${type}.${verb}`, async () => {
				logMsg(`>>> COMMAND TRIGGERED: 'ptsd.${type}.${verb}' <<<`, "EXEC");
				const editor = vscode.window.activeTextEditor;
				if (!editor) {
					logMsg("Execution halted: No active text editor found.", "ERROR");
					vscode.window.showWarningMessage('No active text editor found. Please open and focus a document to use PTSD.');
					return;
				}

				const tokens = getExtractors(editor.document, editor.selection.active);
				if (!tokens[type]) {
					logMsg(`No valid target token found for "${type}" action.`, "WARN");
					vscode.window.showWarningMessage(`No valid target token found for "${type}" action.`);
					return;
				}

				const matches = findMatches(editor.document, type, tokens);
				if (matches.length === 0) {
					logMsg(`No matching instances found for "${tokens[type]}".`, "WARN");
					vscode.window.showWarningMessage(`No matching instances found for "${tokens[type]}".`);
					return;
				}

				executeVerb(editor, type, verb, matches, editor.selection.active.line);
			});
			context.subscriptions.push(comboCmd);
		});
	});

	logMsg("✅ PTSD String Detective activation complete! All 31 commands successfully subscribed.", "SUCCESS");
	logMsg("==========================================================================", "STARTUP");
}

// --- VERB ROUTER EXECUTION MATRIX ---
async function executeVerb(editor, type, verb, matches, currentLineIdx) {
	const document = editor.document;
	logMsg(`>>> EXECUTE VERB: '${verb}' on target type '${type}' (${matches.length} matches) <<<`, "EXEC");

	switch (verb) {
		case 'browse': {
			const pickerItems = matches.map(m => ({
				label: `Line ${m.lineIndex + 1}: ${m.text.trim()}`,
				description: m.immediateSection,
				index: m.lineIndex
			}));

			const quickPick = vscode.window.createQuickPick();
			quickPick.items = pickerItems;
			quickPick.placeholder = 'Arrow keys browse lines live. Enter locks choice, Esc exits.';

			quickPick.onDidChangeActive(activeItems => {
				if (activeItems && activeItems[0]) {
					const targetPos = new vscode.Position(activeItems[0].index, 0);
					editor.revealRange(new vscode.Range(targetPos, targetPos), vscode.TextEditorRevealType.InCenter);
				}
			});

			quickPick.onDidAccept(() => {
				if (quickPick.selectedItems && quickPick.selectedItems[0]) {
					const finalPos = new vscode.Position(quickPick.selectedItems[0].index, 0);
					editor.selection = new vscode.Selection(finalPos, finalPos);
				}
				quickPick.dispose();
			});
			quickPick.onDidHide(() => quickPick.dispose());
			quickPick.show();
			break;
		}

		case 'next': {
			const nextMatch = matches.find(m => m.lineIndex > currentLineIdx);
			if (nextMatch) jumpToLine(editor, nextMatch.lineIndex);
			else vscode.window.setStatusBarMessage("No next matching instances downstream.", 3000);
			break;
		}

		case 'prev': {
			const prevMatch = [...matches].reverse().find(m => m.lineIndex < currentLineIdx);
			if (prevMatch) jumpToLine(editor, prevMatch.lineIndex);
			else vscode.window.setStatusBarMessage("No previous matching instances upstream.", 3000);
			break;
		}

		case 'copy': {
			let contextChoice = 'none';
			if (document.languageId === 'markdown') {
				const choice = await vscode.window.showQuickPick([
					{ label: 'None', description: 'Copy raw line contents only', value: 'none' },
					{ label: 'Immediate Parent', description: 'Append nearest upper section title', value: 'immediate' },
					{ label: 'Full Hierarchical Path', description: 'Append structural breadcrumb path', value: 'path' }
				], { placeHolder: '🗺️ Select Markdown Context Appendage Style for Clipboard' });
				if (!choice) return; // User cancelled
				contextChoice = choice.value;
			}

			const copyPayload = matches.map(m => {
				if (contextChoice === 'immediate') return `${m.text}${m.immediateSection}`;
				if (contextChoice === 'path') return `${m.text}${m.pathSection}`;
				return m.text;
			}).join('\n');

			await vscode.env.clipboard.writeText(copyPayload);
			vscode.window.showInformationMessage(`Copied ${matches.length} matching lines to clipboard!`);
			break;
		}

		case 'inject': {
			let contextChoice = 'none';
			if (document.languageId === 'markdown') {
				const choice = await vscode.window.showQuickPick([
					{ label: 'None', description: 'Inject raw line contents only', value: 'none' },
					{ label: 'Immediate Parent', description: 'Append nearest upper section title', value: 'immediate' },
					{ label: 'Full Hierarchical Path', description: 'Append structural breadcrumb path', value: 'path' }
				], { placeHolder: '🗺️ Select Markdown Context Appendage Style for Code Injection' });
				if (!choice) return; // User cancelled
				contextChoice = choice.value;
			}

			const injectPayload = matches.map(m => {
				if (contextChoice === 'immediate') return `${m.text}${m.immediateSection}`;
				if (contextChoice === 'path') return `${m.text}${m.pathSection}`;
				return m.text;
			}).join('\n') + '\n';

			const insertPosition = new vscode.Position(currentLineIdx + 1, 0);
			await editor.edit(editBuilder => {
				editBuilder.insert(insertPosition, injectPayload);
			});
			vscode.window.setStatusBarMessage(`Injected ${matches.length} lines below.`, 4000);
			break;
		}
	}
}

function jumpToLine(editor, index) {
	const pos = new vscode.Position(index, 0);
	editor.selection = new vscode.Selection(pos, pos);
	editor.revealRange(new vscode.Range(pos, pos), vscode.TextEditorRevealType.InCenter);
}

function deactivate() { }

module.exports = { activate, deactivate };
