# MOBIUS — Design System

The canonical visual language for every MOBIUS surface. Match this exactly so
every page, deck, and asset looks like it came from the same studio.
The shipped landing page (`reference-site.html`) is the source of truth — when
in doubt, copy its patterns.

## Voice & taste in one line

Editorial, dark, confident. A serif display face doing the talking, a single
hot-orange accent, hairline borders, and motion that reveals rather than
decorates. Nothing is loud except the orange.

## Color tokens

| Token      | Value                        | Use                                  |
|------------|------------------------------|--------------------------------------|
| `--void`   | `#0B0B0C`                    | Page background                      |
| `--ink`    | `#141416`                    | Raised surfaces / cards              |
| `--bone`   | `#F5F4F1`                    | Primary text                         |
| `--smoke`  | `rgba(245,244,241,.56)`      | Secondary text / body copy           |
| `--whisper`| `rgba(245,244,241,.30)`      | Tertiary text / numbers              |
| `--line`   | `rgba(245,244,241,.08)`      | Hairline borders & grid              |
| `--orange` | `#FF6B2C`                    | The one accent — emphasis, CTAs      |
| `--amber`  | `#FF9447`                    | Gradient partner to orange           |
| `--ember`  | `rgba(255,107,44,.22)`       | Glows, halos, soft fills             |
| `--blue`   | `#3B82F6`                    | Rare — use sparingly, almost never   |

Rule: orange is the *only* chromatic color on the page. If something needs to
stand out, it goes orange or it stays bone/smoke. Never introduce a second
accent hue.

## Typography

- **Display / headings — Fraunces** (serif, weight **300**, optical sizing on).
  Headlines are large and light, never bold. Letter-spacing tight: `-.02em`
  to `-.03em`. The emphasized word in a headline is *italic* + `--orange`.
- **Body / UI — Geist** (sans, 400/500/600). Base size `17px`, line-height `1.55`.
- **Labels / eyebrows / numbers — Geist Mono** (400/500). Uppercase, wide
  letter-spacing (`.2em`–`.34em`), small (11–13px), colored `--orange` or
  `--whisper`.

Type scale: `h1` `clamp(40px,7vw,104px)` · `h2` `clamp(34px,5.4vw,72px)` ·
`lead` `clamp(17px,1.5vw,21px)` colored `--smoke`, max-width ~`46ch`.

## Layout

- Section padding: `clamp(90px,13vh,170px)` vertical, `clamp(20px,6vw,110px)`
  horizontal. Be generous with whitespace.
- Content wrap: `max-width:1180px`, centered.
- Section rhythm: mono **number label** (`02 — THE MODEL`) → `h2` headline →
  `lead` paragraph → a grid or diagram.
- Multi-column grids (3 or 4 up) collapse to a single column at `880px`.
- Fixed background: 74px grid of `--line`, plus a soft radial `--ember` glow
  near the top.

## Surfaces & shape

- Cards: `linear-gradient(160–165deg, var(--ink), #0d0d0f)`, `1px` `--line`
  border, radius **14–20px**.
- Pills / chips: radius **30–40px**, mono uppercase label.
- Small blocks: radius **10–12px**.
- Featured card: orange-tinted border `rgba(255,107,44,.45)` + soft orange
  drop shadow. One feature per group, never more.

## Motion

GSAP + ScrollTrigger. Motion is purposeful — it reveals structure, never spins
for fun.

- **Scroll reveal**: elements start `opacity:0; translateY(26px)`, ease in on
  enter; stagger siblings by `.08s` steps.
- **Signature easing**: `cubic-bezier(.2,.7,.2,1)`.
- **Hero**: pinned stage, scroll-scrubbed timeline (cards move from a fan into
  a hierarchy grid). One-time intro slide-in on load.
- Counters count up; lines draw via `strokeDashoffset`; sweeps/patches wipe in.
- **Always** honor `prefers-reduced-motion: reduce` — disable animation, show
  final state.

## Copy tone

Terse, declarative, certain. Short sentences. No hedging, no exclamation marks.
Headline pattern: a plain statement with one italic-orange emphasis word —
"Brand systems that *compound.*" / "Not a logo. *The whole system.*" Body copy
is concise and concrete (numbers, days, dollars), kept under ~46 characters
wide.

## The mark

The MOBIUS mark is an inline SVG (a looping ribbon form), rendered in
`--orange`, `viewBox="0 0 512 512"`. It is already embedded in
`reference-site.html` — copy it from there rather than redrawing it.

## Non-negotiables

1. Dark only — `--void` background, never a light theme.
2. One accent — orange. No second color.
3. Serif headlines at weight 300. Never bold a headline.
4. Hairline borders at 8% opacity. No heavy strokes.
5. Self-contained output — see PROJECT-INSTRUCTIONS.md.
6. Reduced-motion always supported.
