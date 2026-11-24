// Two Lines to Your Past Self — make.fun entry (u-suga-two-lines-to-your-past-self-f36c83ca).
// Writes exactly two lines to $MAKEFUN_OUTPUT_DIR/entry.txt:
// line one warns the past self about one specific moment (one sentence),
// line two says in one sentence why that moment mattered and what changed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES = [
  "Don't send that text at 1 a.m. after your third drink — you meant it as a joke, and she read it as goodbye.",
  "That message ended a five-year friendship, and you spent the next year learning to mean every word you send.",
];

const entry = LINES.join("\n");

// Self-check the sealed gate: UTF-8 text, 1-280 chars, exactly two lines.
if (LINES.length !== 2) throw new Error(`expected exactly 2 lines, got ${LINES.length}`);
if (entry.length < 1 || entry.length > 280) {
  throw new Error(`entry is ${entry.length} chars, outside the 1-280 gate`);
}
if (!entry.trim()) throw new Error("entry is only whitespace");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote entry.txt (${entry.length} chars, 2 lines)`);
