
import { FC, useState } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];
const training = { label: "Join Training", href: "#training" };

const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  if (typeof window !== "undefined") {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className={cn(
        "backdrop-blur-xl bg-white/70 border-b border-sage-light shadow-lux-glass transition-all duration-200",
        "rounded-b-3xl mx-auto px-4 md:px-12 py-3 md:py-4",
        "flex items-center justify-between"
      )}>
        {/* Left brand */}
        <a href="/" className="flex items-center gap-2 group">
          <span className="font-marcellus text-2xl md:text-3xl font-bold text-teal-DEFAULT drop-shadow-sm group-hover:text-gold-DEFAULT transition-colors duration-200 tracking-wider">
            Kiran’s Tailoring
          </span>
          <span className="hidden md:inline text-xs text-blush-DEFAULT bg-blush-light px-2 py-0.5 rounded-full ml-2 font-bold tracking-widest">
            Fine Sewing Studio
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-3 lg:gap-8 items-center font-poppins text-base">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative px-3 py-1 rounded-xl font-semibold uppercase transition-all duration-150 text-ink hover:text-teal-DEFAULT hover:bg-teal-light/20 focus-visible:ring-2 focus-visible:ring-teal-DEFAULT"
              >
                <span>
                  {link.label}
                </span>
                <span className="absolute left-1/2 -bottom-1 w-1/3 h-1 bg-gold-DEFAULT rounded-full opacity-0 group-hover:opacity-90 group-hover:w-2/3 transition-all duration-300 -translate-x-1/2"></span>
              </a>
            </li>
          ))}
          <li>
            <a
              href={training.href}
              className="inline-block bg-gradient-to-r from-teal-DEFAULT via-gold-DEFAULT to-blush-DEFAULT text-white font-bold px-6 py-1.5 rounded-xl shadow-lux-soft animate-pulse uppercase text-base border border-sage-light hover:scale-105 hover:brightness-105 transition"
              style={{ letterSpacing: "0.03em" }}
            >
              {training.label}
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener"
              className="nav-wa group flex items-center font-semibold text-teal-DEFAULT px-3 py-1 rounded-xl hover:bg-blush-light hover:scale-110 transition shadow"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={22} strokeWidth={2.1} className="mr-1" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 items-center justify-center p-2 bg-white/80 rounded-full shadow border border-sage-light hover:bg-sand-light transition"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className={cn("block h-0.5 w-6 bg-ink rounded-full transition-all", mobileOpen && "rotate-45 translate-y-2")}></span>
          <span className={cn("block h-0.5 w-6 bg-ink rounded-full transition-all", mobileOpen && "opacity-0")}></span>
          <span className={cn("block h-0.5 w-6 bg-ink rounded-full transition-all", mobileOpen && "-rotate-45 -translate-y-2")}></span>
        </button>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col bg-white/95 backdrop-blur-2xl px-6 py-9 pt-28 space-y-5 font-poppins animate-fade-in shadow-lux-soft">
          <a
            href="/"
            className="text-teal-DEFAULT font-marcellus text-2xl font-bold mb-2"
            onClick={() => setMobileOpen(false)}
          >
            Kiran’s Tailoring
          </a>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 px-2 text-xl rounded-xl font-semibold text-ink hover:text-teal-DEFAULT hover:bg-sand-light transition"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={training.href}
            className="mt-1 w-full text-center inline-block bg-gradient-to-r from-teal-DEFAULT via-gold-DEFAULT to-blush-DEFAULT text-white font-bold px-4 py-2 rounded-2xl shadow-lux-soft animate-pulse uppercase text-lg border border-sage-light tracking-wider"
            onClick={() => setMobileOpen(false)}
          >
            {training.label}
          </a>
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-3 text-teal-DEFAULT font-bold text-lg mt-2"
            onClick={() => setMobileOpen(false)}
          >
            <MessageCircle size={27} strokeWidth={2} className="" />
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
