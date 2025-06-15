
import CTAButton from "./CTAButton";

// Demo/placeholder YouTube embed and video backdrop.
const Hero = () => (
  <section className="relative pt-32 md:pt-36 min-h-[75vh] flex flex-col items-center justify-center w-full bg-gradient-to-b from-cream-light via-blush-light/80 to-white overflow-hidden shadow-inner">
    {/* Subtle handcraft textured gradient overlay */}
    <div className="absolute inset-0 pointer-events-none -z-0">
      <div className="w-full h-full bg-handmade-paper opacity-70"></div>
      <div className="w-full h-full bg-hero-fabric mix-blend-multiply opacity-80"></div>
      {/* Optional: gradient accent swirl */}
      <div className="absolute left-1/2 -translate-x-1/2 top-2 w-[350px] h-[350px] bg-pink-100/50 rounded-full blur-xl"></div>
    </div>
    <div className="relative z-10 max-w-3xl w-full text-center mx-auto pb-8 md:pb-12">
      <h1 className="text-4xl md:text-5xl font-marcellus font-bold mb-5 text-blush-DEFAULT drop-shadow-lg">
        <span className="bg-white/70 rounded-3xl px-3 pb-2 pt-1 shadow-lux-glass">
          Master <span className="text-teal-DEFAULT drop-shadow-gold">Tailoring</span> &amp; Sewing&nbsp;
        </span>
        <br />
        <span className="bg-white/60 rounded-2xl px-2 py-0.5 text-teal-DEFAULT shadow">
          by Kiran’s Studio
        </span>
      </h1>
      <p className="text-lg md:text-2xl text-ink/75 font-nunito font-semibold mb-10 px-2 bg-white/60 rounded-xl inline-block shadow">
        Handcrafted fashion, bespoke fit, expert training.<br className="hidden md:inline" />
        Sewing magic for weddings, kids, uniforms, and more!
      </p>
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-9">
        <CTAButton href="#contact" variant="primary" className="animate-scale-in">Book a Service</CTAButton>
        <CTAButton
          href="#training"
          variant="primary"
          className="bg-gradient-to-r from-teal-DEFAULT via-gold-DEFAULT to-blush-DEFAULT animate-pulse shadow-lux-glass border-2 border-gold-DEFAULT scale-110 hover:brightness-110"
        >
          Join Sewing Training
        </CTAButton>
        <CTAButton href="#pricing" variant="secondary">See Pricing</CTAButton>
      </div>
      {/* Video intro */}
      <div className="w-full flex flex-col items-center">
        <div className="relative rounded-3xl overflow-hidden shadow-lux-glass bg-white/70 border-2 border-blush-light max-w-lg w-full mx-auto aspect-video animate-fade-in backdrop-blur-lg">
          <iframe
            src="https://www.youtube.com/embed/fu5pBW7tZBY?rel=0&amp;autoplay=1&amp;mute=1&amp;loop=1"
            title="Kiran's Intro Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <span className="mt-2 text-sm text-gray-500 font-nunito">Meet Your Expert | Studio Story</span>
      </div>
    </div>
  </section>
);

export default Hero;
