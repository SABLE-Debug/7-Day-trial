import { AbsoluteFill, Sequence, interpolate, useCurrentFrame, Img, staticFile } from "remotion";
import { z } from "zod";
import { tokens, fps } from "./tokens";

const sceneTypes = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("title"),
    durationSec: z.number().default(4),
    eyebrow: z.string(),
    headline: z.string(),
    italic: z.string().optional(),
  }),
  z.object({
    type: z.literal("stat-block"),
    durationSec: z.number().default(4),
    stats: z.array(z.object({ label: z.string(), value: z.string() })),
  }),
  z.object({
    type: z.literal("bullet-reveal"),
    durationSec: z.number().default(6),
    heading: z.string(),
    bullets: z.array(z.string()),
  }),
  z.object({
    type: z.literal("quote"),
    durationSec: z.number().default(4),
    body: z.string(),
    attribution: z.string().optional(),
  }),
  z.object({
    type: z.literal("outro"),
    durationSec: z.number().default(4),
    cta: z.string(),
    domain: z.string(),
  }),
]);

export const landingPromoSchema = z.object({
  scenes: z.array(sceneTypes),
});

export type LandingPromoProps = z.infer<typeof landingPromoSchema>;

export const defaultLandingPromoProps: LandingPromoProps = {
  scenes: [
    {
      type: "title",
      durationSec: 4,
      eyebrow: "— BRAND & AI OPERATING SYSTEM",
      headline: "Not a logo.",
      italic: "The system.",
    },
    {
      type: "stat-block",
      durationSec: 4,
      stats: [
        { label: "Setup", value: "$30K · 14 days" },
        { label: "Retainer", value: "$10K / mo" },
        { label: "Slots", value: "One / month" },
      ],
    },
    {
      type: "bullet-reveal",
      durationSec: 6,
      heading: "What ships",
      bullets: [
        "Brand mark, type system, color system, motion",
        "Site rebuild — home, product, pricing, careers",
        "AI content layer, voice-locked to the brand",
      ],
    },
    {
      type: "quote",
      durationSec: 4,
      body: "Three deliverables. One retainer. Zero hires.",
    },
    {
      type: "outro",
      durationSec: 4,
      cta: "ONE SLOT THIS MONTH",
      domain: "mobius.co",
    },
  ],
};

