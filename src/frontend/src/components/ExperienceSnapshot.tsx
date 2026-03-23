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
    <div className="py-20" style={{ backgroundColor: "oklch(0.97 0.01 145)" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.32 0.08 145)" }}
          >
            Why Golden Inning
          </p>
          <h2 className="font-bricolage text-3xl lg:text-4xl font-bold text-foreground">
            Industry Experience Snapshot
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blocks.map((block, i) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-border rounded p-7 text-center"
              style={{
                borderTopWidth: "3px",
                borderTopColor: "oklch(0.32 0.08 145)",
              }}
            >
              <div
                className="font-bricolage text-2xl font-bold mb-2"
                style={{ color: "oklch(0.32 0.08 145)" }}
              >
                {block.number}
              </div>
              <div className="font-semibold text-foreground text-sm mb-2 leading-snug">
                {block.label}
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">
                {block.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
