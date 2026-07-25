---
title: VERSIONS
---

<!-- TEMPLATE: VERSIONS.template.md -->
<!-- VERSIONS Any text bounded by double curly braces like this is a placeholder for you to fill out. Replace those placeholders with semantic version history and deployment updates. INSTRUCTIONS FOR THE AI AGENT: Use this document to trace the evolution of the software across versions. When deploying a new stable release or version milestone, document it at the TOP of this file using semantic versioning. -->
<!-- markdownlint-disable MD013 -->

# VERSIONS

<!-- TOC location -->
## 🔍 Table of Contents
<!-- Maintained by script -->
- [VERSIONS](#a-versions) <a id="toc-versions"></a> ^toc-versions
  - [📑 AI Primary Files](#a-aiprimaryfiles) <a id="toc-aiprimaryfiles"></a> ^toc-aiprimaryfiles
  - [🚀 Stable Releases & Milestones](#a-stablereleasesmilestones) <a id="toc-stablereleasesmilestones"></a> ^toc-stablereleasesmilestones
    - [🏷️ v1.0.0 (2026-07-25) - Baseline Production Launch](#a-v10020260725baselineproductionlaunch) <a id="toc-v10020260725baselineproductionlaunch"></a> ^toc-v10020260725baselineproductionlaunch
  - [🏗️ Pre-Release Iterations (Alpha/Beta Sandbox)](#a-prereleaseiterationsalphabetasandbox) <a id="toc-prereleaseiterationsalphabetasandbox"></a> ^toc-prereleaseiterationsalphabetasandbox
    - [🏷️ v0.1.0-beta (2026-07-20)](#a-v010beta20260720) <a id="toc-v010beta20260720"></a> ^toc-v010beta20260720
  - [🚀 Go to...](#a-goto) <a id="toc-goto"></a> ^toc-goto

<a id="a-versions"></a>[TOC](#toc-versions)

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
- 🔹 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔸 [VERSIONS.md](VERSIONS.md)

---

---

## 🚀 Stable Releases & Milestones
<a id="a-stablereleasesmilestones"></a>[TOC](#toc-stablereleasesmilestones)

### 🏷️ v1.0.0 (2026-07-25) - Baseline Production Launch
<a id="a-v10020260725baselineproductionlaunch"></a>[TOC](#toc-v10020260725baselineproductionlaunch)

- **Summary:** Initial production release establishing the core architecture for cursor-relative extraction and upstream document structure calculations. This version provides rock-solid navigation capabilities, a stateless execution pattern, and a dynamic menu router.

- **Added / Enhanced:**
  - Implemented 5-tier positional token extraction (word, identifier, quoted text, trimmed line, exact line).
  - Integrated backward-scanning Markdown hierarchy breadcrumb construction engine.
  - Added live preview row scrolling to the interactive QuickPick browsing dropdown layer.
  - Created contextual clipboard copy and target line content injection verbs.
  - Formed a dual-picker orchestration command to seamlessly tie extraction targets to downstream actions.

- **Fixed / Patched:**
  - Resolved dot-notation identifier extraction payload structure crashes by assigning regex string matches directly instead of passing index objects.
  - Fixed standard bracket selection isolation loops to correctly respect character coordinates and isolate the narrowest boundary.

- **Breaking Changes & Remediations:**
  - Removed old raw output window logs from the primary search route to keep focus inline. Dev logs have been migrated onto the context-aware live browser window system.

---

## 🏗️ Pre-Release Iterations (Alpha/Beta Sandbox)
<a id="a-prereleaseiterationsalphabetasandbox"></a>[TOC](#toc-prereleaseiterationsalphabetasandbox)

### 🏷️ v0.1.0-beta (2026-07-20)
<a id="a-v010beta20260720"></a>[TOC](#toc-v010beta20260720)
- **Milestone:** Initial prototype confirming the basic string collection sub-routines match simple cursor line coordinates. Commands were verified locally through test stubs ahead of building the visual menus.

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
- 🔹 [SPEC.md](SPEC.md)
- 🔹 [TASKS.md](TASKS.md)
- 🔹 [TERMS.md](TERMS.md)
- 🔹 [TESTING.md](TESTING.md)
- 🔸 [VERSIONS.md](VERSIONS.md)
<!-- TEMPLATE: VERSIONS.template.md -->
