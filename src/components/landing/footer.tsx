import Link from 'next/link';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from '@/components/logo';
import { Separator } from '../ui/separator';

const socialLinks = [
  { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, href: '#' },
  { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: '#' },
  { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
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
