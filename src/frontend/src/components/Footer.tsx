import { Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer style={{ backgroundColor: "oklch(0.15 0.04 145)" }}>
      {/* Main footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: "oklch(0.32 0.08 145)" }}
              >
                GI
              </div>
              <div>
                <div className="font-bricolage font-bold text-white text-base">
                  Golden Inning Consultancy
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Construction Chemicals Manufacturing Advisory
            </p>
          </div>

          {/* Col 2: Contact */}
          <div>
            <h4 className="font-semibold text-white/80 text-sm mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <a
              href="mailto:devrajgohil@gmail.com"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              devrajgohil@gmail.com
            </a>
          </div>

          {/* Col 3: Social */}
          <div>
            <h4 className="font-semibold text-white/80 text-sm mb-4 uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              <a
                data-ocid="footer.link.1"
                href="https://www.linkedin.com/in/devrajgohil/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded flex items-center justify-center text-white/60 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                data-ocid="footer.link.2"
                href="https://www.youtube.com/@GoldenInning"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded flex items-center justify-center text-white/60 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>© {year} Golden Inning Consultancy. All rights reserved.</span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Built with ❤ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
