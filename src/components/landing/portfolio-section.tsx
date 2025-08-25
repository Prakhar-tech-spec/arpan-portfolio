'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
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
    videoUrl: 'https://res.cloudinary.com/dj88p3xio/video/upload/v1756103330/5_VS_110_Edit_tak92b.mp4',
    dataAiHint: 'cinematic video',
  },
  {
    title: 'Product Demo Video',
    category: 'Video Editing',
    videoUrl: 'https://res.cloudinary.com/dj88p3xio/video/upload/v1756103326/Faceless_Edit_ssi28c.mp4',
    dataAiHint: 'video production',
  },
  {
    title: 'Brand Story Film',
    category: 'Video Editing',
    videoUrl: 'https://res.cloudinary.com/dj88p3xio/video/upload/v1756103326/Before_VS_After_n18z9q.mp4',
    dataAiHint: 'filmmaking camera',
  },
  {
    title: 'E-commerce App Launch',
    category: 'Web & App',
    imageUrl: 'https://placehold.co/1600x900.png',
    dataAiHint: 'mobile application',
  },
  {
    title: 'SaaS Platform UI/UX',
    category: 'Web & App',
    imageUrl: 'https://placehold.co/1600x900.png',
    dataAiHint: 'dashboard ui',
  },
  {
    title: 'Viral Social Challenge',
    category: 'Social Media',
    imageUrl: 'https://placehold.co/1600x900.png',
    dataAiHint: 'social media marketing',
  },
  {
    title: 'Lead Gen Google Ads',
    category: 'Paid Ads',
    imageUrl: 'https://placehold.co/1600x900.png',
    dataAiHint: 'data analytics',
  },
  {
    title: 'YouTube Channel Branding',
    category: 'Graphics & Thumbnails',
    imageUrl: 'https://placehold.co/1600x900.png',
    dataAiHint: 'youtube thumbnail',
  },
  {
    title: 'Customer Service Bot',
    category: 'AI Agents',
    imageUrl: 'https://placehold.co/1600x900.png',
    dataAiHint: 'ai robot',
  },
];

const filters = ['All Work', 'Video Editing', 'Graphics & Thumbnails', 'Web & App', 'Paid Ads', 'Social Media', 'AI Agents'];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All Work');

  const filteredItems = activeFilter === 'All Work'
    ? portfolioItems.filter((item) => item.category === 'Video Editing')
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
              A glimpse into our successful projects.
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

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <ScrollAnimationWrapper key={`${item.title}-${index}`} className={cn(item.category === 'Video Editing' ? 'md:col-span-1' : 'md:col-span-1')}>
              <Card className={cn("group relative overflow-hidden rounded-xl border-none h-full bg-gray-900/50 backdrop-blur-sm", item.category === 'Video Editing' ? 'aspect-[9/16]' : 'aspect-video')}>
                {'videoUrl' in item ? (
                  <video
                    src={item.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                ) : (
                  <Image
                    src={item.imageUrl!}
                    alt={item.title}
                    width={1600}
                    height={900}
                    data-ai-hint={item.dataAiHint}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                  <div className="transition-transform duration-500 group-hover:-translate-y-4">
                    <p className="text-xs md:text-sm font-light text-gray-300">{item.category}</p>
                    <h3 className="text-lg md:text-2xl font-bold text-white mt-1">{item.title}</h3>
                  </div>
                  <ArrowUpRight className="absolute top-4 right-4 h-6 w-6 md:h-8 md:w-8 text-white opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45" />
                </div>
              </Card>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
