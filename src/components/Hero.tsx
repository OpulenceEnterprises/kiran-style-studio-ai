import CTAButton from "./CTAButton";

// Demo/placeholder YouTube embed and video backdrop.
const Hero = () => (
  <section className="relative pt-32 md:pt-36 min-h-[70vh] flex flex-col items-center justify-center w-full bg-gradient-to-b from-cream-light via-blush-light/80 to-white overflow-hidden shadow-inner">
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Subtle illustration overlay */}
      <div className="w-full h-full bg-hero-craft opacity-70"></div>
    </div>
    <div className="relative z-10 max-w-3xl w-full text-center mx-auto pb-8 md:pb-12">
      <h1 className="text-4xl md:text-5xl font-lora font-bold mb-4 text-blush-DEFAULT drop-shadow">
        Welcome to <span className="text-teal-DEFAULT">Kiran’s Tailoring Shop</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 font-poppins mb-8">
        Warmth, trust, creativity – custom tailoring and sewing services, plus hands-on training for all skill levels.
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
        <CTAButton href="#contact" variant="primary">Book a Service</CTAButton>
        <CTAButton href="#training" variant="primary" className="bg-gradient-to-r from-teal-DEFAULT via-gold-DEFAULT to-blush-DEFAULT animate-pulse scale-105">Join Training</CTAButton>
        <CTAButton href="#products" variant="secondary">View Products</CTAButton>
      </div>
      {/* Video intro */}
      <div className="w-full flex flex-col items-center">
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white/70 border border-blush-light max-w-lg w-full mx-auto aspect-video animate-fade-in">
          <iframe
            src="https://www.youtube.com/embed/fu5pBW7tZBY?rel=0&amp;autoplay=1&amp;mute=1&amp;loop=1"
            title="Kiran's Intro Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <span className="mt-2 text-sm text-gray-500 font-poppins">Kiran’s Story & Services</span>
      </div>
    </div>
  </section>
);

export default Hero;
