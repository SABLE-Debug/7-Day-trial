# MOBIUS video pipeline

Remotion compositions for the audit Loom intro/outro cards and the landing-page promo.

## INSTALL

```bash
cd video
npm install
cp .env.example .env   # paste ELEVENLABS_API_KEY and ELEVENLABS_VOICE_ID
brew install ffmpeg    # required by Remotion's encoder
```

## RUN

```bash
npm run studio                # open Remotion Studio at localhost:3000
npm run render:intro          # out/audit-loom-intro.mp4
npm run render:outro          # out/audit-loom-outro.mp4
npm run render:promo          # out/mobius-promo.mp4 from scenes/mobius-promo.json
```

## COMPOSITIONS

| Id | File | Duration | Use |
|---|---|---|---|
| AuditLoomIntro | `src/AuditLoomIntro.tsx` | 3 s | Card that opens every audit Loom — mark + company name + date |
| AuditLoomOutro | `src/AuditLoomOutro.tsx` | 4 s | Card that closes every audit Loom — mark + CTA + domain |
| LandingPromo | `src/LandingPromo.tsx` | data-driven | Scene-based promo for `mobius.co` |

## LANDING PROMO

Scene types — `title`, `stat-block`, `bullet-reveal`, `quote`, `outro`. Edit `scenes/mobius-promo.json` to retarget the promo at a different niche or season.

## TTS

`scripts/tts.mjs` calls ElevenLabs for voiceover. Write the script line by line, run TTS per line, drop the audio into `public/audio/`, then reference it in a Remotion `<Audio>` tag. Audio is not wired into the default `LandingPromo` — that is the next pass.

## OUT

All renders land in `out/`. The folder is gitignored.
