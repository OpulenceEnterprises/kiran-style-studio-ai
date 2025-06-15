
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import CTAButton from "./CTAButton";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  return (
    <section className={cn(
      "relative py-20 px-4 overflow-hidden",
      isDark 
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" 
        : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
    )}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className={cn(
            "text-4xl md:text-6xl font-bold mb-6 leading-tight",
            isDark ? "text-white" : "text-gray-900"
          )}>
            {t("heroTitle1")}<br />
            <span className="text-blue-600">{t("heroTitle2")}</span>
          </h1>
          <p className={cn(
            "text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed",
            isDark ? "text-gray-300" : "text-gray-700"
          )}>
            {t("heroSubtitle")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <CTAButton href="#contact" variant="primary" className="text-lg px-8 py-4">
            {t("bookConsultation")}
          </CTAButton>
          <CTAButton href="/training" variant="primary" className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            {t("joinTrainingProgram")}
          </CTAButton>
          <CTAButton href="#pricing" variant="secondary" className="text-lg px-8 py-4">
            {t("viewPricing")}
          </CTAButton>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto">
          <div className={cn(
            "rounded-2xl overflow-hidden shadow-2xl border-2",
            isDark ? "border-gray-700" : "border-gray-200"
          )}>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/fu5pBW7tZBY?rel=0&amp;autoplay=0&amp;mute=1"
                title="Kiran's Studio Introduction"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
          <p className={cn(
            "mt-4 text-sm",
            isDark ? "text-gray-400" : "text-gray-600"
          )}>
            {t("videoCaption")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
