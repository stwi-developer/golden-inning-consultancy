import { Building2, Package, Settings2, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Building2,
    title: "Manufacturing Plant Setup",
    description:
      "Advisory support for establishing construction chemical manufacturing units including dry mix plants, production layout planning and machinery selection.",
  },
  {
    icon: Package,
    title: "Product Portfolio Development",
    description:
      "Guidance in developing product range such as tile adhesives, waterproofing products, wall putty and other construction chemicals.",
  },
  {
    icon: Settings2,
    title: "Production Stabilisation",
    description:
      "Support for improving manufacturing performance including process optimisation, quality control systems and cost efficiency.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth Strategy",
    description:
      "Strategic advisory for product positioning, market entry planning and distribution strategy.",
  },
];

export default function Services() {
  return (
    <div className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.32 0.08 145)" }}
          >
            What We Offer
          </p>
          <h2 className="font-bricolage text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Core Consultancy Services
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ backgroundColor: "oklch(0.32 0.08 145)" }}
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              data-ocid={`services.card.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded p-6 hover:shadow-lg hover:border-primary transition-all duration-300 cursor-default"
            >
              <div
                className="w-12 h-12 rounded flex items-center justify-center mb-5 transition-colors"
                style={{ backgroundColor: "oklch(0.32 0.08 145 / 0.08)" }}
              >
                <service.icon
                  size={22}
                  style={{ color: "oklch(0.32 0.08 145)" }}
                />
              </div>
              <h3 className="font-bricolage font-bold text-base text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
