---
title: SPEC
---

<!-- TEMPLATE: SPEC.template.md -->
<!-- SPEC Any text bounded by double curly braces like this is a placeholder for you to fill out. Replace those placeholders with real paths, rules, and project constraints. INSTRUCTIONS FOR THE AI AGENT: This file tracks formal specifications, comparing originally requested guidelines against actual implemented items. Document architectural challenges, optimization rules, compatibility constraints, and platform limits. -->
<!-- markdownlint-disable MD013 -->

# SPEC

<!-- TOC location -->
## 🔍 Table of Contents
<!-- Maintained by script -->
- [SPEC](#a-spec) <a id="toc-spec"></a> ^toc-spec
  - [📑 AI Primary Files](#a-aiprimaryfiles) <a id="toc-aiprimaryfiles"></a> ^toc-aiprimaryfiles
  - [🔗 External Application Protocols & URI Schemes](#a-externalapplicationprotocolsurischemes) <a id="toc-externalapplicationprotocolsurischemes"></a> ^toc-externalapplicationprotocolsurischemes
    - [VS Code Extension Execution Contract](#a-vscodeextensionexecutioncontract) <a id="toc-vscodeextensionexecutioncontract"></a> ^toc-vscodeextensionexecutioncontract
  - [💻 Native OS Integration Details](#a-nativeosintegrationdetails) <a id="toc-nativeosintegrationdetails"></a> ^toc-nativeosintegrationdetails
    - [Registry / Configuration Mappings](#a-registryconfigurationmappings) <a id="toc-registryconfigurationmappings"></a> ^toc-registryconfigurationmappings
    - [File & Folder Attribute Masks](#a-filefolderattributemasks) <a id="toc-filefolderattributemasks"></a> ^toc-filefolderattributemasks
  - [📋 Originally Requested Specifications](#a-originallyrequestedspecifications) <a id="toc-originallyrequestedspecifications"></a> ^toc-originallyrequestedspecifications
  - [🎯 Implemented Technical Concerns & Optimization Features](#a-implementedtechnicalconcernsoptimizationfeatures) <a id="toc-implementedtechnicalconcernsoptimizationfeatures"></a> ^toc-implementedtechnicalconcernsoptimizationfeatures
  - [🚦 Internal Function Signatures & System Exit Codes](#a-internalfunctionsignaturessystemexitcodes) <a id="toc-internalfunctionsignaturessystemexitcodes"></a> ^toc-internalfunctionsignaturessystemexitcodes
    - [Engine Error / Exit Status Codes](#a-engineerrorexitstatuscodes) <a id="toc-engineerrorexitstatuscodes"></a> ^toc-engineerrorexitstatuscodes
    - [Data Models & State Layouts](#a-datamodelsstatelayouts) <a id="toc-datamodelsstatelayouts"></a> ^toc-datamodelsstatelayouts
  - [🚀 Go to...](#a-goto) <a id="toc-goto"></a> ^toc-goto

<a id="a-spec"></a>[TOC](#toc-spec)

This document compiles the user requirements and instructions from `AGENTS.md` and related files and provides detailed documentation of how the extension was architected and built.

## 📑 AI Primary Files
<a id="a-aiprimaryfiles"></a>[TOC](#toc-aiprimaryfiles)
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔸 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)

---

---

## 🔗 External Application Protocols & URI Schemes
<a id="a-externalapplicationprotocolsurischemes"></a>[TOC](#toc-externalapplicationprotocolsurischemes)

### VS Code Extension Execution Contract
<a id="a-vscodeextensionexecutioncontract"></a>[TOC](#toc-vscodeextensionexecutioncontract)
- **Target Schema:** `command:ptsd.[type].[verb]`
- **Query String Map:**

  | Parameter | Type | Required | Description / Constraints |
  | :--- | :--- | :--- | :--- |
  | `type` | `String` | Yes | Token resolution tier (`lineExact`, `lineWithin`, `quoted`, `identifier`, `word`). |
  | `verb` | `String` | Yes | Immediate action route (`browse`, `next`, `prev`, `copy`, `inject`). |

---

## 💻 Native OS Integration Details
<a id="a-nativeosintegrationdetails"></a>[TOC](#toc-nativeosintegrationdetails)

### Registry / Configuration Mappings
<a id="a-registryconfigurationmappings"></a>[TOC](#toc-registryconfigurationmappings)
- **System Hook Target:** N/A (Stateless Extension Layer)
- **Properties Mapping:**
  - This extension runs fully decoupled from the host operating system registry. It relies entirely on cross-platform Node.js abstractions provided by the VS Code editor shell environment.

### File & Folder Attribute Masks
<a id="a-filefolderattributemasks"></a>[TOC](#toc-filefolderattributemasks)
- **Configuration Context Target:** `package.json`
- **Directory Workspace Parent:** Must be placed within the local `.vscode/extensions/` runtime directory structure to guarantee automatic discovery and initialization by the core editor process.

---

## 📋 Originally Requested Specifications
<a id="a-originallyrequestedspecifications"></a>[TOC](#toc-originallyrequestedspecifications)

- **Multi-layered Positional Extraction**: System must decode text content surrounding a single cursor index coordinate without forcing users to select string ranges manually.
- **Upstream Hierarchical Markdown Parsing**: System must scan document lines inversely from the cursor row to dynamically evaluate markdown structural trees.
- **Fluid User Interface Orchestration**: System must offer interactive quick-pick dropdown listings that update line scrolling views across the active document viewport.

---

## 🎯 Implemented Technical Concerns & Optimization Features
<a id="a-implementedtechnicalconcernsoptimizationfeatures"></a>[TOC](#toc-implementedtechnicalconcernsoptimizationfeatures)

- **Nested Brackets / Quotes Length Resolution**:
  - **The Problem**: A single text line can hold multiple layers of nested brackets, strings, and parentheses. Traditional single-pass regex splits struggle to resolve the exact container scope closest to the cursor.
  - **The Solution / Code Implementation**: The extraction layer tests multiple quote and bracket pairs simultaneously. It maps characters on each loop and updates `narrowestLength` to lock onto the precise inner container matching the cursor's character position.

- **RegEx Object Mapping Breakdown**:
  - **The Problem**: Assigning the raw array output of `RegExp.prototype.exec()` directly to search variables introduces object payloads instead of simple string arrays, crashing down-stream text queries.
  - **The Solution / Code Implementation**: Patched the tokenizer engine loop (`identifier = match[0];`) to extract only the literal matched token text string, protecting down-stream matching modules.

---

## 🚦 Internal Function Signatures & System Exit Codes
<a id="a-internalfunctionsignaturessystemexitcodes"></a>[TOC](#toc-internalfunctionsignaturessystemexitcodes)

### Engine Error / Exit Status Codes
<a id="a-engineerrorexitstatuscodes"></a>[TOC](#toc-engineerrorexitstatuscodes)

| Code (Integer) | Semantic Definition | Trigger Condition |
| :--- | :--- | :--- |
| `0` | `Success` | Match array discovered and verb dispatched correctly. |
| `1` | `ERR_MISSING_EDITOR` | Active editor instance is unreadable (e.g., executing on a blank window). |
| `2` | `ERR_EMPTY_TOKEN` | Extraction target is blank or missing for the requested search configuration. |
| `3` | `ERR_NO_MATCHES` | Total discovered instance occurrences across the active workspace document equals zero. |

---

### Data Models & State Layouts
<a id="a-datamodelsstatelayouts"></a>[TOC](#toc-datamodelsstatelayouts)

<details>
<summary>🖥️ Extractor Payload Model</summary>

```json
{
  "lineExact": "  const path = ` ${pathTree.join(' > ')}`;",
  "lineWithin": "const path = ` ${pathTree.join(' > ')}`;",
  "quoted": " \${pathTree.join(' > ')}",
  "identifier": "pathTree.join",
  "word": "pathTree"
}
```
</details>

---

## 🚀 Go to...
<a id="a-goto"></a>[TOC](#toc-goto)
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔸 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)
<!-- TEMPLATE: SPEC.template.md -->
