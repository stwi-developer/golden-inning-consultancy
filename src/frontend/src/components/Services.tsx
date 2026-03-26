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
    <div
      className="py-36 bg-white"
      id="services"
      style={{ borderTop: "1px solid #EAEAEA" }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
            style={{ color: "oklch(0.54 0.10 68)" }}
          >
            What We Offer
          </p>
          <h2 className="font-bricolage text-3xl lg:text-4xl font-semibold text-foreground mb-8">
            Core Consultancy Services
          </h2>
          <div
            className="w-12 mx-auto"
            style={{ height: "1px", backgroundColor: "#EAEAEA" }}
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              data-ocid={`services.card.${i + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-default"
            >
              <div className="mb-5">
                <service.icon
                  size={20}
                  style={{ color: "oklch(0.54 0.10 68)", strokeWidth: 1.5 }}
                />
              </div>
              <h3 className="font-bricolage font-semibold text-base text-foreground mb-3 leading-snug">
                {service.title}
              </h3>
              <p
                className="text-sm font-light leading-loose"
                style={{ color: "oklch(0.48 0.03 65)" }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
