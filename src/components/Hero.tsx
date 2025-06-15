
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import CTAButton from "./CTAButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { Scissors, Palette, Sparkles } from "lucide-react";

const Hero = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  return (
    <section className={cn(
      "relative py-20 lg:py-32 px-4 overflow-hidden",
      isDark 
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
        : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
    )}>
      {/* Floating Icons */}
      <Scissors className="absolute top-1/4 left-1/4 w-12 h-12 text-blue-500/10 opacity-50 -rotate-12 animate-[spin_20s_linear_infinite]" />
      <Sparkles className="absolute bottom-1/4 right-1/4 w-16 h-16 text-purple-500/10 opacity-50 rotate-12 animate-[spin_25s_linear_infinite_reverse]" />
      <Palette className="absolute top-1/3 right-1/2 w-10 h-10 text-green-500/10 opacity-50 animate-[spin_15s_linear_infinite]" />

      <div className="relative container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left z-10">
          <div className="mb-8">
            <h1 className={cn(
              "text-4xl md:text-6xl font-bold mb-6 leading-tight",
              isDark ? "text-white" : "text-gray-900"
            )}>
              {t("heroTitle1")}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">{t("heroTitle2")}</span>
            </h1>
            <p className={cn(
              "text-xl md:text-2xl mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed",
              isDark ? "text-gray-300" : "text-gray-700"
            )}>
              {t("heroSubtitle")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <CTAButton href="/training" variant="primary" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              {t("joinTrainingProgram")}
            </CTAButton>
            <CTAButton href="#pricing" variant="secondary" className="text-lg px-8 py-4">
              {t("viewPricing")}
            </CTAButton>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-sm lg:max-w-none">
            <div className={cn(
              "absolute -inset-4 rounded-full blur-2xl",
              isDark ? "bg-purple-600/20" : "bg-blue-300/40"
            )} aria-hidden="true"></div>
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80" 
              alt="Stylish woman in a walk-in closet" 
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
            />
            <div className={cn("absolute -bottom-8 -right-8 w-40 h-40 rounded-full -z-10", isDark ? "bg-blue-600/5" : "bg-blue-200/20")} aria-hidden="true"></div>
            <div className={cn("absolute -top-8 -left-8 w-32 h-32 rounded-full -z-10", isDark ? "bg-purple-600/5" : "bg-purple-200/20")} aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
