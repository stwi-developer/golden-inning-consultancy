import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { findSegmentBySlug } from "../data/industryData";

const GOLD = "oklch(0.54 0.10 68)";
const GOLD_HEX = "#B8956A";

const CATEGORY_IMAGES: Record<string, string> = {
  "tile-adhesives": "/assets/generated/cat-dry-mix.dim_800x500.jpg",
  "tile-grouts": "/assets/generated/cat-dry-mix.dim_800x500.jpg",
  "skim-coat-wall-putty": "/assets/generated/cat-dry-mix.dim_800x500.jpg",
  "repair-mortars": "/assets/generated/cat-dry-mix.dim_800x500.jpg",
  "cementitious-waterproofing":
    "/assets/generated/cat-waterproofing.dim_800x500.jpg",
  "acrylic-coatings": "/assets/generated/cat-waterproofing.dim_800x500.jpg",
  "pu-coatings": "/assets/generated/cat-waterproofing.dim_800x500.jpg",
  "waterproofing-liquid": "/assets/generated/cat-waterproofing.dim_800x500.jpg",
  "concrete-admixtures": "/assets/generated/cat-specialty.dim_800x500.jpg",
  "industrial-grouts": "/assets/generated/cat-specialty.dim_800x500.jpg",
  "industrial-flooring": "/assets/generated/cat-specialty.dim_800x500.jpg",
  "protective-coatings": "/assets/generated/cat-specialty.dim_800x500.jpg",
};

