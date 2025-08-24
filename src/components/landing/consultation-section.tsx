'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ScrollAnimationWrapper from '../animations/scroll-animation-wrapper';
import { Badge } from '../ui/badge';
import { ArrowRight } from 'lucide-react';

export default function ConsultationSection() {
  return (
    <section id="consultation" className="bg-black/80 py-20 md:py-28">
      <div className="container mx-auto px-4">
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
