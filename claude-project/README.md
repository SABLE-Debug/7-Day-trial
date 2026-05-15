# MOBIUS Claude Project Kit

Drop these files into a Claude.ai **Project** so every new chat builds MOBIUS
surfaces with the same design taste — and you can preview results live in the
chat (which Claude Code couldn't do).

## 5-minute setup

1. Go to **claude.ai → Projects → Create project**. Name it `MOBIUS`.
2. Open `PROJECT-INSTRUCTIONS.md`, copy the text below its divider, and paste it
   into the Project's **Instructions** field.
3. Add these files to **Project knowledge** (upload or paste):
   - `DESIGN-SYSTEM.md` — the visual language.
   - `reference-site.html` — the shipped landing page, the quality bar.
4. Start a new chat in the Project and paste the prompt from
   `HANDOFF-PROMPT.md`. Attach your assets to that message.

## What's in this folder

| File                      | Where it goes                                  |
|---------------------------|-------------------------------------------------|
| `PROJECT-INSTRUCTIONS.md` | Project → Instructions field                    |
| `DESIGN-SYSTEM.md`        | Project knowledge (upload)                       |
| `reference-site.html`     | Project knowledge (upload)                       |
| `HANDOFF-PROMPT.md`        | Copy/paste into each new chat                   |
| `README.md`               | This file — setup guide                          |

## Why this works

- **Project instructions** apply to every chat automatically — the design rules
  never have to be re-explained.
- **Project knowledge** files are always in context, so output stays on-brand
  across separate chats and over time.
- **Single-file HTML output** renders in the Artifact panel — live preview,
  scroll, resize, all in the chat.

## A note on "skills"

Claude.ai Projects don't use Claude Code-style skills. The equivalent levers
are the **Instructions field** and **knowledge files** above — that's where the
design taste lives. Keep `DESIGN-SYSTEM.md` updated as the brand evolves and
every future chat inherits the change. If you outgrow this and want
repeatable, scripted workflows again, that's when to come back to Claude Code.

## Keeping it current

When you ship a new surface you're happy with, add it to Project knowledge as
another reference file (or replace `reference-site.html`). The more strong
examples the Project holds, the more consistent everything it builds becomes.
