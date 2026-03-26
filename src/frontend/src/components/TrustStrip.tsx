import { Clock, Factory, FlaskConical, Globe } from "lucide-react";

const items = [
  { icon: Clock, text: "34+ Years Industry Experience" },
  { icon: Factory, text: "Manufacturing Leadership Expertise" },
  { icon: Globe, text: "Global Consultancy Support" },
  { icon: FlaskConical, text: "Construction Chemical Industry Specialists" },
];

export default function TrustStrip() {
  return (
    <div
      className="py-10"
      style={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #EAEAEA",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, idx) => (
            <div
              key={item.text}
              className={`flex items-center gap-3 ${
                idx < items.length - 1 ? "lg:border-r lg:pr-4" : ""
              }`}
              style={{
                borderColor: "#EAEAEA",
              }}
            >
              <item.icon
                size={20}
                className="flex-shrink-0"
                style={{ color: "oklch(0.54 0.10 68)", strokeWidth: 1.5 }}
              />
              <span
                className="text-sm font-normal"
                style={{ color: "#2B2B2B" }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
