'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import ScrollAnimationWrapper from '../animations/scroll-animation-wrapper';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        src="https://res.cloudinary.com/dj88p3xio/video/upload/v1755972300/watermarked-9ba7470b-e60c-4ab3-a91c-eedcdd23ed32_online-video-cutter.com_l8y4bl.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <ScrollAnimationWrapper>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Where Creativity
            </span>
            <span className="block">Meets Strategy.</span>
          </h1>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <p className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
            We are ADVENTURE, a digital marketing agency that helps brands tell their stories and grow their businesses.
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Button size="lg" className="mt-8 rounded-full px-8 py-6 text-lg font-semibold transition-transform hover:scale-105">
            Let's Talk
          </Button>
        </ScrollAnimationWrapper>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <ArrowDown className="h-8 w-8 text-white animate-bounce" />
      </div>
    </section>
  );
}
