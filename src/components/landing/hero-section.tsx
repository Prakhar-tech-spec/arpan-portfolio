'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown, Instagram, Facebook, Linkedin, Star } from 'lucide-react';
import ScrollAnimationWrapper from '../animations/scroll-animation-wrapper';
import Link from 'next/link';

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
          <div className="inline-flex items-center justify-center rounded-full bg-gray-900/50 backdrop-blur-2xl border border-white/10 px-3 py-1.5 mb-4">
            <div className="flex items-center space-x-1 text-white">
              <Star className="h-4 w-4 fill-white" />
              <Star className="h-4 w-4 fill-white" />
              <Star className="h-4 w-4 fill-white" />
              <Star className="h-4 w-4 fill-white" />
              <Star className="h-4 w-4 fill-white" />
            </div>
            <span className="ml-2 text-xs font-medium text-white">4.9 Stars</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              An automation to
            </span>
            <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">business transformation</span>
          </h1>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="w-full">
          <p className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl mx-auto md:mx-0">
            Execute Growth & Automate
          </p>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Button asChild size="lg" className="mt-8 rounded-full text-base font-semibold md:text-lg px-6 py-4 md:px-8 md:py-6">
            <Link href="https://calendly.com/arpanadventure/30min" target="_blank">
              BOOK YOUR FREE STRATEGY CALL
            </Link>
          </Button>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="mt-8 md:hidden">
          <div className="flex justify-center space-x-6">
            <Link href="https://www.instagram.com/arpanigcoach?igsh=OGRuNnRyeHVqNzBr" aria-label="Instagram" target="_blank">
              <Instagram className="h-6 w-6 text-white transition-colors hover:text-gray-300" />
            </Link>
            <Link href="https://www.facebook.com" aria-label="Facebook" target="_blank">
              <Facebook className="h-6 w-6 text-white transition-colors hover:text-gray-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/arpan-dey-5369212a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" target="_blank">
              <Linkedin className="h-6 w-6 text-white transition-colors hover:text-gray-300" />
            </Link>
          </div>
        </ScrollAnimationWrapper>
      </div>
      <ScrollAnimationWrapper className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <ArrowDown className="h-8 w-8 text-white animate-bounce" />
      </ScrollAnimationWrapper>

      <div className="absolute bottom-10 right-10 z-10 hidden md:flex flex-col space-y-4">
        <ScrollAnimationWrapper>
          <Link href="https://www.instagram.com/arpanigcoach?igsh=OGRuNnRyeHVqNzBr" aria-label="Instagram" target="_blank">
            <Instagram className="h-6 w-6 text-white transition-colors hover:text-gray-300" />
          </Link>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Link href="https://www.facebook.com" aria-label="Facebook" target="_blank">
            <Facebook className="h-6 w-6 text-white transition-colors hover:text-gray-300" />
          </Link>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <Link href="https://www.linkedin.com/in/arpan-dey-5369212a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" target="_blank">
            <Linkedin className="h-6 w-6 text-white transition-colors hover:text-gray-300" />
          </Link>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
