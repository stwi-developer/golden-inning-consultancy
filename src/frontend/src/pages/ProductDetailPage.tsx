import { Link, useParams } from "@tanstack/react-router";
import { ChevronRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { findCategoryBySlug, findSegmentBySlug } from "../data/industryData";

const GOLD = "oklch(0.54 0.10 68)";

// ✏️ TO CHANGE CATEGORY FALLBACK IMAGES: Update the image path for each category slug below.
// These are used when a product does not have its own individual image set.
const CATEGORY_IMAGES: Record<string, string> = {
  // Dry Mix Construction Chemicals
  "tile-adhesives": "/assets/generated/cat-dry-mix.dim_800x500.jpg",
  "tile-grouts": "/assets/generated/cat-dry-mix.dim_800x500.jpg",
  "skim-coat-wall-putty": "/assets/generated/cat-dry-mix.dim_800x500.jpg",
  "repair-mortars": "/assets/generated/cat-dry-mix.dim_800x500.jpg",
  // Waterproofing Systems
  "cementitious-waterproofing":
    "/assets/generated/cat-waterproofing.dim_800x500.jpg",
  "acrylic-coatings": "/assets/generated/cat-waterproofing.dim_800x500.jpg",
  "pu-coatings": "/assets/generated/cat-waterproofing.dim_800x500.jpg",
  "waterproofing-liquid": "/assets/generated/cat-waterproofing.dim_800x500.jpg",
  // Specialty Construction Chemicals
  "concrete-admixtures": "/assets/generated/cat-specialty.dim_800x500.jpg",
  "industrial-grouts": "/assets/generated/cat-specialty.dim_800x500.jpg",
  "industrial-flooring": "/assets/generated/cat-specialty.dim_800x500.jpg",
  "protective-coatings": "/assets/generated/cat-specialty.dim_800x500.jpg",
};

export default function ProductDetailPage() {
  const { segmentSlug, categorySlug } = useParams({ strict: false }) as {
    segmentSlug: string;
    categorySlug: string;
  };

  const segment = findSegmentBySlug(segmentSlug);
  const category = findCategoryBySlug(segmentSlug, categorySlug);

  const categoryFallbackImage =
    CATEGORY_IMAGES[categorySlug] ??
    "/assets/generated/cat-dry-mix.dim_800x500.jpg";

  if (!segment || !category) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="py-36 container mx-auto px-6 text-center">
          <p className="text-muted-foreground">Category not found.</p>
          <Link
            to="/industry-segments"
            style={{ color: "#B8956A" }}
            className="text-sm mt-4 inline-block"
          >
            ← Back to Industry Segments
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <div
          className="py-24"
          style={{
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid #EAEAEA",
          }}
        >
          <div className="container mx-auto px-6">
            {/* Breadcrumb */}
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
              <Link
                to="/industry-segments/$segmentSlug"
                params={{ segmentSlug: segment.slug }}
                className="text-xs font-light transition-colors"
                style={{ color: GOLD }}
                data-ocid="breadcrumb.link.3"
              >
                {segment.title}
              </Link>
              <ChevronRight size={12} style={{ color: "#9A9590" }} />
              <span className="text-xs font-light" style={{ color: "#2B2B2B" }}>
                {category.title}
              </span>
            </nav>

            <p
              className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
              style={{ color: GOLD }}
            >
              {segment.title}
            </p>
            <h1 className="font-bricolage text-3xl lg:text-4xl font-semibold text-foreground mb-4 max-w-2xl">
              {category.title}
            </h1>
            <p
              className="text-sm font-light leading-loose max-w-2xl"
              style={{ color: "oklch(0.48 0.03 65)" }}
            >
              {category.description}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div
          className="py-16"
          style={{ backgroundColor: "#FAFAFA", borderTop: "1px solid #EAEAEA" }}
        >
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <p
                className="text-xs font-medium tracking-[0.15em] uppercase mb-2"
                style={{ color: GOLD }}
              >
                Range
              </p>
              <h2 className="font-bricolage text-2xl font-semibold text-foreground">
                Products in this Category
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.products.map((product, i) => (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  data-ocid={`product.item.${i + 1}`}
                  style={{
                    border: "1px solid #EAEAEA",
                    background: "#fff",
                    borderRadius: "2px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                    <img
                      src={product.image ?? categoryFallbackImage}
                      alt={product.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "brightness(0.96) saturate(0.88)",
                        display: "block",
                      }}
                    />
                  </div>
                  <div style={{ padding: "16px 20px 20px" }}>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "#1A1A1A",
                        marginBottom: "8px",
                        lineHeight: 1.4,
                      }}
                    >
                      {product.name}
                    </p>
                    <p
                      style={{
                        fontSize: "0.775rem",
                        fontWeight: 300,
                        color: "#6B6560",
                        lineHeight: 1.9,
                      }}
                    >
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="py-36"
          style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #EAEAEA" }}
        >
          <style>
            {".product-cta-btn:hover { background-color: #F5F0E8 !important; }"}
          </style>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-lg mx-auto text-center"
            >
              <p
                className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
                style={{ color: GOLD }}
              >
                Consultancy Advisory
              </p>
              <h2 className="font-bricolage text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                Ready to set up manufacturing for this product range?
              </h2>
              <p className="text-sm font-light text-muted-foreground mb-10 leading-loose">
                Our consultancy advisory covers plant setup, formulation
                development and production stabilisation.
              </p>
              <a
                data-ocid="product.primary_button"
                href="mailto:devrajgohil@gmail.com"
                className="product-cta-btn inline-flex items-center gap-2 px-8 py-3.5 text-sm font-normal transition-all"
                style={{
                  border: "1px solid #B8956A",
                  color: "#B8956A",
                  backgroundColor: "transparent",
                  borderRadius: "6px",
                }}
              >
                <Mail size={16} strokeWidth={1.5} />
                Request Consultation
              </a>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
