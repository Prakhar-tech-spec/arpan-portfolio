'use client';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import ScrollAnimationWrapper from '../animations/scroll-animation-wrapper';
import { cn } from '@/lib/utils';

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

const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 md:py-32 overflow-hidden">
      <video
        src="https://res.cloudinary.com/dj88p3xio/video/upload/v1755988879/background_gy5z5d.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <div className="container mx-auto px-4 relative z-0">
        <ScrollAnimationWrapper>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">What Our Clients Say</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              We're proud to have earned the trust of amazing brands.
            </p>
          </div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
           <div
            className="group relative w-full overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            }}
          >
            <div className="flex w-max animate-scroll">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div key={index} className="w-[350px] flex-shrink-0 px-4 md:w-[450px]">
                  <Card className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-gray-500/10 backdrop-blur-xl">
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
              ))}
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
