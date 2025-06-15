import { FC, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm: FC = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // You can add actual form submission logic here
  };

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
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className={cn(
                "text-2xl font-semibold mb-6",
                isDark ? "text-white" : "text-gray-900"
              )}>
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-3 rounded-lg",
                    isDark ? "bg-blue-900/50" : "bg-blue-100"
                  )}>
                    <Phone className={cn(
                      "w-5 h-5",
                      isDark ? "text-blue-400" : "text-blue-600"
                    )} />
                  </div>
                  <div>
                    <p className={cn(
                      "font-medium",
                      isDark ? "text-white" : "text-gray-900"
                    )}>
                      Phone
                    </p>
                    <p className={cn(
                      "text-sm",
                      isDark ? "text-gray-300" : "text-gray-600"
                    )}>
                      +91 XXXXX XXXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-3 rounded-lg",
                    isDark ? "bg-blue-900/50" : "bg-blue-100"
                  )}>
                    <Mail className={cn(
                      "w-5 h-5",
                      isDark ? "text-blue-400" : "text-blue-600"
                    )} />
                  </div>
                  <div>
                    <p className={cn(
                      "font-medium",
                      isDark ? "text-white" : "text-gray-900"
                    )}>
                      Email
                    </p>
                    <p className={cn(
                      "text-sm",
                      isDark ? "text-gray-300" : "text-gray-600"
                    )}>
                      info@kiranstudio.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-3 rounded-lg",
                    isDark ? "bg-blue-900/50" : "bg-blue-100"
                  )}>
                    <MapPin className={cn(
                      "w-5 h-5",
                      isDark ? "text-blue-400" : "text-blue-600"
                    )} />
                  </div>
                  <div>
                    <p className={cn(
                      "font-medium",
                      isDark ? "text-white" : "text-gray-900"
                    )}>
                      Location
                    </p>
                    <p className={cn(
                      "text-sm",
                      isDark ? "text-gray-300" : "text-gray-600"
                    )}>
                      123 Fashion Street, City, State
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={cn(
              "p-6 rounded-xl border",
              isDark ? "bg-gray-800/50 border-gray-700" : "bg-blue-50 border-blue-200"
            )}>
              <h4 className={cn(
                "font-semibold mb-2",
                isDark ? "text-white" : "text-gray-900"
              )}>
                Business Hours
              </h4>
              <div className={cn(
                "text-sm space-y-1",
                isDark ? "text-gray-300" : "text-gray-600"
              )}>
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>

            <div>
              <h3 className={cn(
                "text-2xl font-semibold mb-6",
                isDark ? "text-white" : "text-gray-900"
              )}>
                Find Us Here
              </h3>
              <div className={cn(
                "rounded-xl overflow-hidden shadow-lg border",
                isDark ? "border-gray-700" : "border-gray-300"
              )}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.719894458204!2d77.3188150742185!3d28.58330738573456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45a76135899%3A0x11158b7d42571ebb!2sKiran%20Ladies%20Tailor!5e0!3m2!1sen!2sin!4v1721034371536!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kiran Ladies Tailor Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={cn(
            "p-8 rounded-xl border",
            isDark ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-200"
          )}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    className={cn(
                      isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white"
                    )}
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
                    className={cn(
                      isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white"
                    )}
                  />
                </div>
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
                  className={cn(
                    isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white"
                  )}
                />
              </div>

              <div>
                <label className={cn(
                  "block text-sm font-medium mb-2",
                  isDark ? "text-gray-300" : "text-gray-700"
                )}>
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={cn(
                    "w-full p-3 rounded-md border transition-colors",
                    isDark 
                      ? "bg-gray-700 border-gray-600 text-white" 
                      : "bg-white border-gray-300"
                  )}
                >
                  <option value="">Select a service</option>
                  <option value="bridal">Bridal Wear</option>
                  <option value="formal">Formal Wear</option>
                  <option value="casual">Casual Wear</option>
                  <option value="alterations">Alterations</option>
                  <option value="uniform">Uniforms</option>
                  <option value="custom">Custom Design</option>
                </select>
              </div>

              <div>
                <label className={cn(
                  "block text-sm font-medium mb-2",
                  isDark ? "text-gray-300" : "text-gray-700"
                )}>
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  className={cn(
                    isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white"
                  )}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
