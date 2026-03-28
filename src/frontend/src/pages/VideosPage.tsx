import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const allVideos = [
  {
    id: "mNmGZzPUBz8",
    title: "Production Stabilisation — Consultant Perspective",
    type: "regular",
  },
  {
    id: "hhnzHNbTDsA",
    title: "Construction Chemicals Industry Insights",
    type: "regular",
  },
  {
    id: "xV8Q6e4bxHw",
    title: "Tile Adhesive Production — Key Considerations",
    type: "regular",
  },
  {
    id: "TEcInVGMALU",
    title: "Dry Mix Plant Setup — Advisory Insights",
    type: "regular",
  },
  {
    id: "5OffxOciUMc",
    title: "Construction Chemicals Manufacturing — Industry Overview",
    type: "regular",
  },
  {
    id: "QtPj5__lIvg",
    title: "Golden Inning — Short Feature",
    type: "short",
  },
];

export default function VideosPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <div
          className="py-16 bg-white"
          style={{ borderBottom: "1px solid #EAEAEA" }}
        >
          <div className="container mx-auto px-6">
            <div className="mb-2">
              <Link
                to="/"
                className="text-xs font-medium tracking-wide"
                style={{ color: "#B8956A", textDecoration: "none" }}
              >
                Home
              </Link>
              <span className="mx-2 text-xs" style={{ color: "#9CA3AF" }}>
                /
              </span>
              <span
                className="text-xs font-medium"
                style={{ color: "#6B7280" }}
              >
                Videos
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p
                className="text-xs font-medium tracking-[0.15em] uppercase mb-3 mt-4"
                style={{ color: "oklch(0.54 0.10 68)" }}
              >
                Knowledge Hub
              </p>
              <h1 className="font-bricolage text-3xl lg:text-4xl font-semibold text-foreground mb-3">
                Industry Knowledge Videos
              </h1>
              <p
                className="text-sm font-light leading-loose max-w-xl"
                style={{ color: "oklch(0.48 0.03 65)" }}
              >
                Expert insights and advisory perspectives from Golden Inning on
                construction chemicals manufacturing and plant setup.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {allVideos.map((video, i) => (
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
                  <div className="pt-3 px-3 pb-3">
                    <p className="text-sm font-normal text-foreground leading-snug">
                      {video.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-14">
              <a
                href="https://www.youtube.com/@GoldenInning"
                target="_blank"
                rel="noopener noreferrer"
                className="videos-yt-btn inline-flex items-center gap-2 px-7 py-3 text-sm transition-all"
                style={{
                  border: "1px solid #B8956A",
                  color: "#B8956A",
                  backgroundColor: "transparent",
                  borderRadius: "6px",
                }}
              >
                Visit Our YouTube Channel
              </a>
              <style>
                {
                  ".videos-yt-btn:hover { background-color: #F5F0E8 !important; }"
                }
              </style>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
