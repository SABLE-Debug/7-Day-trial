# HANDOFF 04 — proposal-template.html

Copy everything below the `---` line into Claude Design.

Attach the five reference images from `CLAUDE_DESIGN_BRIEF.md` section 14.

---

# Deliverable

Build `proposal-template.html` — a print-ready, A4 single-page MOBIUS proposal. The HTML must export to PDF cleanly via the browser's "Print to PDF" with no headers, no footers, no margin chrome.

## Use

This is the close artifact. After a reply, after a 15-minute call, MOBIUS sends one PDF. The prospect decides within 24 hours. Read time: 2 minutes.

## Content structure

Pull the full content from `kit/proposal-template.md` in this repo. The structure is:

1. **Header** — MOBIUS mark + "Brand & AI Operating System" + "For [COMPANY NAME]" + date
2. **The Problem** — one paragraph + numbered three-fault list
3. **The Offer** — two-column block: Setup $30K + Retainer $10K, each with bullet deliverables
4. **The Timeline** — Day 0 → Day 15+ as a 5-row table or stepped strip
5. **What You Do** — three numbered items
6. **What You Get** — bulleted recap
7. **The Numbers** — small four-row table (Setup / Retainer / 6-month total / Per artifact)
8. **The Next Step** — three-option reply ("YES / CALL / NO") + signature

## A4 + print rules

- Page size: 210mm × 297mm
- `@page` margins: 18mm all sides
- Force single page — no second page on print
- Body font sizes: 10–12pt (smaller than web because this is print)
- Headings: 24pt Fraunces 300 max
- Use `@media print` to hide any web-only chrome
- Backgrounds: print on white. Use `bone` as the off-white background, `void` as text color (inverse of web). This is the only deliverable where the palette flips.

## Inverted palette (print-only)

```css
@media print {
  --bg: #FCFAF5;       /* warmer off-white */
  --ink: #050404;
  --rule: rgba(5,4,4,0.12);
  --accent: #C97840;   /* darker peach for print readability */
}
```

## Web preview

When viewed on screen (not printing), show it on the dark MOBIUS palette as a centered "page" with a subtle shadow. This is the preview state for the operator to review before exporting.

## Constraints

- Single `.html` file, inline CSS
- No external framework
- Fonts: Fraunces (serif), Geist (body), Geist Mono (labels). Load from Google Fonts.
- Mark: `mobius-mark-dark.png` for print (black-on-bone) — falls back to `mobius-mark-light.png` for screen preview
- All copy bracketed: `[COMPANY NAME]`, `[Founder first name]`, `[FIRST]`, etc. — exactly as `kit/proposal-template.md` is structured

## What to return

The complete `.html` file. Single file, inline CSS, no externals. Plus one line confirming the file exports to a clean single-page A4 PDF in Chrome's Print dialog with no chrome.
