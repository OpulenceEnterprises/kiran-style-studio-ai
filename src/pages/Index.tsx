
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import ProductPreviewGrid from "@/components/ProductPreviewGrid";
import PricingTable from "@/components/PricingTable";
import ContactForm from "@/components/ContactForm";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { PackageCheck, Palette, Ruler } from "lucide-react";

const Index = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  return (
    <>
      <Hero />
      
      <div className="max-w-6xl mx-auto px-4 space-y-16 py-16">
        <PricingTable />
        <ProductPreviewGrid />
        <Testimonials />
        <ContactForm />
      </div>

      {/* Coming Soon Section */}
      <section className={cn(
        "py-16 border-t",
        isDark ? "border-gray-800" : "border-gray-200"
      )}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className={cn(
            "text-2xl font-bold mb-4",
            isDark ? "text-white" : "text-gray-900"
          )}>
            {t('moreFeatures')}
          </h3>
          <div className={cn(
            "mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-lg",
            isDark ? "text-gray-400" : "text-gray-600"
          )}>
            <div className="flex items-center gap-2">
              <PackageCheck size={20} className="text-blue-500" />
              <span>{t('onlineOrderTracking')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Ruler size={20} className="text-blue-500" />
              <span>{t('womensFitGuides')}</span>
            </div>
            <div className="flex items-center gap-2">
              <Palette size={20} className="text-blue-500" />
              <span>{t('fabricCatalog')}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
