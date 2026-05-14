# MOBIUS video pipeline

Remotion compositions for the **2-minute brand promo**, the audit Loom intro/outro cards, and a shorter 26-second promo.

## ONE-TIME SETUP

```bash
cd video
npm install
brew install ffmpeg    # required by Remotion's encoder
```

## DROP ASSETS INTO public/

The Promo composition expects all 13 brand assets plus the music file in `video/public/`. Filenames are exact:

```
video/public/
├── 01-moodboard.jpg
├── 02-cards.jpg
├── 03-showroom.jpg
├── 04-og-poster.jpg
├── 05-hoodie.jpg
├── 06-loom-thumbnail-style.jpg
├── 07-founders-guide.jpg
├── 08-outdoor-signage.jpg
├── 09-email-signature.png
├── 10-work-atlas.jpg
├── 11-work-vellum.jpg
├── 12-work-north.jpg
├── 13-work-prism.jpg
├── mobius-mark-light.png   ← already there
└── dontgo.mp3              ← drop the music track here
```

If any file is missing, Remotion Studio will show a red error pointing at the path. Add the file and refresh.

## RUN

```bash
npm run studio        # open Remotion Studio at http://localhost:3000
npm run render        # render the 2-minute Promo to out/mobius-promo.mp4
npm run render:intro  # 3s audit Loom intro card
npm run render:outro  # 4s audit Loom outro card
npm run render:short  # 26s short promo from scenes/mobius-promo.json
```

## THE PROMO — 8 SCENES, 120 SECONDS

| # | Time | Scene | What happens |
|---|---|---|---|
| 1 | 0:00–0:08 | Intro | Mark fades in, "MOBIUS" wordmark types in |
| 2 | 0:08–0:22 | Verdict | "Not a logo." + "The system." (gradient italic), poster slides in with parallax |
| 3 | 0:22–0:38 | What ships | 6 asset cuts every ~2.7s — CARDS, PRINT, MERCH, EMAIL, STUDIO, BRAND, each with peach gradient flash on cut |
| 4 | 0:38–0:54 | Client work | 4-up grid reveal — Atlas, Vellum, North, Prism stagger in at ~2s apart |
| 5 | 0:54–1:10 | Audit Looms | Loom thumbnail center, 4 verdict cards orbit in with 3D rotateY |
| 6 | 1:10–1:26 | The system in the world | Signage Ken Burns zoom, captions type in lower third |
| 7 | 1:26–1:42 | Pricing | Two cards slide in, $30K and $10K count up over 1.4s |
| 8 | 1:42–2:00 | Outro | Poster returns, "Three deliverables. One retainer. Zero hires." reveals line-by-line, MOBIUS mark + mobius.co pill close |

## EDITING SCENES

All scene logic lives in `src/Promo.tsx`. Each scene is a function component. Adjust:

- **Caption text** — find the `<Typewriter text="..."` in each scene
- **Scene length** — change the `durationInFrames` in the `<Sequence>` blocks at the bottom of `Promo.tsx`, and update the timing comments
- **Animation speed** — change the `cps` prop on `<Typewriter>` (chars per second) or the `interpolate` ranges
- **Asset swap** — change the `staticFile("...")` argument in the relevant scene

Reload Remotion Studio after each edit. It hot-reloads.

## RECORD THE FINAL MP4

```bash
npm run render
```

Output lands at `out/mobius-promo.mp4`. 1920×1080, h.264, ~20MB. Drop into Loom, Twitter, LinkedIn, anywhere.

## COMPOSITIONS

| Id | File | Duration | Use |
|---|---|---|---|
| **Promo** | `src/Promo.tsx` | 120 s | Main 2-minute brand promo (this is the one) |
| AuditLoomIntro | `src/AuditLoomIntro.tsx` | 3 s | Card that opens every audit Loom |
| AuditLoomOutro | `src/AuditLoomOutro.tsx` | 4 s | Card that closes every audit Loom |
| LandingPromo | `src/LandingPromo.tsx` | data-driven | Older 26-second scene-driven promo |

## ELEVENLABS (OPTIONAL)

If you want narration on top of the music, generate voice lines via `scripts/tts.mjs`:

```bash
cp .env.example .env   # paste ELEVENLABS_API_KEY + ELEVENLABS_VOICE_ID
npm run tts "Not a logo. The system." public/audio/01-not-a-logo.mp3
```

Then add `<Audio src={staticFile("audio/01-not-a-logo.mp3")} />` inside the relevant Scene component.

For V1, the music alone carries it. Add narration only if the silence behind captions feels empty on playback.

## OUT

All renders land in `out/`. Folder is gitignored.
