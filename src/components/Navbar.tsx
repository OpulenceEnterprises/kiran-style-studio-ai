import { FC, useState } from "react";
import { Menu, X, Scissors } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import { Whatsapp } from "./Whatsapp";
import { HashLink } from "react-router-hash-link";

const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const links = [
    { label: "Home", href: "/" },
    { label: t("pricing"), href: "/#pricing" },
    { label: t("products"), href: "/products" },
    { label: t("aboutUs"), href: "/about" },
  ];

  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Adjust this value to match your navbar height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

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
        <HashLink to="/" className="flex items-center gap-3 group">
          <div className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg transition-colors",
            isDark ? "bg-blue-600 text-white" : "bg-blue-600 text-white"
          )}>
            S
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className={cn(
                "font-inter text-xl font-bold transition-colors",
                isDark ? "text-white" : "text-gray-900"
              )}>
                {t("brandName")}
              </span>
              <span className={cn(
                "ml-1.5 text-sm font-medium",
                isDark ? "text-gray-400" : "text-gray-500"
              )}>
                {t("byKiran")}
              </span>
            </div>
            <span className={cn(
              "text-xs font-medium",
              isDark ? "text-gray-400" : "text-gray-600"
            )}>
              {t("brandSubtitle")}
            </span>
          </div>
        </HashLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 items-center">
            {links.map((link) => (
              <li key={link.href}>
                <HashLink
                  to={link.href}
                  scroll={scrollWithOffset}
                  className={cn(
                    "font-medium transition-colors hover:scale-105 transform duration-200",
                    isDark 
                      ? "text-gray-300 hover:text-white" 
                      : "text-gray-700 hover:text-gray-900"
                  )}
                >
                  {link.label}
                </HashLink>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-1">
            <ThemeToggle />
          </div>

          <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
                <a
                    href="https://wa.me/919263267023"
                    target="_blank"
                    rel="noopener"
                    aria-label="Chat on WhatsApp"
                    className={cn(
                      'text-green-500 hover:text-green-500 dark:text-green-400 dark:hover:text-green-400',
                      'hover:bg-green-500/10 dark:hover:bg-green-400/10'
                    )}
                >
                    <Whatsapp className="h-6 w-6" />
                </a>
            </Button>
            <Button asChild className="font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <HashLink to="/training">
                <Scissors />
                <span>{t("joinTraining")}</span>
              </HashLink>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "p-2 rounded-lg transition-colors",
              isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
            )}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={cn(
          "md:hidden fixed inset-x-0 top-[calc(var(--navbar-height,68px))] backdrop-blur-xl border-b shadow-lg",
          isDark ? "bg-gray-900/95 border-gray-700" : "bg-white/95 border-gray-200"
        )}>
          <div className="px-4 py-6 space-y-4">
            {links.map((link) => (
              <HashLink
                key={link.href}
                to={link.href}
                scroll={scrollWithOffset}
                className={cn(
                  "block py-3 px-4 rounded-lg font-medium transition-colors",
                  isDark 
                    ? "text-gray-300 hover:text-white hover:bg-gray-800" 
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </HashLink>
            ))}
            <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
            <div className="flex items-center gap-4">
               <a
                href="https://wa.me/919263267023"
                target="_blank"
                rel="noopener"
                className="btn-secondary flex-1 text-center flex items-center justify-center gap-2"
                onClick={() => setMobileOpen(false)}
              >
                <Whatsapp className="h-5 w-5" />
                WhatsApp
              </a>
              <Button
                asChild
                className="flex-1 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-md"
                onClick={() => setMobileOpen(false)}
              >
                <HashLink to="/training">
                  <Scissors />
                  <span>{t("joinTraining")}</span>
                </HashLink>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
