import { Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      style={{
        backgroundColor: "#FAFAF8",
        borderTop: "1px solid #EEEBE4",
      }}
    >
      <style>{`
        .footer-email-link { color: #6B6560; transition: color 0.2s; font-size: 0.875rem; font-weight: 300; }
        .footer-email-link:hover { color: #2B2B2B; }
        .footer-social-btn { width: 36px; height: 36px; border-radius: 6px; display: flex; align-items: center; justify-content: center; transition: border-color 0.2s, color 0.2s; border: 1px solid #E0DDD7; color: #2B2B2B; }
        .footer-social-btn:hover { border-color: #B8956A; color: #B8956A; }
      `}</style>

      {/* Main footer */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-8 h-8 rounded flex items-center justify-center text-white font-semibold text-xs flex-shrink-0"
                style={{ backgroundColor: "#2B2B2B" }}
              >
                GI
              </div>
              <div
                className="font-semibold text-sm"
                style={{ color: "#2B2B2B" }}
              >
                Golden Inning Consultancy
              </div>
            </div>
            <p
              className="text-xs font-light leading-loose"
              style={{ color: "#6B6560" }}
            >
              Construction Chemicals Manufacturing Advisory
            </p>
          </div>

          {/* Col 2: Contact */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase font-medium mb-5 leading-relaxed"
              style={{ color: "#9A9590" }}
            >
              Contact
            </h4>
            <a
              href="mailto:devrajgohil@gmail.com"
              className="footer-email-link"
            >
              devrajgohil@gmail.com
            </a>
          </div>

          {/* Col 3: Social */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase font-medium mb-5 leading-relaxed"
              style={{ color: "#9A9590" }}
            >
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              <a
                data-ocid="footer.link.1"
                href="https://www.linkedin.com/in/devrajgohil/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                data-ocid="footer.link.2"
                href="https://www.youtube.com/@GoldenInning"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #EEEBE4" }}>
        <div
          className="container mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs"
          style={{ color: "#B0ACA6" }}
        >
          <span>© {year} Golden Inning Consultancy. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#6B6560]"
          >
            Built with ❤ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
