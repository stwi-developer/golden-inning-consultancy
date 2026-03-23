import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const videos = [
  {
    id: "wQf7AiXQcQo",
    title: "Construction Chemicals Manufacturing — Industry Overview",
  },
  {
    id: "LZM9YXpSPjQ",
    title: "Dry Mix Plant Setup — Advisory Insights",
  },
  {
    id: "g_c0QGwKf4g",
    title: "Tile Adhesive Production — Key Considerations",
  },
  {
    id: "5OoTtbkI2-4",
    title: "Production Stabilisation — Consultant Perspective",
  },
];

export default function Videos() {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.32 0.08 145)" }}
          >
            Knowledge Hub
          </p>
          <h2 className="font-bricolage text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Industry Knowledge Videos
          </h2>
          <p className="text-muted-foreground text-sm">
            Expert insights from Golden Inning — Chemicals for Construction
          </p>
        </div>

        {/* Video grid — 2 columns for clean professional layout */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded overflow-hidden shadow-sm bg-card border border-border"
            >
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
              <div className="px-4 py-3 border-t border-border">
                <p className="text-sm font-medium text-foreground leading-snug">
                  {video.title}
                </p>
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
            View All Videos on YouTube
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
