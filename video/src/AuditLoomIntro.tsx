import { AbsoluteFill, interpolate, useCurrentFrame, Img, staticFile } from "remotion";
import { tokens, fps } from "./tokens";

export const AuditLoomIntro: React.FC<{ company: string; date: string }> = ({
  company,
  date,
}) => {
  const frame = useCurrentFrame();

  const markIn = interpolate(frame, [fps * 0.4, fps * 1.0], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const textIn = interpolate(frame, [fps * 1.2, fps * 1.8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const textY = interpolate(frame, [fps * 1.2, fps * 1.8], [12, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: tokens.void,
        justifyContent: "center",
        alignItems: "center",
        gap: 48,
      }}
    >
      <Img
        src={staticFile("mobius-mark-light.png")}
        style={{
          width: 180,
          height: 180,
          opacity: markIn,
          transform: `scale(${0.95 + markIn * 0.05})`,
        }}
      />
      <div
        style={{
          opacity: textIn,
          transform: `translateY(${textY}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 18,
        }}
      >
        <div
          style={{
            fontFamily: tokens.mono,
            color: tokens.smoke,
            fontSize: 16,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
          }}
        >
          MOBIUS BRAND AUDIT
        </div>
        <div
          style={{
            fontFamily: tokens.serif,
            color: tokens.bone,
            fontSize: 96,
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          {company}
        </div>
        <div
          style={{
            fontFamily: tokens.mono,
            color: tokens.whisper,
            fontSize: 14,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            marginTop: 4,
          }}
        >
          {date}
        </div>
      </div>
    </AbsoluteFill>
  );
};
