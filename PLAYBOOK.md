# MOBIUS — 7-DAY PLAYBOOK

The only doc you read this week. Every step is named. Every step has an input, an output, a time budget, and a file it touches.

Hard stop at end of Day 7. *No extensions. No pity Looms.*

---

## DAY 0 — PRE-FLIGHT (today, 90 minutes)

Before the clock starts, the rails go in.

### Step 0.1 — Enable GitHub Pages (5 min)

- Open `https://github.com/SABLE-Debug/7-Day-trial/settings/pages`
- Source: **GitHub Actions**
- Save
- The `pages.yml` workflow runs on the next push to `main`. Live URL: `https://sable-debug.github.io/7-Day-trial/`

**Output:** A live URL to send.

### Step 0.2 — Merge PR #1 to main (2 min)

- Open `https://github.com/SABLE-Debug/7-Day-trial/pull/1`
- Mark ready for review
- Squash and merge
- Pages workflow fires automatically

**Output:** `index.html`, `portfolio.html`, kit, video pipeline all live.

### Step 0.3 — Set up Loom recording (10 min)

- Install Loom Desktop (`loom.com/download`)
- Verify camera + mic + screen capture all work
- Set output to 1080p, 30fps
- Test record a 30-second clip — confirm camera bubble lands bottom-left, 240px

**Output:** Recording rig confirmed.

### Step 0.4 — Set up the cold email rail (15 min)

- Domain: confirm `mobius.co` registered (or use current `akhara.co` for the test)
- Verify SPF, DKIM, DMARC at `mail-tester.com` — all three must be green
- Inbox warmup status: if the inbox is fresh, it cannot send today. *Hold the email channel until Day 14.*

**If warmup not done:** drop email from Day 5 and shift Loom 4 to LinkedIn.

### Step 0.5 — Set up X / Twitter Premium (5 min)

- Subscribe to X Premium ($8/mo) — opens longer DMs, skips spam folder
- Bio: "Brand & AI operating system for AI-native startups."
- Header: void background, white mark only
- Pin: blank for now (will pin first audit Loom on Day 3)

**Output:** Profile camera-ready for Day 4 sends.

### Step 0.6 — Verify the prospect dossier folders (3 min)

- `prospects/scores.csv` — opened, parsed, 7 rows present
- `prospects/candidates.md` — opened, 5 prospects in Tier 1 + 2
- `kit/outreach/drafts.md` — opened, 5 personalized DM drafts

**Output:** You know exactly what's already drafted.

### Step 0.7 — Open one issue per Tier 1/2 prospect (10 min)

In GitHub, use the **Prospect** issue template. Open one issue per:

1. Rebar
2. Ankar
3. Parasail
4. Elicit
5. Spector

Drop the score row into each. Label `loom-now` or `loom-soon`.

**Output:** 5 issues that will track every Loom from dossier to send.

### Step 0.8 — Block calendar (5 min)

Block the seven days. Recording windows go in red.

```
Mon-Fri  09:00-12:00   Dossier work
Mon-Fri  15:00-17:00   Loom recording window
Mon-Fri  07:00         Yesterday's sends fire
```

**Output:** No surprise meetings inside the test.

---

## DAY 1 — VERIFY + RANK (4–5 hours)

The Day-1 list is desk-scored. Every prospect must survive a 90-second verification before any Loom is recorded.

### Step 1.1 — Verify Rebar (15 min)

Open `https://www.linkedin.com/company/rebar-ai`. Confirm:

- [ ] Series A $14M still listed as latest round
- [ ] Headcount 10–50 on LinkedIn employee filter
- [ ] No "Head of Design" hire in the last 12 months
- [ ] Founder Evan Brown's last X post is technical, not a launch
- [ ] No public layoffs, no public spat in last 90 days
- [ ] Site renders, not behind enterprise login

**Output:** Confirmed or cut. If cut, log reason in `prospects/scores.csv` notes.

### Step 1.2 — Verify Ankar (15 min)

Same checklist on `linkedin.com/company/ankar`. Founders are Palantir vets — confirm at least one of them posts on X.

### Step 1.3 — Verify Parasail (15 min)

Same checklist on `linkedin.com/company/parasail`. Pay attention to the brand vacuum gate — infra companies sometimes brand decently. *If their site already looks tight, downgrade the score.*

### Step 1.4 — Verify Elicit (15 min)

Same checklist. Elicit is academic-adjacent — confirm it's a commercial entity, not a non-profit research project, before committing six hours.

### Step 1.5 — Verify Spector (15 min)

