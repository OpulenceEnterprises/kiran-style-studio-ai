
import { FC, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Whatsapp } from "@/components/Whatsapp";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const TrainingInquiryForm: FC = () => {
  const { isDark } = useTheme();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry submitted:", formData);
    toast({
      title: "Inquiry Sent!",
      description: "We've received your inquiry and will reach out to you soon with more options and suggestions.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I want to learn sewing. Please give me more information about your training programs and available options.");
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className={cn(
      "p-8 rounded-xl border space-y-6",
      isDark ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-200"
    )}>
      <div>
        <label className={cn(
          "block text-sm font-medium mb-2",
          isDark ? "text-gray-300" : "text-gray-700"
        )}>
          Full Name *
        </label>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={cn(isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white")}
        />
      </div>
      <div>
        <label className={cn(
          "block text-sm font-medium mb-2",
          isDark ? "text-gray-300" : "text-gray-700"
        )}>
          Email Address (Optional)
        </label>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={cn(isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white")}
        />
      </div>
      <div>
        <label className={cn(
          "block text-sm font-medium mb-2",
          isDark ? "text-gray-300" : "text-gray-700"
        )}>
          Phone Number *
        </label>
        <Input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          className={cn(isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white")}
        />
      </div>
      <div>
        <label className={cn(
          "block text-sm font-medium mb-2",
          isDark ? "text-gray-300" : "text-gray-700"
        )}>
          Message (Optional)
        </label>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your specific requirements, preferred timing, or any questions you have..."
          rows={4}
          className={cn(isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white")}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          type="submit"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-xl font-semibold transition-all"
        >
          Submit Inquiry
        </Button>
        <Button
          type="button"
          onClick={handleWhatsAppClick}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white text-lg py-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
        >
          <Whatsapp className="w-5 h-5" />
          WhatsApp Us
        </Button>
      </div>
    </form>
  );
};

export default TrainingInquiryForm;
