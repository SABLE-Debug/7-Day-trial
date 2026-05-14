import {
  AbsoluteFill,
  Audio,
  Img,
  Sequence,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { tokens, fps } from "./tokens";

const DUR = fps * 120; // 120 seconds total

// ------- Typewriter ----------
const Typewriter: React.FC<{
  text: string;
  start: number;
  cps?: number;
  italic?: string;
  italicGradient?: boolean;
  size: number;
  weight?: number;
  lineHeight?: number;
}> = ({ text, start, cps = 30, italic, italicGradient, size, weight = 300, lineHeight = 0.95 }) => {
  const frame = useCurrentFrame();
  const elapsed = Math.max(0, frame - start);
  const charsPerFrame = cps / fps;
  const charsVisible = Math.floor(elapsed * charsPerFrame);
  const visible = text.slice(0, Math.min(charsVisible, text.length));

  let body: React.ReactNode = visible;
  if (italic && visible.includes(italic)) {
    const idx = visible.indexOf(italic);
    const before = visible.slice(0, idx);
    const ital = italic;
    const after = visible.slice(idx + italic.length);
    body = (
      <>
        {before}
        <span
          style={{
            fontStyle: "italic",
            ...(italicGradient
              ? {
                  background: tokens.gradient,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }
              : { color: tokens.peach }),
          }}
        >
          {ital}
        </span>
        {after}
      </>
    );
  }

  return (
    <div
      style={{
        fontFamily: tokens.serif,
        fontWeight: weight,
        fontSize: size,
        lineHeight,
        letterSpacing: "-0.03em",
        color: tokens.bone,
      }}
    >
      {body}
    </div>
  );
};

// ------- Caption ----------
const MonoCaption: React.FC<{ text: string; size?: number; opacity?: number }> = ({
  text,
  size = 16,
  opacity = 1,
}) => (
  <div
    style={{
      fontFamily: tokens.mono,
      fontSize: size,
      letterSpacing: "0.32em",
      textTransform: "uppercase",
      color: tokens.smoke,
      opacity,
    }}
  >
    {text}
  </div>
);

// ------- Gradient bloom ----------
const Bloom: React.FC<{ x: number; y: number; size: number; opacity: number }> = ({
  x,
  y,
  size,
  opacity,
}) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      width: size,
      height: size,
      borderRadius: "50%",
      background: tokens.gradient,
      filter: "blur(180px)",
      opacity,
      pointerEvents: "none",
    }}
  />
);

// =============================================
// SCENE 1 — INTRO  (0:00 – 0:08)
// =============================================
const Scene1Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const markOpacity = interpolate(frame, [30, 90], [0, 1], { extrapolateRight: "clamp" });
  const markScale = interpolate(frame, [30, 90], [0.92, 1.0], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill
      style={{
        background: tokens.void,
        justifyContent: "center",
        alignItems: "center",
        gap: 56,
      }}
    >
      <Bloom x={1400} y={-100} size={700} opacity={0.18} />
      <Img
        src={staticFile("mobius-mark-light.png")}
        style={{
          width: 220,
          height: 220,
          opacity: markOpacity,
          transform: `scale(${markScale})`,
        }}
      />
      <div style={{ height: 24 }} />
      <Typewriter text="MOBIUS" start={150} cps={12} size={120} weight={300} lineHeight={1} />
    </AbsoluteFill>
  );
};

