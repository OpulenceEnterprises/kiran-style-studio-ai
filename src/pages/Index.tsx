
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import ProductPreviewGrid from "@/components/ProductPreviewGrid";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cream-light">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex flex-col pt-24 md:pt-28 gap-8 md:gap-14">
        <Hero />
        <Testimonials />
        <ProductPreviewGrid />

        {/* More sections coming soon (Pricing, Training, Contact, AI Assistant etc.) */}
        <section className="mt-8 mb-16 text-center">
          <div className="max-w-xl mx-auto text-gray-400 italic font-poppins py-10 rounded-2xl">
            <span>
              More features coming soon:
              <br />
              <span className="font-semibold text-teal-DEFAULT">AI Stylist • Pricing Calculator • Course Registration • Contact & Location</span>
            </span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
