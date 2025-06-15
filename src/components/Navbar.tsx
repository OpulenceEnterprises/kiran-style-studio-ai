
import { FC } from "react";
import { BookOpen, Video, Image, MessageCircle } from "lucide-react";

const Navbar: FC = () => (
  <nav className="w-full flex items-center justify-between px-4 py-3 md:px-12 md:py-4 bg-white/90 rounded-b-xl2 shadow-cta fixed top-0 left-0 z-40 backdrop-blur-lg transition-shadow duration-300">
    <a href="/" className="flex items-center gap-2 group">
      <span className="text-xl md:text-2xl font-lora font-bold tracking-wide text-teal-DEFAULT group-hover:underline decoration-teal-DEFAULT decoration-2 underline-offset-4 transition">
        Kiran's Tailoring Shop
      </span>
      <span className="hidden md:inline rounded px-2 py-1 text-xs font-semibold bg-blush-light text-blush-DEFAULT ml-2 group-hover:scale-105 transition-transform">est. 1998</span>
    </a>
    <ul className="flex gap-2 md:gap-7 items-center font-semibold font-poppins text-[15px] md:text-base uppercase tracking-wide">
      <li>
        <a href="#services" className="nav-link">Services</a>
      </li>
      <li>
        <a href="#training" className="nav-link">Training</a>
      </li>
      <li>
        <a href="#products" className="nav-link">Products</a>
      </li>
      <li>
        <a href="#contact" className="nav-link">Contact</a>
      </li>
      <li className="ml-1 md:ml-2">
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener"
          className="nav-wa group flex items-center font-medium px-2 py-1 rounded-lg text-teal-DEFAULT transition-all hover:bg-teal-DEFAULT/10 hover:scale-110"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={22} strokeWidth={2.1} className="mr-1" />
          <span className="md:hidden text-xs font-semibold">WhatsApp</span>
        </a>
      </li>
    </ul>
    {/* Custom styles for nav underline accent */}
    <style>{`
      .nav-link {
        position: relative;
        display: inline-block;
        padding: 0.25rem 0.75rem;
        border-radius: 8px;
        color: #315b5b;
        transition: color 0.17s, background 0.2s;
      }
      .nav-link:hover, .nav-link:focus-visible {
        color: #35aaaa !important;
        background: rgba(168, 215, 217, 0.08);
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
      /* Whatsapp button hover is handled with the Tailwind classes */
    `}</style>
  </nav>
);
export default Navbar;

