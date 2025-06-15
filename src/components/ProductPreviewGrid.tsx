
import { FC } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { ArrowRight, Image } from "lucide-react";
import SectionHeader from "./SectionHeader";

const featuredProducts = [
  {
    id: 1,
    title: "Bridal Lehenga",
    category: "Bridal",
    price: "₹15,000+",
    img: "https://images.unsplash.com/photo-1519748793657-b6d6c31c0b6e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Formal Business Suit",
    category: "Formal",
    price: "₹8,000+",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Designer Kurti",
    category: "Custom",
    price: "₹1,200+",
    img: "https://images.unsplash.com/photo-1530845645112-0f7c1f1ab7d5?auto=format&fit=crop&w=600&q=80",
  },
];

const ProductPreviewGrid: FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="products" className={cn(
      "section-bg py-16 px-8",
      isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"
    )}>
      <SectionHeader
        title="Featured Products"
        subtitle="A glimpse at our bespoke tailoring—from bridal couture to everyday wear."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className={cn(
              "card-professional overflow-hidden group",
              isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            )}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className={cn(
                    "font-semibold text-lg mb-2",
                    isDark ? "text-white" : "text-gray-900"
                  )}>
                    {product.title}
                  </h3>
                  <span className={cn(
                    "text-xs px-3 py-1 rounded-full",
                    isDark ? "bg-blue-900/50 text-blue-400" : "bg-blue-100 text-blue-700"
                  )}>
                    {product.category}
                  </span>
                </div>
                <div className={cn(
                  "font-bold text-lg",
                  isDark ? "text-blue-400" : "text-blue-600"
                )}>
                  {product.price}
                </div>
              </div>
              
              <button className="btn-primary w-full">
                Request Custom Order
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link 
          to="/products" 
          className={cn(
            "inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105",
            "btn-secondary"
          )}
        >
          View All Products
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default ProductPreviewGrid;
