import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const videos = [
  {
    id: "5OffxOciUMc",
    title: "Construction Chemicals Manufacturing — Industry Overview",
  },
  {
    id: "TEcInVGMALU",
    title: "Dry Mix Plant Setup — Advisory Insights",
  },
  {
    id: "xV8Q6e4bxHw",
    title: "Tile Adhesive Production — Key Considerations",
  },
  {
    id: "mNmGZzPUBz8",
    title: "Production Stabilisation — Consultant Perspective",
  },
];

export default function Videos() {
  return (
    <div
      className="py-36 bg-white"
      id="videos"
      style={{ borderTop: "1px solid #EAEAEA" }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
            style={{ color: "oklch(0.54 0.10 68)" }}
          >
            Knowledge Hub
          </p>
          <h2 className="font-bricolage text-3xl lg:text-4xl font-semibold text-foreground mb-2">
            Industry Knowledge Videos
          </h2>
          <p
            className="text-sm font-light leading-loose"
            style={{ color: "oklch(0.48 0.03 65)" }}
          >
            Expert insights from Golden Inning — Chemicals for Construction
          </p>
        </div>

        {/* Video grid */}
        <div className="grid sm:grid-cols-2 gap-10 mb-14">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="overflow-hidden"
              style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}
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
              <div className="pt-3 px-1 pb-2">
                <p className="text-sm font-normal text-foreground leading-snug">
                  {video.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/videos"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm transition-all videos-cta-btn"
            style={{
              border: "1px solid #B8956A",
              color: "#B8956A",
              backgroundColor: "transparent",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            View All Videos
          </Link>
          <style>
            {".videos-cta-btn:hover { background-color: #F5F0E8 !important; }"}
          </style>
        </div>
      </div>
    </div>
  );
}