const useSceneOpacity = (sceneFrames: number) => {
  const frame = useCurrentFrame();
  return interpolate(
    frame,
    [0, fps * 0.4, sceneFrames - fps * 0.4, sceneFrames],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
};

const TitleScene: React.FC<{ scene: Extract<LandingPromoProps["scenes"][number], { type: "title" }>; durationFrames: number }> = ({ scene, durationFrames }) => {
  const opacity = useSceneOpacity(durationFrames);
  return (
    <AbsoluteFill
      style={{
        background: tokens.void,
        padding: "120px 96px",
        justifyContent: "center",
        opacity,
      }}
    >
      <div
        style={{
          fontFamily: tokens.mono,
          color: tokens.smoke,
          fontSize: 18,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          marginBottom: 40,
        }}
      >
        {scene.eyebrow}
      </div>
      <div
        style={{
          fontFamily: tokens.serif,
          color: tokens.bone,
          fontSize: 200,
          fontWeight: 300,
          letterSpacing: "-0.035em",
          lineHeight: 0.92,
        }}
      >
        {scene.headline}
        {scene.italic ? (
          <>
            <br />
            <span
              style={{
                fontStyle: "italic",
                background: tokens.gradient,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {scene.italic}
            </span>
          </>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};

const StatScene: React.FC<{ scene: Extract<LandingPromoProps["scenes"][number], { type: "stat-block" }>; durationFrames: number }> = ({ scene, durationFrames }) => {
  const opacity = useSceneOpacity(durationFrames);
  return (
    <AbsoluteFill
      style={{
        background: tokens.void,
        padding: "120px 96px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        gap: 48,
        opacity,
      }}
    >
      {scene.stats.map((s) => (
        <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontFamily: tokens.mono,
              color: tokens.smoke,
              fontSize: 18,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
            }}
          >
            {s.label}
          </div>
          <div
            style={{
              fontFamily: tokens.serif,
              color: tokens.bone,
              fontSize: 96,
              fontWeight: 300,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            {s.value}
          </div>
        </div>
      ))}
    </AbsoluteFill>
  );
};

const BulletScene: React.FC<{ scene: Extract<LandingPromoProps["scenes"][number], { type: "bullet-reveal" }>; durationFrames: number }> = ({ scene, durationFrames }) => {
  const frame = useCurrentFrame();
  const opacity = useSceneOpacity(durationFrames);
  return (
    <AbsoluteFill
      style={{
        background: tokens.void,
        padding: "120px 96px",
        justifyContent: "center",
        opacity,
      }}
    >
      <div
        style={{
          fontFamily: tokens.serif,
          color: tokens.bone,
          fontSize: 88,
          fontWeight: 300,
          letterSpacing: "-0.025em",
          lineHeight: 0.95,
          marginBottom: 56,
        }}
      >
        {scene.heading}
      </div>
      {scene.bullets.map((b, i) => {
        const revealFrame = fps * 0.6 + i * fps * 0.6;
        const bulletOpacity = interpolate(
          frame,
          [revealFrame, revealFrame + fps * 0.4],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );
        const bulletY = interpolate(
          frame,
          [revealFrame, revealFrame + fps * 0.4],
          [16, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        );
        return (
          <div
            key={b}
            style={{
              fontFamily: tokens.serif,
              color: tokens.bone,
              fontSize: 36,
              fontWeight: 300,
              letterSpacing: "-0.01em",
              lineHeight: 1.4,
              marginBottom: 16,
              opacity: bulletOpacity,
              transform: `translateY(${bulletY}px)`,
              display: "flex",
              gap: 24,
            }}
          >
            <span style={{ color: tokens.peach, fontFamily: tokens.mono, fontSize: 18, letterSpacing: "0.22em", paddingTop: 14 }}>
              0{i + 1}
            </span>
            <span>{b}</span>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

const QuoteScene: React.FC<{ scene: Extract<LandingPromoProps["scenes"][number], { type: "quote" }>; durationFrames: number }> = ({ scene, durationFrames }) => {
  const opacity = useSceneOpacity(durationFrames);
  return (
    <AbsoluteFill
      style={{
        background: tokens.ink,
        padding: "120px 96px",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        opacity,
      }}
    >
      <div
        style={{
          fontFamily: tokens.serif,
          color: tokens.bone,
          fontSize: 88,
          fontStyle: "italic",
          fontWeight: 300,
          letterSpacing: "-0.025em",
          lineHeight: 1.1,
          maxWidth: 1400,
        }}
      >
        "{scene.body}"
      </div>
      {scene.attribution ? (
        <div
          style={{
            marginTop: 40,
            fontFamily: tokens.mono,
            color: tokens.smoke,
            fontSize: 16,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
          }}
        >
          — {scene.attribution}
        </div>
      ) : null}
    </AbsoluteFill>
  );
};

const OutroScene: React.FC<{ scene: Extract<LandingPromoProps["scenes"][number], { type: "outro" }>; durationFrames: number }> = ({ scene, durationFrames }) => {
  const opacity = useSceneOpacity(durationFrames);
  return (
    <AbsoluteFill
      style={{
        background: tokens.void,
        justifyContent: "center",
        alignItems: "center",
        gap: 48,
        opacity,
      }}
    >
      <Img src={staticFile("mobius-mark-light.png")} style={{ width: 200, height: 200 }} />
      <div
        style={{
          fontFamily: tokens.mono,
          color: tokens.smoke,
          fontSize: 18,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
        }}
      >
        {scene.cta}
      </div>
      <div
        style={{
          padding: "20px 40px",
          border: `1px solid ${tokens.bone}`,
          borderRadius: 999,
          fontFamily: tokens.mono,
          color: tokens.bone,
          fontSize: 20,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
        }}
      >
        {scene.domain}
      </div>
    </AbsoluteFill>
  );
};

export const LandingPromo: React.FC<LandingPromoProps> = ({ scenes }) => {
  let offset = 0;
  return (
    <AbsoluteFill style={{ background: tokens.void }}>
      {scenes.map((scene, i) => {
        const durationFrames = Math.round((scene.durationSec ?? 4) * fps);
        const from = offset;
        offset += durationFrames;
        return (
          <Sequence key={i} from={from} durationInFrames={durationFrames}>
            {scene.type === "title" && <TitleScene scene={scene} durationFrames={durationFrames} />}
            {scene.type === "stat-block" && <StatScene scene={scene} durationFrames={durationFrames} />}
            {scene.type === "bullet-reveal" && <BulletScene scene={scene} durationFrames={durationFrames} />}
            {scene.type === "quote" && <QuoteScene scene={scene} durationFrames={durationFrames} />}
            {scene.type === "outro" && <OutroScene scene={scene} durationFrames={durationFrames} />}
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
