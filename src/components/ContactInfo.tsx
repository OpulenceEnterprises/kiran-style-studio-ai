
import { FC } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo: FC = () => {
    const { isDark } = useTheme();

    return (
        <div className="space-y-8">
            <div>
              <h3 className={cn("text-2xl font-semibold mb-6", isDark ? "text-white" : "text-gray-900")}>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={cn("p-3 rounded-lg", isDark ? "bg-blue-900/50" : "bg-blue-100")}>
                    <Phone className={cn("w-5 h-5", isDark ? "text-blue-400" : "text-blue-600")} />
                  </div>
                  <div>
                    <p className={cn("font-medium", isDark ? "text-white" : "text-gray-900")}>Phone</p>
                    <p className={cn("text-sm", isDark ? "text-gray-300" : "text-gray-600")}>+91 9263267023</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className={cn("p-3 rounded-lg", isDark ? "bg-blue-900/50" : "bg-blue-100")}>
                    <Mail className={cn("w-5 h-5", isDark ? "text-blue-400" : "text-blue-600")} />
                  </div>
                  <div>
                    <p className={cn("font-medium", isDark ? "text-white" : "text-gray-900")}>Email</p>
                    <p className={cn("text-sm", isDark ? "text-gray-300" : "text-gray-600")}>suidhaga.empower@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className={cn("p-3 rounded-lg", isDark ? "bg-blue-900/50" : "bg-blue-100")}>
                    <MapPin className={cn("w-5 h-5", isDark ? "text-blue-400" : "text-blue-600")} />
                  </div>
                  <div>
                    <p className={cn("font-medium", isDark ? "text-white" : "text-gray-900")}>Location</p>
                    <p className={cn("text-sm", isDark ? "text-gray-300" : "text-gray-600")}>AKBAR PUR, BARH, Bihar 803213</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={cn("p-6 rounded-xl border", isDark ? "bg-gray-800/50 border-gray-700" : "bg-blue-50 border-blue-200")}>
              <h4 className={cn("font-semibold mb-2", isDark ? "text-white" : "text-gray-900")}>Business Hours</h4>
              <div className={cn("text-sm space-y-1", isDark ? "text-gray-300" : "text-gray-600")}>
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>

            <div>
              <h3 className={cn("text-2xl font-semibold mb-6", isDark ? "text-white" : "text-gray-900")}>
                Find Us Here
              </h3>
              <div className={cn("rounded-xl overflow-hidden shadow-lg border", isDark ? "border-gray-700" : "border-gray-300")}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.386347410197!2d85.68579319999999!3d25.458771700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f27d71449c3d45%3A0xaf24bd79201e4ca8!2sKiran%27%20Tailoring%20Shop!5e0!3m2!1sen!2sin!4v1749975411879!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kiran's Tailoring Shop Location"
                ></iframe>
              </div>
            </div>
        </div>
    )
}

export default ContactInfo;
