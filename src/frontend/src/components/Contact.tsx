import { Mail } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="py-20 bg-background">
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
            style={{ backgroundColor: "oklch(0.32 0.08 145 / 0.1)" }}
          >
            <Mail size={24} style={{ color: "oklch(0.32 0.08 145)" }} />
          </div>

          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.32 0.08 145)" }}
          >
            Reach Out
          </p>
          <h2 className="font-bricolage text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mb-6">
            For consultancy enquiries please contact:
          </p>

          <a
            href="mailto:devrajgohil@gmail.com"
            className="text-xl font-semibold hover:underline block mb-8"
            style={{ color: "oklch(0.32 0.08 145)" }}
          >
            devrajgohil@gmail.com
          </a>

          <a
            data-ocid="contact.primary_button"
            href="mailto:devrajgohil@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-semibold text-white text-sm transition-all hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: "oklch(0.32 0.08 145)" }}
          >
            <Mail size={16} />
            Send Email
          </a>
        </motion.div>
      </div>
    </div>
  );
}
