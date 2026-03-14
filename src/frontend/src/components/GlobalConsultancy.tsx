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
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.22 0.07 145)" }}
    >
      {/* Subtle world map pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cellipse cx='200' cy='200' rx='180' ry='120' fill='white'/%3E%3Cellipse cx='550' cy='180' rx='220' ry='140' fill='white'/%3E%3Cellipse cx='900' cy='200' rx='160' ry='110' fill='white'/%3E%3Cellipse cx='350' cy='380' rx='140' ry='90' fill='white'/%3E%3Cellipse cx='700' cy='350' rx='200' ry='120' fill='white'/%3E%3Cellipse cx='1050' cy='380' rx='120' ry='80' fill='white'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-white/50">
              Our Reach
            </p>
            <h2 className="font-bricolage text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Global Consultancy Reach
            </h2>
            <p className="text-white/70 leading-relaxed">
              Golden Inning provides consultancy services for construction
              chemical manufacturing projects across regions worldwide,
              delivering expert guidance from plant conception to first
              commercial dispatch.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Region badges */}
            <div className="mb-8">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-white/50">
                Regions Served
              </p>
              <div className="flex flex-wrap gap-3">
                {regions.map((region) => (
                  <div
                    key={region}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium text-white border border-white/20"
                    style={{ backgroundColor: "oklch(0.32 0.08 145 / 0.4)" }}
                  >
                    <MapPin size={13} className="text-white/60" />
                    {region}
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery modes */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4 text-white/50">
                Services Delivered Through
              </p>
              <ul className="space-y-3">
                {deliveryModes.map((mode) => (
                  <li
                    key={mode.text}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "oklch(0.32 0.08 145 / 0.5)" }}
                    >
                      <mode.icon size={15} className="text-white" />
                    </div>
                    <span className="text-sm">{mode.text}</span>
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
