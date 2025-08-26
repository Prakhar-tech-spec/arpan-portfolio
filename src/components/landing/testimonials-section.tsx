'use client';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import ScrollAnimationWrapper from '../animations/scroll-animation-wrapper';
import { Badge } from '../ui/badge';
import React from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      'I have grown my followers from 30k-50k and with 24M+ views and 2000+ organic leads in just 3 months also I have tried their AI Agents who handles and set appointments with our closest very smoothly and saves our tons of time and Money! The One Stop Solution For business Arpan (Adventure Marketing)',
    name: 'Sudhir Kove',
    title: 'Coach',
    image: 'https://i.postimg.cc/VLcm0kPf/Whats-App-Image-2025-06-03-at-7-47-56-PM.jpg',
    dataAiHint: 'professional man',
  },
  {
    quote:
      'The Ultimate Guy to handle my all needs for my business he is the man who takes care my whole marketing organic and inorganic very responsibly and his strategies are stunning and fully result oriented.',
    name: 'Aman Asati',
    title: 'Agency Owner and Coach',
    image: 'https://i.postimg.cc/W3CpHGyg/Whats-App-Image-2025-06-03-at-7-47-07-PM.jpg',
    dataAiHint: 'smiling man',
  },
  {
    quote:
      'Arpan Generated 10M+ views and 30k+followers in 4months for my clients pages and have made absolutely smooth AI automations for my clients ( That generated my clients lakhs rs of business) .Also have given Stunning Results on our clients ads that was managed by Arpan',
    name: 'Sidhartha Chowdhury',
    title: 'Agency Owner',
    image: 'https://i.postimg.cc/jjyh5cHd/Whats-App-Image-2025-06-06-at-12-05-14-AM.jpg',
    dataAiHint: 'business person',
  },
  {
    quote:
      'Arpan is the guy who worked for our content edits and UGC videos, also paid campaigns. We have generated thousands of leads. The Perfect Result Oriented Guy who generated us an unbelievable result in just 4 months.',
    name: 'Prathyusha',
    title: 'Influencer and UGC Head',
    image: 'https://i.postimg.cc/wj7f6D47/Whats-App-Image-2025-06-03-at-7-50-55-PM.jpg',
    dataAiHint: 'professional woman',
  },
  {
    quote:
      'Arpan has Build us a stunning Website for my business. Also he have done SEO and GMB for us that is generating unlimited leads for my business. Good work and keep it up Team Adventure (Arpan)',
    name: 'Subhrangshu Mahakud',
    title: 'Agency Owner',
    image: 'https://i.postimg.cc/15P157D4/Whats-App-Image-2025-06-03-at-7-49-57-PM.jpg',
    dataAiHint: 'smiling man',
  },
];

const videoTestimonials = [
  {
    name: 'Subhrangshu',
    videoUrl: 'https://res.cloudinary.com/dj88p3xio/video/upload/v1756103338/Video-testimonial2_b7xy4f.mp4',
  },
  {
    name: 'Raghav',
    videoUrl: 'https://res.cloudinary.com/dj88p3xio/video/upload/v1756104473/WhatsApp_Video_2025-08-09_at_10.50.52_PM_re9f7m.mp4',
  },
  {
    name: 'Prathyusha',
    videoUrl: 'https://res.cloudinary.com/dj88p3xio/video/upload/v1756193769/WhatsApp_Video_2025-08-26_at_1.00.13_PM_vuhpks.mp4',
  },
];

const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

const VideoTestimonialCard = ({
  videoUrl,
  name,
}: {
  videoUrl: string | undefined;
  name: string;
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(true);

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

  React.useEffect(() => {
    // This is to synchronize the state in case the browser's default controls are used.
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
    <div className="w-full max-w-[250px] flex-shrink-0 md:max-w-[300px]">
      <Card className="group relative overflow-hidden rounded-xl border-none h-full bg-gray-900/50 backdrop-blur-sm aspect-[9/16]">
        {videoUrl ? (
          <>
            <video
              ref={videoRef}
              src={videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              onClick={(e) => {
                e.preventDefault();
                togglePlayPause(e as any);
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
              <div className="transition-transform duration-500 group-hover:-translate-y-4">
                <p className="text-xs md:text-sm font-light text-gray-300">Client Testimonial</p>
                <h3 className="text-lg md:text-2xl font-bold text-white mt-1">{name}</h3>
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
          </>
        ) : (
          <div className="h-full w-full bg-black/50 border border-dashed border-gray-700 rounded-xl" />
        )}
      </Card>
    </div>
  );
};

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
            <Badge variant="outline" className="mb-4 border-gray-600 bg-gray-800/50 text-gray-300 backdrop-blur-2xl">
              Testimonial
            </Badge>
            <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">What Our Clients Say</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              We're proud to have earned their trust.
            </p>
          </div>
        </ScrollAnimationWrapper>
        <div className="space-y-8">
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
                    <Card className="h-full rounded-xl border border-white/10 bg-gray-500/10 backdrop-blur-2xl">
                      <CardContent className="p-6 flex flex-col h-full">
                        <p className="flex-grow text-lg text-gray-300 italic">"{testimonial.quote}"</p>
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
          <ScrollAnimationWrapper>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              {videoTestimonials.map((testimonial, index) => (
                <VideoTestimonialCard key={index} videoUrl={testimonial.videoUrl} name={testimonial.name} />
              ))}
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
