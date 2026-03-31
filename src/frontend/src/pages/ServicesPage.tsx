import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const services = [
  {
    number: "01",
    title: "Manufacturing Plant Setup",
    description:
      "End-to-end advisory for establishing construction chemicals manufacturing facilities, with a focus on dry-mix mortars, tile adhesives, and waterproofing systems.",
    image: "/assets/generated/service-plant-setup.dim_900x500.jpg",
    imageAlt: "Construction chemicals manufacturing plant interior",
    supportLabel: "Support includes",
    support: [
      "Plant layout planning and equipment selection",
      "Raw material handling and storage systems",
      "Production process design and workflow setup",
      "Vendor guidance for machinery and key materials",
      "Installation coordination and commissioning support",
    ],
    objective:
      "To ensure a practical, cost-efficient, and scalable manufacturing setup ready for commercial production.",
  },
  {
    number: "02",
    title: "Product Portfolio Development",
    description:
      "Strategic development of a market-relevant product range aligned with application needs and profitability.",
    image: "/assets/generated/service-product-portfolio.dim_900x500.jpg",
    imageAlt: "Construction chemical product packaging and development",
    supportLabel: "Support includes",
    support: [
      "Product range planning (C1T, C2T, C2TE, C2TES1, grouts, waterproofing, etc.)",
      "Technical formulation strategy and positioning",
      "Packaging concept and product segmentation",
      "TDS (Technical Data Sheet) and product documentation guidance",
      "Alignment of product performance with target market segment",
    ],
    objective:
      "To build a balanced product portfolio combining technical performance and commercial viability.",
  },
  {
    number: "03",
    title: "Production Stabilisation",
    description:
      "Focused support to achieve consistent product quality and stable production operations after plant setup.",
    image: "/assets/generated/service-production-stabilisation.dim_900x500.jpg",
    imageAlt: "Quality control testing in construction chemicals laboratory",
    supportLabel: "Support includes",
    support: [
      "Batch standardisation and process control",
      "Quality control systems and testing protocols",
      "Raw material consistency management",
      "Troubleshooting during initial production phase",
      "Operator and production team training",
    ],
    objective:
      "To ensure reliable, repeatable production output with minimal variation and operational issues.",
  },
  {
    number: "04",
    title: "Business Growth Strategy",
    description:
      "Advisory support to develop a sustainable and scalable business model in the construction chemicals market.",
    image: "/assets/generated/service-business-growth.dim_900x500.jpg",
    imageAlt: "Business strategy and market planning",
    supportLabel: "Support includes",
    support: [
      "Pricing strategy and margin structure",
      "Distributor and dealer network planning",
      "Go-to-market strategy and regional expansion planning",
      "Sales and technical support framework",
      "Product positioning aligned with market demand",
    ],
    objective:
      "To support promoters in building a profitable and long-term growth-oriented business.",
  },
];

function SupportList({
  items,
  delay,
}: {
  items: string[];
  delay?: number;
}) {
  return (
    <ul className="space-y-3 mb-8">
      {items.map((item, idx) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: (delay ?? 0) + idx * 0.06 }}
          className="flex items-start gap-3"
        >
          <span
            className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
            style={{ backgroundColor: "#B8956A" }}
          />
          <span
            className="text-sm leading-relaxed"
            style={{ color: "#2B2B2B" }}
          >
            {item}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        {/* Page Hero */}
        <div
          className="py-16 bg-white"
          style={{ borderBottom: "1px solid #EAEAEA" }}
        >
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="mb-3">
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
                Services
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
                What We Do
              </p>
              <h1 className="font-bricolage text-3xl lg:text-4xl font-semibold text-foreground mb-5">
                Consultancy Services
              </h1>
              {/* Tagline */}
              <div
                className="inline-flex items-start gap-3 px-5 py-3.5 rounded"
                style={{
                  backgroundColor: "#FAF7F3",
                  border: "1px solid #E8DDD0",
                }}
              >
                <span className="text-base leading-none mt-0.5">👉</span>
                <p
                  className="text-sm font-medium leading-relaxed"
                  style={{ color: "#2B2B2B" }}
                >
                  From Plant Setup to Market Success &ndash; Complete
                  Manufacturing &amp; Business Advisory
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Services Sections */}
        {services.map((service, index) => {
          const isEven = index % 2 === 1;
          return (
            <section
              key={service.number}
              className="py-0"
              style={{
                backgroundColor: isEven ? "#FAFAFA" : "#FFFFFF",
                borderBottom: "1px solid #EAEAEA",
              }}
            >
              <div className="container mx-auto px-6 max-w-6xl">
                <div
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-0 lg:gap-0`}
                >
                  {/* Image Side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="lg:w-5/12 flex-shrink-0"
                  >
                    <div
                      className="h-64 lg:h-full min-h-[320px] overflow-hidden"
                      style={{
                        borderRight: !isEven ? "1px solid #EAEAEA" : "none",
                        borderLeft: isEven ? "1px solid #EAEAEA" : "none",
                      }}
                    >
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover"
                        style={{ filter: "contrast(0.95) brightness(0.98)" }}
                      />
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="lg:w-7/12 py-14 lg:py-16 px-0 lg:px-14"
                  >
                    {/* Service number + title */}
                    <div className="flex items-center gap-4 mb-5">
                      <span
                        className="text-xs font-semibold tracking-[0.2em]"
                        style={{ color: "#B8956A" }}
                      >
                        {service.number}
                      </span>
                      <div
                        className="h-px flex-1 max-w-8"
                        style={{ backgroundColor: "#EAEAEA" }}
                      />
                    </div>
                    <h2 className="font-bricolage text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p
                      className="text-sm leading-loose mb-8 max-w-lg"
                      style={{
                        color: "oklch(0.42 0.03 65)",
                        lineHeight: "1.9",
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Support includes */}
                    <p
                      className="text-xs font-semibold tracking-[0.12em] uppercase mb-4"
                      style={{ color: "#B8956A" }}
                    >
                      {service.supportLabel}
                    </p>
                    <SupportList items={service.support} />

                    {/* Objective */}
                    <div
                      className="px-5 py-4 rounded"
                      style={{
                        borderLeft: "3px solid #B8956A",
                        backgroundColor: isEven ? "#FFFFFF" : "#FAF7F3",
                      }}
                    >
                      <p
                        className="text-xs font-semibold tracking-[0.1em] uppercase mb-1.5"
                        style={{ color: "#B8956A" }}
                      >
                        Objective
                      </p>
                      <p
                        className="text-sm font-light leading-relaxed"
                        style={{ color: "oklch(0.38 0.03 65)" }}
                      >
                        {service.objective}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA Section */}
        <section
          className="py-24 bg-white"
          style={{ borderTop: "1px solid #EAEAEA" }}
        >
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p
                className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
                style={{ color: "oklch(0.54 0.10 68)" }}
              >
                Get Started
              </p>
              <h2 className="font-bricolage text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                Ready to Start Your Manufacturing Journey?
              </h2>
              <p
                className="text-sm font-light leading-loose max-w-lg mx-auto mb-10"
                style={{ color: "oklch(0.48 0.03 65)" }}
              >
                Whether you are planning a new plant or looking to scale your
                existing operations, we are here to guide every step.
              </p>
              <a
                href="/contact"
                className="services-cta-btn inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium transition-all"
                style={{
                  border: "1px solid #B8956A",
                  color: "#B8956A",
                  backgroundColor: "transparent",
                  borderRadius: "6px",
                }}
              >
                Request Consultation
              </a>
              <style>
                {
                  ".services-cta-btn:hover { background-color: #F5F0E8 !important; }"
                }
              </style>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
