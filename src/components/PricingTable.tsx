
import { FC } from "react";
import SectionHeader from "./SectionHeader";

const pricing = [
  {
    service: "Blouse Stitching",
    description: "Classic or designer tailoring included.",
    price: "₹550",
  },
  {
    service: "Saree Fall & Pico",
    description: "Perfect finish for all sarees.",
    price: "₹180",
  },
  {
    service: "Kurti/Punjabi Suit",
    description: "Custom-fit, with lining if needed.",
    price: "₹400 - ₹700",
  },
  {
    service: "School Uniform (Set)",
    description: "Durable, comfortable, any pattern.",
    price: "₹750+",
  },
  {
    service: "Dress Alteration",
    description: "Shortening, letting in/out, resizing.",
    price: "₹120+",
  },
  {
    service: "Urgent Order Uplift",
    description: "Get it ready in 24 hrs (add-on).",
    price: "+30%",
  }
];

const PricingTable: FC = () => (
  <section
    id="pricing"
    className="section-bg bg-gradient-to-b from-blush-light/60 via-white to-cream-light border border-blush-light my-10 animate-fade-in shadow-lux-glass"
  >
    <SectionHeader
      title="Transparent Pricing"
      subtitle="No surprises. All prices include consultation and custom fittings."
    />
    <div className="max-w-2xl mx-auto">
      <div className="overflow-hidden rounded-2xl shadow-lux-glass border bg-white/90">
        <table className="w-full text-base font-poppins">
          <thead>
            <tr className="bg-blush-light/80 text-blush-DEFAULT">
              <th className="py-3 px-3 text-left">Service</th>
              <th className="py-3 px-2 text-left">Details</th>
              <th className="py-3 px-2 text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {pricing.map((p) => (
              <tr
                key={p.service}
                className="border-t border-blush-light hover:bg-sand-light/50 transition"
              >
                <td className="py-2 px-3 font-semibold">{p.service}</td>
                <td className="py-2 px-2 text-gray-600">{p.description}</td>
                <td className="py-2 px-2 text-right font-bold text-teal-DEFAULT">{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 text-xs text-center text-gray-500">
        For bulk, bridal or unique work,{" "}
        <a href="#contact" className="underline text-teal-DEFAULT">
          contact us for a quote
        </a>
        .
      </div>
    </div>
  </section>
);

export default PricingTable;
