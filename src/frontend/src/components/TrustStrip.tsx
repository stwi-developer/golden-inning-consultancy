import { Clock, Factory, FlaskConical, Globe } from "lucide-react";

const items = [
  { icon: Clock, text: "34+ Years Industry Experience" },
  { icon: Factory, text: "Manufacturing Leadership Expertise" },
  { icon: Globe, text: "Global Consultancy Support" },
  { icon: FlaskConical, text: "Construction Chemical Industry Specialists" },
];

export default function TrustStrip() {
  return (
    <div className="py-4" style={{ backgroundColor: "oklch(0.32 0.08 145)" }}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <div
              key={item.text}
              className={`flex items-center gap-3 text-white ${
                idx < items.length - 1
                  ? "lg:border-r lg:border-white/20 lg:pr-4"
                  : ""
              }`}
            >
              <item.icon size={18} className="flex-shrink-0 text-white/70" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
