#!/usr/bin/env node
// ElevenLabs TTS for promo voiceover.
// Usage: node scripts/tts.mjs "Your line" out/audio/01-line.mp3

import fs from "node:fs";
import path from "node:path";

const VOICE_ID = process.env.ELEVENLABS_VOICE_ID;
const API_KEY = process.env.ELEVENLABS_API_KEY;
const MODEL = process.env.ELEVENLABS_MODEL ?? "eleven_turbo_v2_5";

if (!VOICE_ID || !API_KEY) {
  console.error("Set ELEVENLABS_VOICE_ID and ELEVENLABS_API_KEY in .env first.");
  process.exit(1);
}

const text = process.argv[2];
const outPath = process.argv[3];

if (!text || !outPath) {
  console.error('Usage: node scripts/tts.mjs "Your line" out/audio/01-line.mp3');
  process.exit(1);
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });

const res = await fetch(
  `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
  {
    method: "POST",
    headers: {
      "xi-api-key": API_KEY,
      "Content-Type": "application/json",
      Accept: "audio/mpeg",
    },
    body: JSON.stringify({
      text,
      model_id: MODEL,
      voice_settings: { stability: 0.55, similarity_boost: 0.7, style: 0.2 },
    }),
  }
);

if (!res.ok) {
  console.error(`TTS failed: ${res.status} ${await res.text()}`);
  process.exit(1);
}

const buf = Buffer.from(await res.arrayBuffer());
fs.writeFileSync(outPath, buf);
console.log(`Wrote ${outPath} (${buf.length} bytes)`);
