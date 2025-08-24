'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Cross as Hamburger } from 'hamburger-react'

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#testimonials', label: 'Testimonials' },
  {
    href: '#',
    label: (
      <span className="flex items-center">
        Tools
        <sup className="ml-1.5 -mt-2">
          <Badge variant="secondary" className="text-xs bg-gray-700 text-gray-300">Soon</Badge>
        </sup>
      </span>
    ),
  },
  { href: '#', label: 'Careers' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsAppUrl = "https://api.whatsapp.com/send?phone=917029757375&text=Hi!%20I%E2%80%99m%20interested%20in%20your%20done-for-you%20creative%20and%20growth%20services.%20Can%20we%20connect%20to%20discuss%20what%20might%20be%20the%20best%20fit%3F";

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-black/60 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm font-light text-gray-300 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild variant="outline" className="rounded-full border-gray-600 hover:bg-white hover:text-black">
              <Link href={whatsAppUrl} target="_blank">
                Let's Chat
              </Link>
            </Button>
          </div>
          <div className="md:hidden -mr-2">
             <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-lg font-light text-gray-300 transition-colors hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
             <Button asChild variant="outline" className="rounded-full border-gray-600 hover:bg-white hover:text-black" onClick={() => setIsMenuOpen(false)}>
               <Link href={whatsAppUrl} target="_blank">
                Let's Chat
               </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
