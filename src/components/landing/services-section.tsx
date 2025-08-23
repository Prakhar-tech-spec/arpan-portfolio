'use client';
import { Target, PenTool, TrendingUp, Megaphone, Film, Palette, Bot, Codepen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollAnimationWrapper from '../animations/scroll-animation-wrapper';

const services = [
  {
    icon: <Megaphone className="h-10 w-10 text-white" />,
    title: 'Social Media Strategy & Management',
    description: 'Developing and executing comprehensive social media strategies to grow your brand and engage your audience.',
  },
  {
    icon: <Film className="h-10 w-10 text-white" />,
    title: 'Video Editing',
    description: 'Professional video editing services to create stunning visuals that capture attention and tell your story.',
  },
  {
    icon: <Palette className="h-10 w-10 text-white" />,
    title: 'YouTube Thumbnails & Graphic Design',
    description: 'Creative graphic design for eye-catching YouTube thumbnails and other branding materials to make you stand out.',
  },
  {
    icon: <Target className="h-10 w-10 text-white" />,
    title: 'Paid Ads (Primary Expertise)',
    description: 'Expertly managed paid advertising campaigns to drive targeted traffic, generate leads, and maximize your ROI.',
  },
  {
    icon: <Codepen className="h-10 w-10 text-white" />,
    title: 'Web & App Development',
    description: 'Custom web and mobile application development to bring your ideas to life with seamless user experiences.',
  },
  {
    icon: <Bot className="h-10 w-10 text-white" />,
    title: 'AI Agents & Automation Setups',
    description: 'Implementing AI-powered agents and automation to streamline your business processes and enhance efficiency.',
  },
];

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <Card
      className="group relative h-full transform-gpu overflow-hidden border-gray-800 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-gray-700/20"
      style={{ perspective: '1000px' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div
        className="absolute top-0 left-0 h-48 w-48 rounded-full bg-white/5 blur-3xl transition-transform duration-500 group-hover:-translate-x-10 group-hover:-translate-y-10"
      />
      <div className="relative z-10 flex h-full flex-col p-6">
        <CardHeader className="p-0">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
            {icon}
          </div>
          <CardTitle className="text-2xl font-bold text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-0 pt-4">
          <p className="text-gray-400">{description}</p>
        </CardContent>
      </div>
    </Card>
  );
};


export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">Our Expertise</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              We deliver a complete suite of marketing services to transform your brand's digital presence.
            </p>
          </div>
        </ScrollAnimationWrapper>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollAnimationWrapper key={index} className="h-full">
              <ServiceCard {...service} />
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
