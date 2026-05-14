# HANDOFF 02 — audit-loom-intro.html

Copy everything below the `---` line into Claude Design.

Attach the five reference images from `CLAUDE_DESIGN_BRIEF.md` section 14.

---

# Deliverable

Build `audit-loom-intro.html` — a single static HTML page at exactly **1920×1080** that Remotion records as the **opening card** for every MOBIUS audit Loom.

## Use

This page runs full-bleed in a Remotion `<AbsoluteFill>` for 2.5 seconds. The Loom recording opens with this card, fades to the screen-share, runs eight minutes, then fades to the outro card (deliverable 03).

## Layout

Single composition. Static — no animation needed (Remotion handles the fade). Pure visual hierarchy:

1. **MOBIUS mark** — centered, 180×180px, white-on-void
2. **Mono caption** below mark — "MOBIUS BRAND AUDIT" in 16px Geist Mono, 0.32em tracking, color smoke
3. **Company name** below caption — placeholder text "[COMPANY]" in 96px Fraunces serif, weight 300, color bone, letter-spacing -0.03em
4. **Date** below company — "2026-05-14" placeholder, 14px Geist Mono, 0.28em tracking, color whisper

Center everything vertically and horizontally. Generous breathing room. Nothing else on the canvas.

## Tokens

```css
--void: #050404;
--bone: #F2EDE4;
--smoke: rgba(242,237,228,0.55);
--whisper: rgba(242,237,228,0.32);
```

Fonts: Fraunces 300, Geist Mono 400. Google Fonts.

## Brand mark

Use a `<svg>` or `<img>` with `src="mobius-mark-light.png"`. The asset is white-on-transparent. Remotion will pick this up via `staticFile()`.

## Constraints

- Body must be exactly `1920×1080px`, no overflow, no scroll
- Background: `var(--void)` solid, no gradient
- All text in mono **or** Fraunces serif — never both at the same hierarchy level
- No animations (Remotion handles fades via interpolate)
- No external CSS framework

## What to return

The complete `.html` file. Single file, inline CSS. Hand back the file plus the exact pixel sizes used for the mark, the company name, and the spacing between elements.
