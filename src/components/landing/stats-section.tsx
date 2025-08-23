'use client';

import AnimatedCounter from '../animated-counter';
import ScrollAnimationWrapper from '../animations/scroll-animation-wrapper';

const stats = [
  { value: 50, label: 'Video Views', suffix: 'M+' },
  { value: 50, label: 'Social Followers Gained', suffix: 'K+' },
  { value: 20, label: 'YouTube Subscribers', suffix: 'K+' },
  { value: 2, label: 'Organic Leads Generated', suffix: 'K+' },
];

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-20 md:py-32 overflow-hidden">
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
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg">
                <div className="text-5xl font-bold text-white sm:text-6xl md:text-7xl tracking-tighter">
                  <AnimatedCounter target={stat.value} />
                  <span>{stat.suffix}</span>
                </div>
                <p className="mt-2 text-sm font-light text-gray-400 sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
