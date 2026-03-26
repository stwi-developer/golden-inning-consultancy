import { Link } from "@tanstack/react-router";
import { ChevronRight, Droplets, FlaskConical, Layers } from "lucide-react";
import { motion } from "motion/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { industryData } from "../data/industryData";

const iconMap: Record<
  string,
  React.ComponentType<{ size: number; style: React.CSSProperties }>
> = {
  Layers,
  Droplets,
  FlaskConical,
};

const GOLD = "oklch(0.54 0.10 68)";

const SEGMENT_IMAGES: Record<string, string> = {
  "dry-mix-construction-chemicals":
    "/assets/generated/segment-dry-mix.dim_800x500.jpg",
  "waterproofing-systems":
    "/assets/generated/segment-waterproofing.dim_800x500.jpg",
  "specialty-construction-chemicals":
    "/assets/generated/segment-specialty.dim_800x500.jpg",
};

export default function IndustrySegmentsPage() {
  return (
    <div className="min-h-screen">
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
              className="mb-8 flex items-center gap-2"
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
              <span className="text-xs font-light" style={{ color: "#2B2B2B" }}>
                Industry Segments
              </span>
            </nav>

            <p
              className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
              style={{ color: GOLD }}
            >
              Our Coverage
            </p>
            <h1 className="font-bricolage text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Industry Segments
            </h1>
            <p
              className="text-sm font-light leading-loose max-w-xl"
              style={{ color: "oklch(0.48 0.03 65)" }}
            >
              Explore our construction chemical manufacturing advisory coverage
              across three distinct segments.
            </p>
          </div>
        </div>

        {/* Segments Grid */}
        <div
          className="py-24"
          style={{ backgroundColor: "#FAFAFA", borderTop: "1px solid #EAEAEA" }}
        >
          <div className="container mx-auto px-6">
            <div className="grid sm:grid-cols-3 gap-8">
              {industryData.map((segment, i) => {
                const Icon = iconMap[segment.icon];
                const segImg = SEGMENT_IMAGES[segment.slug];
                return (
                  <motion.div
                    key={segment.slug}
                    data-ocid={`segments.card.${i + 1}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #EAEAEA",
                      overflow: "hidden",
                    }}
                  >
                    {/* Segment Photo */}
                    {segImg && (
                      <Link
                        to="/industry-segments/$segmentSlug"
                        params={{ segmentSlug: segment.slug }}
                      >
                        <div
                          style={{
                            aspectRatio: "16/10",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={segImg}
                            alt={segment.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              display: "block",
                              filter: "brightness(0.92) contrast(0.97)",
                              transition: "transform 0.4s ease",
                            }}
                            onMouseEnter={(e) => {
                              (e.target as HTMLImageElement).style.transform =
                                "scale(1.03)";
                            }}
                            onMouseLeave={(e) => {
                              (e.target as HTMLImageElement).style.transform =
                                "scale(1)";
                            }}
                          />
                        </div>
                      </Link>
                    )}

                    {/* Card Body */}
                    <div style={{ padding: "1.5rem" }}>
                      <div className="flex items-center gap-3 mb-4">
                        {Icon && (
                          <Icon
                            size={20}
                            style={
                              {
                                color: GOLD,
                                strokeWidth: 1.5,
                              } as React.CSSProperties
                            }
                          />
                        )}
                        <Link
                          to="/industry-segments/$segmentSlug"
                          params={{ segmentSlug: segment.slug }}
                          style={{ textDecoration: "none" }}
                        >
                          <h2
                            className="font-bricolage font-semibold text-base"
                            style={{ color: "#2B2B2B" }}
                          >
                            {segment.title}
                          </h2>
                        </Link>
                      </div>

                      <div
                        style={{
                          borderTop: "1px solid #EAEAEA",
                          paddingTop: "1rem",
                        }}
                      >
                        {segment.categories.map((cat) => (
                          <Link
                            key={cat.slug}
                            to="/industry-segments/$segmentSlug"
                            params={{ segmentSlug: segment.slug }}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              padding: "8px 0",
                              borderBottom: "1px solid #F0EDE8",
                              textDecoration: "none",
                              color: "#2B2B2B",
                              fontSize: "0.8125rem",
                              fontWeight: 300,
                              transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => {
                              (
                                e.currentTarget as HTMLAnchorElement
                              ).style.color = "#B8956A";
                            }}
                            onMouseLeave={(e) => {
                              (
                                e.currentTarget as HTMLAnchorElement
                              ).style.color = "#2B2B2B";
                            }}
                            data-ocid={`segments.item.${i + 1}`}
                          >
                            <span>{cat.title}</span>
                            <ChevronRight
                              size={12}
                              style={{
                                color: "#B8956A",
                                opacity: 0.6,
                                flexShrink: 0,
                              }}
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
