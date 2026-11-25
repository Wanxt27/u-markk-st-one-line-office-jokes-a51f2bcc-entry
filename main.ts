// One-Line Office Jokes — make.fun entry
// Writes a single office joke, one line, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I hit reply-all to ask everyone to stop hitting reply-all, and now there's a meeting about my tone.";

// The sealed gate needs 1-199 characters, one line, not only whitespace.
if (LINE.length < 1 || LINE.length > 199 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-199 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);

// Sanity check on what we just wrote: the file must hold exactly the line.
import { readFileSync } from "node:fs";
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("round-trip mismatch: /output/entry.txt does not hold the line");
}
