import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { Hero } from '@/components/hero';
import { cn } from '@/lib/utils';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function Page() {
  return (
    <div
      className={cn(
        'relative min-h-screen bg-white text-black flex flex-col',
        montserrat.variable,
        'font-sans',
      )}
    >
      <Hero />

      {/* Footer */}
      <footer className="border-t border-black/10 backdrop-blur-sm bg-white/30">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-gray-600 font-light tracking-wider">
            Organized by <span className="text-black font-normal">Slice</span>
          </p>
          <Link
            href="https://warpcast.com"
            className="group flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Warpcast
            <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
              ↗
            </span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
