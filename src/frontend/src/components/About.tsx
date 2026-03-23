import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm shadow-xl">
              <img
                src="/assets/generated/about-tileadhesive-plant.dim_800x600.jpg"
                alt="Tile adhesive and construction chemical manufacturing facility"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
            {/* Accent block */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded opacity-10"
              style={{ backgroundColor: "oklch(0.32 0.08 145)" }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: "oklch(0.32 0.08 145)" }}
            >
              About Us
            </p>
            <h2 className="font-bricolage text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              About Golden Inning
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Golden Inning is an independent professional consultancy led by{" "}
                <strong className="text-foreground font-semibold">
                  Devraj Gohil
                </strong>
                , offering expert advisory services across construction chemical
                manufacturing — from dry mix plants and tile adhesive facilities
                to wall putty and waterproofing production setups.
              </p>
              <p>
                With over 34 years of manufacturing and industry leadership
                experience, the consultancy provides strategic, neutral, and
                independent guidance to promoters, investors and manufacturers
                seeking to establish or grow construction chemical manufacturing
                operations.
              </p>
              <p className="text-sm">
                The advisory focus spans plant setup, production stabilisation,
                product portfolio development and business strategy — always
                aligned with the client's specific goals and market context.
              </p>
            </div>
            <div className="mt-8">
              <Button
                data-ocid="about.secondary_button"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
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
