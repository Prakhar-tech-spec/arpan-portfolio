import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'ADVENTURE Marketing - Elevate Your Brand',
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
