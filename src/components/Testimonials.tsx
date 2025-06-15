
import { FC } from "react";
import SectionHeader from "./SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Priya Sharma",
    comment: "I love my bridal lehenga! The stitching detail and fit were perfect. Kiran made my wedding so special.",
    image: `https://source.unsplash.com/random/100x100/?portrait,woman&sig=${Math.random()}`,
    initials: "PS",
  },
  {
    name: "Rohit Menon",
    comment: "Quick alterations and very friendly. My office uniforms look sharp every time.",
    image: `https://source.unsplash.com/random/100x100/?portrait,man&sig=${Math.random()}`,
    initials: "RM",
  },
  {
    name: "Aruna Iyer",
    comment: "The tailoring classes gave me so much confidence—thank you, Kiran, for making learning so enjoyable.",
    image: `https://source.unsplash.com/random/100x100/?portrait,woman,teacher&sig=${Math.random()}`,
    initials: "AI",
  },
];

const Testimonials: FC = () => (
  <section id="testimonials" className="section-bg my-12 glassy shadow-lux-glass">
    <SectionHeader
      title="What Our Customers Say"
      subtitle="Testimonials from happy clients and students"
    />
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-full">
              <Card className="h-full bg-white dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                  <Avatar className="w-20 h-20 mb-4 border-2 border-primary-500">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</p>
                  <blockquote className="mt-2 text-sm text-gray-700 dark:text-gray-300 italic border-l-2 border-primary-500/50 pl-4">
                    "{testimonial.comment}"
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:inline-flex" />
      <CarouselNext className="hidden sm:inline-flex" />
    </Carousel>
  </section>
);

export default Testimonials;
