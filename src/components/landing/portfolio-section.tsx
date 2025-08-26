'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import ScrollAnimationWrapper from '../animations/scroll-animation-wrapper';
import { ArrowUpRight, Play, Pause, Volume2, VolumeX, X } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';

const portfolioItems = [
  {
    title: '$5 VS $110 Edit',
    category: 'Video Editing',
    videoUrl: 'https://res.cloudinary.com/dj88p3xio/video/upload/v1756103330/5_VS_110_Edit_tak92b.mp4',
    dataAiHint: 'cinematic video',
  },
  {
    title: 'Before VS After',
    category: 'Video Editing',
    videoUrl: 'https://res.cloudinary.com/dj88p3xio/video/upload/v1756103326/Before_VS_After_n18z9q.mp4',
    dataAiHint: 'filmmaking camera',
  },
  {
    title: 'Faceless Video Edit',
    category: 'Video Editing',
    videoUrl: 'https://res.cloudinary.com/dj88p3xio/video/upload/v1756103326/Faceless_Edit_ssi28c.mp4',
    dataAiHint: 'video production',
  },
  {
    title: 'Design 1',
    category: 'Graphics & Thumbnails',
    imageUrl: 'https://i.postimg.cc/mgX7pHVS/portfolio-1.jpg',
    dataAiHint: 'youtube thumbnail',
  },
  {
    title: 'Design 2',
    category: 'Graphics & Thumbnails',
    imageUrl: 'https://i.postimg.cc/rF91Wbr3/portfolio-2.jpg',
    dataAiHint: 'gaming thumbnail',
  },
  {
    title: 'Design 3',
    category: 'Graphics & Thumbnails',
    imageUrl: 'https://i.postimg.cc/hGXTkt5R/portfolio-3.jpg',
    dataAiHint: 'vlog thumbnail',
  },
  {
    title: 'Design 4',
    category: 'Graphics & Thumbnails',
    imageUrl: 'https://i.postimg.cc/BnQxCg56/portfolio-4.jpg',
    dataAiHint: 'tutorial thumbnail',
  },
  {
    title: 'Design 5',
    category: 'Graphics & Thumbnails',
    imageUrl: 'https://i.postimg.cc/q7Wy4HPh/portfolio-5.jpg',
    dataAiHint: 'lifestyle thumbnail',
  },
  {
    title: 'Design 6',
    category: 'Graphics & Thumbnails',
    imageUrl: 'https://i.postimg.cc/50vvtkJP/portfolio-6.jpg',
    dataAiHint: 'tech thumbnail',
  },
  {
    title: 'Design 7',
    category: 'Graphics & Thumbnails',
    imageUrl: 'https://i.postimg.cc/7hkzJMYq/portfolio-7.jpg',
    dataAiHint: 'podcast thumbnail',
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
    title: 'Customer Service Bot',
    category: 'AI Agents',
    imageUrl: 'https://placehold.co/1600x900.png',
    dataAiHint: 'ai robot',
  },
];

const filters = ['All Work', 'Video Editing', 'Graphics & Thumbnails', 'Web & App', 'Paid Ads', 'Social Media', 'AI Agents'];

const VideoCard = ({ videoUrl, title, category }: { videoUrl: string; title: string; category: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleVolumeChange = () => setIsMuted(video.muted);

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('volumechange', handleVolumeChange);

      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('volumechange', handleVolumeChange);
      };
    }
  }, []);

  return (
    <Card className="group relative overflow-hidden rounded-xl border-none h-full bg-gray-900/50 backdrop-blur-sm aspect-[9/16]">
      <video
        ref={videoRef}
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        onClick={(e) => { e.preventDefault(); togglePlayPause(e as any); }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
        <div className="transition-transform duration-500 group-hover:-translate-y-4">
          <p className="text-xs md:text-sm font-light text-gray-300">{category}</p>
          <h3 className="text-lg md:text-2xl font-bold text-white mt-1">{title}</h3>
        </div>
        <ArrowUpRight className="absolute top-4 right-4 h-6 w-6 md:h-8 md:w-8 text-white opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45" />
      </div>
      <div className="absolute bottom-4 left-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={togglePlayPause}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <button
          onClick={toggleMute}
          className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
    </Card>
  );
};

const ImageCard = ({ imageUrl, title, category, dataAiHint, onImageClick }: { imageUrl: string; title: string; category: string; dataAiHint?: string; onImageClick: (url: string) => void }) => (
  <Card className="group relative overflow-hidden rounded-xl border-none h-full bg-gray-900/50 backdrop-blur-sm aspect-video cursor-pointer" onClick={() => onImageClick(imageUrl)}>
    <Image
      src={imageUrl}
      alt={title}
      width={1600}
      height={900}
      data-ai-hint={dataAiHint}
      className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
      <div className="transition-transform duration-500 group-hover:-translate-y-4">
        <p className="text-xs md:text-sm font-light text-gray-300">{category}</p>
        <h3 className="text-lg md:text-xl font-bold text-white mt-1 truncate">{title}</h3>
      </div>
      <ArrowUpRight className="absolute top-4 right-4 h-6 w-6 md:h-8 md:w-8 text-white opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:rotate-45" />
    </div>
  </Card>
);

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('Video Editing');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = activeFilter === 'All Work'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-20 md:py-32 overflow-hidden">
       <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none outline-none">
          <DialogClose className="absolute -top-2 -right-2 md:-top-4 md:-right-4 z-10 bg-black/50 rounded-full p-1 text-white">
            <X className="h-6 w-6" />
          </DialogClose>
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Expanded portfolio image"
              width={1600}
              height={900}
              className="rounded-lg object-contain w-full h-full"
            />
          )}
        </DialogContent>
      </Dialog>
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
            <ScrollAnimationWrapper key={`${item.title}-${index}`} className={cn(
              item.category === 'Video Editing' ? 'aspect-[9/16]' : 'aspect-video',
              'md:col-span-1'
            )}>
              {'videoUrl' in item ? (
                 <VideoCard videoUrl={item.videoUrl!} title={item.title} category={item.category} />
              ) : (
                <ImageCard imageUrl={item.imageUrl!} title={item.title} category={item.category} dataAiHint={item.dataAiHint} onImageClick={setSelectedImage} />
              )}
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
