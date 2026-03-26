import { Factory, MapPin, Monitor, Users } from "lucide-react";
import { motion } from "motion/react";

const regions = ["India", "Asia", "Africa", "GCC Countries"];
const deliveryModes = [
  { icon: Monitor, text: "Online advisory" },
  { icon: Users, text: "Project consultation" },
  { icon: Factory, text: "Manufacturing setup guidance" },
];

export default function GlobalConsultancy() {
  return (
    <div
      className="py-36 relative overflow-hidden"
      style={{ backgroundColor: "#FAFAFA", borderTop: "1px solid #EAEAEA" }}
    >
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-xs font-medium tracking-[0.15em] uppercase mb-4"
              style={{ color: "oklch(0.54 0.10 68)" }}
            >
              Our Reach
            </p>
            <h2
              className="font-bricolage text-3xl lg:text-4xl font-semibold mb-6 leading-tight"
              style={{ color: "#2B2B2B" }}
            >
              Global Consultancy Reach
            </h2>
            <p
              className="font-light text-sm leading-loose"
              style={{ color: "oklch(0.40 0.02 60)" }}
            >
              Golden Inning provides consultancy services for construction
              chemical manufacturing projects across regions worldwide,
              delivering expert guidance from plant conception to first
              commercial dispatch.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Region badges */}
            <div className="mb-12">
              <p
                className="text-xs font-medium tracking-[0.15em] uppercase mb-5"
                style={{ color: "oklch(0.54 0.10 68)" }}
              >
                Regions Served
              </p>
              <div className="flex flex-wrap gap-3">
                {regions.map((region) => (
                  <div
                    key={region}
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-light"
                    style={{
                      backgroundColor: "white",
                      color: "#2B2B2B",
                      border: "1px solid #E8E4DC",
                      borderRadius: "6px",
                    }}
                  >
                    <MapPin
                      size={12}
                      style={{ color: "oklch(0.54 0.10 68)", strokeWidth: 1.5 }}
                    />
                    {region}
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery modes */}
            <div>
              <p
                className="text-xs font-medium tracking-[0.15em] uppercase mb-5"
                style={{ color: "oklch(0.54 0.10 68)" }}
              >
                Services Delivered Through
              </p>
              <ul className="space-y-5">
                {deliveryModes.map((mode) => (
                  <li key={mode.text} className="flex items-center gap-4">
                    <mode.icon
                      size={20}
                      style={{ color: "oklch(0.54 0.10 68)", strokeWidth: 1.5 }}
                    />
                    <span
                      className="text-sm font-light"
                      style={{ color: "oklch(0.40 0.02 60)" }}
                    >
                      {mode.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
