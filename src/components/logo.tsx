import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('text-2xl font-bold tracking-tight', className)}>
      <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
        AD
      </span>
      <span className="text-gray-500">VENTURE</span>
    </Link>
  );
}
