import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToVideos = () => {
    document.querySelector("#videos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage:
          "url('/assets/generated/hero-drymix-plant.dim_1600x900.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "linear-gradient(to top, oklch(0.20 0.08 145) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* 1. Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
          >
            Construction Chemicals Manufacturing Consultancy
          </motion.h1>

          {/* 2. Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg md:text-xl font-medium text-white/80 tracking-wide mb-5"
          >
            Plant Setup&nbsp;&nbsp;|&nbsp;&nbsp;Production
            Stabilisation&nbsp;&nbsp;|&nbsp;&nbsp;First Commercial Dispatch
          </motion.p>

          {/* 3. Experience Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-sm font-medium mb-6"
            style={{ backgroundColor: "oklch(0.32 0.08 145 / 0.9)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            34+ Years Industry Leadership Experience
          </motion.div>

          {/* 4. Supporting Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-base text-white/70 mb-10 max-w-lg"
          >
            Advisory services for promoters, investors and manufacturers in the
            construction chemicals industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <button
              type="button"
              data-ocid="hero.primary_button"
              onClick={scrollToServices}
              className="px-7 py-3.5 rounded font-semibold text-white text-sm transition-all hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
              style={{ backgroundColor: "oklch(0.32 0.08 145)" }}
            >
              Explore Advisory Services
            </button>
            <button
              type="button"
              data-ocid="hero.secondary_button"
              onClick={scrollToVideos}
              className="px-7 py-3.5 rounded font-semibold text-white text-sm border border-white/50 hover:bg-white/10 transition-all active:scale-[0.98]"
            >
              Watch Industry Videos
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </div>
  );
}
