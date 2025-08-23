import Link from 'next/link';
import { Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';
import Logo from '@/components/logo';
import { Separator } from '../ui/separator';

const socialLinks = [
  {
    name: 'Instagram',
    icon: <Instagram className="h-5 w-5" />,
    href: 'https://www.instagram.com/arpanigcoach?igsh=OGRuNnRyeHVqNzBr',
  },
  { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: 'https://www.facebook.com' },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="h-5 w-5" />,
    href: 'https://www.linkedin.com/in/arpan-dey-5369212a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
];

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label={link.name}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <Separator className="my-6 bg-gray-800" />
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ADVENTURE Marketing. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
