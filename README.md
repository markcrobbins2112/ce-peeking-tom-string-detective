---
title: README
---

<!-- # TEMPLATE: README.template.md -->
<!-- README Any text bounded by double curly braces like this is a placeholder for you to fill out. Replace those placeholders with real paths, rules, and project constraints. INSTRUCTIONS FOR THE AI AGENT: This file tracks formal specifications, comparing originally requested guidelines against actual implemented items. Document architectural challenges, optimization rules, compatibility constraints, and platform limits. -->
<!-- markdownlint-disable MD013 -->
<!-- template: readme-header -->

# PTSD (Positional Token Search & Context Tracer)

<!-- TOC location -->
## 🔍 Table of Contents
<!-- Maintained by script -->
- [PTSD (Positional Token Search & Context Tracer)](#a-ptsdpositionaltokensearchcontexttracer) <a id="toc-ptsdpositionaltokensearchcontexttracer"></a> ^toc-ptsdpositionaltokensearchcontexttracer
    - [Context-aware token extractor and structural Markdown matching engine for VS Code.](#a-contextawaretokenextractorandstructuralmarkdownmatchingengineforvscode) <a id="toc-contextawaretokenextractorandstructuralmarkdownmatchingengineforvscode"></a> ^toc-contextawaretokenextractorandstructuralmarkdownmatchingengineforvscode
  - [📑 AI Primary Files](#a-aiprimaryfiles) <a id="toc-aiprimaryfiles"></a> ^toc-aiprimaryfiles
  - [🎯 Project Abstract & Core Value](#a-projectabstractcorevalue) <a id="toc-projectabstractcorevalue"></a> ^toc-projectabstractcorevalue
  - [🛠️ Technology Stack at a Glance](#a-technologystackataglance) <a id="toc-technologystackataglance"></a> ^toc-technologystackataglance
  - [🗺️ Project Layout Blueprint](#a-projectlayoutblueprint) <a id="toc-projectlayoutblueprint"></a> ^toc-projectlayoutblueprint
  - [⚡ Quick Start for AI Developers](#a-quickstartforaidevelopers) <a id="toc-quickstartforaidevelopers"></a> ^toc-quickstartforaidevelopers
    - [1. Environment Setup](#a-1environmentsetup) <a id="toc-1environmentsetup"></a> ^toc-1environmentsetup
    - [2. Launching Local Compilation & Diagnostics](#a-2launchinglocalcompilationdiagnostics) <a id="toc-2launchinglocalcompilationdiagnostics"></a> ^toc-2launchinglocalcompilationdiagnostics
    - [3. Executing Test Assertions](#a-3executingtestassertions) <a id="toc-3executingtestassertions"></a> ^toc-3executingtestassertions
    - [4. Compilation and VSIX Packaging](#a-4compilationandvsixpackaging) <a id="toc-4compilationandvsixpackaging"></a> ^toc-4compilationandvsixpackaging
  - [🚀 Go to...](#a-goto) <a id="toc-goto"></a> ^toc-goto

<a id="a-ptsdpositionaltokensearchcontexttracer"></a>[TOC](#toc-ptsdpositionaltokensearchcontexttracer)
### Context-aware token extractor and structural Markdown matching engine for VS Code.
<a id="a-contextawaretokenextractorandstructuralmarkdownmatchingengineforvscode"></a>[TOC](#toc-contextawaretokenextractorandstructuralmarkdownmatchingengineforvscode)

![icon](icon.jpg)
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/markcrobbins)

---

## 📑 AI Primary Files
<a id="a-aiprimaryfiles"></a>[TOC](#toc-aiprimaryfiles)
- 🔹 [AGENTS.md](AGENTS.md)
- 🔹 [ARCHIVE.md](AIMD/ARCHIVE.md)
- 🔹 [BUILD.md](AIMD/BUILD.md)
- 🔹 [CODE.md](AIMD/CODE.md)
- 🔹 [DESIGN.md](AIMD/DESIGN.md)
- 🔹 [FEATURES.md](AIMD/FEATURES.md)
- 🔹 [LOG.md](AIMD/LOG.md)
- 🔹 [MANUAL.md](AIMD/MANUAL.md)
- 🔸 [README.md](README.md)
- 🔹 [SPEC.md](AIMD/SPEC.md)
- 🔹 [TASKS.md](AIMD/TASKS.md)
- 🔹 [TERMS.md](AIMD/TERMS.md)
- 🔹 [TESTING.md](AIMD/TESTING.md)
- 🔹 [VERSIONS.md](AIMD/VERSIONS.md)

* [Project Abstract & Core Value](#-project-abstract--core-value)
* [Technology Stack at a Glance](#%EF%B8%8F-technology-stack-at-a-glance)
* [Project Layout Blueprint](#%EF%B8%8F-project-layout-blueprint)
* [Quick Start for AI Developers](#-quick-start-for-ai-developers)

---

## 🎯 Project Abstract & Core Value
<a id="a-projectabstractcorevalue"></a>[TOC](#toc-projectabstractcorevalue)
The **PTSD** extension supercharges structural document navigation inside VS Code. It captures multi-layered text tokens directly beneath the user's cursor position (`exact line`, `trimmed line`, `nested quotes/brackets`, `dot-notation identifiers`, and `words`).

When working in Markdown files, the extension calculates structural header trails backwards up the document tree. It allows users to query these tokens across the active workspace and execute precise actions like live text browsing, jumping to nearby instance positions, clipboard harvesting, and downstream code insertions.

---

## 🛠️ Technology Stack at a Glance
<a id="a-technologystackataglance"></a>[TOC](#toc-technologystackataglance)
- **Target Operating System:** Cross-platform (Windows, macOS, Linux)
- **Core Languages & Runtimes:** JavaScript (ES6+), Node.js runtime environment
- **Integrations:** VS Code Extensibility API (`vscode` namespace module hooks)

---

## 🗺️ Project Layout Blueprint
<a id="a-projectlayoutblueprint"></a>[TOC](#toc-projectlayoutblueprint)
- **`AGENTS.md`** ➔ System prompts and operational boundaries for AI teammates.
- **`AIMD/ARCHIVE.md`** ➔ Scriptorium for scrapped ideas and sunset components.
- **`AIMD/BUILD.md`** ➔ Compiler pipelines, flags, and packaging steps.
- **`AIMD/CODE.md`** ➔ Syntax style guidelines and error-handling mandates.
- **`AIMD/DESIGN.md`** ➔ Structural topology, design patterns, and data flows.
- **`AIMD/FEATURES.md`** ➔ Capability matrices and functional product roadmap.
- **`AIMD/LOG.md`** ➔ Chronological audit trail of development decisions.
- **`AIMD/MANUAL.md`** ➔ Installation, user runbooks, and diagnostic workflows.
- **`README.md`** ➔ Primary entry point and structural system abstract.
- **`AIMD/SPEC.md`** ➔ Technical constraints, parameters, and protocol definitions.
- **`AIMD/TASKS.md`** ➔ Dynamic task board and backlog management queue.
- **`AIMD/TERMS.md`** ➔ Technical glossary, definitions, and vocabulary indexes.
- **`AIMD/TESTING.md`** ➔ Automation suites, edge cases, and QA assertion routines.
- **`AIMD/VERSIONS.md`** ➔ Change trackers and version milestone evolution lists.

---

## ⚡ Quick Start for AI Developers
<a id="a-quickstartforaidevelopers"></a>[TOC](#toc-quickstartforaidevelopers)

### 1. Environment Setup
<a id="a-1environmentsetup"></a>[TOC](#toc-1environmentsetup)
<details>
<summary>🖥️ Commands</summary>

```bash
# Verify runtime dependencies are installed locally
node --version
npm --version

# Install extension developer toolkit modules
npm install
```
</details>

### 2. Launching Local Compilation & Diagnostics
<a id="a-2launchinglocalcompilationdiagnostics"></a>[TOC](#toc-2launchinglocalcompilationdiagnostics)
<details>
<summary>🖥️ Commands</summary>

```bash
# Launch a development host window with the extension loaded
# Press 'F5' inside VS Code or run compilation scripts manually
npm run compile
```
</details>

### 3. Executing Test Assertions
<a id="a-3executingtestassertions"></a>[TOC](#toc-3executingtestassertions)
<details>
<summary>🖥️ Commands</summary>

```bash
# Execute unit testing suites for match indexes and extraction helpers
npm run test
```
</details>

### 4. Compilation and VSIX Packaging
<a id="a-4compilationandvsixpackaging"></a>[TOC](#toc-4compilationandvsixpackaging)
<details>
<summary>🖥️ Commands</summary>

```bash
# Bundle your production assets into an installable .vsix package
vsce package
```
</details>

---

## 🚀 Go to...
<a id="a-goto"></a>[TOC](#toc-goto)
- 🔹 [AGENTS.md](AGENTS.md)
- 🔹 [ARCHIVE.md](AIMD/ARCHIVE.md)
- 🔹 [BUILD.md](AIMD/BUILD.md)
- 🔹 [CODE.md](AIMD/CODE.md)
- 🔹 [DESIGN.md](AIMD/DESIGN.md)
- 🔹 [FEATURES.md](AIMD/FEATURES.md)
- 🔹 [LOG.md](AIMD/LOG.md)
- 🔹 [MANUAL.md](AIMD/MANUAL.md)
- 🔸 [README.md](README.md)
- 🔹 [SPEC.md](AIMD/SPEC.md)
- 🔹 [TASKS.md](AIMD/TASKS.md)
- 🔹 [TERMS.md](AIMD/TERMS.md)
- 🔹 [TESTING.md](AIMD/TESTING.md)
- 🔹 [VERSIONS.md](AIMD/VERSIONS.md)
<!-- TEMPLATE: README.template.md -->
