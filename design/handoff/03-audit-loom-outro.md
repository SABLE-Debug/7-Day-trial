# HANDOFF 03 — audit-loom-outro.html

Copy everything below the `---` line into Claude Design.

Attach the five reference images from `CLAUDE_DESIGN_BRIEF.md` section 14.

---

# Deliverable

Build `audit-loom-outro.html` — a single static HTML page at exactly **1920×1080** that Remotion records as the **closing card** for every MOBIUS audit Loom.

## Use

This page runs full-bleed in a Remotion `<AbsoluteFill>` for 3 seconds. After the operator says the close line on camera, the recording fades to this card and holds for three seconds before the file ends.

## Layout

Three stacked elements, centered vertically and horizontally:

1. **MOBIUS mark** — 220×220px, white-on-void, centered
2. **CTA caption** below mark — "REPLY TO THIS THREAD" in 18px Geist Mono, 0.32em tracking, color smoke
3. **Domain pill** below caption — "mobius.co" in a pill-shaped 1px bone border, 20px Geist Mono, 0.24em tracking, 20px vertical / 40px horizontal padding, border-radius 999px

Vertical gap between elements: 56px.

## Tokens

```css
--void: #050404;
--bone: #F2EDE4;
--smoke: rgba(242,237,228,0.55);
```

Fonts: Geist Mono 400. Google Fonts.

## Brand mark

Use a `<img>` with `src="mobius-mark-light.png"`. Remotion picks it up via `staticFile()`.

## Optional accent

Single 1px line at the top of the pill, full bleed across the canvas at the same y-position, in `rgba(242,237,228,0.04)`. Pure detail layer. Skip if it muddies the composition.

## Constraints

- Body must be exactly `1920×1080px`, no overflow, no scroll
- Background: `var(--void)` solid
- No animations (Remotion handles fades)
- No external CSS framework
- Pill border must be exactly 1px, color bone, fully crisp

## What to return

The complete `.html` file. Single file, inline CSS. Hand back the file plus the rendered pixel measurements.
