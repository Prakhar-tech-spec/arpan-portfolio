'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ScrollAnimationWrapper from '../animations/scroll-animation-wrapper';
import { Badge } from '../ui/badge';
import { ArrowRight } from 'lucide-react';

export default function ConsultationSection() {
  return (
    <section id="consultation" className="relative py-20 md:py-28 overflow-hidden">
      <video
        src="https://res.cloudinary.com/dj88p3xio/video/upload/v1755988879/background_gy5z5d.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimationWrapper>
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="outline"
              className="mb-4 border-gray-600 bg-gray-800/50 text-gray-300 backdrop-blur-2xl"
            >
              Expert Advice
            </Badge>
            <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              Grow Your Social Media
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              Get personalized tips and strategies to accelerate your growth in a private 1:1 consultation.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 rounded-full bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg font-semibold"
            >
              <Link href="https://calendly.com/arpanadventure/30min" target="_blank">
                Book a 1:1 Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