export default function CategoryPage() {
  const { segmentSlug } = useParams({ strict: false }) as {
    segmentSlug: string;
  };
  const segment = findSegmentBySlug(segmentSlug);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<
    string | null
  >(null);

  if (!segment) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="py-36 container mx-auto px-6 text-center">
          <p className="text-muted-foreground">Segment not found.</p>
          <Link
            to="/industry-segments"
            style={{ color: GOLD_HEX }}
            className="text-sm mt-4 inline-block"
          >
            ← Back to Industry Segments
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const selectedCategory = selectedCategorySlug
    ? (segment.categories.find((c) => c.slug === selectedCategorySlug) ?? null)
    : null;

  return (
    <div className="min-h-screen">
      <style>{`
        .cat-sidebar {
          width: 100%;
          flex-shrink: 0;
          background-color: #FFFFFF;
          border-bottom: 1px solid #EAEAEA;
        }
        @media (min-width: 1024px) {
          .cat-sidebar {
            width: 280px;
            border-bottom: none;
            border-right: 1px solid #EAEAEA;
            position: sticky;
            top: 0;
            align-self: flex-start;
          }
        }
      `}</style>
      <Navbar />
      <main>
        {/* Page Header */}
        <div
          className="py-24"
          style={{
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid #EAEAEA",
          }}
        >
          <div className="container mx-auto px-6">
            <nav
              className="mb-8 flex items-center gap-2 flex-wrap"
              aria-label="Breadcrumb"
            >
              <Link
                to="/"
                className="text-xs font-light transition-colors"
                style={{ color: GOLD }}
                data-ocid="breadcrumb.link.1"
              >
                Home
              </Link>
              <ChevronRight size={12} style={{ color: "#9A9590" }} />
              <Link
                to="/industry-segments"
                className="text-xs font-light transition-colors"
                style={{ color: GOLD }}
                data-ocid="breadcrumb.link.2"
              >
                Industry Segments
              </Link>
              <ChevronRight size={12} style={{ color: "#9A9590" }} />
              <span className="text-xs font-light" style={{ color: "#2B2B2B" }}>
                {segment.title}
              </span>
            </nav>

            <p
              className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
              style={{ color: GOLD }}
            >
              Industry Segment
            </p>
            <h1 className="font-bricolage text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              {segment.title}
            </h1>
            <p
              className="text-sm font-light leading-loose max-w-xl"
              style={{ color: "oklch(0.48 0.03 65)" }}
            >
              Select a category from the left to explore the product range and
              advisory coverage.
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            backgroundColor: "#FAFAFA",
            borderTop: "1px solid #EAEAEA",
          }}
        >
          <div className="container mx-auto px-6">
            <div
              className="flex flex-col lg:flex-row"
              style={{ minHeight: "70vh" }}
            >
              {/* LEFT SIDEBAR */}
              <aside className="cat-sidebar py-12">
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "4px",
                    padding: "1.5rem",
                  }}
                >
                  <p
                    className="text-xs font-medium tracking-[0.15em] uppercase"
                    style={{
                      color: GOLD,
                      marginBottom: "12px",
                      paddingBottom: "8px",
                      borderBottom: "1px solid rgba(184,149,106,0.3)",
                    }}
                  >
                    Categories
                  </p>

                  <nav
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    {segment.categories.map((cat, i) => {
                      const isActive = selectedCategorySlug === cat.slug;
                      return (
                        <button
                          key={cat.slug}
                          type="button"
                          onClick={() =>
                            setSelectedCategorySlug(isActive ? null : cat.slug)
                          }
                          data-ocid={`category.tab.${i + 1}`}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            padding: "12px 14px",
                            background: isActive
                              ? "rgba(184,149,106,0.12)"
                              : "transparent",
                            border: "none",
                            borderLeft: isActive
                              ? `3px solid ${GOLD_HEX}`
                              : "3px solid transparent",
                            cursor: "pointer",
                            textAlign: "left",
                            borderRadius: "0 4px 4px 0",
                            transition: "all 0.2s",
                            color: isActive ? GOLD_HEX : "#2B2B2B",
                            fontWeight: isActive ? 600 : 300,
                            fontSize: "0.875rem",
                          }}
                          onMouseEnter={(e) => {
                            if (!isActive) {
                              (
                                e.currentTarget as HTMLButtonElement
                              ).style.color = GOLD_HEX;
                              (
                                e.currentTarget as HTMLButtonElement
                              ).style.backgroundColor =
                                "rgba(184,149,106,0.06)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive) {
                              (
                                e.currentTarget as HTMLButtonElement
                              ).style.color = "#2B2B2B";
                              (
                                e.currentTarget as HTMLButtonElement
                              ).style.backgroundColor = "transparent";
                            }
                          }}
                        >
                          <span>{cat.title}</span>
                          <ChevronRight
                            size={14}
                            style={{
                              color: isActive ? GOLD_HEX : "#CCCCCC",
                              flexShrink: 0,
                              transition: "color 0.2s",
                            }}
                          />
                        </button>
                      );
                    })}
                  </nav>

                  <div
                    style={{
                      marginTop: "2rem",
                      paddingTop: "1.5rem",
                      borderTop: "1px solid #EAEAEA",
                    }}
                  >
                    <Link
                      to="/industry-segments"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "0.75rem",
                        fontWeight: 300,
                        color: "oklch(0.48 0.03 65)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          GOLD_HEX;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "oklch(0.48 0.03 65)";
                      }}
                      data-ocid="category.link"
                    >
                      <ArrowLeft size={12} />
                      Back to Segments
                    </Link>
                  </div>
                </div>
              </aside>

              {/* RIGHT CONTENT PANEL */}
              <div className="flex-1 py-12 lg:pl-12" style={{ minWidth: 0 }}>
                {selectedCategory ? (
                  /* SELECTED: full product grid */
                  <motion.div
                    key={selectedCategory.slug}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="flex items-start justify-between mb-8 gap-4">
                      <div>
                        <p
                          className="text-xs font-medium tracking-[0.15em] uppercase mb-2"
                          style={{ color: GOLD }}
                        >
                          {selectedCategory.title}
                        </p>
                        <h2 className="font-bricolage text-2xl font-semibold text-foreground mb-3">
                          {selectedCategory.title}
                        </h2>
                        <p
                          className="text-sm font-light leading-loose max-w-lg"
                          style={{ color: "oklch(0.48 0.03 65)" }}
                        >
                          {selectedCategory.description}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedCategorySlug(null)}
                        data-ocid="category.button"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "0.75rem",
                          fontWeight: 300,
                          color: "oklch(0.48 0.03 65)",
                          background: "none",
                          border: "1px solid #EAEAEA",
                          borderRadius: "4px",
                          padding: "6px 12px",
                          cursor: "pointer",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.color =
                            GOLD_HEX;
                          (
                            e.currentTarget as HTMLButtonElement
                          ).style.borderColor = GOLD_HEX;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.color =
                            "oklch(0.48 0.03 65)";
                          (
                            e.currentTarget as HTMLButtonElement
                          ).style.borderColor = "#EAEAEA";
                        }}
                      >
                        <ArrowLeft size={12} />
                        All categories
                      </button>
                    </div>

                    {/* Product grid */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fill, minmax(260px, 1fr))",
                        gap: "1.5rem",
                      }}
                    >
                      {selectedCategory.products.map((product, pi) => {
                        const imgSrc =
                          product.image ||
                          CATEGORY_IMAGES[selectedCategory.slug] ||
                          "/assets/generated/cat-dry-mix.dim_800x500.jpg";
                        return (
                          <motion.div
                            key={product.slug}
                            data-ocid={`category.item.${pi + 1}`}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: pi * 0.05 }}
                            style={{
                              backgroundColor: "#FFFFFF",
                              border: "1px solid #EAEAEA",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              style={{
                                aspectRatio: "16/10",
                                overflow: "hidden",
                              }}
                            >
                              <img
                                src={imgSrc}
                                alt={product.name}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  display: "block",
                                  filter: "brightness(0.93)",
                                }}
                              />
                            </div>
                            <div style={{ padding: "1.25rem" }}>
                              <h3
                                className="font-bricolage font-semibold text-sm mb-2"
                                style={{ color: "#1A1A1A" }}
                              >
                                {product.name}
                              </h3>
                              <p
                                className="text-xs font-light leading-relaxed"
                                style={{ color: "oklch(0.48 0.03 65)" }}
                              >
                                {product.description}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* CTA */}
                    <div
                      style={{
                        marginTop: "3rem",
                        paddingTop: "2.5rem",
                        borderTop: "1px solid #EAEAEA",
                        textAlign: "center",
                      }}
                    >
                      <h3 className="font-bricolage text-xl font-semibold mb-3">
                        Ready to set up manufacturing for this product range?
                      </h3>
                      <p
                        className="text-sm font-light leading-loose mb-6 max-w-md mx-auto"
                        style={{ color: "oklch(0.48 0.03 65)" }}
                      >
                        Get in touch with our advisory team to discuss plant
                        setup, production stabilisation, and first commercial
                        dispatch.
                      </p>
                      <a
                        href="mailto:devrajgohil@gmail.com"
                        data-ocid="category.primary_button"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "12px 28px",
                          backgroundColor: "transparent",
                          border: `1px solid ${GOLD_HEX}`,
                          borderRadius: "4px",
                          color: GOLD_HEX,
                          fontSize: "0.8125rem",
                          fontWeight: 500,
                          textDecoration: "none",
                          letterSpacing: "0.05em",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          (
                            e.currentTarget as HTMLAnchorElement
                          ).style.backgroundColor = GOLD_HEX;
                          (e.currentTarget as HTMLAnchorElement).style.color =
                            "#FFFFFF";
                        }}
                        onMouseLeave={(e) => {
                          (
                            e.currentTarget as HTMLAnchorElement
                          ).style.backgroundColor = "transparent";
                          (e.currentTarget as HTMLAnchorElement).style.color =
                            GOLD_HEX;
                        }}
                      >
                        Request Consultation
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  /* DEFAULT: all sub-categories summary */
                  <motion.div
                    key="all-categories"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="font-bricolage text-xl font-semibold text-foreground mb-8">
                      All Categories in {segment.title}
                    </h2>

                    <div>
                      {segment.categories.map((cat, ci) => (
                        <motion.div
                          key={cat.slug}
                          data-ocid={`category.panel.${ci + 1}`}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: ci * 0.07 }}
                          style={{
                            paddingTop: ci === 0 ? "0" : "2.5rem",
                            paddingBottom: "2.5rem",
                            borderBottom: "1px solid #EAEAEA",
                          }}
                        >
                          <h3
                            className="font-bricolage text-lg font-semibold mb-2"
                            style={{ color: "#1A1A1A" }}
                          >
                            {cat.title}
                          </h3>
                          <p
                            className="text-sm font-light leading-loose mb-4 max-w-lg"
                            style={{ color: "oklch(0.48 0.03 65)" }}
                          >
                            {cat.description}
                          </p>

                          {/* Product name pills */}
                          <ul
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: "8px",
                              listStyle: "none",
                              padding: 0,
                              margin: "0 0 1.25rem 0",
                            }}
                          >
                            {cat.products.map((p) => (
                              <li
                                key={p.slug}
                                style={{
                                  fontSize: "0.75rem",
                                  fontWeight: 300,
                                  color: "#2B2B2B",
                                  backgroundColor: "#F5F3EF",
                                  padding: "4px 10px",
                                  borderRadius: "2px",
                                }}
                              >
                                {p.name}
                              </li>
                            ))}
                          </ul>

                          <button
                            type="button"
                            onClick={() => setSelectedCategorySlug(cat.slug)}
                            data-ocid={`category.secondary_button.${ci + 1}`}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "6px",
                              fontSize: "0.75rem",
                              fontWeight: 500,
                              color: GOLD_HEX,
                              background: "none",
                              border: "none",
                              padding: "0",
                              cursor: "pointer",
                              letterSpacing: "0.05em",
                              textTransform: "uppercase",
                              transition: "opacity 0.2s",
                            }}
                            onMouseEnter={(e) => {
                              (
                                e.currentTarget as HTMLButtonElement
                              ).style.opacity = "0.7";
                            }}
                            onMouseLeave={(e) => {
                              (
                                e.currentTarget as HTMLButtonElement
                              ).style.opacity = "1";
                            }}
                          >
                            Explore <ChevronRight size={12} />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
