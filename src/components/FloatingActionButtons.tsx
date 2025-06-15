
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Whatsapp } from '@/components/Whatsapp';

const FloatingActionButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://wa.me/919263267023"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
          >
            <Whatsapp className="h-8 w-8" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Chat on WhatsApp</p>
        </TooltipContent>
      </Tooltip>
      
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="tel:+919263267023"
            aria-label="Call us"
            className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
          >
            <Phone size={32} />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Call Us</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default FloatingActionButtons;
