import { Check, Droplets, FlaskConical, Layers } from "lucide-react";
import { motion } from "motion/react";

const segments = [
  {
    icon: Layers,
    title: "Dry Mix Construction Chemicals",
    items: ["Tile Adhesives", "Wall Putty", "Tile Grouts", "Repair Mortars"],
  },
  {
    icon: Droplets,
    title: "Waterproofing Systems",
    items: ["Cementitious waterproofing", "Acrylic coatings", "PU coatings"],
  },
  {
    icon: FlaskConical,
    title: "Specialty Construction Chemicals",
    items: ["Epoxy systems", "Industrial flooring", "Protective coatings"],
  },
];

export default function IndustrySegments() {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.32 0.08 145)" }}
          >
            Our Coverage
          </p>
          <h2 className="font-bricolage text-3xl lg:text-4xl font-bold text-foreground">
            Industry Segments Covered
          </h2>
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
              <div className="p-6">
                <div
                  className="w-11 h-11 rounded flex items-center justify-center mb-4"
                  style={{ backgroundColor: "oklch(0.32 0.08 145 / 0.08)" }}
                >
                  <seg.icon
                    size={20}
                    style={{ color: "oklch(0.32 0.08 145)" }}
                  />
                </div>
                <h3 className="font-bricolage font-bold text-base text-foreground mb-4">
                  {seg.title}
                </h3>
                <ul className="space-y-2">
                  {seg.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check
                        size={14}
                        style={{ color: "oklch(0.32 0.08 145)" }}
                        className="flex-shrink-0"
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
