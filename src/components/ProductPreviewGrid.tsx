
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Whatsapp } from "./Whatsapp";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKey } from "@/lib/translations";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const featuredProductsData = [
  {
    id: 1,
    titleKey: "bridalLehengaTitle",
    category: "Bridal",
    price: "₹15,000+",
    imgs: [
      "https://images.unsplash.com/photo-1631846999951-f74e36502322?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596495914041-52648d68962a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1594499468121-4b7e83f56e9c?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: 2,
    titleKey: "formalBusinessSuitTitle",
    category: "Formal",
    price: "₹8,000+",
    imgs: [
      "https://images.unsplash.com/photo-1574785422324-4093b5db4607?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1521577042448-ce3315a45b63?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593032584856-db38662923e9?auto=format&fit=crop&w=600&q=80",
    ],
  },
  {
    id: 3,
    titleKey: "designerKurtiTitle",
    category: "Custom",
    price: "₹1,200+",
    imgs: [
      "/lovable-uploads/b2caa58b-3cdd-4947-909b-7d388faadf13.png",
      "https://images.unsplash.com/photo-1610173826848-936674e34159?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1587515339245-81056574765d?auto=format&fit=crop&w=600&q=80",
    ],
  },
];

const ProductPreviewGrid: FC = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

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
        {featuredProducts.map((product) => {
          const message = `Hello, I'm interested in the ${product.title}. Could you please provide more details about its design and price? Thank you!`;
          const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

          return (
            <div
              key={product.id}
              className={cn(
                "card-professional overflow-hidden group",
                isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
              )}
            >
              <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {product.imgs.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={img}
                          alt={`${product.title} ${index + 1}`}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              
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
                
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Whatsapp className="h-5 w-5" />
                  {t('requestCustomOrder')}
                </a>
              </div>
            </div>
          );
        })}
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
