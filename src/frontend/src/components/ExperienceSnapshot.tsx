import { motion } from "motion/react";

const blocks = [
  {
    number: "34+",
    label: "Years Industry Experience",
    detail: "Deep-rooted expertise across construction chemicals manufacturing",
  },
  {
    number: "Expert",
    label: "Construction Chemicals Manufacturing",
    detail:
      "Dry mix, tile adhesive, waterproofing, specialty chemicals advisory",
  },
  {
    number: "End-to-End",
    label: "Plant Setup & Production Stabilisation",
    detail:
      "From concept and layout to first commercial dispatch and quality systems",
  },
  {
    number: "Proven",
    label: "Manufacturing & Sales Leadership",
    detail:
      "Strategic advisory backed by hands-on industry leadership experience",
  },
];

export default function ExperienceSnapshot() {
  return (
    <div
      className="py-36"
      style={{ backgroundColor: "#F5F3EF", borderTop: "1px solid #EAEAEA" }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
            style={{ color: "oklch(0.54 0.10 68)" }}
          >
            Why Golden Inning
          </p>
          <h2
            className="font-bricolage text-3xl lg:text-4xl font-semibold"
            style={{ color: "#1A1A1A" }}
          >
            Industry Experience Snapshot
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {blocks.map((block, i) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8"
              style={{
                borderLeft: "2px solid rgba(184,149,106,0.4)",
              }}
            >
              <div
                className="font-bricolage text-2xl font-semibold mb-2"
                style={{ color: "oklch(0.52 0.10 68)" }}
              >
                {block.number}
              </div>
              <div
                className="font-semibold text-sm mb-3 leading-snug"
                style={{ color: "#2B2B2B" }}
              >
                {block.label}
              </div>
              <div
                className="text-xs font-light leading-loose"
                style={{ color: "oklch(0.42 0.03 65)" }}
              >
                {block.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
