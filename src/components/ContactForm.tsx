
import { FC } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import ContactInfo from "./ContactInfo";
import ContactFormComponent from "./ContactFormComponent";

const ContactForm: FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="contact" className={cn(
      "section-bg py-16 px-8",
      isDark ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-200"
    )}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4",
            isDark ? "text-white" : "text-gray-900"
          )}>
            Get in Touch
          </h2>
          <p className={cn(
            "text-lg max-w-2xl mx-auto",
            isDark ? "text-gray-300" : "text-gray-600"
          )}>
            Ready to bring your vision to life? Contact us for a consultation and let's create something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactFormComponent />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
