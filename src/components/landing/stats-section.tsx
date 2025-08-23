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
    <section id="stats" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
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
