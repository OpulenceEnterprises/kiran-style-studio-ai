
import { FC } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const About: FC = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  return (
    <div className={cn(
      "pb-16",
      isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
    )}>
      <div className="max-w-5xl mx-auto px-4 pt-12">
        <Link 
          to="/" 
          className={cn(
            "inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors",
            isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
          )}
        >
          <ArrowLeft size={16} />
          {t("backToHome")}
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("aboutTitle")}</h1>
            <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">{t("aboutSubtitle")}</p>
            <div className="space-y-4 text-gray-700 dark:text-gray-400">
              <p>{t("aboutParagraph1")}</p>
              <p>{t("aboutParagraph2")}</p>
              <p>{t("aboutParagraph3")}</p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img 
              src="/lovable-uploads/0cc43818-a88a-46a2-9e27-409e81421141.png"
              alt="Kiran Devi"
              className="rounded-lg shadow-xl w-full h-auto object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
