import { AbsoluteFill, interpolate, useCurrentFrame, Img, staticFile } from "remotion";
import { tokens, fps } from "./tokens";

export const AuditLoomOutro: React.FC<{ cta: string; domain: string }> = ({
  cta,
  domain,
}) => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, fps * 0.6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const pillIn = interpolate(frame, [fps * 1.0, fps * 1.6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: tokens.void,
        justifyContent: "center",
        alignItems: "center",
        gap: 56,
        opacity: fadeIn,
      }}
    >
      <Img
        src={staticFile("mobius-mark-light.png")}
        style={{ width: 220, height: 220 }}
      />
      <div
        style={{
          fontFamily: tokens.mono,
          color: tokens.smoke,
          fontSize: 16,
          letterSpacing: "0.32em",
          textTransform: "uppercase",
        }}
      >
        {cta}
      </div>
      <div
        style={{
          opacity: pillIn,
          transform: `scale(${0.96 + pillIn * 0.04})`,
          padding: "20px 40px",
          border: `1px solid ${tokens.bone}`,
          borderRadius: 999,
          fontFamily: tokens.mono,
          color: tokens.bone,
          fontSize: 18,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
        }}
      >
        {domain}
      </div>
    </AbsoluteFill>
  );
};
