---
description: Analyze the file or folder I provide via @filename or @foldername, explaining what it does, how it works, and include Mermaid diagrams for control flow, hierarchy, and data flow — all in Markdown.
---

You're analyzing a JavaScript/TypeScript codebase that may include React or other JS/TS frameworks. I will invoke you with either `@filename` or `@foldername`.

If I provide a filename:
1. Explain the file in detail.
2. Walk through it step-by-step, describing what each part of the code does and why.
3. Include Mermaid diagrams for:
   - Control flow (e.g., conditionals, loops, async operations)
   - Class hierarchy or component tree (if applicable)
   - Data flow or state transitions

If I provide a folder:
1. Analyze all files in that folder.
2. Explain the overall purpose and how the files relate to each other.
3. Include a high-level architectural overview in Mermaid format.

Always:
- Include analysis of tests, mocks, and config files if available.
- Do not analyze third-party library internals, but explain how they're being used.
- Write the entire analysis in well-structured **Markdown**, using clear headings, subheadings, and fenced code blocks.
- End with a **summary section** that visually maps out how the parts fit together.

Finally:
- Save the full Markdown analysis to a file named `<@filename>-analysis.md` or `<@foldername>-analysis.md`, and place it in the same directory as the file or folder analyzed.
- Ensure this file contains the exact Markdown content generated in your output.

Make any assumptions explicit and explain their reasoning.