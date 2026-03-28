import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const phase1Items = [
  {
    title: "Plant planning",
    desc: "Site selection, plant layout design, and capacity planning aligned with business objectives",
  },
  {
    title: "Machinery selection",
    desc: "Identifying and sourcing the right mixing, filling, and processing equipment for your product range",
  },
  {
    title: "Production process setup",
    desc: "Establishing standard operating procedures, raw material specifications, and batch production workflows",
  },
  {
    title: "Raw material sourcing",
    desc: "Guidance on supplier identification, quality benchmarks, and cost-effective procurement",
  },
  {
    title: "Trial production support",
    desc: "On-site support during initial production runs to troubleshoot and optimise early output",
  },
];

const phase2Items = [
  {
    title: "Process optimisation",
    desc: "Reducing variability, improving cycle times, and increasing output per batch",
  },
  {
    title: "Quality systems",
    desc: "Implementing in-process quality checks, finished goods testing protocols, and documentation",
  },
  {
    title: "Production efficiency improvement",
    desc: "Labour deployment, equipment utilisation, and shift planning",
  },
  {
    title: "Waste reduction",
    desc: "Identifying material loss points and implementing controls to reduce input waste",
  },
  {
    title: "Troubleshooting",
    desc: "Addressing formulation issues, equipment bottlenecks, and process inconsistencies",
  },
];

const phase3Items = [
  {
    title: "Product launch strategy",
    desc: "Positioning products for your target market, pricing guidance, and launch sequencing",
  },
  {
    title: "Market positioning",
    desc: "Identifying competitive advantages and crafting a consultancy-led brand narrative",
  },
  {
    title: "Distribution development",
    desc: "Building dealer and contractor networks, trade channel strategy",
  },
  {
    title: "Brand and packaging advisory",
    desc: "Product naming, technical data sheet structure, label guidance",
  },
  {
    title: "Regulatory and compliance",
    desc: "Understanding relevant quality standards and certifications required in your market",
  },
];

const engagementSteps = [
  {
    num: "1",
    title: "Initial Assessment",
    desc: "Understanding your project scope, location, investment size, and product objectives",
  },
  {
    num: "2",
    title: "Advisory Plan",
    desc: "A structured plan covering plant setup, machinery, and product portfolio recommendations",
  },
  {
    num: "3",
    title: "Implementation Support",
    desc: "On-site and remote support during plant setup and trial production phases",
  },
  {
    num: "4",
    title: "Ongoing Advisory",
    desc: "Continued support for production optimisation and business development",
  },
];

