---
title: FEATURES
---

<!-- TEMPLATE: FEATURES.template.md -->
<!-- FEATURES Any text bounded by double curly braces like this is a placeholder for you to fill out. Replace those placeholders with real paths, rules, and project constraints. INSTRUCTIONS FOR THE AI AGENT: This file structures user-facing capabilities and functional features. Group related software parts into "Feature Groups" (with tags and anchors), then list them alphabetically under "All Features". -->
<!-- markdownlint-disable MD013 -->

# FEATURES

<!-- TOC location -->
## 🔍 Table of Contents
<!-- Maintained by script -->
- [FEATURES](#a-features) <a id="toc-features"></a> ^toc-features
  - [📑 AI Primary Files](#a-aiprimaryfiles) <a id="toc-aiprimaryfiles"></a> ^toc-aiprimaryfiles
  - [📦 Feature Groups](#a-featuregroups) <a id="toc-featuregroups"></a> ^toc-featuregroups
    - [🔍 1. Positional Token Extraction Engine](#a-1positionaltokenextractionengine) <a id="toc-1positionaltokenextractionengine"></a> ^toc-1positionaltokenextractionengine
    - [🗺️ 2. Markdown Context Tree Tracer](#a-2markdowncontexttreetracer) <a id="toc-2markdowncontexttreetracer"></a> ^toc-2markdowncontexttreetracer
    - [⚡ 3. Dynamic Action Verb Router](#a-3dynamicactionverbrouter) <a id="toc-3dynamicactionverbrouter"></a> ^toc-3dynamicactionverbrouter
  - [🗄️ All Features](#a-allfeatures) <a id="toc-allfeatures"></a> ^toc-allfeatures
    - [Context-Aware Live Browser](#a-contextawarelivebrowser) <a id="toc-contextawarelivebrowser"></a> ^toc-contextawarelivebrowser
    - [Hierarchical Document Matcher](#a-hierarchicaldocumentmatcher) <a id="toc-hierarchicaldocumentmatcher"></a> ^toc-hierarchicaldocumentmatcher
    - [Multi-Tier Token Extractor](#a-multitiertokenextractor) <a id="toc-multitiertokenextractor"></a> ^toc-multitiertokenextractor
    - [Smart Clipboard & Content Injector](#a-smartclipboardcontentinjector) <a id="toc-smartclipboardcontentinjector"></a> ^toc-smartclipboardcontentinjector
  - [📉 Deprecated / Removed Features](#a-deprecatedremovedfeatures) <a id="toc-deprecatedremovedfeatures"></a> ^toc-deprecatedremovedfeatures
  - [🚀 Go to...](#a-goto) <a id="toc-goto"></a> ^toc-goto

<a id="a-features"></a>[TOC](#toc-features)

Welcome to PTSD (Positional Token Search & Context Tracer)! This extension isolates multi-layered text tokens directly beneath the user's cursor position and builds an upstream structural tree for Markdown documents. By combining positional text extraction with dynamic action verbs, it streamlines codebase navigation, text harvesting, and content injection directly inside VS Code.

---

## 📑 AI Primary Files
<a id="a-aiprimaryfiles"></a>[TOC](#toc-aiprimaryfiles)
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔸 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

---

---

## 📦 Feature Groups
<a id="a-featuregroups"></a>[TOC](#toc-featuregroups)

### 🔍 1. Positional Token Extraction Engine
<a id="a-1positionaltokenextractionengine"></a>[TOC](#toc-1positionaltokenextractionengine)
<a id="z1"></a>[TOC](#%EF%B8%8F-all-features)

This functional layer targets the text directly under the active cursor. It isolates characters, strings, and code structures into clear, searchable scopes without requiring manual selection highlighted ranges.

- **[Multi-Tier Token Extractor](#multi-tier-token-extractor)** - Extracts strings from the active cursor position into 5 scoped search targets.

### 🗺️ 2. Markdown Context Tree Tracer
<a id="a-2markdowncontexttreetracer"></a>[TOC](#toc-2markdowncontexttreetracer)
<a id="z2"></a>[TOC](#%EF%B8%8F-all-features)

This structural tier runs deep architectural scans up a document. It traces headers back to the root to pinpoint the exact structural location of text matches.

- **[Hierarchical Document Matcher](#hierarchical-document-matcher)** - Pairs raw string matches with structural header context pathways.

### ⚡ 3. Dynamic Action Verb Router
<a id="a-3dynamicactionverbrouter"></a>[TOC](#toc-3dynamicactionverbrouter)
<a id="z3"></a>[TOC](#%EF%B8%8F-all-features)

This interaction engine maps isolated text tokens onto immediate workplace commands, bypassing typical search panels.

- **[Context-Aware Live Browser](#context-aware-live-browser)** - Displays real-time file updates through a rolling QuickPick dropdown list.
- **[Smart Clipboard & Content Injector](#smart-clipboard--content-injector)** - Exports or inserts structured textual arrays with custom markdown headings attached.

---

## 🗄️ All Features
<a id="a-allfeatures"></a>[TOC](#toc-allfeatures)

### Context-Aware Live Browser
<a id="a-contextawarelivebrowser"></a>[TOC](#toc-contextawarelivebrowser)
<a id="a-context-aware-live-browser"></a>[TOC](#%EF%B8%8F-all-features)
- **Group:** [Dynamic Action Verb Router](#z3)

Launches an interactive VS Code QuickPick list displaying all indexed results across the document. Moving up or down with arrow keys updates the active editor view in real-time, scrolling the canvas to focus on the selected line. Pressing Enter locks the selection, while Esc restores the initial view.

### Hierarchical Document Matcher
<a id="a-hierarchicaldocumentmatcher"></a>[TOC](#toc-hierarchicaldocumentmatcher)
<a id="a-hierarchical-document-matcher"></a>[TOC](#%EF%B8%8F-all-features)
- **Group:** [Markdown Context Tree Tracer](#z2)

Scans the active document to find matching references for a selected token. When matching inside a Markdown file, it reads upward to locate every parent heading level. The search returns both the matched text line and its structural trail (e.g., `# Header 1 > ## Header 2`), keeping you anchored in deep documents.

### Multi-Tier Token Extractor
<a id="a-multitiertokenextractor"></a>[TOC](#toc-multitiertokenextractor)
<a id="a-multi-tier-token-extractor"></a>[TOC](#%EF%B8%8F-all-features)
- **Group:** [Positional Token Extraction Engine](#z1)

Analyzes text at the cursor line across five nested scopes:
1. `lineExact`: The full text of the row.
2. `lineWithin`: The trimmed text content of the row.
3. `quoted`: The narrowest matching text found inside `"..."`, `'...'`, `` `...` ``, `[...]`, `{...}`, or `(...)`.
4. `identifier`: Dot-notation patterns (e.g., `this.is.a.path`).
5. `word`: The exact word directly under the cursor.

### Smart Clipboard & Content Injector
<a id="a-smartclipboardcontentinjector"></a>[TOC](#toc-smartclipboardcontentinjector)
<a id="a-smart-clipboard-content-injector"></a>[TOC](#%EF%B8%8F-all-features)
- **Group:** [Dynamic Action Verb Router](#z3)

Allows developers to export all discovered string matches at once. When working in Markdown files, you can choose to append the raw line text, its nearest parent section name, or its full header path. The extracted content can be copied directly to the clipboard or inserted directly below the current line.

---

## 📉 Deprecated / Removed Features
<a id="a-deprecatedremovedfeatures"></a>[TOC](#toc-deprecatedremovedfeatures)

- **[!] Raw Output Channel Dump:** Logging search output metrics into a standard text panel log was removed from the primary orchestration flow. It disrupted focus by pulling users away from their active typing position.
- **Replacement Pattern:** Replaced by the `browse` verb QuickPick workflow, which keeps interactions inline and interactive directly over the open file.

---

## 🚀 Go to...
<a id="a-goto"></a>[TOC](#toc-goto)
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔸 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)
<!-- TEMPLATE: FEATURES.template.md -->
