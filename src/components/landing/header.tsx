'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Cross as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'sonner';

const navItems = [
  { href: '/#services', label: 'Services' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#testimonials', label: 'Testimonials' },
  {
    href: '#',
    label: (
      <span className="flex items-center">
        Tools
        <sup className="ml-1.5 -mt-2">
          <Badge variant="secondary" className="text-xs bg-gray-700 text-gray-300">
            Soon
          </Badge>
        </sup>
      </span>
    ),
    onClick: () => toast.info('Coming soon!', { description: 'We are working hard to bring this feature to you.' }),
  },
  { href: '/careers', label: 'Careers' },
  { href: '/#contact', label: 'Contact' },
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

  const whatsAppUrl =
    'https://api.whatsapp.com/send?phone=917029757375&text=Hi!%20I%E2%80%99m%20interested%20in%20your%20done-for-you%20creative%20and%20growth%20services.%20Can%20we%20connect%20to%20discuss%20what%20might%20be%20the%20best%20fit%3F';

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isMenuOpen ? 'bg-black/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'
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
                onClick={item.onClick}
                className="text-sm font-light text-gray-300 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-gray-600 hover:bg-white hover:text-black"
            >
              <Link href={whatsAppUrl} target="_blank">
                Let's Chat
              </Link>
            </Button>
          </div>
          <div className="md:hidden -mr-2 text-white">
            <button aria-label="Open menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Hamburger toggled={isMenuOpen} size={24} />
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-20 left-0 w-full"
          >
             <div className="container mx-auto px-4">
              <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-6">
                <nav className="flex flex-col items-start space-y-6">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-xl font-light text-gray-300 transition-colors hover:text-white"
                      onClick={() => {
                        if(item.onClick) item.onClick();
                        setIsMenuOpen(false)
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    asChild
                    variant="outline"
                    className="w-full mt-4 rounded-full border-gray-600 hover:bg-white hover:text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href={whatsAppUrl} target="_blank">
                      Let's Chat
                    </Link>
                  </Button>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