function BulletList({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <ul className="space-y-6 mt-8">
      {items.map((item, i) => (
        <motion.li
          key={item.title}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          className="flex items-start gap-4"
        >
          <span
            className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
            style={{ backgroundColor: "#B8956A" }}
          />
          <span
            className="text-sm leading-loose"
            style={{ color: "oklch(0.38 0.03 65)" }}
          >
            <span className="font-medium" style={{ color: "#2B2B2B" }}>
              {item.title}
            </span>
            {" — "}
            {item.desc}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

function HighlightCard({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-10 px-6 py-5 max-w-xl"
      style={{
        borderLeft: "3px solid #B8956A",
        backgroundColor: "#FAF7F3",
        borderRadius: "0 4px 4px 0",
      }}
    >
      <p
        className="text-sm font-light leading-relaxed italic"
        style={{ color: "oklch(0.44 0.06 68)" }}
      >
        {text}
      </p>
    </motion.div>
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
                Services
              </p>
              <h1 className="font-bricolage text-3xl lg:text-4xl font-semibold text-foreground mb-3">
                Consultancy Services
              </h1>
              <p
                className="text-sm font-light leading-loose max-w-xl"
                style={{ color: "oklch(0.48 0.03 65)" }}
              >
                End-to-end advisory for construction chemicals manufacturing
              </p>
            </motion.div>
          </div>
        </div>

        {/* Section 1 — Project Setup Advisory */}
        <section
          className="py-24 bg-white"
          style={{ borderBottom: "1px solid #EAEAEA" }}
          data-ocid="services.section"
        >
          <div className="container mx-auto px-6 max-w-4xl">
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
                Phase 1
              </p>
              <h2 className="font-bricolage text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                Project Setup Advisory
              </h2>
              <p
                className="text-base leading-loose max-w-2xl"
                style={{ color: "oklch(0.38 0.03 65)", lineHeight: "1.9" }}
              >
                Comprehensive support for promoters establishing new
                construction chemicals manufacturing plants.
              </p>
            </motion.div>
            <BulletList items={phase1Items} />
            <HighlightCard text="From greenfield planning to first production batch — we guide every step." />
          </div>
        </section>

        {/* Section 2 — Production Stabilisation */}
        <section
          className="py-24"
          style={{
            backgroundColor: "#FAFAFA",
            borderBottom: "1px solid #EAEAEA",
          }}
        >
          <div className="container mx-auto px-6 max-w-4xl">
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
                Phase 2
              </p>
              <h2 className="font-bricolage text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                Production Stabilisation
              </h2>
              <p
                className="text-base leading-loose max-w-2xl"
                style={{ color: "oklch(0.38 0.03 65)", lineHeight: "1.9" }}
              >
                Post-commissioning support to stabilise operations and build
                consistent quality output.
              </p>
            </motion.div>
            <BulletList items={phase2Items} />
            <HighlightCard text="Typical plants achieve stable production within 60–90 days of commissioning with structured support." />
          </div>
        </section>

        {/* Section 3 — Business Advisory */}
        <section
          className="py-24 bg-white"
          style={{ borderBottom: "1px solid #EAEAEA" }}
        >
          <div className="container mx-auto px-6 max-w-4xl">
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
                Phase 3
              </p>
              <h2 className="font-bricolage text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                Business Advisory
              </h2>
              <p
                className="text-base leading-loose max-w-2xl"
                style={{ color: "oklch(0.38 0.03 65)", lineHeight: "1.9" }}
              >
                Strategic guidance to position your brand, launch products, and
                build distribution networks.
              </p>
            </motion.div>
            <BulletList items={phase3Items} />
          </div>
        </section>

        {/* Section 4 — Engagement Process */}
        <section className="py-24" style={{ backgroundColor: "#FAFAFA" }}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-14"
            >
              <p
                className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
                style={{ color: "oklch(0.54 0.10 68)" }}
              >
                Our Approach
              </p>
              <h2 className="font-bricolage text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                Engagement Process
              </h2>
              <p
                className="text-sm font-light leading-loose"
                style={{ color: "oklch(0.48 0.03 65)" }}
              >
                A structured, milestone-based engagement model.
              </p>
            </motion.div>

            {/* Connector line + steps */}
            <div className="relative">
              <div
                className="hidden lg:block absolute top-5 left-0 right-0 h-px"
                style={{ backgroundColor: "#EAEAEA", zIndex: 0 }}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {engagementSteps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex flex-col items-start"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-white relative z-10 flex-shrink-0"
                      style={{ border: "2px solid #B8956A" }}
                    >
                      <span
                        className="text-xs font-semibold"
                        style={{ color: "#B8956A" }}
                      >
                        {step.num}
                      </span>
                    </div>
                    <p
                      className="text-sm font-semibold mb-2"
                      style={{ color: "#2B2B2B" }}
                    >
                      {step.title}
                    </p>
                    <p
                      className="text-sm font-light leading-relaxed"
                      style={{ color: "oklch(0.48 0.03 65)" }}
                    >
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — CTA */}
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
              <h2 className="font-bricolage text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                Ready to Start Your Manufacturing Journey?
              </h2>
              <p
                className="text-sm font-light leading-loose max-w-lg mx-auto mb-10"
                style={{ color: "oklch(0.48 0.03 65)" }}
              >
                Whether you are planning a new plant or stabilising existing
                operations, we can help.
              </p>
              <a
                href="/#contact"
                data-ocid="services.primary_button"
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
