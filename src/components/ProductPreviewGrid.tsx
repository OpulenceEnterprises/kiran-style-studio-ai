
import { FC, useState } from "react";
import SectionHeader from "./SectionHeader";
import { Image } from "lucide-react";

// Example product data
const categories = ["Bridal", "Formal", "Kidswear", "Uniforms", "Custom"];
const allProducts = [
  {
    title: "Bridal Lehenga",
    category: "Bridal",
    img: "https://images.unsplash.com/photo-1519748793657-b6d6c31c0b6e?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Formal Suit",
    category: "Formal",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Kids Party Frock",
    category: "Kidswear",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "School Uniform",
    category: "Uniforms",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Designer Kurti",
    category: "Custom",
    img: "https://images.unsplash.com/photo-1530845645112-0f7c1f1ab7d5?auto=format&fit=crop&w=400&q=80",
  },
];

const ProductPreviewGrid: FC = () => {
  const [filter, setFilter] = useState("All");
  const showProducts =
    filter === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === filter);
  return (
    <section id="products" className="section-bg glassy shadow-lux-glass">
      <SectionHeader
        title="Our Products"
        subtitle="A glimpse at our bespoke tailoring—from bridal couture to everyday wear."
      >
        <div className="flex gap-2 mt-2 flex-wrap justify-center">
          <button
            className={`px-4 py-1 rounded-xl border text-sm font-poppins transition
              ${filter === "All" ? "bg-teal-DEFAULT text-white" : "bg-blush-light text-gray-700 border-blush"}`}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-1 rounded-xl border text-sm font-poppins transition
                ${filter === cat ? "bg-teal-DEFAULT text-white" : "bg-blush-light text-gray-700 border-blush"}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
        {showProducts.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl bg-white/80 shadow-lux-soft hover:shadow-lg overflow-hidden flex flex-col border-blush border glassy transition"
          >
            <div className="w-full aspect-square bg-cream-light flex items-center justify-center overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="object-cover w-full h-full transition scale-100 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex flex-col gap-2 flex-grow">
              <div className="font-semibold font-marcellus text-lg text-gray-800 flex gap-2 items-center mb-1">
                <Image size={18} className="text-blush-DEFAULT" />
                {p.title}
              </div>
              <div className="text-xs rounded px-2 py-1 bg-blush-light text-blush-DEFAULT inline-block w-max mb-2">
                {p.category}
              </div>
              <button className="mt-auto bg-teal-DEFAULT text-white rounded-xl px-4 py-2 font-poppins font-semibold shadow hover:scale-105 transition">
                Request Custom Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPreviewGrid;
