import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Youtube } from "lucide-react";
import { motion } from "motion/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const contactDetails = [
  {
    label: "Email",
    value: "devrajgohil@gmail.com",
    href: "mailto:devrajgohil@gmail.com",
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/devrajgohil",
    href: "https://www.linkedin.com/in/devrajgohil/",
    Icon: Linkedin,
  },
  {
    label: "YouTube",
    value: "youtube.com/@GoldenInning",
    href: "https://www.youtube.com/@GoldenInning",
    Icon: Youtube,
  },
];

export default function ContactPage() {
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
                Contact
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
                Get In Touch
              </p>
              <h1 className="font-bricolage text-3xl lg:text-4xl font-semibold text-foreground mb-3">
                Contact
              </h1>
              <p
                className="text-sm font-light leading-loose max-w-xl"
                style={{ color: "oklch(0.48 0.03 65)" }}
              >
                Reach out to discuss your manufacturing project or consultancy
                requirements.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact Info Section */}
        <section
          className="py-24 bg-white"
          style={{ borderBottom: "1px solid #EAEAEA" }}
        >
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Left: Intro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <p
                  className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
                  style={{ color: "oklch(0.54 0.10 68)" }}
                >
                  Direct Contact
                </p>
                <h2 className="font-bricolage text-2xl font-semibold text-foreground mb-6">
                  Devraj Gohil
                </h2>
                <p
                  className="text-sm font-light leading-loose mb-4"
                  style={{ color: "oklch(0.38 0.03 65)", lineHeight: "1.9" }}
                >
                  Senior construction chemicals industry professional with 34+
                  years of experience. Available for consultancy enquiries
                  related to plant setup, production, and business advisory.
                </p>
                <p
                  className="text-sm font-light leading-loose"
                  style={{ color: "oklch(0.48 0.03 65)", lineHeight: "1.9" }}
                >
                  Preferred contact: email or LinkedIn.
                </p>
              </motion.div>

              {/* Right: Contact Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              >
                <p
                  className="text-xs font-medium tracking-[0.15em] uppercase mb-8"
                  style={{ color: "oklch(0.54 0.10 68)" }}
                >
                  Contact Details
                </p>
                <div className="space-y-8">
                  {contactDetails.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-4"
                      style={{
                        paddingBottom: "24px",
                        borderBottom:
                          i < contactDetails.length - 1
                            ? "1px solid #EAEAEA"
                            : "none",
                      }}
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <item.Icon
                          size={20}
                          strokeWidth={1.5}
                          style={{ color: "#B8956A" }}
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p
                          className="text-xs font-medium tracking-wide uppercase mb-1"
                          style={{ color: "#9CA3AF" }}
                        >
                          {item.label}
                        </p>
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-sm font-medium contact-link"
                          style={{ color: "#2B2B2B", textDecoration: "none" }}
                        >
                          {item.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Areas of Enquiry */}
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
              className="mb-12"
            >
              <p
                className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
                style={{ color: "oklch(0.54 0.10 68)" }}
              >
                Areas of Enquiry
              </p>
              <h2 className="font-bricolage text-2xl font-semibold text-foreground">
                How We Can Help
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                {
                  title: "New Plant Setup",
                  desc: "Enquiries related to setting up a new construction chemicals manufacturing facility.",
                },
                {
                  title: "Production Stabilisation",
                  desc: "Support for plants already commissioned but experiencing output or quality challenges.",
                },
                {
                  title: "Product Portfolio Development",
                  desc: "Guidance on selecting and developing the right product range for your target market.",
                },
                {
                  title: "Business & Market Advisory",
                  desc: "Strategic advice on product launch, distribution development, and brand positioning.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2"
                    style={{ backgroundColor: "#B8956A" }}
                  />
                  <div>
                    <p
                      className="text-sm font-semibold mb-1"
                      style={{ color: "#2B2B2B" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="text-sm font-light leading-relaxed"
                      style={{ color: "oklch(0.48 0.03 65)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-bricolage text-2xl font-semibold text-foreground mb-4">
                Ready to Start a Conversation?
              </h2>
              <p
                className="text-sm font-light leading-loose max-w-md mx-auto mb-10"
                style={{ color: "oklch(0.48 0.03 65)" }}
              >
                Write to us at the email below and we will respond within 1–2
                business days.
              </p>
              <a
                href="mailto:devrajgohil@gmail.com"
                className="contact-cta-btn inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium transition-all"
                style={{
                  border: "1px solid #B8956A",
                  color: "#B8956A",
                  backgroundColor: "transparent",
                  borderRadius: "6px",
                }}
              >
                Send an Email
              </a>
              <style>
                {
                  ".contact-cta-btn:hover { background-color: #F5F0E8 !important; } .contact-link:hover { color: #B8956A !important; }"
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
