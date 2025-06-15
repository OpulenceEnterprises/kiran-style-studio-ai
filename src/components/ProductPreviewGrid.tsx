
import { FC } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { ArrowRight, Scissors } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKey } from "@/lib/translations";

const featuredProductsData = [
  {
    id: 1,
    titleKey: "bridalLehengaTitle",
    category: "Bridal",
    price: "₹15,000+",
    img: "https://images.unsplash.com/photo-1631846999951-f74e36502322?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    titleKey: "formalBusinessSuitTitle",
    category: "Formal",
    price: "₹8,000+",
    img: "https://images.unsplash.com/photo-1574785422324-4093b5db4607?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    titleKey: "designerKurtiTitle",
    category: "Custom",
    price: "₹1,200+",
    img: "/lovable-uploads/b2caa58b-3cdd-4947-909b-7d388faadf13.png",
  },
];

const ProductPreviewGrid: FC = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const featuredProducts = featuredProductsData.map(p => ({
    ...p,
    title: t(p.titleKey as TranslationKey),
  }));

  return (
    <section id="products" className={cn(
      "section-bg py-16 px-8",
      isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"
    )}>
      <SectionHeader
        title={t("featuredProducts")}
        subtitle={t("featuredProductsSubtitle")}
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
              
              <button className="btn-primary w-full flex items-center justify-center gap-2">
                <Scissors size={18} />
                {t('requestCustomOrder')}
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
          {t("viewAllProducts")}
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default ProductPreviewGrid;
