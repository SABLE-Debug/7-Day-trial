# MOBIUS — Krea Asset Prompts

Prompts for generating brand visuals in [Krea](https://krea.ai) to drop into
the Lovable promo. Everything is tuned to the MOBIUS palette: near-black
`#0B0B0C` background, single orange accent `#FF6B2C` / `#FF9447`. No second
color.

## Global rules for every generation

- **Negative prompt:** `text, words, letters, watermark, logo, blue, purple,
  neon, cluttered, busy, multiple colors`
- Keep "**No text**" in the prompt itself — AI lettering garbles, and real
  copy is added in Lovable.
- Video loops: 16:9, enable the **seamless loop** option.
- Keep results **dark** so copy stays readable when layered behind text.
- If a result is too bright/busy: add `darker, more minimal, more negative
  space` and regenerate.

---

## Video loops (Krea → Video mode)

### Ambient background — the workhorse, behind every scene
```
Abstract cinematic dark background, near-black charcoal void, a faint
technical grid receding into depth, a soft warm orange radial glow pulsing
slowly at top center, fine dust particles drifting and catching warm light,
volumetric haze, extremely minimal, premium, moody, slow gentle motion,
seamless loop. No text, no words, no logos.
```

### Mobius ribbon — hero visual for the logo-intro scene
```
A single infinite looping Mobius ribbon, glossy dark material with a glowing
warm orange edge, slowly and smoothly rotating, floating in a pure black void,
soft studio lighting, subtle reflections, premium 3D product render,
cinematic depth of field, seamless loop. No text.
```

### Orange light sweep — scene-to-scene transition
```
A sweep of warm orange-to-amber light moving horizontally across a pure black
frame, soft motion blur, glowing energy ribbon, elegant and fast, clean,
seamless loop. No text, no objects.
```

### Compounding network — for the "systems that compound" scene
```
Abstract constellation of glowing warm-orange nodes connected by thin delicate
lines on a near-black background, the network slowly growing and multiplying
outward, soft glow, premium, minimal, cinematic, seamless loop. No text.
```

### Floating dark panels — for the "the whole system" / model scene
```
Sleek dark glass panels floating and gently rearranging in 3D space, thin
glowing orange edge lighting, soft reflections, deep black background,
volumetric haze, premium, cinematic, slow graceful motion, seamless loop.
No text.
```

---

## Still images (Krea → Image mode)

### Logo hero plate — composite the real MOBIUS logo on top in Lovable
```
A minimalist brand hero backdrop, near-black charcoal background, faint thin
technical grid lines, a soft warm orange radial glow rising gently from the
bottom center, lots of empty negative space in the middle, cinematic, premium,
dark editorial, subtle vignette. No text, no logo, no objects.
```

### Floating glass tiles
```
Sleek dark glass tiles floating in 3D space against a deep black background,
each tile with a thin glowing warm-orange edge light, soft reflections and
volumetric haze, one larger tile centered and facing forward, smaller tiles
angled around it, premium cinematic 3D render, shallow depth of field,
moody. No text, no letters.
```

### Glowing dome with orbiting labels — generate pills EMPTY, add labels in Lovable
```
A wide glowing dome of warm orange light curving across the lower half of a
near-black frame, like a horizon, soft bloom and gradient glow, several empty
rounded pill-shaped glass capsules floating in an arc above the dome, premium,
minimal, cinematic, deep negative space at top. No text, no letters.
```

### Liquid-chrome typography — the one case where you DO want text
```
The word "MOBIUS" rendered as glossy liquid chrome 3D typography, polished
reflective metal letters with soft highlights, floating on a pure black
background, dramatic studio lighting, cinematic, premium, vertical poster
composition. Clean sharp lettering.
```
Expect several tries until "MOBIUS" reads cleanly. If letters keep garbling,
generate a single chrome Mobius-ribbon form instead.

### App UI mockup cards — both cards stay orange, never blue
```
Two sleek mobile app dashboard cards floating side by side, dark UI with a
deep warm-orange-to-black gradient background inside each card, a glowing
orange line graph trending upward, large stat numbers, rounded corners, soft
shadows, premium product UI mockup, clean, on a dark neutral surface.
```
Stat numbers/labels will be placeholder gibberish — swap in real copy in Lovable.

### Orange aura glow — soft fill behind headlines / the CTA
```
A soft warm orange radial glow fading into pure black, smooth gradient aura,
no hard edges, minimal, premium. No text.
```

### Ember particles — overlay for the count-up / numbers moment
```
Faint warm orange embers and sparks rising slowly through a black void,
sparse, delicate, cinematic, dark, premium. No text.
```

### Fine film grain — subtle texture overlay
```
Fine monochrome film grain and subtle noise texture on a dark surface, very
subtle, even, cinematic overlay. No text.
```
