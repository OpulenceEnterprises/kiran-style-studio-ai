
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
      
      <div className="max-w-6xl mx-auto px-4 space-y-12 py-12">
        <PricingTable />
        <ProductPreviewGrid />
        <Testimonials />
        <ContactForm />
      </div>

      {/* Coming Soon Section */}
      <section className={cn(
        "py-12 border-t",
        isDark ? "border-gray-800" : "border-gray-200"
      )}>
        <div className="max-w-6xl mx-auto text-center px-4">
          <h3 className={cn(
            "text-3xl font-bold mb-4",
            isDark ? "text-white" : "text-gray-900"
          )}>
            {t('moreFeatures')}
          </h3>
          <p className={cn("text-lg mb-12 max-w-2xl mx-auto", isDark ? "text-gray-400" : "text-gray-600")}>
            We're always working on new ways to improve your experience. Here's what's coming soon.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="relative rounded-lg overflow-hidden p-6 flex flex-col justify-end min-h-[300px] group shadow-lg">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110" style={{backgroundImage: "url('https://images.unsplash.com/photo-1549062572-544a64fb0c56?auto=format&fit=crop&w=600&q=80')"}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative text-white">
                <Ruler size={32} className="mb-3 text-blue-400" />
                <h4 className="font-bold text-xl mb-1">{t('womensFitGuides')}</h4>
                <p className="text-sm text-gray-300">Detailed guides to help you find the perfect fit.</p>
              </div>
            </div>
            
            <div className="relative rounded-lg overflow-hidden p-6 flex flex-col justify-end min-h-[300px] group shadow-lg">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110" style={{backgroundImage: "url('https://images.unsplash.com/photo-1620799140408-7449a6d871b3?auto=format&fit=crop&w=600&q=80')"}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative text-white">
                <Palette size={32} className="mb-3 text-blue-400" />
                <h4 className="font-bold text-xl mb-1">{t('fabricCatalog')}</h4>
                <p className="text-sm text-gray-300">Browse our collection of high-quality fabrics.</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden p-6 flex flex-col justify-end min-h-[300px] group shadow-lg">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110" style={{backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-01dd4c334aa9?auto=format&fit=crop&w=600&q=80')"}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative text-white">
                <PackageCheck size={32} className="mb-3 text-blue-400" />
                <h4 className="font-bold text-xl mb-1">{t('onlineOrderTracking')}</h4>
                <p className="text-sm text-gray-300">Track your custom orders from our studio to your door.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
