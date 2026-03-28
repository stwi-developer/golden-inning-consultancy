import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const leadershipRoles = [
  "Chief Operating Officer",
  "Business Head",
  "National Sales & Marketing Head",
  "Manufacturing Leadership Roles",
];

const expertiseItems = [
  "Construction chemical manufacturing",
  "Tile adhesives",
  "Dry mix mortars",
  "Waterproofing systems",
  "Production operations",
  "National sales and business strategy",
];

const consultancyFocus = [
  "Set up manufacturing plants",
  "Develop product portfolio",
  "Stabilise production",
  "Launch construction chemical businesses successfully",
];

const journeySteps = [
  { title: "Operator / Chemist", label: "Career Start" },
  { title: "Leadership Roles", label: "Mid Career" },
  { title: "Business Head / Sales Head", label: "Senior Leadership" },
  { title: "Chief Operating Officer", label: "Executive" },
];

export default function AboutPage() {
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
                About
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
                About
              </p>
              <h1 className="font-bricolage text-3xl lg:text-4xl font-semibold text-foreground mb-3">
                About Devraj Gohil
              </h1>
              <p
                className="text-sm font-light leading-loose max-w-xl"
                style={{ color: "oklch(0.48 0.03 65)" }}
              >
                Senior Industry Professional | 34+ Years in Construction
                Chemicals
              </p>
            </motion.div>
          </div>
        </div>

        {/* Section 1 — Introduction */}
        <section
          className="py-24 bg-white"
          style={{ borderBottom: "1px solid #EAEAEA" }}
        >
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="order-2 lg:order-1"
              >
                <div
                  className="overflow-hidden"
                  style={{
                    borderRadius: "4px",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  }}
                >
                  <img
                    src="/assets/uploads/about-photo.jpg"
                    alt="Construction chemicals manufacturing facility"
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: "420px", objectFit: "cover" }}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src =
                        "/assets/generated/about-plant.dim_800x600.jpg";
                    }}
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="order-1 lg:order-2"
              >
                <p
                  className="text-xs font-medium tracking-[0.15em] uppercase mb-4"
                  style={{ color: "oklch(0.54 0.10 68)" }}
                >
                  Introduction
                </p>
                <h2 className="font-bricolage text-2xl lg:text-3xl font-semibold text-foreground mb-6 leading-snug">
                  34+ Years of Industry Leadership
                </h2>
                <p
                  className="text-base leading-loose mb-6"
                  style={{ color: "oklch(0.38 0.03 65)", lineHeight: "1.9" }}
                >
                  Devraj Gohil is a senior industry professional with 34+ years
                  of experience in the Construction Chemicals sector.
                </p>
                <p
                  className="text-sm font-medium mb-4"
                  style={{ color: "#2B2B2B" }}
                >
                  He has held leadership roles including:
                </p>
                <ul className="space-y-3">
                  {leadershipRoles.map((role, i) => (
                    <motion.li
                      key={role}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-center gap-3 text-sm"
                      style={{ color: "oklch(0.38 0.03 65)" }}
                    >
                      <span
                        className="flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "#B8956A" }}
                      />
                      {role}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2 — Industry Expertise */}
        <section
          className="py-24"
          style={{
            backgroundColor: "#FAFAFA",
            borderBottom: "1px solid #EAEAEA",
          }}
        >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-12"
            >
              <p
                className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
                style={{ color: "oklch(0.54 0.10 68)" }}
              >
                Expertise
              </p>
              <h2 className="font-bricolage text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                Industry Expertise
              </h2>
              <p
                className="text-sm font-light leading-loose"
                style={{ color: "oklch(0.48 0.03 65)" }}
              >
                Experience includes:
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-5">
              {expertiseItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    strokeWidth={1.5}
                    style={{ color: "#B8956A", flexShrink: 0 }}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.38 0.03 65)" }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 — Professional Journey */}
        <section
          className="py-24 bg-white"
          style={{ borderBottom: "1px solid #EAEAEA" }}
        >
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-10"
            >
              <p
                className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
                style={{ color: "oklch(0.54 0.10 68)" }}
              >
                Career
              </p>
              <h2 className="font-bricolage text-2xl lg:text-3xl font-semibold text-foreground mb-6">
                Professional Journey
              </h2>
              <p
                className="text-base leading-loose max-w-2xl mb-4"
                style={{ color: "oklch(0.38 0.03 65)", lineHeight: "1.9" }}
              >
                Started career as Operator and Chemist, progressed through
                multiple leadership roles to Chief Operating Officer, managing
                manufacturing operations and national sales.
              </p>
              <p
                className="text-base leading-loose max-w-2xl"
                style={{ color: "oklch(0.38 0.03 65)", lineHeight: "1.9" }}
              >
                This practical experience provides a complete perspective from
                production floor to business strategy.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative mt-14">
              {/* Connector line */}
              <div
                className="hidden lg:block absolute top-5 left-0 right-0 h-px"
                style={{ backgroundColor: "#EAEAEA", zIndex: 0 }}
              />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {journeySteps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left"
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-white relative z-10"
                      style={{ border: "2px solid #B8956A" }}
                    >
                      <span
                        className="text-xs font-semibold"
                        style={{ color: "#B8956A" }}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <p
                      className="text-xs font-medium tracking-wide uppercase mb-1"
                      style={{ color: "#B8956A" }}
                    >
                      {step.label}
                    </p>
                    <p
                      className="text-sm font-medium leading-snug"
                      style={{ color: "#2B2B2B" }}
                    >
                      {step.title}
                    </p>
                    {i < journeySteps.length - 1 && (
                      <div className="lg:hidden mt-4">
                        <ArrowRight
                          size={16}
                          strokeWidth={1.5}
                          style={{ color: "#B8956A" }}
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — Consultancy Focus */}
        <section className="py-24" style={{ backgroundColor: "#FAFAFA" }}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-12"
            >
              <p
                className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
                style={{ color: "oklch(0.54 0.10 68)" }}
              >
                Services
              </p>
              <h2 className="font-bricolage text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                Consultancy Focus
              </h2>
              <p
                className="text-sm font-light leading-loose"
                style={{ color: "oklch(0.48 0.03 65)" }}
              >
                Golden Inning consultancy helps promoters:
              </p>
            </motion.div>

            <div className="space-y-5 max-w-lg mb-14">
              {consultancyFocus.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                    style={{ backgroundColor: "#B8956A" }}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "oklch(0.38 0.03 65)" }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="/#contact"
                data-ocid="about.primary_button"
                className="about-cta-btn inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium transition-all"
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
                  ".about-cta-btn:hover { background-color: #F5F0E8 !important; }"
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
