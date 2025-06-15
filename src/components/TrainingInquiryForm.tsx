
import { FC, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const TrainingInquiryForm: FC = () => {
  const { isDark } = useTheme();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Training inquiry submitted:", formData);
    toast({
      title: "Inquiry Sent!",
      description: "We've received your inquiry and will get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "" });
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
          Email Address *
        </label>
        <Input
          name="email"
          type="email"
          value={formData.email}
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
      <Button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-xl font-semibold transition-all"
      >
        Submit Inquiry
      </Button>
    </form>
  );
};

export default TrainingInquiryForm;
