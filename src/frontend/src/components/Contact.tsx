import { Mail } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <div
      className="py-36"
      id="contact"
      style={{ backgroundColor: "#FAFAFA", borderTop: "1px solid #EAEAEA" }}
    >
      <style>
        {".contact-cta-btn:hover { background-color: #F5F0E8 !important; }"}
      </style>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-lg mx-auto text-center"
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "#FFFFFF", border: "1px solid #EAEAEA" }}
          >
            <Mail
              size={22}
              style={{ color: "oklch(0.54 0.10 68)", strokeWidth: 1.5 }}
            />
          </div>

          <p
            className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
            style={{ color: "oklch(0.54 0.10 68)" }}
          >
            Reach Out
          </p>
          <h2 className="font-bricolage text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-sm font-light text-muted-foreground mb-6 leading-loose">
            For consultancy enquiries please contact:
          </p>

          <a
            href="mailto:devrajgohil@gmail.com"
            className="text-xl font-normal hover:underline block mb-10"
            style={{ color: "oklch(0.54 0.10 68)" }}
          >
            devrajgohil@gmail.com
          </a>

          <a
            data-ocid="contact.primary_button"
            href="mailto:devrajgohil@gmail.com"
            className="contact-cta-btn inline-flex items-center gap-2 px-8 py-3.5 text-sm font-normal transition-all"
            style={{
              border: "1px solid #B8956A",
              color: "#B8956A",
              backgroundColor: "transparent",
              borderRadius: "6px",
            }}
          >
            <Mail size={16} strokeWidth={1.5} />
            Send Email
          </a>
        </motion.div>
      </div>
    </div>
  );
}
