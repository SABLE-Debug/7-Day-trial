# MOBIUS — 7-DAY SAAS TEST KIT

> **→ Start here: [PLAYBOOK.md](PLAYBOOK.md)** — every step of the next 7 days, named and timed.

The full first-touch kit for the 7-day pivot test. AI-native Series A/B SaaS.

One Loom per day. Five Looms total. Two replies, one call, one proposal sent — that is the bar.

---

## THE KIT

```
index.html                 Live landing page (MOBIUS aesthetic, links to all)
portfolio.html             Work / case studies page

kit/
  icp-filter.md            Rubric for scoring AI Series A/B prospects
  audit-loom-template.md   5-beat script + shot list, 7-9 minute Loom
  proposal-template.md     One-page A4, $30K setup + $10K retainer
  outreach/
    linkedin-dm.md         Three-line DM, three templates
    twitter-dm.md          Two-line DM, three templates
    cold-email.md          Two-email ladder, three subjects
    drafts.md              Personalized DMs for the top 5 prospects

prospects/
  README.md                Workflow + CSV schema
  candidates.md            Day-1 sourced prospects with verification gate
  scores.csv               Live scoreboard

design/
  CLAUDE_DESIGN_BRIEF.md   Visual identity spec
  mobius-mark.svg          Vector mark
  mobius-mark-light.png    White on transparent
  mobius-mark-dark.png     Black on transparent
  handoff/
    README.md              How to fire a Claude Design task
    01-portfolio.md        Production-grade portfolio.html brief
    02-audit-loom-intro.md 1920x1080 Loom intro card brief
    03-audit-loom-outro.md 1920x1080 Loom outro card brief
    04-proposal.md         A4 print-ready proposal brief

video/
  README.md                Remotion pipeline run instructions
  package.json             Remotion 4 + ElevenLabs deps
  remotion.config.ts       Codec, pixel format
  src/
    Root.tsx               Composition registry
    AuditLoomIntro.tsx     3s Loom intro card
    AuditLoomOutro.tsx     4s Loom outro card with CTA pill
    LandingPromo.tsx       Scene-based landing promo (5 scene types)
    tokens.ts              MOBIUS tokens for video
  scenes/
    mobius-promo.json      Real promo scenes for mobius.co launch
  scripts/
    tts.mjs                ElevenLabs voiceover CLI
  public/
    mobius-mark-light.png  Asset bundled into renders

.github/
  CADENCE.md               Daily and weekly operating loop
  PULL_REQUEST_TEMPLATE.md Voice + brand system gate
  ISSUE_TEMPLATE/
    prospect.md            Add a prospect to the queue
    loom.md                Track one audit Loom end-to-end
    deliverable.md         Track a retainer deliverable
  workflows/
    pages.yml              GitHub Pages auto-deploy on main

icon-180.png               Apple touch icon
icon-512.png               Standard favicon
icon-1024.png              High-res mark on void

HANDOFF.md                 Full project context (read once)
```

---

## THE 7-DAY EXECUTION

```
Day 1   Score 50 prospects. Pick 5. Pull 6h dossiers on each.
Day 2   Record Loom 1 + Loom 2. Custom thumbnails. Custom titles.
Day 3   Send Loom 1 + Loom 2 via LinkedIn DM. Record Loom 3.
Day 4   Send Loom 3 via X DM. Record Loom 4.
Day 5   Send Loom 4 via email. Record Loom 5.
Day 6   Send Loom 5. Monitor replies. Send Template C ladder for Day 3 sends.
Day 7   Review the scoreboard. Decide pivot or stay.
```

Hard stop at end of Day 7. *No extensions. No pity Looms.*

---

## THE DECISION GATE AT DAY 7

| Signal | Action |
|---|---|
| 2+ replies, 1+ call booked, 1+ proposal sent | Fully commit to the SaaS pivot. Retarget Path E content. |
| 1 reply, no call | Run a second 7-day test with a tighter ICP. Do not pivot yet. |
| 0 replies | Stay AKHARA med-spa positioning. Adopt the MOBIUS visual rebrand only. |

Three whales beat thirty minnows. Always.

---

## DAILY DISCIPLINE

- Score and dossier work happens before noon SAST.
- Loom recording happens in a single 90-minute block, mid-afternoon.
- Sends happen at 7am SAST the morning after the Loom is cut.
- The scoreboard updates at end of day, no exceptions.

---

## HOUSE VOICE

Every artifact in `kit/` was written to the voice rules in `HANDOFF.md` section 6.

- Short serif sentences. Most under 15 words.
- One italic accent per paragraph. Maximum.
- Banned words enforced. No "leverage," no "elevate," no "seamlessly," no "comprehensive."
- Sign every send with first name only.

Before any send, run the artifact through `noise-cancel` discipline. Strip every AI-tell.

---

## WHAT'S NOT IN THIS REPO YET

These ship after the 7-day test answers the pivot question:

- `kit/objection-handler.md` — canonical responses to prospect objections
- `kit/dossier-template.md` — the 6-hour research dossier per prospect
- `kit/follow-up-ladder.md` — post-reply, pre-proposal sequence
- The 8 Claude Design deliverables from `design/CLAUDE_DESIGN_BRIEF.md` section 11

---

## REFERENCE

- Source repo: <https://github.com/SABLE-Debug/WHALE-COMMAND-CONSOLE>
- Live console: <https://sable-debug.github.io/WHALE-COMMAND-CONSOLE/>
- Full handoff context: `HANDOFF.md`
