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
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center md:items-start md:text-left text-white pb-20 md:justify-end">
        <ScrollAnimationWrapper className="w-full">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              An automation to
            </span>
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">business transformation</span>
          </h1>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="w-full">
          <p className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl mx-auto md:mx-0">
            Execute Growth & Automate
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Button size="lg" className="mt-8 rounded-full px-8 py-6 text-lg font-semibold">
            BOOK YOUR FREE STRATEGY CALL
          </Button>
        </ScrollAnimationWrapper>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <ArrowDown className="h-8 w-8 text-white animate-bounce" />
      </div>
    </section>
  );
}