Same checklist. Smaller round — verify the team has at least one ex-enterprise sales hire (signals real revenue motion).

### Step 1.6 — Re-score and re-rank (20 min)

Update `prospects/scores.csv` with the verified scores. Re-sort. The top four become the Loom queue. The fifth is the standby.

**Output:** A locked send queue.

### Step 1.7 — Pull dossier raw material for Loom 1 (90 min)

For the top-ranked prospect (likely Rebar), build the six-hour dossier across two sessions. Today, pull the raw material:

- [ ] Hero screenshot at 2x retina, cropped to 1920×1080
- [ ] Three artifacts — deck slide, pricing page, feature page
- [ ] Last social post (LinkedIn or X) screenshot
- [ ] App login or onboarding screenshot
- [ ] Three reference artifacts at the right tier (Linear, Vercel, Cursor, Arc, Ramp)
- [ ] Founder name, role, last public statement
- [ ] Last fundraise headline + lead investor

Save everything to `prospects/dossiers/rebar/`.

**Output:** Dossier 1 raw material complete.

### Step 1.8 — Pull dossier raw material for Loom 2 (90 min)

Same eight items for the second-ranked prospect (likely Ankar). Save to `prospects/dossiers/ankar/`.

**Output:** Dossier 2 raw material complete.

---

## DAY 2 — RECORD LOOMS 1 + 2 (5 hours)

Day 2 is for camera. No outbound today.

### Step 2.1 — Render the Loom intro card (10 min)

```bash
cd video
npm install   # first time only
npm run render:intro
```

Edit `video/src/Root.tsx` defaultProps to set `company: "Rebar"` and today's date before rendering. Output: `video/out/audit-loom-intro.mp4`.

### Step 2.2 — Render the Loom outro card (5 min)

```bash
npm run render:outro
```

Output: `video/out/audit-loom-outro.mp4`.

### Step 2.3 — Write the verdict line for Rebar (15 min)

Use `kit/outreach/drafts.md` Section 1. The verdict is already drafted:

> "Your product reads $50K/seat. Your brand reads $5K/seat. Here is the gap."

Tighten it. Read it out loud three times. *If it sounds rehearsed, recut.*

### Step 2.4 — Record Loom 1 — Rebar (60 min)

Follow `kit/audit-loom-template.md` beat-by-beat:

- Beat 1 — open (3 sentences, on camera, no screen)
- Beat 2 — verdict + cost + 3 faults named
- Beat 3 — teardown (4 min, side-by-side)
- Beat 4 — fix (3 bullets, third bullet is leave-alone)
- Beat 5 — close (4 sentences, memorized)

Watch back at 1.5x. *If any beat drags, recut beat 3 first.*

**Output:** `Rebar` Loom URL.

### Step 2.5 — Custom thumbnail for Loom 1 (10 min)

In Loom, set custom thumbnail: company logo + the verdict line in mono. Title: `MOBIUS audit — Rebar`.

### Step 2.6 — Write the verdict line for Ankar (15 min)

Use `kit/outreach/drafts.md` Section 2.

> "Atomico priced the product thesis at $20M. Your brand still reads like a Palantir alumni Notion page."

### Step 2.7 — Record Loom 2 — Ankar (60 min)

Same beat structure. Same recording rig. Recut as needed.

### Step 2.8 — Custom thumbnail for Loom 2 (10 min)

Same treatment. Title: `MOBIUS audit — Ankar`.

### Step 2.9 — Update GitHub issues (10 min)

On the Rebar and Ankar issues, tick the `Record + post` checklist items. Drop the Loom URL into each issue body.

---

## DAY 3 — SEND LOOMS 1 + 2, RECORD LOOM 3 (5 hours)

Day 3 fires the first sends.

### Step 3.1 — Send Rebar via LinkedIn (10 min)

- Connect Evan Brown on LinkedIn — **blank connection request**
- The moment connection accepts, send the DM from `kit/outreach/drafts.md` Section 1
- Replace `[FIRST]` with your first name. Replace `[LOOM]` with the Loom URL from Step 2.4.
- Send time: 7am SAST (already past — send within the next available 7am window)

**Output:** Rebar DM sent. Logged in `prospects/scores.csv` `response: sent`.

### Step 3.2 — Send Ankar via LinkedIn (10 min)

Same flow. DM from drafts.md Section 2. Log in CSV.

### Step 3.3 — Pull Parasail dossier raw material (90 min)

Step 1.7 again, this time for Parasail. Save to `prospects/dossiers/parasail/`.

### Step 3.4 — Render intro/outro for Parasail (5 min)

