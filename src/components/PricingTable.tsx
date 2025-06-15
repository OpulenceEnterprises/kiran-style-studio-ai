
import { FC } from "react";
import SectionHeader from "./SectionHeader";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Shirt, Scissors, Tag, Zap } from "lucide-react";
import { Whatsapp } from "./Whatsapp";

const pricing = [
  {
    service: "Blouse Stitching",
    description: "Classic or designer tailoring included.",
    price: "₹550",
    icon: Shirt,
  },
  {
    service: "Saree Fall & Pico",
    description: "Perfect finish for all sarees.",
    price: "₹180",
    icon: Tag,
  },
  {
    service: "Kurti/Punjabi Suit",
    description: "Custom-fit, with lining if needed.",
    price: "₹400 - ₹700",
    icon: Shirt,
  },
  {
    service: "School Uniform (Set)",
    description: "Durable, comfortable, any pattern.",
    price: "₹750+",
    icon: Shirt,
  },
  {
    service: "Dress Alteration",
    description: "Shortening, letting in/out, resizing.",
    price: "₹120+",
    icon: Scissors,
  },
  {
    service: "Urgent Order Uplift",
    description: "Get it ready in 24 hrs (add-on).",
    price: "+30%",
    icon: Zap,
  },
];

const PricingTable: FC = () => {
  const { isDark } = useTheme();

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hi! I'd like to get a quote for bulk/bridal/unique work. Please provide pricing details.");
    window.open(`https://wa.me/919263267023?text=${message}`, '_blank');
  };

  return (
    <section id="pricing" className={cn(
      "section-bg py-16 px-8",
      isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"
    )}>
      <SectionHeader
        title="Transparent Pricing"
        subtitle="No surprises. All prices include consultation and custom fittings."
      />
      <div className="max-w-4xl mx-auto">
        <div className={cn(
          "overflow-hidden rounded-2xl shadow-lg border",
          isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        )}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className={cn(
                  "border-b",
                  isDark ? "bg-gray-700 text-blue-400 border-gray-600" : "bg-blue-50 text-blue-800 border-blue-200"
                )}>
                  <th className="py-4 px-4 text-left font-semibold">Service</th>
                  <th className="py-4 px-4 text-left font-semibold">Details</th>
                  <th className="py-4 px-4 text-right font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((p, index) => (
                  <tr
                    key={p.service}
                    className={cn(
                      "border-b transition-colors",
                      isDark 
                        ? "border-gray-700 hover:bg-gray-700/50" 
                        : "border-gray-100 hover:bg-gray-50",
                      index % 2 === 0 
                        ? isDark ? "bg-gray-800/30" : "bg-gray-50/30"
                        : ""
                    )}
                  >
                    <td className={cn(
                      "py-4 px-4 font-semibold",
                      isDark ? "text-white" : "text-gray-900"
                    )}>
                      <div className="flex items-center gap-3">
                        <p.icon className={cn("w-5 h-5", isDark ? "text-blue-400" : "text-blue-600")} />
                        <span>{p.service}</span>
                      </div>
                    </td>
                    <td className={cn(
                      "py-4 px-4",
                      isDark ? "text-gray-300" : "text-gray-600"
                    )}>
                      {p.description}
                    </td>
                    <td className={cn(
                      "py-4 px-4 text-right font-bold text-lg",
                      isDark ? "text-blue-400" : "text-blue-600"
                    )}>
                      {p.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className={cn(
            "mb-6 text-sm",
            isDark ? "text-gray-400" : "text-gray-600"
          )}>
            For bulk, bridal or unique work, get a personalized quote
          </div>
          
          <button
            onClick={handleWhatsAppContact}
            className={cn(
              "inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105",
              "bg-green-600 hover:bg-green-700 text-white"
            )}
          >
            <Whatsapp className="h-6 w-6" />
            Contact via WhatsApp for Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
