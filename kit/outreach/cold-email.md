# COLD EMAIL — FIRST TOUCH

Email is the close-rate channel. LinkedIn is the open-rate channel. Twitter is the reply-rate channel.

Email gets one shot. Make it land.

---

## SUBJECT LINES

Three subjects. Each tested for the lowercase, no-emoji, no-punctuation rule. *Subjects under 40 characters open at almost double the rate.*

```
[company]'s brand vs your last raise
8-min audit on [company]
the three faults i'd fix this week
```

Use `[company]` in lowercase, exactly as the founder writes it on X.

---

## TEMPLATE A — VERDICT-FIRST

```
Subject: [company]'s brand vs your last raise

[Founder first name],

I spent six hours auditing [Company]'s brand against the [Series A/B] narrative from [month]. I made an 8-minute Loom with the three faults, the three fixes, and the one thing I would leave alone.

[LOOM LINK]

If I called any of it wrong, reply and say which one. I read every reply the same day.

— [First name]
MOBIUS
mobius.co
```

## TEMPLATE B — PEER REFERENCE

```
Subject: 8-min audit on [company]

[Founder first name],

I rebuilt [Peer Company]'s brand system in 14 days last month. I just ran the same audit on [Company]. Three faults, three fixes, eight minutes.

[LOOM LINK]

Worst case you keep the audit. Best case you keep the retainer.

— [First name]
MOBIUS
mobius.co
```

## TEMPLATE C — REPLY-LADDER

After Template A, if no reply in 5 business days, send this once.

```
Subject: re: [company]'s brand vs your last raise

[Founder first name],

One thing I should have said in the first email — I have one studio slot open in [next month]. The fix is $30K setup plus a $10K retainer. Six-month minimum.

If a no, a not-yet, or a not-me — reply with one word and I will not send a third email.

— [First name]
```

That is the entire ladder. Two emails. Never three.

---

## RULES

- Send Tuesday or Wednesday, 7am SAST. That lands at 12am PT — top of inbox on wake.
- Plain text only. No HTML. No tracking pixels.
- Loom thumbnail must be custom-rendered, never the auto-grab.
- Sign with first name only. Never `Best,` or `Cheers,`.
- Never CC. Never BCC. One recipient.
- If the email bounces, drop the prospect — do not search for an alt.
- If the email is read but unanswered for 5 business days, send Template C once.
- If no reply after C, do not contact again for 90 days.

## DELIVERABILITY GATES

Before sending the first batch:

- [ ] Custom domain set up (`mobius.co` or current operator domain)
- [ ] SPF, DKIM, DMARC all green — check at mail-tester.com
- [ ] Warmup run for 14 days on a fresh inbox — minimum 30 sends per day to known good addresses
- [ ] Plain-text signature, no images, no logo bar
- [ ] Send under 30 cold emails per day from a single inbox

A single spam flag kills the entire 7-day test. *Deliverability is the test before the test.*

## BANNED OPENERS

- "I hope this email finds you well"
- "My name is [first name] and I"
- "I wanted to reach out about"
- "Quick question for you"
- "I'll be brief"
- Any sentence that begins with "I noticed"
- Any sentence that compliments their company without naming a specific artifact

## TRACKING

Same CSV format:

```
date,handle,template,response,score
```

Response field: `none / open / reply / book / close / dead`.
