import { Composition } from "remotion";
import { fps, width, height } from "./tokens";
import { AuditLoomIntro } from "./AuditLoomIntro";
import { AuditLoomOutro } from "./AuditLoomOutro";
import { LandingPromo, landingPromoSchema, defaultLandingPromoProps } from "./LandingPromo";
import { Promo, PROMO_DURATION } from "./Promo";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="Promo"
        component={Promo}
        durationInFrames={PROMO_DURATION}
        fps={fps}
        width={width}
        height={height}
      />
      <Composition
        id="AuditLoomIntro"
        component={AuditLoomIntro}
        durationInFrames={fps * 3}
        fps={fps}
        width={width}
        height={height}
        defaultProps={{
          company: "ACME",
          date: "2026-05-14",
        }}
      />
      <Composition
        id="AuditLoomOutro"
        component={AuditLoomOutro}
        durationInFrames={fps * 4}
        fps={fps}
        width={width}
        height={height}
        defaultProps={{
          cta: "REPLY TO THIS THREAD",
          domain: "mobius.co",
        }}
      />
      <Composition
        id="LandingPromo"
        component={LandingPromo}
        durationInFrames={fps * 30}
        fps={fps}
        width={width}
        height={height}
        schema={landingPromoSchema}
        defaultProps={defaultLandingPromoProps}
      />
    </>
  );
};
