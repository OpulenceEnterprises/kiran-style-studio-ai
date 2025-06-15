
import { FC, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const links = [
    { label: t("services"), href: "/#services" },
    { label: t("pricing"), href: "/#pricing" },
    { label: t("products"), href: "/products" },
    { label: t("aboutUs"), href: "/about" },
    { label: t("contact"), href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className={cn(
        "backdrop-blur-xl border-b shadow-lg transition-all duration-300",
        isDark 
          ? "bg-gray-900/90 border-gray-700" 
          : "bg-white/90 border-gray-200",
        "px-4 md:px-8 py-4",
        "flex items-center justify-between"
      )}>
        {/* Brand */}
        <a href="/" className="flex items-center gap-3 group">
          <div className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg transition-colors",
            isDark ? "bg-blue-600 text-white" : "bg-blue-600 text-white"
          )}>
            K
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-inter text-xl font-bold transition-colors",
              isDark ? "text-white" : "text-gray-900"
            )}>
              {t("brandName")}
            </span>
            <span className={cn(
              "text-xs font-medium",
              isDark ? "text-gray-400" : "text-gray-600"
            )}>
              {t("brandSubtitle")}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 items-center">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "font-medium transition-colors hover:scale-105 transform duration-200",
                    isDark 
                      ? "text-gray-300 hover:text-white" 
                      : "text-gray-700 hover:text-gray-900"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href="/training"
              className="btn-primary"
            >
              {t("joinTraining")}
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener"
              className={cn(
                "flex items-center gap-2 p-2 rounded-lg transition-colors",
                isDark 
                  ? "text-green-400 hover:bg-gray-800" 
                  : "text-green-600 hover:bg-gray-100"
              )}
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "p-2 rounded-lg transition-colors",
              isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
            )}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={cn(
          "md:hidden fixed inset-x-0 top-full backdrop-blur-xl border-b shadow-lg",
          isDark ? "bg-gray-900/95 border-gray-700" : "bg-white/95 border-gray-200"
        )}>
          <div className="px-4 py-6 space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "block py-3 px-4 rounded-lg font-medium transition-colors",
                  isDark 
                    ? "text-gray-300 hover:text-white hover:bg-gray-800" 
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/training"
              className="btn-primary block text-center"
              onClick={() => setMobileOpen(false)}
            >
              {t("joinTraining")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
