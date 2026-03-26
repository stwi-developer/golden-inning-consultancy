import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function About() {
  return (
    <div
      className="py-36 bg-white"
      id="about"
      style={{ borderTop: "1px solid #EAEAEA" }}
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden rounded-sm">
              <img
                src="/assets/generated/about-tileadhesive-plant.dim_800x600.jpg"
                alt="Tile adhesive and construction chemical manufacturing facility"
                className="w-full h-80 lg:h-96 object-cover"
                style={{ filter: "brightness(0.96) saturate(0.88)" }}
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p
              className="text-xs font-medium tracking-[0.15em] uppercase mb-4"
              style={{ color: "oklch(0.58 0.10 68)" }}
            >
              About Us
            </p>
            <h2 className="font-bricolage text-3xl lg:text-4xl font-semibold text-foreground mb-8 leading-tight">
              About Golden Inning
            </h2>
            <div className="space-y-5" style={{ color: "oklch(0.42 0.02 60)" }}>
              <p className="text-sm font-light leading-loose">
                Golden Inning is an independent professional consultancy led by{" "}
                <strong className="text-foreground font-semibold">
                  Devraj Gohil
                </strong>
                , offering expert advisory services across construction chemical
                manufacturing — from dry mix plants and tile adhesive facilities
                to wall putty and waterproofing production setups.
              </p>
              <p className="text-sm font-light leading-loose">
                With over 34 years of manufacturing and industry leadership
                experience, the consultancy provides strategic, neutral, and
                independent guidance to promoters, investors and manufacturers
                seeking to establish or grow construction chemical manufacturing
                operations.
              </p>
              <p className="text-sm font-light leading-loose">
                The advisory focus spans plant setup, production stabilisation,
                product portfolio development and business strategy — always
                aligned with the client's specific goals and market context.
              </p>
            </div>
            <div className="mt-10">
              <Button
                data-ocid="about.secondary_button"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-normal"
                style={{ borderRadius: "6px" }}
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Enquire About Advisory Services
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
