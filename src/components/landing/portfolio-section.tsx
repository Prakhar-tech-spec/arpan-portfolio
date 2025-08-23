'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import ScrollAnimationWrapper from '../animations/scroll-animation-wrapper';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';

const portfolioItems = [
  {
    title: 'Cinematic Ad Campaign',
    category: 'Video Editing',
    imageUrl: 'https://placehold.co/600x800.png',
    dataAiHint: 'cinematic video',
  },
  {
    title: 'Product Demo Video',
    category: 'Video Editing',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'video production',
  },
  {
    title: 'Brand Story Film',
    category: 'Video Editing',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'filmmaking camera',
  },
  {
    title: 'Animated Explainer',
    category: 'Video Editing',
    imageUrl: 'https://placehold.co/600x800.png',
    dataAiHint: 'animation motion',
  },
  {
    title: 'E-commerce App Launch',
    category: 'Web & App',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'mobile application',
  },
  {
    title: 'SaaS Platform UI/UX',
    category: 'Web & App',
    imageUrl: 'https://placehold.co/600x800.png',
    dataAiHint: 'dashboard ui',
  },
  {
    title: 'Viral Social Challenge',
    category: 'Social Media',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'social media marketing',
  },
  {
    title: 'Lead Gen Google Ads',
    category: 'Paid Ads',
    imageUrl: 'https://placehold.co/600x800.png',
    dataAiHint: 'data analytics',
  },
  {
    title: 'YouTube Channel Branding',
    category: 'Graphics & Thumbnails',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'youtube thumbnail',
  },
  {
    title: 'Customer Service Bot',
    category: 'AI Agents',
    imageUrl: 'https://placehold.co/600x800.png',
    dataAiHint: 'ai robot',
  },
];

const filters = ['All Work', 'Video Editing', 'Graphics & Thumbnails', 'Web & App', 'Paid Ads', 'Social Media', 'AI Agents'];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All Work');

  const filteredItems = activeFilter === 'All Work'
    ? portfolioItems.filter((item) => item.category === 'Video Editing').slice(0, 4)
    : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-20 md:py-32 overflow-hidden">
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
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-4 border-gray-600 bg-gray-800/50 text-gray-300 backdrop-blur-2xl">Our Work</Badge>
            <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">Creativity in Action</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              Take a look at some of the successful projects we've delivered for our clients.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <div className="mb-12 flex flex-wrap justify-center gap-2 md:gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant="outline"
                className={cn(
                  'rounded-full border-gray-700 bg-transparent text-gray-400 transition-all hover:bg-gray-800 hover:text-white backdrop-blur-2xl',
                  activeFilter === filter && 'border-white bg-white text-black'
                )}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <ScrollAnimationWrapper key={`${item.title}-${index}`}>
              <Card className="group relative overflow-hidden rounded-xl border-none h-full bg-gray-900/50 backdrop-blur-sm">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={600}
                  height={index % 3 === 0 ? 800 : 400}
                  data-ai-hint={item.dataAiHint}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="transition-transform duration-500 group-hover:-translate-y-4">
                    <p className="text-sm font-light text-gray-300">{item.category}</p>
                    <h3 className="text-2xl font-bold text-white mt-1">{item.title}</h3>
                  </div>
                  <ArrowUpRight className="absolute top-6 right-6 h-8 w-8 text-white opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45" />
                </div>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