Edit Root.tsx defaultProps to `company: "Parasail"`. Render intro + outro.

### Step 3.5 — Write the verdict line for Parasail (15 min)

From `drafts.md` Section 3:

> "Developers don't read your docs first. They read your homepage hero in 8 seconds and decide whether to bother."

### Step 3.6 — Record Loom 3 — Parasail (60 min)

Beat structure. Recut. Watch back.

### Step 3.7 — Custom thumbnail for Loom 3 (10 min)

Title: `MOBIUS audit — Parasail`.

### Step 3.8 — Pin the first published Loom on X (5 min)

Pick the strongest of Loom 1 or 2 (likely Rebar). Upload to X as a public Loom link with the verdict tweet underneath. Pin to profile.

**Output:** Profile is camera-ready for Day 4 sends.

### Step 3.9 — Inbox triage end of day (15 min)

Check LinkedIn for connection accepts or replies on the two Day-3 sends. Reply same-day if anything came in. Update `prospects/scores.csv` `response` column.

---

## DAY 4 — SEND LOOM 3 (X), RECORD LOOM 4 (5 hours)

### Step 4.1 — Follow Parasail founder on X (1 min)

Follow first. Wait until end-of-day before DM-ing. Reduces spam flag.

### Step 4.2 — Send Parasail via X DM (10 min)

DM body from `drafts.md` Section 3. Send during US business hours (so 4–10pm SAST).

If DMs are closed, switch to a one-sentence reply on a non-personal post with the Loom link.

**Output:** Parasail DM sent. Logged in CSV.

### Step 4.3 — Pull Elicit dossier raw material (90 min)

Step 1.7 for Elicit. Save to `prospects/dossiers/elicit/`.

### Step 4.4 — Render intro/outro for Elicit (5 min)

Edit Root.tsx defaultProps. Render.

### Step 4.5 — Write the verdict line for Elicit (15 min)

From `drafts.md` Section 4:

> "You sell to researchers. Your brand makes them feel like they are reading a 2018 arXiv submission. That is not a compliment."

### Step 4.6 — Record Loom 4 — Elicit (60 min)

Beat structure. Recut.

### Step 4.7 — Custom thumbnail for Loom 4 (10 min)

Title: `MOBIUS audit — Elicit`.

### Step 4.8 — Inbox triage end of day (15 min)

Check LinkedIn (Day 3 sends now 24h old) and X (Day 4 send fresh). Reply same-day to any inbound. Update CSV.

---

## DAY 5 — SEND LOOM 4 (EMAIL), RECORD LOOM 5 (5 hours)

### Step 5.1 — Send Elicit via cold email (10 min)

Plain text only. Subject from `kit/outreach/cold-email.md`:

```
Subject: elicit's brand vs your last raise
```

Body from `drafts.md` Section 4. Send 7am SAST. One recipient. No CC. No tracking pixels.

**If email rail not warmed:** switch to LinkedIn DM with `linkedin-a` template, swap the DM body to match.

**Output:** Elicit email sent. Logged in CSV.

### Step 5.2 — Pull Spector dossier raw material (90 min)

Step 1.7 for Spector. Save to `prospects/dossiers/spector/`.

### Step 5.3 — Render intro/outro for Spector (5 min)

Edit Root.tsx defaultProps. Render.

### Step 5.4 — Write the verdict line for Spector (15 min)

From `drafts.md` Section 5:

> "You sell to heavy-industry buyers. They read your brand as a signal of whether you can be trusted with $10M of asset uptime. Right now the brand undersells what the product can do."

### Step 5.5 — Record Loom 5 — Spector (60 min)

Beat structure. Recut.

### Step 5.6 — Custom thumbnail for Loom 5 (10 min)

Title: `MOBIUS audit — Spector`.

### Step 5.7 — Inbox triage end of day (15 min)

Check LinkedIn, X, email. Reply same-day. Update CSV.

---

## DAY 6 — SEND LOOM 5, FIRE REPLY LADDERS (4 hours)

### Step 6.1 — Send Spector via LinkedIn (10 min)

Connect Prashant Nedungadi blank. DM from `drafts.md` Section 5. 7am SAST send.

**Output:** Spector DM sent. Logged in CSV.

### Step 6.2 — Run reply ladder for Day-3 sends (15 min)

If Rebar and/or Ankar have not replied 5 business days after Day 3, send Template C from `kit/outreach/cold-email.md` (or `linkedin-dm.md` Template C — depends on channel).

Today is Day 6 — Day 3 sends are 3 calendar days old. *Hold the ladder until Day 8 unless you sent on a Friday-equivalent and the inbox is stale.*

