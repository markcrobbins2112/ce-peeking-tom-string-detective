---
title: BUILD
---

<!-- TEMPLATE: BUILD.template.md -->
<!-- BUILD Any text bounded by double curly braces like this is a placeholder for you to fill out. Replace those placeholders with real paths, rules, and project constraints. INSTRUCTIONS FOR THE AI AGENT: This file serves as the system construction guide. It must document building blocks, dependencies installation commands, target directory structures, packing pipelines, and runtime execution. -->
<!-- markdownlint-disable MD013 -->

# BUILD

<!-- TOC location -->
## 🔍 Table of Contents
<!-- Maintained by script -->
- [BUILD](#a-build) <a id="toc-build"></a> ^toc-build
  - [📑 AI Primary Files](#a-aiprimaryfiles) <a id="toc-aiprimaryfiles"></a> ^toc-aiprimaryfiles
  - [📋 Prerequisites & Toolchain Setup](#a-prerequisitestoolchainsetup) <a id="toc-prerequisitestoolchainsetup"></a> ^toc-prerequisitestoolchainsetup
  - [🛠️ Build & Packaging Pipeline](#a-buildpackagingpipeline) <a id="toc-buildpackagingpipeline"></a> ^toc-buildpackagingpipeline
    - [📦 Key Components](#a-keycomponents) <a id="toc-keycomponents"></a> ^toc-keycomponents
  - [🚀 Execution & Packing Commands](#a-executionpackingcommands) <a id="toc-executionpackingcommands"></a> ^toc-executionpackingcommands
  - [🧪 Post-Build Verification Rules](#a-postbuildverificationrules) <a id="toc-postbuildverificationrules"></a> ^toc-postbuildverificationrules
  - [🚀 Go to...](#a-goto) <a id="toc-goto"></a> ^toc-goto

<a id="a-build"></a>[TOC](#toc-build)

## 📑 AI Primary Files
<a id="a-aiprimaryfiles"></a>[TOC](#toc-aiprimaryfiles)
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔸 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
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

## 📋 Prerequisites & Toolchain Setup
<a id="a-prerequisitestoolchainsetup"></a>[TOC](#toc-prerequisitestoolchainsetup)
- **Compiler/Runtime:** Node.js runtime environment (LTS Recommended, v18.x or newer)
- **Global System Variables Required:**
  - `NODE_ENV`: production / development
    - Toggles developer verbosity logging hooks inside the workspace console stack.

---

## 🛠️ Build & Packaging Pipeline
<a id="a-buildpackagingpipeline"></a>[TOC](#toc-buildpackagingpipeline)
The building lifecycle translates standard JavaScript entry scripts and operational configuration files into a self-contained, offline-ready VS Code Extension Archive (.vsix). Because this extension is designed stateless and package-minimized, no heavy transpilers (like Webpack or Babel) are introduced, keeping compilation lightweight and dependent solely on native system packages.

- **Dependency Tree Resolution:** NPM parses package descriptors to assemble an isolated node modules cache.
- **VSIX Packaging Allocation:** The VSCE packaging CLI structures asset payloads into an integrated Open XML zip bundle mapping to target VS Code marketplace specifications.

---

### 📦 Key Components
<a id="a-keycomponents"></a>[TOC](#toc-keycomponents)
- **`extension.js`**: Core module containing all procedural regex algorithms, match index engines, and provider systems.
- **`package.json`**: Active metadata engine mapping available extension activation hooks, command identifiers, menus, and keyboard short-cuts.
- **`@vscode/test-electron`**: Isolated integration test wrapper utilized to mock active editor contexts during automated test execution.

---

## 🚀 Execution & Packing Commands
<a id="a-executionpackingcommands"></a>[TOC](#toc-executionpackingcommands)

- **Install Dependencies**:
  ```bash
  npm install
  ```
- **Local Dev Server / Watch Mode**:
  ```bash
  # Launches compilation tasks or opens the extension codebase inside the active window.
  # Pressing F5 launches the Extension Development Host window instantly.
  code .
  ```
- **Verification / Linting**:
  ```bash
  # Formats files and checks basic syntax health according to rulesets.
  npm run lint
  ```
- **Production Package Compilation**:
  ```bash
  # Packs extension assets into a native, deployable offline .vsix installer block.
  npx vsce package
  ```

---

## 🧪 Post-Build Verification Rules
<a id="a-postbuildverificationrules"></a>[TOC](#toc-postbuildverificationrules)

- 1. **Size Checking:** Verify the compiled `.vsix` archive stays under 2MB to preserve its lightweight, minimal footprint.
- 2. **Path Verification:** Check that the `package.json` entry field points directly to the active `extension.js` script root.
- 3. **Smoke Test Command:** Run `npm run test` against the generated workspace components to verify the extraction regex patterns run correctly before publishing.

---

## 🚀 Go to...
<a id="a-goto"></a>[TOC](#toc-goto)
- 🔹 [AGENTS.md](../AGENTS.md)
- 🔹 [ARCHIVE.md](ARCHIVE.md)
- 🔸 [BUILD.md](BUILD.md)
- 🔹 [CODE.md](CODE.md)
- 🔹 [DESIGN.md](DESIGN.md)
- 🔹 [FEATURES.md](FEATURES.md)
- 🔹 [LOG.md](LOG.md)
- 🔹 [MANUAL.md](MANUAL.md)
- 🔹 [README.md](../README.md)
- 🔹 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔹 [VERSIONS.md](VERSIONS.md)
<!-- TEMPLATE: BUILD.template.md -->
