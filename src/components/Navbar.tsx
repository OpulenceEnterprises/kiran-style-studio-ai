
import { FC } from "react";
import { BookOpen, Video, Image, MessageCircle } from "lucide-react";

const Navbar: FC = () => (
  <nav className="w-full flex items-center justify-between px-4 py-3 md:px-12 md:py-4 bg-white/90 rounded-b-xl2 shadow-soft fixed top-0 left-0 z-40 backdrop-blur-lg">
    <a href="/" className="flex items-center gap-2">
      <span className="text-xl md:text-2xl font-lora font-bold tracking-wide text-teal-DEFAULT">
        Kiran's Tailoring Shop
      </span>
      <span className="hidden md:inline rounded px-2 py-1 text-xs font-semibold bg-blush-light text-blush-DEFAULT ml-2">est. 1998</span>
    </a>
    <ul className="flex gap-3 md:gap-7 items-center font-semibold font-poppins text-base">
      <li>
        <a href="#services" className="hover:text-teal-DEFAULT transition-colors">Services</a>
      </li>
      <li>
        <a href="#training" className="hover:text-teal-DEFAULT transition-colors">Training</a>
      </li>
      <li>
        <a href="#products" className="hover:text-teal-DEFAULT transition-colors">Products</a>
      </li>
      <li>
        <a href="#contact" className="hover:text-teal-DEFAULT transition-colors">Contact</a>
      </li>
      <li>
        <a href="https://wa.me/919999999999" target="_blank" rel="noopener" className="ml-2 text-teal-DEFAULT flex items-center transition hover:scale-110" title="Chat on WhatsApp"> 
          <MessageCircle size={22} />
        </a>
      </li>
    </ul>
  </nav>
);
export default Navbar;
