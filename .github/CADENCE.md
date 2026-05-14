# OPERATING CADENCE

The repo is the operating system. Every artifact has an issue. Every shipped artifact has a PR. The cadence below runs whether anyone is awake.

## DAILY (Mon–Fri, SAST)

| Time | Action | Owner |
|---|---|---|
| 07:00 | Yesterday's queued sends fire — LinkedIn DMs, X DMs, cold email | Operator |
| 08:00 | `morning-stack` — top 3 actions, leverage-ranked | Operator + Claude |
| 09:00–12:00 | Dossier work for next Loom (six hours total, split across two days) | Operator |
| 13:00 | Trade window opens — PPL + prop firm | Operator |
| 15:00–17:00 | Loom recording window (single 90-minute block per Loom) | Operator |
| 17:30 | Scoreboard update — `prospects/scores.csv` row touched | Claude (commit) |
| 18:00 | Inbox triage — `inbox-triage` skill | Operator |

## WEEKLY

| Day | Action |
|---|---|
| Mon | `morning-stack` for the week. Open new prospect issues. |
| Tue | First sends of the week — never on Friday. |
| Wed | Second sends. Mid-week Loom. |
| Thu | Reply ladders fire (Template C). |
| Fri | `weekly-review` — drop / change / hold. Close any zombie issues. |
| Sat | Off the keyboard. |
| Sun | One audit essay drafted (Path E public mirror). |

## 7-DAY TEST GATE

Day 7 of any test cycle, the decision-gate from `README.md` runs once. Pivot, tighten, or stay. Hard stop.

## RETAINER (per client)

- **Mon 09:00** — strategy call (15 min, async-friendly)
- **Wed 17:00** — first artifact of the week ships
- **Fri 17:00** — second artifact + status note in client Slack
- **Last Friday of the month** — competitive audit Loom delivered

## ISSUE LIFECYCLE

```
[opened] → labels: prospect / loom / deliverable
       → assigned + scheduled
       → in_progress (one at a time per type)
       → linked PR if shipping code or copy
       → closed when shipped or cut
```

## LABEL CONVENTIONS

- `tier-1` / `tier-2` / `tier-3` — prospect priority
- `loom-now` / `loom-soon` / `park` / `cut` — prospect verdict
- `loom` — audit Loom workflow
- `deliverable` — retainer deliverable
- `essay` — public mirror essay
- `infra` — repo or system work

## ESCALATION

If three consecutive Looms get no reply, run `red-team` against the ICP filter before sending a fourth. Don't add volume to a broken funnel.
