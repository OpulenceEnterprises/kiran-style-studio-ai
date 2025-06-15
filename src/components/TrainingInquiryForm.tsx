import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Whatsapp } from "@/components/Whatsapp";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabaseClient";

const inquiryFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }).optional().or(z.literal('')),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z.string().optional(),
});

type InquiryFormValues = z.infer<typeof inquiryFormSchema>;

const sendInquiryEmail = async (formData: InquiryFormValues) => {
  const htmlBody = `
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Phone:</strong> ${formData.phone}</p>
    <p><strong>Email:</strong> ${formData.email || 'Not provided'}</p>
    <p><strong>Message:</strong></p>
    <p>${formData.message ? formData.message.replace(/\n/g, "<br>") : 'No message provided.'}</p>
  `;
  
  const fromEmail = formData.email || 'no-reply@suidhaga-empower.com';

  const { data, error } = await supabase.functions.invoke('send-email', {
    body: JSON.stringify({
      subject: 'New Training Program Inquiry',
      htmlBody,
      fromName: formData.name,
      fromEmail: fromEmail,
    }),
  });

  if (error) {
    throw new Error(`Failed to send inquiry: ${error.message}`);
  }

  return data;
};

const TrainingInquiryForm: FC = () => {
  const { isDark } = useTheme();
  const { toast } = useToast();

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });
  
  const mutation = useMutation({
    mutationFn: sendInquiryEmail,
    onSuccess: () => {
      toast({ title: "Inquiry Sent!", description: "We've received your inquiry and will reach out to you soon." });
      form.reset();
    },
    onError: (error) => {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    },
  });

  const onSubmit = (data: InquiryFormValues) => {
    mutation.mutate(data);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I want to learn sewing. Please give me more information about your training programs and available options.");
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={cn(
            "p-8 rounded-xl border space-y-6",
            isDark ? "bg-gray-800/50 border-gray-700" : "bg-gray-50 border-gray-200"
        )}>
            <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                    <FormLabel className={cn("block text-sm font-medium", isDark ? "text-gray-300" : "text-gray-700")}>Full Name *</FormLabel>
                    <FormControl>
                        <Input {...field} className={cn(isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white")} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )} />
            <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                    <FormLabel className={cn("block text-sm font-medium", isDark ? "text-gray-300" : "text-gray-700")}>Email Address (Optional)</FormLabel>
                    <FormControl>
                        <Input type="email" {...field} className={cn(isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white")} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )} />
            <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem>
                    <FormLabel className={cn("block text-sm font-medium", isDark ? "text-gray-300" : "text-gray-700")}>Phone Number *</FormLabel>
                    <FormControl>
                        <Input type="tel" {...field} className={cn(isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white")} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )} />
            <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                    <FormLabel className={cn("block text-sm font-medium", isDark ? "text-gray-300" : "text-gray-700")}>Message (Optional)</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Tell us about your specific requirements, preferred timing, or any questions you have..." rows={4} {...field} className={cn(isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-white")} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )} />

            <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" disabled={mutation.isPending} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-xl font-semibold transition-all">
                    {mutation.isPending ? "Submitting..." : "Submit Inquiry"}
                </Button>
                <Button type="button" onClick={handleWhatsAppClick} className="flex-1 bg-green-600 hover:bg-green-700 text-white text-lg py-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                    <Whatsapp className="w-5 h-5" />
                    WhatsApp Us
                </Button>
            </div>
        </form>
    </Form>
  );
};

export default TrainingInquiryForm;
