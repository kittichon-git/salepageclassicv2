/**
 * Thai-aware line-break helper.
 *
 * Uses Intl.Segmenter('th') to insert Zero-Width Spaces (U+200B) at true
 * word boundaries, and Non-Breaking Spaces (U+00A0) before tokens that must
 * not start a new line: ไม้ยมก (ๆ), standalone digits, and short closing
 * words such as "โอน".
 *
 * Pair with CSS `word-break: keep-all` (class th-text / th-heading in
 * globals.css) so the browser only breaks at explicit ZWSP positions.
 *
 * Safe on the server (Node 16+) and in the browser. Falls back to the
 * original string if Intl.Segmenter is unavailable.
 */

// Tokens that must NOT begin a new line — bound to the preceding word with NBSP.
const NO_LINE_START_RE = /^(ๆ|\d{1,3}|โอน)$/u;

export function thaiWrap(text: string): string {
  if (typeof Intl === "undefined" || !("Segmenter" in Intl)) {
    return text; // graceful fallback for environments without Segmenter
  }

  const segmenter = new Intl.Segmenter("th", { granularity: "word" });
  const segs = [...segmenter.segment(text)];
  const parts: string[] = [];

  for (let i = 0; i < segs.length; i++) {
    const seg = segs[i]!;
    const next = segs[i + 1];

    // If the NEXT token must not start a line, bind current to it with NBSP
    // (replaces the ZWSP that would otherwise allow a break here).
    if (next && NO_LINE_START_RE.test(next.segment.trim())) {
      parts.push(seg.segment + "\u00A0");
      continue;
    }

    // After a word-like segment, insert ZWSP to create an allowed break point.
    if (seg.isWordLike) {
      parts.push(seg.segment + "\u200B");
      continue;
    }

    parts.push(seg.segment);
  }

  return parts.join("");
}
