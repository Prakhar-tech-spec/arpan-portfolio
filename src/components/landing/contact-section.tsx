'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ScrollAnimationWrapper from '../animations/scroll-animation-wrapper';
import { Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">Let's Build Together</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              Ready to start your next adventure? Drop us a line.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimationWrapper>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Contact Information</h3>
              <p className="text-gray-400">
                Our team is ready to answer your questions and help you get started on your project.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-gray-400" />
                  <a href="mailto:hello@adventure.com" className="text-lg text-white hover:underline">
                    hello@adventure.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-gray-400" />
                  <a href="tel:+1234567890" className="text-lg text-white hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <form className="space-y-6">
              <Input type="text" placeholder="Your Name" className="h-12 bg-secondary border-gray-700 focus:ring-white" />
              <Input type="email" placeholder="Your Email" className="h-12 bg-secondary border-gray-700 focus:ring-white" />
              <Textarea placeholder="Your Message" rows={5} className="bg-secondary border-gray-700 focus:ring-white" />
              <Button type="submit" size="lg" className="w-full h-12 text-lg font-semibold bg-white text-black hover:bg-gray-200 relative overflow-hidden group">
                <span className="relative z-10">Send Message</span>
              </Button>
            </form>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
