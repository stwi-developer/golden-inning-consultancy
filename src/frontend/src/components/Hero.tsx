import { motion } from "motion/react";

export default function Hero() {
  return (
    <div
      id="home"
      className="flex flex-col lg:flex-row"
      style={{ minHeight: "560px" }}
    >
      {/* Left: Image — 45% width, with subtle L→R gradient overlay */}
      <div
        className="w-full lg:w-[45%] overflow-hidden"
        style={{ minHeight: "320px", position: "relative" }}
      >
        <img
          src="/assets/generated/hero-consultancy-plant.dim_1600x900.jpg"
          alt="Wide-angle construction chemicals manufacturing plant"
          className="w-full h-full object-cover"
          style={{
            minHeight: "320px",
            display: "block",
            filter: "brightness(0.90) saturate(0.78) contrast(0.95)",
          }}
        />
        {/* Subtle warm gradient overlay: left warm tone → fully transparent right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(200,169,106,0.18), rgba(200,169,106,0))",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Right: Text — open, spacious, vertically centred */}
      <div className="w-full lg:w-[55%] flex items-center bg-white px-14 lg:px-24 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-md w-full"
        >
          {/* Eyebrow */}
          <p
            className="text-xs font-medium tracking-[0.15em] uppercase mb-8"
            style={{ color: "oklch(0.58 0.10 68)" }}
          >
            International Consultancy
          </p>

          {/* Main Headline — 2 lines, slightly weighted */}
          <h1
            className="font-bricolage text-3xl lg:text-[2.4rem] font-[600] mb-8"
            style={{
              color: "#2B2B2B",
              letterSpacing: "-0.01em",
              lineHeight: "1.3",
            }}
          >
            Construction Chemicals
            <br />
            Manufacturing &amp; Project Setup Advisor
          </h1>

          {/* Subline */}
          <p
            className="text-sm font-light tracking-normal mb-8"
            style={{ color: "oklch(0.48 0.03 65)", lineHeight: "2" }}
          >
            Plant Setup&nbsp;&nbsp;|&nbsp;&nbsp;Production
            Stabilisation&nbsp;&nbsp;|&nbsp;&nbsp;First Commercial Dispatch
          </p>

          {/* Thin gold rule */}
          <hr
            className="mb-8"
            style={{
              width: "48px",
              border: "none",
              borderTop: "1px solid #B8956A",
              margin: "0 0 2rem 0",
            }}
          />

          {/* Experience Badge — very light outline */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-normal mb-8"
            style={{
              border: "1px solid rgba(184,149,106,0.3)",
              color: "oklch(0.56 0.08 68)",
              backgroundColor: "transparent",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: "oklch(0.64 0.09 68)" }}
            />
            34+ Years Industry Leadership Experience
          </div>

          {/* Supporting Line */}
          <p
            className="text-sm font-light"
            style={{ color: "oklch(0.50 0.02 65)", lineHeight: "2" }}
          >
            Advisory services for promoters, investors and manufacturers in the
            construction chemicals industry.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
