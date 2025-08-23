'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import ScrollAnimationWrapper from '../animations/scroll-animation-wrapper';

const testimonials = [
  {
    quote: "ADVENTURE Marketing transformed our online presence. Their strategic approach to SEO and content doubled our traffic in just six months. A truly remarkable team!",
    name: 'Jane Doe',
    title: 'CEO, Innovate Inc.',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'professional woman',
  },
  {
    quote: "The creativity and dedication of the ADVENTURE team are unparalleled. They delivered a campaign that not only met but exceeded all our expectations. Highly recommended!",
    name: 'John Smith',
    title: 'Founder, Tech Solutions',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'smiling man',
  },
  {
    quote: "Working with ADVENTURE was a game-changer. Their insights into our brand and audience were spot-on, leading to a significant increase in engagement and conversions.",
    name: 'Emily White',
    title: 'Marketing Director, Lifestyle Co.',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'business person',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">What Our Clients Say</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              We're proud to have earned the trust of amazing brands.
            </p>
          </div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex h-full flex-col justify-between rounded-xl border-gray-800 bg-secondary">
                      <CardContent className="p-6">
                        <p className="text-lg text-gray-300 italic">"{testimonial.quote}"</p>
                        <div className="mt-6 flex items-center">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={50}
                            height={50}
                            data-ai-hint={testimonial.dataAiHint}
                            className="rounded-full"
                          />
                          <div className="ml-4">
                            <p className="font-semibold text-white">{testimonial.name}</p>
                            <p className="text-sm text-gray-400">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
