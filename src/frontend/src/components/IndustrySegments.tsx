import { Droplets, FlaskConical, Layers } from "lucide-react";
import { motion } from "motion/react";

const segments = [
  {
    icon: Layers,
    title: "Dry Mix Construction Chemicals",
    description:
      "Advisory for manufacturers and investors establishing dry mix production — covering tile adhesives, wall putty, tile grouts, repair mortars and skim coat formulations.",
    items: [
      "Tile Adhesives",
      "Wall Putty",
      "Tile Grouts",
      "Repair Mortars",
      "Skim Coat",
    ],
  },
  {
    icon: Droplets,
    title: "Waterproofing Systems",
    description:
      "Consultancy for setting up waterproofing product manufacturing — cementitious systems, acrylic coatings and PU-based protective solutions.",
    items: [
      "Cementitious Waterproofing",
      "Acrylic Coatings",
      "PU Coatings",
      "Bituminous Systems",
    ],
  },
  {
    icon: FlaskConical,
    title: "Specialty Construction Chemicals",
    description:
      "Expert guidance on specialty product manufacturing — epoxy systems, industrial flooring compounds and high-performance protective coatings.",
    items: [
      "Epoxy Systems",
      "Industrial Flooring",
      "Protective Coatings",
      "Admixtures",
    ],
  },
];

export default function IndustrySegments() {
  return (
    <div className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.32 0.08 145)" }}
          >
            Advisory Coverage
          </p>
          <h2 className="font-bricolage text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Industry Segments We Advise On
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Independent advisory across three distinct construction chemical
            manufacturing categories.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.title}
              data-ocid={`segments.card.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded overflow-hidden"
              style={{
                borderTopWidth: "3px",
                borderTopColor: "oklch(0.32 0.08 145)",
              }}
            >
              <div className="p-7">
                <div
                  className="w-11 h-11 rounded flex items-center justify-center mb-5"
                  style={{ backgroundColor: "oklch(0.32 0.08 145 / 0.08)" }}
                >
                  <seg.icon
                    size={20}
                    style={{ color: "oklch(0.32 0.08 145)" }}
                  />
                </div>
                <h3 className="font-bricolage font-bold text-base text-foreground mb-3">
                  {seg.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {seg.description}
                </p>
                <div
                  className="h-px mb-4"
                  style={{ backgroundColor: "oklch(0.32 0.08 145 / 0.12)" }}
                />
                <ul className="space-y-1.5">
                  {seg.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: "oklch(0.32 0.08 145 / 0.6)",
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
