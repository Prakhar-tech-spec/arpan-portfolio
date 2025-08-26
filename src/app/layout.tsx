import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Toaster from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'Adventure Marketing',
  description: 'A stunning landing page for ADVENTURE Marketing agency.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={cn('font-body antialiased bg-background')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
