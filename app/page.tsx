import Farcaster from '@/components/logo/farcaster';
import { Particles } from '@/components/particles';
import { Partners } from '@/components/partners';
import SliceLogo from '@/components/logo/sliceLogo';
import { Apps } from '@/components/apps';
import { Speakers } from '@/components/speakers';
import { Hero } from '@/components/hero';
import { EventOverview } from '@/components/eventOverview';
import { Schedule } from '@/components/schedule';

export default function Page() {
  return (
    <div className="relative min-h-screen bg-white text-black flex flex-col font-sans">
      <Particles />

      {/* Gradient Overlay - Adjusted for light theme */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/30 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto px-4 flex flex-col items-center justify-center">
          <Hero />
          <Partners />
          <EventOverview />
          <Apps />
          <Schedule />
          <Speakers />
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 backdrop-blur-sm bg-white/30">
          <div className="p-6 sm:px-10 flex items-center justify-between mx-auto max-w-screen-lg">
            <p className="text-gray-600 font-light tracking-wider">
              Organized by{' '}
              <a
                href="https://slice.so"
                className="text-gray-900 font-semibold hover:text-purple-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Slice
                <SliceLogo className="inline-block ml-1.5 size-3.5" />
              </a>
            </p>
            <a
              href="https://warpcast.com/~/channel/appcon"
              className="group flex items-center gap-2 text-gray-600 transition-colors hover:text-purple-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Farcaster className="size-5" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
