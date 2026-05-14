# HANDOFF 01 — portfolio.html

Copy everything below the `---` line into Claude Design.

Attach the five reference images from `CLAUDE_DESIGN_BRIEF.md` section 14:
1. ZROBIM architects (editorial type-at-scale + atmospheric photo)
2. Cannabis Lab / C.Lab (organic 3D, glass orbs, soft gradients)
3. Nike ACG (dark product display, Japanese-influenced label, refined micro-UI)
4. Agent Arcade landing (light-mode hero, gradient line-art radial)
5. Agent Arcade product viz (dark-mode gradient line illustrations)

---

# Deliverable

Build `portfolio.html` for **MOBIUS**, an AI-native brand studio. One-page studio landing site. Single self-contained file. Dark mode default. Production-grade.

## Brand

MOBIUS rebuilds brand systems for AI-native Series A/B startups in 14 days, then runs the AI operating layer on top of it for a $10K/month retainer.

Voice: brutalist, editorial, monastic restraint. Short serif sentences. One italic accent per paragraph maximum. Banned words: leverage, utilize, robust, streamline, elevate, unlock, empower, seamlessly, cutting-edge, synergy, comprehensive, delve, tapestry.

Sentence patterns to use:
- "Not a logo. The system."
- "Three deliverables. One retainer. Zero hires."
- "Three whales beat thirty minnows. Always."
- "Most studios sell hours. MOBIUS sells systems."

## Sections (in order)

1. **Nav** — pill-shaped top nav, mark left, four links right (Kit, Work, Design, Video)
2. **Hero** — eyebrow mono caption + 168px serif headline ("Brand systems, *shipped in 14 days.*") + sub-line + meta strip (Setup / Retainer / Term / Slots)
3. **Case studies** — four case studies, alternating left-meta / right-body grid. First case is "MOBIUS itself" (the studio's own brand as proof). Cases 2–4 are reserved slots — show them as elegant placeholders with the placeholder bordered in dashed line.
4. **Capabilities** — six-up stat grid (Brand, Site, Sales, Content, Tokens, Ops) with mono label + serif value.
5. **CTA block** — single line + pill CTA, surrounded by gradient bloom in the corner.
6. **Footer** — mark + rule line.

## Tokens

```css
--void: #050404;
--ink: #0E0D0B;
--bone: #F2EDE4;
--smoke: rgba(242,237,228,0.55);
--whisper: rgba(242,237,228,0.32);
--peach: #F4A977;
--coral: #FF6B6B;
--electric: #7B5BFF;
--mint: #5BFFC2;
--gradient: linear-gradient(135deg, peach 0%, coral 35%, electric 70%, mint 100%);
--line: rgba(242,237,228,0.08);
```

Fonts: Fraunces (serif display, 300 weight, italic-capable). Geist (sans body, 400/500). Geist Mono (uppercase labels, 0.22em tracking). Load from Google Fonts.

## Micro-interactions

- Reveal-on-scroll: 10px Y offset, 400ms ease-out, stagger between cards
- Hover on case card: subtle scale (1.02), 1px top-edge gradient line fade-in
- Big type: subtle gradient sweep on hover (1.5s, almost imperceptible)
- Cursor: optional custom dot trail on desktop

## Constraints

- Single `.html` file, all CSS inline in `<style>` tag
- No external framework dependencies
- Mobile-first responsive (test 375 / 768 / 1280)
- Dark mode default, no light-mode toggle needed
- Use the gradient sparingly — corner blooms behind hero and CTA, optional 1px top edge on hovered card

## What to return

The complete `.html` file plus a single paragraph describing what you built and where the design choices came from.
