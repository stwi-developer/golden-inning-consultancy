import { motion } from "motion/react";

export default function LogoOptions() {
  const options = [
    {
      src: "/assets/generated/logo-option1-text.dim_600x200.png",
      label: "Option 1 — Text Based",
      desc: "Clean wordmark with tagline. Ideal for website header and documents.",
    },
    {
      src: "/assets/generated/logo-option2-monogram.dim_600x200.png",
      label: "Option 2 — GI Monogram",
      desc: "Monogram symbol with full name. Versatile for digital and print use.",
    },
    {
      src: "/assets/generated/logo-option3-geometric.dim_600x200.png",
      label: "Option 3 — Geometric Symbol",
      desc: "Minimal geometric mark. Premium industrial consultancy feel.",
    },
  ];

  return (
    <div className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.32 0.08 145)" }}
          >
            Brand Identity
          </p>
          <h2 className="font-bricolage text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Logo Design Options
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Three professional logo concepts for Golden Inning Consultancy.
            Select your preferred option and we will apply it across the
            website.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {options.map((opt, i) => (
            <motion.div
              key={opt.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-border rounded overflow-hidden"
            >
              <div className="p-8 flex items-center justify-center bg-white min-h-[140px]">
                <img
                  src={opt.src}
                  alt={opt.label}
                  className="max-h-20 w-auto object-contain"
                />
              </div>
              <div className="p-5 border-t border-border">
                <div className="font-semibold text-sm text-foreground mb-1">
                  {opt.label}
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">
                  {opt.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
