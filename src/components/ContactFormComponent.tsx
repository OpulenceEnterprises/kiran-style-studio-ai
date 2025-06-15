
import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  service: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const sendEmail = async (formData: ContactFormValues) => {
  const htmlBody = `
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Service:</strong> ${formData.service || 'Not specified'}</p>
    <p><strong>Message:</strong></p>
    <p>${formData.message.replace(/\n/g, "<br>")}</p>
  `;

  const { error } = await supabase.functions.invoke('send-email', {
    body: JSON.stringify({
      subject: 'New Contact Form Submission from Website',
      htmlBody,
      fromName: formData.name,
      fromEmail: formData.email,
    }),
  });

  if (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

const ContactFormComponent: FC = () => {
  const { isDark } = useTheme();
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", phone: "", email: "", service: "", message: "" },
  });

  const mutation = useMutation({
    mutationFn: sendEmail,
    onSuccess: () => {
      toast({ title: "Message Sent!", description: "Thank you for contacting us. We'll get back to you soon." });
      form.reset();
    },
    onError: (error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    mutation.mutate(data);
  };

  return (
    <div className={cn(
      "p-8 rounded-xl border",
      isDark ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-200"
    )}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                    <FormLabel className={cn(isDark ? "text-gray-300" : "text-gray-700")}>Full Name *</FormLabel>
                    <FormControl>
                        <Input {...field} className={cn(isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white")} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )} />
            <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem>
                    <FormLabel className={cn(isDark ? "text-gray-300" : "text-gray-700")}>Phone Number *</FormLabel>
                    <FormControl>
                        <Input type="tel" {...field} className={cn(isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white")} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )} />
          </div>
          <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                  <FormLabel className={cn(isDark ? "text-gray-300" : "text-gray-700")}>Email Address *</FormLabel>
                  <FormControl>
                      <Input type="email" {...field} className={cn(isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white")} />
                  </FormControl>
                  <FormMessage />
              </FormItem>
          )} />
          <FormField control={form.control} name="service" render={({ field }) => (
              <FormItem>
                  <FormLabel className={cn(isDark ? "text-gray-300" : "text-gray-700")}>Service Interested In</FormLabel>
                    <select {...field} className={cn("w-full p-3 rounded-md border transition-colors", isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300")}>
                        <option value="">Select a service</option>
                        <option value="bridal">Bridal Wear</option>
                        <option value="formal">Formal Wear</option>
                        <option value="casual">Casual Wear</option>
                        <option value="alterations">Alterations</option>
                        <option value="uniform">Uniforms</option>
                        <option value="custom">Custom Design</option>
                    </select>
                  <FormMessage />
              </FormItem>
          )} />
          <FormField control={form.control} name="message" render={({ field }) => (
              <FormItem>
                  <FormLabel className={cn(isDark ? "text-gray-300" : "text-gray-700")}>Message *</FormLabel>
                  <FormControl>
                      <Textarea rows={4} placeholder="Tell us about your project, timeline, and any specific requirements..." {...field} className={cn(isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white")} />
                  </FormControl>
                  <FormMessage />
              </FormItem>
          )} />

          <Button
            type="submit"
            disabled={mutation.isPending}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {mutation.isPending ? "Sending..." : <><Send className="w-5 h-5 mr-2" /> Send Message</>}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactFormComponent;