### Step 6.3 — Audit any replies received (60 min)

For every reply that came in over the week:

- If positive, respond same-day with a 15-minute scheduling link
- If hostile, respond same-day with one specific deeper artifact, not a defense
- If "not now," ask one question — the timing they would consider — then close the loop
- If silent for 7 days, do nothing

### Step 6.4 — Draft any proposals from booked calls (90 min)

For every booked call, fill the proposal template (`kit/proposal-template.md`) with the prospect's brackets:

- `[COMPANY NAME]`
- The three faults from the Loom
- The 14-day timeline (start date today + 14)
- The signature

Export to PDF via the design handoff (`design/handoff/04-proposal.md`) when ready.

### Step 6.5 — Update scoreboard (15 min)

Final CSV update before the gate decision tomorrow.

---

## DAY 7 — READ THE SCOREBOARD, RUN THE GATE (3 hours)

### Step 7.1 — Pull the numbers (15 min)

From `prospects/scores.csv`:

- Total sends:
- Total accepts (LinkedIn) / opens (email):
- Total replies:
- Total calls booked:
- Total proposals sent:
- Total closes:

### Step 7.2 — Run the decision gate (30 min)

| Signal | Action |
|---|---|
| 2+ replies, 1+ call, 1+ proposal sent | **Pivot — fully commit to SaaS positioning** |
| 1 reply, no call | **Tighten — second 7-day test with a sharper ICP** |
| 0 replies | **Stay — keep AKHARA med-spa positioning, adopt MOBIUS visual rebrand only** |

### Step 7.3 — Write the post-mortem (60 min)

One markdown file at `prospects/post-mortem-week-1.md`. Five sections:

1. **What worked** — every send + Loom that pulled signal
2. **What didn't** — channels with zero accept, prospects with zero open
3. **What to change** — the ICP gates, the Loom verdict line, the DM template
4. **The decision** — pivot, tighten, or stay
5. **Next 7 days** — first three steps of next week

### Step 7.4 — Open issues for next week (30 min)

Whatever the decision, open the next week's issues:

- If pivot — open 5 fresh prospect issues with the SaaS pivot fully committed
- If tighten — open 5 fresh prospect issues with the new tighter ICP
- If stay — open the AKHARA Chapter 11 rewrite issue

### Step 7.5 — Off the keyboard (rest of day)

Saturday is Saturday. *Recovery is part of the operating system.*

---

## COMMON FAILURE MODES

| Failure | What happens | What to do |
|---|---|---|
| A Loom runs past 9 minutes | Reply rate drops to near-zero | Recut beat 3 first, never beat 5 |
| Connection request rejected | Prospect never sees the DM | Remove from list, do not retry on a different platform |
| Reply argues a fault | Hostile signal | Same-day response with a deeper artifact, not a defense |
| Email lands in spam | Funnel breaks silently | Re-check SPF/DKIM/DMARC at mail-tester.com, switch to LinkedIn for the rest of the week |
| Three Looms with zero reply | Funnel is broken | Stop sending. Run `red-team` against the ICP filter before sending Loom 4. |

---

## THE DAILY ANCHOR

Every day, three checks. End-of-day, no exceptions.

- [ ] Today's send fired at 7am SAST
- [ ] Today's recording happened in the 15:00–17:00 window
- [ ] Today's CSV row updated

If any of the three is unchecked, *the day did not happen.*

---

## THE FILE MAP

Every step above maps to one file:

| Step | File |
|---|---|
| 0.1–0.2 | GitHub Settings → Pages, PR #1 |
| 0.6–0.8 | `prospects/scores.csv`, `prospects/candidates.md`, `kit/outreach/drafts.md` |
| 1.1–1.6 | `prospects/scores.csv` |
| 1.7–1.8, 3.3, 4.3, 5.2 | `prospects/dossiers/<company>/` |
| 2.1–2.2, 3.4, 4.4, 5.3 | `video/`, `video/out/` |
| 2.3–2.7, 3.5–3.7, 4.5–4.7, 5.4–5.6 | `kit/audit-loom-template.md`, `kit/outreach/drafts.md` |
| 3.1–3.2, 4.2, 5.1, 6.1 | `kit/outreach/linkedin-dm.md`, `twitter-dm.md`, `cold-email.md`, `drafts.md` |
| 6.4 | `kit/proposal-template.md`, `design/handoff/04-proposal.md` |
| 7.1–7.3 | `prospects/scores.csv`, `prospects/post-mortem-week-1.md` |

The scoreboard is the source of truth. Touch it every day. *No exceptions.*
