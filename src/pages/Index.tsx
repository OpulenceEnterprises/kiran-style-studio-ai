
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import ProductPreviewGrid from "@/components/ProductPreviewGrid";
import PricingTable from "@/components/PricingTable";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const Index = () => {
  const { isDark } = useTheme();

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-300",
      isDark ? "bg-gray-900" : "bg-gray-50"
    )}>
      <Navbar />

      <main className="pt-20">
        <Hero />
        
        <div className="max-w-6xl mx-auto px-4 space-y-16 py-16">
          <PricingTable />
          <ProductPreviewGrid />
          <Testimonials />
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
              More Features Coming Soon
            </h3>
            <p className={cn(
              "text-lg",
              isDark ? "text-gray-400" : "text-gray-600"
            )}>
              AI Stylist • Advanced Pricing Calculator • Course Registration • Contact & Location
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
