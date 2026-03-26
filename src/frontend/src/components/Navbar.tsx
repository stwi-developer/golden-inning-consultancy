import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

function Logo() {
  return (
    <Link
      to="/"
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
        <source srcSet="/assets/uploads/logo-png-1.png" type="image/png" />
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
        <div className="font-bricolage font-bold text-base leading-tight text-foreground">
          Golden Inning
        </div>
        <div className="text-xs leading-tight text-muted-foreground">
          Consultancy
        </div>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const isHomePage = routerState.location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollNav = (hash: string) => {
    setMobileOpen(false);
    if (isHomePage) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/${hash}`;
    }
  };

  // Nav items in required order: Home, About, Industry Segments, Services, Videos, Contact
  type ScrollNavItem = {
    type: "scroll";
    label: string;
    hash: string;
    ocid: string;
  };
  type LinkNavItem = { type: "link"; label: string; to: string; ocid: string };
  type NavItem = ScrollNavItem | LinkNavItem;

  const navItems: NavItem[] = [
    { type: "scroll", label: "Home", hash: "#home", ocid: "nav.link.1" },
    { type: "scroll", label: "About", hash: "#about", ocid: "nav.link.2" },
    {
      type: "link",
      label: "Industry Segments",
      to: "/industry-segments",
      ocid: "nav.link.3",
    },
    {
      type: "scroll",
      label: "Services",
      hash: "#services",
      ocid: "nav.link.4",
    },
    { type: "scroll", label: "Videos", hash: "#videos", ocid: "nav.link.5" },
    { type: "scroll", label: "Contact", hash: "#contact", ocid: "nav.link.6" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-sm" : "border-b border-border"
      }`}
    >
      <style>
        {".nav-segments-link { color: inherit; transition: color 0.2s; }" +
          ".nav-segments-link:hover { color: #B8956A; }" +
          ".nav-segments-link.active-seg { color: #B8956A; }"}
      </style>
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <Logo />

          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.type === "scroll" ? (
                <li key={item.hash}>
                  <button
                    type="button"
                    data-ocid={item.ocid}
                    onClick={() => handleScrollNav(item.hash)}
                    className="px-4 py-2 text-sm font-medium rounded-sm transition-colors text-foreground hover:text-primary"
                  >
                    {item.label}
                  </button>
                </li>
              ) : (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    data-ocid={item.ocid}
                    className="nav-segments-link px-4 py-2 text-sm font-medium rounded-sm"
                    style={{ textDecoration: "none" }}
                    activeProps={{
                      className:
                        "nav-segments-link active-seg px-4 py-2 text-sm font-medium rounded-sm",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <button
            type="button"
            data-ocid="nav.toggle"
            className="lg:hidden p-2 rounded transition-colors text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="container mx-auto px-6 py-4">
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
              {navItems.map((item) =>
                item.type === "scroll" ? (
                  <li key={item.hash}>
                    <button
                      type="button"
                      data-ocid={item.ocid}
                      onClick={() => handleScrollNav(item.hash)}
                      className="w-full text-left px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary rounded-sm transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ) : (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      data-ocid={item.ocid}
                      className="nav-segments-link block w-full px-4 py-2.5 text-sm font-medium rounded-sm"
                      style={{ textDecoration: "none" }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