// =============================================
// SCENE 2 — VERDICT  (0:08 – 0:22)
// =============================================
const Scene2Verdict: React.FC<{ sceneStart: number }> = ({ sceneStart }) => {
  const frame = useCurrentFrame();
  const local = frame - sceneStart;
  const posterSlide = spring({
    frame: Math.max(0, local - 30),
    fps,
    config: { damping: 28, mass: 1 },
  });
  const posterX = interpolate(posterSlide, [0, 1], [120, 0]);
  const posterOpacity = interpolate(posterSlide, [0, 1], [0, 1]);
  const posterRotate = interpolate(local, [60, 420], [0, -3], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: tokens.void }}>
      <Bloom x={1300} y={-200} size={800} opacity={0.16} />
      <AbsoluteFill
        style={{
          padding: "120px 96px",
          flexDirection: "row",
          alignItems: "center",
          gap: 64,
        }}
      >
        <div style={{ flex: 1.1 }}>
          <MonoCaption text="— BRAND & AI OPERATING SYSTEM" size={18} />
          <div style={{ height: 32 }} />
          <Typewriter
            text="Not a logo."
            start={sceneStart + 15}
            cps={18}
            size={144}
            weight={300}
          />
          <div style={{ height: 12 }} />
          <Typewriter
            text="The system."
            start={sceneStart + 80}
            cps={18}
            italic="system"
            italicGradient
            size={144}
            weight={300}
          />
        </div>
        <div
          style={{
            flex: 0.9,
            display: "flex",
            justifyContent: "center",
            transform: `translateX(${posterX}px) perspective(1200px) rotateY(${posterRotate}deg)`,
            opacity: posterOpacity,
          }}
        >
          <Img
            src={staticFile("04-og-poster.jpg")}
            style={{
              width: "100%",
              maxWidth: 720,
              borderRadius: 8,
              boxShadow: "0 32px 100px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// =============================================
// SCENE 3 — WHAT WE SHIP  (0:22 – 0:38)
// =============================================
const ShipCut: React.FC<{ src: string; label: string; from: number; dur: number }> = ({
  src,
  label,
  from,
  dur,
}) => {
  const frame = useCurrentFrame();
  const local = frame - from;
  const opacity = interpolate(local, [0, 10, dur - 10, dur], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const scale = interpolate(local, [0, 12], [0.92, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const flashOpacity = interpolate(local, [0, 8, 20], [0.6, 0.15, 0], {
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={{ opacity }}>
      <AbsoluteFill
        style={{
          background: tokens.gradient,
          opacity: flashOpacity,
          mixBlendMode: "screen",
        }}
      />
      <AbsoluteFill
        style={{
          background: tokens.void,
          alignItems: "center",
          justifyContent: "center",
          padding: "8% 12%",
        }}
      >
        <Img
          src={staticFile(src)}
          style={{
            maxHeight: "70%",
            maxWidth: "85%",
            objectFit: "contain",
            transform: `scale(${scale})`,
          }}
        />
        <div style={{ position: "absolute", bottom: 80, width: "100%", textAlign: "center" }}>
          <MonoCaption text={label} size={22} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const Scene3WhatShips: React.FC<{ sceneStart: number }> = ({ sceneStart }) => {
  const cuts = [
    { src: "02-cards.jpg", label: "CARDS" },
    { src: "07-founders-guide.jpg", label: "PRINT" },
    { src: "05-hoodie.jpg", label: "MERCH" },
    { src: "09-email-signature.png", label: "EMAIL" },
    { src: "03-showroom.jpg", label: "STUDIO" },
    { src: "01-moodboard.jpg", label: "BRAND" },
  ];
  const dur = 80; // ~2.7s each, 6 * 80 = 480 = 16s
  return (
    <>
      {cuts.map((c, i) => (
        <Sequence key={c.src} from={sceneStart + i * dur} durationInFrames={dur}>
          <ShipCut src={c.src} label={c.label} from={sceneStart + i * dur} dur={dur} />
        </Sequence>
      ))}
    </>
  );
};

// =============================================
// SCENE 4 — CLIENT WORK  (0:38 – 0:54)
// =============================================
const ClientTile: React.FC<{ src: string; revealAt: number }> = ({ src, revealAt }) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [revealAt, revealAt + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(frame, [revealAt, revealAt + 18], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        opacity: o,
        transform: `translateY(${y}px)`,
        flex: 1,
        aspectRatio: "4 / 3",
        background: tokens.ink,
        border: `1px solid ${tokens.line}`,
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <Img src={staticFile(src)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
};

const Scene4ClientWork: React.FC<{ sceneStart: number }> = ({ sceneStart }) => {
  const frame = useCurrentFrame();
  const local = frame - sceneStart;
  return (
    <AbsoluteFill style={{ background: tokens.void, padding: "100px 96px" }}>
      <div
        style={{
          opacity: interpolate(local, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
          marginBottom: 48,
        }}
      >
        <MonoCaption text="— WORK SHIPPED IN 14 DAYS" size={18} />
      </div>
      <div style={{ display: "flex", gap: 16, flex: 1 }}>
        <ClientTile src="10-work-atlas.jpg" revealAt={sceneStart + 30} />
        <ClientTile src="11-work-vellum.jpg" revealAt={sceneStart + 90} />
        <ClientTile src="12-work-north.jpg" revealAt={sceneStart + 150} />
        <ClientTile src="13-work-prism.jpg" revealAt={sceneStart + 210} />
      </div>
    </AbsoluteFill>
  );
};

// =============================================
// SCENE 5 — AUDIT LOOMS  (0:54 – 1:10)
// =============================================
const VariantCard: React.FC<{
  verdict: string;
  italicWord: string;
  angle: number;
  radius: number;
  revealAt: number;
}> = ({ verdict, italicWord, angle, radius, revealAt }) => {
  const frame = useCurrentFrame();
  const o = interpolate(frame, [revealAt, revealAt + 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const rotateY = interpolate(frame, [revealAt, revealAt + 30], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const idx = verdict.indexOf(italicWord);
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg) perspective(1200px) rotateY(${rotateY}deg)`,
        width: 320,
        height: 180,
        background: tokens.void,
        border: `1px solid ${tokens.line}`,
        borderRadius: 8,
        padding: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: o,
        textAlign: "center",
        boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          fontFamily: tokens.serif,
          fontWeight: 300,
          fontStyle: "italic",
          fontSize: 22,
          lineHeight: 1.2,
          color: tokens.bone,
        }}
      >
        "{idx >= 0 ? verdict.slice(0, idx) : verdict}
        {idx >= 0 && (
          <span style={{ color: tokens.peach }}>{italicWord}</span>
        )}
        {idx >= 0 ? verdict.slice(idx + italicWord.length) : ""}"
      </div>
    </div>
  );
};

const Scene5Loom: React.FC<{ sceneStart: number }> = ({ sceneStart }) => {
  const frame = useCurrentFrame();
  const local = frame - sceneStart;
  return (
    <AbsoluteFill style={{ background: tokens.void }}>
      <Bloom x={200} y={500} size={600} opacity={0.16} />
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            opacity: interpolate(local, [0, 24], [0, 1], { extrapolateRight: "clamp" }),
            transform: `scale(${interpolate(local, [0, 24], [0.95, 1])})`,
            width: 700,
            aspectRatio: "16 / 9",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Img
            src={staticFile("06-loom-thumbnail-style.jpg")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 8,
              border: `1px solid ${tokens.line}`,
            }}
          />
        </div>
      </AbsoluteFill>
      <VariantCard
        verdict="Series B product. Seed brand."
        italicWord="Seed"
        angle={-90}
        radius={460}
        revealAt={sceneStart + 60}
      />
      <VariantCard
        verdict="Eight seconds. That is your whole pitch."
        italicWord="Eight"
        angle={0}
        radius={520}
        revealAt={sceneStart + 100}
      />
      <VariantCard
        verdict="Three faults. Three fixes."
        italicWord="Three"
        angle={90}
        radius={460}
        revealAt={sceneStart + 140}
      />
      <VariantCard
        verdict="One slot. This month."
        italicWord="One"
        angle={180}
        radius={520}
        revealAt={sceneStart + 180}
      />
      <div
        style={{
          position: "absolute",
          bottom: 64,
          width: "100%",
          textAlign: "center",
          opacity: interpolate(local, [240, 280], [0, 1], { extrapolateRight: "clamp" }),
        }}
      >
        <div
          style={{
            fontFamily: tokens.serif,
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: 28,
            color: tokens.bone,
          }}
        >
          Six hours of research, <span style={{ color: tokens.peach }}>eight minutes of verdict.</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =============================================
// SCENE 6 — SYSTEM IN THE WORLD  (1:10 – 1:26)
// =============================================
const Scene6World: React.FC<{ sceneStart: number }> = ({ sceneStart }) => {
  const frame = useCurrentFrame();
  const local = frame - sceneStart;
  const dur = 16 * fps;
  const scale = interpolate(local, [0, dur], [1.0, 1.06]);
  const o = interpolate(local, [0, 30, dur - 30, dur], [0, 1, 1, 0.8], {
    extrapolateLeft: "clamp",
  });
  return (
    <AbsoluteFill style={{ background: tokens.void }}>
      <AbsoluteFill style={{ opacity: o, transform: `scale(${scale})` }}>
        <Img
          src={staticFile("08-outdoor-signage.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to top, rgba(5,4,4,0.85) 0%, rgba(5,4,4,0.2) 40%, rgba(5,4,4,0.2) 60%, rgba(5,4,4,0.6) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 96,
          right: 96,
          bottom: 120,
          opacity: interpolate(local, [60, 120], [0, 1], { extrapolateLeft: "clamp" }),
        }}
      >
        <Typewriter
          text="Most brands stop at the screen."
          start={sceneStart + 60}
          cps={28}
          size={64}
          weight={300}
        />
        <div style={{ height: 16 }} />
        <Typewriter
          text="MOBIUS does not."
          start={sceneStart + 180}
          cps={28}
          italic="does not"
          italicGradient
          size={64}
          weight={300}
        />
      </div>
    </AbsoluteFill>
  );
};

// =============================================
// SCENE 7 — PRICING  (1:26 – 1:42)
// =============================================
const PriceCard: React.FC<{
  side: "left" | "right";
  label: string;
  target: number;
  cadence: string;
  bullets: string[];
  start: number;
  gradient?: boolean;
}> = ({ side, label, target, cadence, bullets, start, gradient }) => {
  const frame = useCurrentFrame();
  const local = frame - start;
  const slide = spring({
    frame: Math.max(0, local),
    fps,
    config: { damping: 26, mass: 1 },
  });
  const tx = interpolate(slide, [0, 1], [side === "left" ? -200 : 200, 0]);
  const opacity = interpolate(slide, [0, 1], [0, 1]);

  const count = Math.round(
    interpolate(local, [30, 30 + fps * 1.4], [0, target], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );

  return (
    <div
      style={{
        flex: 1,
        background: tokens.ink,
        border: `1px solid ${tokens.line}`,
        borderRadius: 16,
        padding: 48,
        display: "flex",
        flexDirection: "column",
        gap: 24,
        transform: `translateX(${tx}px)`,
        opacity,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {gradient && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background: tokens.gradient,
          }}
        />
      )}
      <div
        style={{
          fontFamily: tokens.mono,
          fontSize: 13,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: tokens.peach,
        }}
      >
        — {label}
      </div>
      <div
        style={{
          fontFamily: tokens.serif,
          fontWeight: 300,
          fontSize: 96,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          color: tokens.bone,
        }}
      >
        ${count.toLocaleString()}
      </div>
      <div
        style={{
          fontFamily: tokens.mono,
          fontSize: 13,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: tokens.smoke,
        }}
      >
        {cadence}
      </div>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: "16px 0 0 0",
          borderTop: `1px solid ${tokens.line}`,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {bullets.map((b) => (
          <li
            key={b}
            style={{
              fontFamily: tokens.sans,
              fontSize: 16,
              color: tokens.smoke,
              lineHeight: 1.5,
              display: "flex",
              gap: 12,
            }}
          >
            <span style={{ color: tokens.whisper }}>—</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Scene7Pricing: React.FC<{ sceneStart: number }> = ({ sceneStart }) => {
  return (
    <AbsoluteFill
      style={{
        background: tokens.void,
        padding: "120px 96px",
        flexDirection: "row",
        gap: 24,
        alignItems: "stretch",
      }}
    >
      <PriceCard
        side="left"
        label="Setup · one-time"
        target={30000}
        cadence="14 days · signed SOW → handoff"
        bullets={[
          "Brand mark, type system, color system, motion",
          "Site rebuild — home, product, pricing, careers",
          "Deck, proposal, email signature, social",
        ]}
        start={sceneStart + 20}
        gradient
      />
      <PriceCard
        side="right"
        label="Retainer · monthly"
        target={10000}
        cadence="6-month min · month-to-month after"
        bullets={[
          "Two design artifacts per week, every Friday",
          "One audit Loom per month",
          "AI content layer, voice-locked to the brand",
        ]}
        start={sceneStart + 20}
      />
    </AbsoluteFill>
  );
};

// =============================================
// SCENE 8 — OUTRO  (1:42 – 2:00)
// =============================================
const Scene8Outro: React.FC<{ sceneStart: number }> = ({ sceneStart }) => {
  const frame = useCurrentFrame();
  const local = frame - sceneStart;
  const posterScale = interpolate(local, [0, 90], [1.08, 1.0]);
  const posterOpacity = interpolate(local, [0, 30, 300, 480], [0, 1, 1, 0.4], {
    extrapolateLeft: "clamp",
  });
  const markScale = interpolate(local, [180, 230], [0.92, 1]);
  const markOpacity = interpolate(local, [180, 230], [0, 1], {
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: tokens.void }}>
      <AbsoluteFill style={{ opacity: posterOpacity, transform: `scale(${posterScale})` }}>
        <Img
          src={staticFile("04-og-poster.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>
      <AbsoluteFill style={{ background: "rgba(5,4,4,0.55)" }} />
      <AbsoluteFill
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          padding: "0 96px",
          textAlign: "center",
        }}
      >
        <Typewriter
          text="Three deliverables."
          start={sceneStart + 20}
          cps={28}
          size={88}
          weight={300}
        />
        <Typewriter
          text="One retainer."
          start={sceneStart + 80}
          cps={28}
          size={88}
          weight={300}
        />
        <Typewriter
          text="Zero hires."
          start={sceneStart + 140}
          cps={28}
          italic="Zero"
          italicGradient
          size={88}
          weight={300}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            marginTop: 32,
            opacity: markOpacity,
            transform: `scale(${markScale})`,
          }}
        >
          <Img src={staticFile("mobius-mark-light.png")} style={{ width: 100, height: 100 }} />
          <div
            style={{
              padding: "18px 36px",
              border: `1px solid ${tokens.bone}`,
              borderRadius: 999,
              fontFamily: tokens.mono,
              fontSize: 18,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: tokens.bone,
            }}
          >
            mobius.co
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// =============================================
// MASTER COMPOSITION
// =============================================
export const Promo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: tokens.void }}>
      <Audio src={staticFile("dontgo.mp3")} />

      <Sequence from={0} durationInFrames={fps * 8}>
        <Scene1Intro />
      </Sequence>

      <Sequence from={fps * 8} durationInFrames={fps * 14}>
        <Scene2Verdict sceneStart={fps * 8} />
      </Sequence>

      <Sequence from={fps * 22} durationInFrames={fps * 16}>
        <Scene3WhatShips sceneStart={fps * 22} />
      </Sequence>

      <Sequence from={fps * 38} durationInFrames={fps * 16}>
        <Scene4ClientWork sceneStart={fps * 38} />
      </Sequence>

      <Sequence from={fps * 54} durationInFrames={fps * 16}>
        <Scene5Loom sceneStart={fps * 54} />
      </Sequence>

      <Sequence from={fps * 70} durationInFrames={fps * 16}>
        <Scene6World sceneStart={fps * 70} />
      </Sequence>

      <Sequence from={fps * 86} durationInFrames={fps * 16}>
        <Scene7Pricing sceneStart={fps * 86} />
      </Sequence>

      <Sequence from={fps * 102} durationInFrames={fps * 18}>
        <Scene8Outro sceneStart={fps * 102} />
      </Sequence>
    </AbsoluteFill>
  );
};

export const PROMO_DURATION = DUR;
