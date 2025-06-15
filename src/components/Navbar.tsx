
import { FC } from "react";
import { MessageCircle } from "lucide-react";

const Navbar: FC = () => (
  <nav className="w-full flex items-center justify-between px-4 py-3 md:px-12 md:py-4 bg-gradient-to-b from-cream-light/90 via-blush-light/80 to-white/90 rounded-b-xl2 shadow-cta fixed top-0 left-0 z-40 backdrop-blur-lg transition-shadow duration-300 border-b border-blush-light">
    <a href="/" className="flex items-center gap-2 group">
      <span className="text-xl md:text-2xl font-lora font-bold tracking-wide text-teal-DEFAULT group-hover:underline decoration-teal-DEFAULT decoration-2 underline-offset-4 transition">
        Kiran's Tailoring Shop
      </span>
      <span className="hidden md:inline rounded px-2 py-1 text-xs font-semibold bg-blush-light text-blush-DEFAULT ml-2 group-hover:scale-105 transition-transform">est. 1998</span>
    </a>
    <ul className="flex gap-1 md:gap-6 items-center font-semibold font-poppins text-[15px] md:text-base uppercase tracking-wide">
      <li>
        <a href="#services" className="nav-link">Services</a>
      </li>
      <li>
        <a href="#pricing" className="nav-link bg-blush-light rounded-lg text-blush-DEFAULT px-3 py-1 hover:bg-blush-DEFAULT/70 hover:text-teal-DEFAULT transition shadow-sm">Pricing</a>
      </li>
      <li>
        <a href="#products" className="nav-link">Products</a>
      </li>
      <li>
        <a href="#contact" className="nav-link">Contact</a>
      </li>
      <li>
        <a 
          href="#training"
          className="font-bold nav-link text-white bg-gradient-to-r from-teal-DEFAULT to-blush-DEFAULT px-4 py-1 rounded-lg shadow animate-pulse hover:brightness-110 hover:scale-105 transition-all border border-blush-light ml-1"
        >
          Join Training
        </a>
      </li>
      <li className="md:ml-2">
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener"
          className="nav-wa group flex items-center font-medium px-2 py-1 rounded-lg text-teal-DEFAULT transition-all hover:bg-rose-DEFAULT/10 hover:scale-110"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={22} strokeWidth={2.1} className="mr-1" />
          <span className="md:hidden text-xs font-semibold">WhatsApp</span>
        </a>
      </li>
    </ul>
    {/* Custom nav link underline and theme tweaks */}
    <style>{`
      .nav-link {
        position: relative;
        display: inline-block;
        padding: 0.25rem 0.85rem;
        border-radius: 8px;
        color: #315b5b;
        transition: color 0.17s, background 0.2s, box-shadow 0.2s;
      }
      .nav-link:hover, .nav-link:focus-visible {
        color: #35aaaa !important;
        background: rgba(168, 215, 217, 0.13);
        box-shadow: 0 2px 18px 0 rgba(249, 225, 233, 0.08);
      }
      .nav-link::after {
        content: "";
        position: absolute;
        left: 20%;
        bottom: 4px;
        width: 60%;
        height: 2px;
        border-radius: 99px;
        background: #A7D7D9;
        opacity: 0;
        transform: scaleX(0.3);
        transition: opacity 0.18s, transform 0.18s;
      }
      .nav-link:hover::after,
      .nav-link:focus-visible::after {
        opacity: 1;
        transform: scaleX(1);
      }
    `}</style>
  </nav>
);
export default Navbar;
