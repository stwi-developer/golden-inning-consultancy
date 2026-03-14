import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Industry Segments", href: "#industry-segments" },
  { label: "Services", href: "#services" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <a
      href="#home"
      className="flex items-center gap-3 flex-shrink-0"
      aria-label="Golden Inning Consultancy — Home"
      style={{ textDecoration: "none" }}
    >
      <picture
        style={{
          display: "block",
          height: "40px",
          width: "auto",
          flexShrink: 0,
        }}
      >
        {/* PNG primary (SVG would go here as <source type="image/svg+xml"> when provided) */}
        <source srcSet="/assets/uploads/logo-png-1.png" type="image/png" />
        {/* JPG fallback */}
        <img
          src="/assets/uploads/Logo-jpg-2.jpg"
          alt="Golden Inning Consultancy logo"
          style={{
            height: "40px",
            width: "auto",
            maxWidth: "160px",
            objectFit: "contain",
            objectPosition: "left center",
            display: "block",
          }}
          draggable={false}
        />
      </picture>
      <div>
        <div
          className={`font-bricolage font-bold text-base leading-tight transition-colors ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          Golden Inning
        </div>
        <div
          className={`text-xs leading-tight transition-colors ${
            scrolled ? "text-muted-foreground" : "text-white/70"
          }`}
        >
          Consultancy
        </div>
      </div>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <Logo scrolled={scrolled} />

          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item, i) => (
              <li key={item.href}>
                <button
                  type="button"
                  data-ocid={`nav.link.${i + 1}`}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-2 text-sm font-medium rounded transition-colors hover:bg-white/10 ${
                    scrolled
                      ? "text-foreground hover:text-primary hover:bg-accent"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            data-ocid="nav.toggle"
            className={`lg:hidden p-2 rounded transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <div className="container mx-auto px-6 py-4">
            {/* Logo repeated in mobile menu for clarity */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border">
              <picture
                style={{ display: "block", height: "36px", width: "auto" }}
              >
                <source
                  srcSet="/assets/uploads/logo-png-1.png"
                  type="image/png"
                />
                <img
                  src="/assets/uploads/Logo-jpg-2.jpg"
                  alt="Golden Inning Consultancy logo"
                  style={{
                    height: "36px",
                    width: "auto",
                    maxWidth: "140px",
                    objectFit: "contain",
                    objectPosition: "left center",
                  }}
                  draggable={false}
                />
              </picture>
              <span className="font-bricolage font-bold text-sm text-foreground">
                Golden Inning Consultancy
              </span>
            </div>
            <ul className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <li key={item.href}>
                  <button
                    type="button"
                    data-ocid={`nav.link.${i + 1}`}
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-accent rounded transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
