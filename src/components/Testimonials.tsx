
import { FC } from "react";
import SectionHeader from "./SectionHeader";
import { Video } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    comment: "I love my bridal lehenga! The stitching detail and fit were perfect. Kiran made my wedding so special.",
    video: "https://www.youtube.com/embed/E7wJTI-1dvQ",
  },
  {
    name: "Rohit Menon",
    comment: "Quick alterations and very friendly. My office uniforms look sharp every time.",
    video: "https://www.youtube.com/embed/TlQkeLiqMZM",
  },
  {
    name: "Aruna Iyer",
    comment: "The tailoring classes gave me so much confidence—thank you, Kiran, for making learning so enjoyable.",
    video: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
];

// AI caption/subtitle stub (future feature: real captions)
const aiCaption = (comment: string) =>
  `“${comment}”`;

const Testimonials: FC = () => (
  <section id="testimonials" className="section-bg my-12 glassy shadow-lux-glass">
    <SectionHeader
      title="What Our Customers Say"
      subtitle="Testimonials from happy clients and students"
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t) => (
        <div key={t.name} className="flex flex-col items-center rounded-2xl bg-cream-light/85 p-4 shadow-lux-soft hover:shadow-xl transition">
          <div className="w-full rounded-xl overflow-hidden aspect-video mb-3 border-2 border-blush-light">
            <iframe
              src={t.video}
              title={t.name + " testimonial"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full min-h-[156px]"
            />
          </div>
          <div className="flex flex-row gap-2 items-center mt-1">
            <Video size={18} className="text-teal-DEFAULT" />
            <span className="font-semibold text-gray-900">{t.name}</span>
          </div>
          <div className="italic text-gray-700 text-sm mt-2 text-center">
            {aiCaption(t.comment)}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
