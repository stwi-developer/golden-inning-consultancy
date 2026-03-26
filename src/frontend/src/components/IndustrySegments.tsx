import { Link } from "@tanstack/react-router";
import { Droplets, FlaskConical, Layers } from "lucide-react";
import { motion } from "motion/react";
import { industryData } from "../data/industryData";

const ICONS = {
  Layers,
  Droplets,
  FlaskConical,
};

export default function IndustrySegments() {
  return (
    <div
      className="py-36"
      id="industry-segments"
      style={{ backgroundColor: "#FAFAFA", borderTop: "1px solid #EAEAEA" }}
    >
      <style>{`
        .seg-link {
          color: oklch(0.50 0.03 65);
          font-size: 0.75rem;
          font-weight: 300;
          text-decoration: none;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .seg-link:hover {
          color: oklch(0.54 0.10 68);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
      `}</style>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
            style={{ color: "oklch(0.54 0.10 68)" }}
          >
            Advisory Coverage
          </p>
          <h2 className="font-bricolage text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Industry Segments We Advise On
          </h2>
          <p
            className="text-sm font-light max-w-xl mx-auto leading-loose"
            style={{ color: "oklch(0.48 0.03 65)" }}
          >
            Independent advisory across three distinct construction chemical
            manufacturing categories.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-12">
          {industryData.map((seg, i) => {
            const Icon = ICONS[seg.icon as keyof typeof ICONS] ?? Layers;
            return (
              <motion.div
                key={seg.slug}
                data-ocid={`segments.card.${i + 1}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="overflow-hidden"
                style={{
                  borderLeft: "2px solid rgba(184,149,106,0.5)",
                  paddingLeft: "1.5rem",
                }}
              >
                <div className="mb-5">
                  <Icon
                    size={20}
                    style={{ color: "oklch(0.54 0.10 68)", strokeWidth: 1.5 }}
                  />
                </div>
                <h3 className="font-bricolage font-semibold text-base text-foreground mb-3">
                  {seg.title}
                </h3>
                <p
                  className="text-sm font-light leading-loose mb-6"
                  style={{ color: "oklch(0.48 0.03 65)" }}
                >
                  {seg.categories
                    .map((c) => c.title)
                    .join(", ")
                    .replace(/,([^,]*)$/, " and$1")}{" "}
                  manufacturing advisory.
                </p>
                <ul className="space-y-2">
                  {seg.categories.map((cat) => (
                    <li key={cat.slug} className="flex items-center gap-2">
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "oklch(0.54 0.10 68)" }}
                      />
                      <Link
                        to="/industry-segments/$segmentSlug/$categorySlug"
                        params={{
                          segmentSlug: seg.slug,
                          categorySlug: cat.slug,
                        }}
                        className="seg-link"
                        data-ocid={"segments.item.link"}
                      >
                        {cat.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
