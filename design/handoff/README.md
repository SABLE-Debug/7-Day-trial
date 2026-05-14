# CLAUDE DESIGN — HANDOFF QUEUE

Each file in this folder is a copy-paste-ready prompt for Claude Design (claude.ai). One prompt produces one deliverable.

## WORKFLOW

1. Open Claude.ai in a fresh chat with Sonnet 4.6 or Opus 4.7.
2. Paste the contents of the handoff file you want to ship.
3. Attach the reference images listed in `CLAUDE_DESIGN_BRIEF.md` section 14 — five images, one upload per chat.
4. Claude Design returns the HTML/CSS file. Paste it back into this repo.
5. Run it through `noise-cancel` discipline before shipping.

## QUEUE — IN ORDER OF LEVERAGE

| File | Deliverable | Why first |
|---|---|---|
| `01-portfolio.md` | `portfolio.html` upgrade | The current portfolio.html is a scaffold. Claude Design renders it production-grade. |
| `02-audit-loom-intro.md` | `audit-loom-intro.html` 1920×1080 | The Loom intro card. Recorded by Remotion. Highest brand-impression artifact in the funnel. |
| `03-audit-loom-outro.md` | `audit-loom-outro.html` 1920×1080 | Pairs with intro. CTA pill. Closes every Loom. |
| `04-proposal.md` | `proposal-template.html` A4 print | The proposal that closes the retainer. PDF export. |

The other four deliverables from `CLAUDE_DESIGN_BRIEF.md` section 11 — email signature, social post templates, tokens.css, tailwind.config.js — wait until the first close lands.

## CONSTRAINTS THAT APPLY TO ALL FOUR

- Use only the tokens from `CLAUDE_DESIGN_BRIEF.md` section 6.
- Use only the typography pairing from section 7.
- Each deliverable is a single self-contained `.html` file. No external CSS framework dependencies.
- Dark mode default. Tokens via CSS variables.
- Mobile-first responsive. Test 375 / 768 / 1280.
- No external image hosting in the file — use placeholder image URLs we'll swap.
- Each component must work as a Remotion `<AbsoluteFill>` at 1920×1080 — no `position: fixed`, no `min-height: 100vh` trickery.

After every deliverable, run `noise-cancel` over the copy. Strip every AI-tell.
