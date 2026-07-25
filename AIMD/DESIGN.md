---
title: DESIGN
---

<!-- TEMPLATE: DESIGN.template.md -->
<!-- DESIGN Any text bounded by double curly braces like this is a placeholder for you to fill out. Replace those placeholders with real paths, rules, and project constraints. INSTRUCTIONS FOR THE AI AGENT: Use this document as the single source of truth for the system's design patterns, constraints, and data flow. Do not propose code or modifications that violate the patterns, structural layouts, or database schemas defined below. -->
<!-- markdownlint-disable MD013 -->

# DESIGN

<!-- TOC location -->
## 🔍 Table of Contents
<!-- Maintained by script -->
- [DESIGN](#a-design) <a id="toc-design"></a> ^toc-design
  - [📑 AI Primary Files](#a-aiprimaryfiles) <a id="toc-aiprimaryfiles"></a> ^toc-aiprimaryfiles
  - [🗺️ System Topology & Context Map](#a-systemtopologycontextmap) <a id="toc-systemtopologycontextmap"></a> ^toc-systemtopologycontextmap
  - [💻 High-Level Components & Communication](#a-highlevelcomponentscommunication) <a id="toc-highlevelcomponentscommunication"></a> ^toc-highlevelcomponentscommunication
  - [💾 Data Architecture & Schema Rules](#a-dataarchitectureschemarules) <a id="toc-dataarchitectureschemarules"></a> ^toc-dataarchitectureschemarules
  - [📂 Core File Structure Layout](#a-corefilestructurelayout) <a id="toc-corefilestructurelayout"></a> ^toc-corefilestructurelayout
  - [🚦 Design Principles & Guardrails](#a-designprinciplesguardrails) <a id="toc-designprinciplesguardrails"></a> ^toc-designprinciplesguardrails
  - [🚀 Go to...](#a-goto) <a id="toc-goto"></a> ^toc-goto

<a id="a-design"></a>[TOC](#toc-design)

## 📑 AI Primary Files
<a id="a-aiprimaryfiles"></a>[TOC](#toc-aiprimaryfiles)
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔸 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
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

## 🗺️ System Topology & Context Map
<a id="a-systemtopologycontextmap"></a>[TOC](#toc-systemtopologycontextmap)
- **Architecture Style:** Event-Driven Command and Provider Architecture (VS Code Extension Model)
- **Primary Language Stack:** JavaScript (ECMAScript 6+)
- **Frameworks & Core Runtimes:** VS Code Extension API engine, Node.js runtime

---

## 💻 High-Level Components & Communication
<a id="a-highlevelcomponentscommunication"></a>[TOC](#toc-highlevelcomponentscommunication)
- **Frontend/Client:** VS Code native UI elements consisting of `QuickPick` components, Status Bar messages, and Hover Tooltip overlays.
- **Backend Core:** A functional, procedural processing module handling positional regex token analysis, line iteration indexing, and sequential string comparison algorithms.
- **External Integration:** Subsystem communication via the `vscode` global namespace, hooking into the active text editor selections, document buffers, system clipboard, and workspaces.

---

## 💾 Data Architecture & Schema Rules
<a id="a-dataarchitectureschemarules"></a>[TOC](#toc-dataarchitectureschemarules)
- **Storage Type:** Stateless volatile memory footprint. All calculations are executed directly against active editor workspace document strings in-memory.
- **State Constraints:** System configurations remain bounded to runtime variables. The active user cursor index coordinates (`line`, `character`) serve as the isolated execution state boundary for tokenizing routines.

---

## 📂 Core File Structure Layout
<a id="a-corefilestructurelayout"></a>[TOC](#toc-corefilestructurelayout)
```text
📂 Project Root/
├── 📂 .vscode/             # Development host configurations and launch rules
├── 📂 AIMD/                # Core AI technical and architectural specifications
│   ├── 📄 DESIGN.md
│   └── ...
├── 📂 test/                # Extension automated unit testing framework suites
│   └── 📄 extension.test.js
├── 📄 extension.js         # Master runtime orchestration and execution code entry
├── 📄 package.json         # Extension structural metadata and command schemas
└── 📄 README.md            # Primary project entrance documentation file
```

---

## 🚦 Design Principles & Guardrails
<a id="a-designprinciplesguardrails"></a>[TOC](#toc-designprinciplesguardrails)
- **Dependency Minimization:** Avoid adding external packages/libraries unless natively impossible. Rely exclusively on the native `vscode` framework namespace and built-in JavaScript engines.
- **Separation of Concerns:** Keep presentation/UI entirely decoupled from system-level business logic. Functional data extraction sub-routines return normalized payload objects, leaving all UI presentation logic to the main command loops and routers.
- **Security Constraints:** Enforce internal data sanitization safeguards to escape URI encodings inside prompt strings, preventing formatting errors during command executions across user quick-picks.

---

## 🚀 Go to...
<a id="a-goto"></a>[TOC](#toc-goto)
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔹 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔸 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)
<!-- TEMPLATE: DESIGN.template.md -->
