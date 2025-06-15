import { FC, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKey } from "@/lib/translations";
import Navbar from "@/components/Navbar";

const categories = [
  { labelKey: "all", filterValue: "All" },
  { labelKey: "bridal", filterValue: "Bridal" },
  { labelKey: "formal", filterValue: "Formal" },
  { labelKey: "kidswear", filterValue: "Kidswear" },
  { labelKey: "uniforms", filterValue: "Uniforms" },
  { labelKey: "custom", filterValue: "Custom" },
] as const;

const allProductsData = [
  {
    id: 1,
    titleKey: "bridalLehengaTitle",
    descriptionKey: "bridalLehengaDesc",
    category: "Bridal",
    price: "₹15,000+",
    img: "https://images.unsplash.com/photo-1519748793657-b6d6c31c0b6e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    titleKey: "weddingSareeBlouseTitle",
    descriptionKey: "weddingSareeBlouseDesc",
    category: "Bridal",
    price: "₹2,500+",
    img: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    titleKey: "formalBusinessSuitTitle",
    descriptionKey: "formalBusinessSuitDesc",
    category: "Formal",
    price: "₹8,000+",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    titleKey: "designerKurtiTitle",
    descriptionKey: "designerKurtiDesc",
    category: "Formal",
    price: "₹1,200+",
    img: "/lovable-uploads/b2caa58b-3cdd-4947-909b-7d388faadf13.png",
  },
  {
    id: 5,
    titleKey: "kidsPartyDressTitle",
    descriptionKey: "kidsPartyDressDesc",
    category: "Kidswear",
    price: "₹800+",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    titleKey: "schoolUniformSetTitle",
    descriptionKey: "schoolUniformSetDesc",
    category: "Uniforms",
    price: "₹750+",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 7,
    titleKey: "customEveningGownTitle",
    descriptionKey: "customEveningGownDesc",
    category: "Custom",
    price: "₹12,000+",
    img: "https://images.unsplash.com/photo-1566479179817-c2db8fd7dda6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    titleKey: "traditionalAnarkaliTitle",
    descriptionKey: "traditionalAnarkaliDesc",
    category: "Custom",
    price: "₹3,500+",
    img: "https://images.unsplash.com/photo-1582991112763-2d85c6e88bf8?auto=format&fit=crop&w=600&q=80",
  },
];

const Products: FC = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  const [filter, setFilter] = useState("All");

  const allProducts = allProductsData.map(p => ({
    ...p,
    title: t(p.titleKey as TranslationKey),
    description: t(p.descriptionKey as TranslationKey),
  }));
  
  const filteredProducts = filter === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === filter);

  return (
    <>
      <Navbar />
      <div className={cn(
        "min-h-screen pt-32 pb-16",
        isDark ? "bg-gray-900" : "bg-gray-50"
      )}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <Link 
              to="/" 
              className={cn(
                "inline-flex items-center gap-2 mb-6 text-sm font-medium transition-colors",
                isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
              )}
            >
              <ArrowLeft size={16} />
              {t('backToHome')}
            </Link>
            
            <h1 className={cn(
              "text-4xl md:text-5xl font-bold mb-4",
              isDark ? "text-white" : "text-gray-900"
            )}>
              {t('ourProducts')}
            </h1>
            <p className={cn(
              "text-xl max-w-2xl",
              isDark ? "text-gray-300" : "text-gray-600"
            )}>
              {t('productsSubtitle')}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.filterValue}
                onClick={() => setFilter(category.filterValue)}
                className={cn(
                  "px-6 py-3 rounded-xl font-medium transition-all duration-200 border",
                  filter === category.filterValue
                    ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                    : isDark
                      ? "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                )}
              >
                {t(category.labelKey)}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
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
                        "font-semibold text-lg mb-1",
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
                  
                  <p className={cn(
                    "text-sm mb-4 line-clamp-2",
                    isDark ? "text-gray-300" : "text-gray-600"
                  )}>
                    {product.description}
                  </p>
                  
                  <button className="btn-primary w-full">
                    {t('requestCustomOrder')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
