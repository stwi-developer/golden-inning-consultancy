import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const videoIds = [
  "wQf7AiXQcQo",
  "LZM9YXpSPjQ",
  "g_c0QGwKf4g",
  "5OoTtbkI2-4",
  "8YlBIuGgjVQ",
  "ZL3bq2Q2v8M",
];

export default function Videos() {
  return (
    <div className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.32 0.08 145)" }}
          >
            Learn & Explore
          </p>
          <h2 className="font-bricolage text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Industry Knowledge Videos
          </h2>
          <p className="text-muted-foreground text-sm">
            Insights from Golden Inning – Chemicals for Construction
          </p>
        </div>

        {/* Video grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {videoIds.map((id, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded overflow-hidden shadow-sm bg-card"
            >
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`Golden Inning Industry Video ${i + 1}`}
                  loading="lazy"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            data-ocid="videos.primary_button"
            href="https://www.youtube.com/@GoldenInning"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded font-semibold text-white text-sm transition-all hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: "oklch(0.32 0.08 145)" }}
          >
            View All Videos
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
