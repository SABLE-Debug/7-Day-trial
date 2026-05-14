# PROSPECTS

The target list lives in `scores.csv`. Every row is one prospect, scored against `kit/icp-filter.md`.

## WORKFLOW

1. Pull 50 raw names from Crunchbase, LinkedIn Sales Navigator, or a founder Slack.
2. Score each against the rubric. Two minutes per name. Park the rest.
3. Sort by `total` descending.
4. Loom the top five. Outreach the next ten via Template B / C.

## CSV SCHEMA

| Column | Type | Notes |
|---|---|---|
| date | YYYY-MM-DD | When the score was set |
| company | string | Exact casing |
| handle | string | LinkedIn URL or X handle |
| funding_pts | 0–20 | Gate 1 |
| arr_pts | 0–20 | Gate 2 |
| ai_native_pts | 0–20 | Gate 3 |
| founder_pts | 0–20 | Gate 4 |
| brand_pts | 0–20 | Gate 5 |
| total | 0–100 | Sum |
| verdict | string | `loom-now / loom-soon / park / cut` |
| template | string | `linkedin-a / linkedin-b / x-a / email-a / ...` |
| response | string | `none / accept / reply / book / close / dead` |
| notes | string | One sentence. Free-form. |

## NO PII

The CSV stays in the repo. Never commit emails, phone numbers, or anything that survives a leak. Handles only. *The score is the asset, not the address.*
