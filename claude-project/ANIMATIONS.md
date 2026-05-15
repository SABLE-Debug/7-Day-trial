# MOBIUS — Animation Types

The motion vocabulary for the promo video and animated pages. Pick from this
list when prompting Lovable — name the animations explicitly so the build is
intentional, not random. House feel: **cinematic, slow-in/slow-out, restrained.**
Signature easing: `cubic-bezier(.2,.7,.2,1)`.

## Entrance / reveal

- **Rise + fade** — element starts ~26px low and transparent, eases up into
  place. The default for headlines, paragraphs, cards.
- **Staggered reveal** — siblings animate in one after another, ~80ms apart.
  For lists, grids, chips, checklist rows.
- **Blur-in** — element resolves from blurred + transparent to sharp. Good for
  hero headlines and the logo.
- **Mask wipe** — text or image revealed behind a moving edge, as if uncovered.
  For section headlines and image reveals.
- **Scale-up settle** — element starts at ~0.9 scale and eases to 1. For cards
  and the featured tier.

## Typography in motion

- **Kinetic type** — words or lines appear in sequence, one at a time. Core of
  the promo — every scene headline should land word-by-word.
- **Word swap** — a single word cycles/replaces in place ("Request → Design →
  Delivery").
- **Count-up** — numbers animate from 0 to target (14, $30K, $15K).
- **Italic-orange accent** — the emphasis word eases to italic + orange a beat
  after the rest of the line lands.

## Transitions between scenes

- **Cross-fade** — one scene dissolves into the next. The safe default.
- **Orange sweep wipe** — a band of orange light wipes across, carrying the
  cut. Use a few times, not every transition.
- **Push / slide** — outgoing scene slides off as the next slides in.
- **Light-flash cut** — a quick ember bloom covers the cut. For high-energy
  beats only.

## Continuous / ambient

- **Logo spin** — the Mobius mark rotates slowly, continuously, on a loop.
- **Glow pulse** — the background orange glow breathes slowly (opacity/scale).
- **Drift** — particles, haze, or grid drift gently and endlessly.
- **Heartbeat** — a grid or accent flickers in a 2–3s rhythmic pulse.
- **Orbit** — concentric rings or dots rotate at different speeds.

## Scroll-driven (for animated pages, not the timed video)

- **Scroll reveal** — sections animate in as they enter the viewport.
- **Pinned scrub** — a section locks while a timeline plays tied to scroll
  position (the hero card fan → grid move).
- **Parallax** — background layers move slower than foreground for depth.
- **Line draw on scroll** — an SVG path draws itself as you scroll (the
  distribution graph).

## Data / object motion

- **Line draw** — chart/graph strokes draw via `strokeDashoffset`.
- **Bar / fill grow** — bars or progress fills animate from 0.
- **Card flip / tilt** — 3D rotateY on cards for the offer tiers and panels.
- **Patch wipe** — a panel slides over another to "fix" or replace it (the
  risks → solutions section).
- **Stack assemble** — items drop into a stacked formation in sequence.

## Rules

1. Everything eases slow-in/slow-out — nothing linear except continuous loops.
2. One hero motion per scene; supporting motion stays subtle.
3. Stagger, don't dump — sequence siblings, never reveal all at once.
4. Always provide a `prefers-reduced-motion` fallback: skip motion, show the
   final state.
5. Motion reveals structure and meaning. If it doesn't, cut it.
