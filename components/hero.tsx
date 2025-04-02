import { AppconLogo } from './logo/appconLogo';
import SliceLogo from './logo/sliceLogo';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="relative min-h-[60vh] md:min-h-[70vh] text-black flex flex-col justify-center items-center px-4 md:px-8">
      {/* Container for the content and patterns */}
      <div className="flex flex-col items-center justify-center w-full max-w-4xl relative">
        {/* Main Content Area */}
        <div className="text-center flex flex-col items-center justify-center">
          <div className="relative size-20 md:size-32 mb-4">
            <AppconLogo className="w-full h-full" />
          </div>

          <div className="max-w-3xl flex flex-col items-center justify-center">
            <h1 className="text-6xl md:text-[7rem] font-bold bg-gradient-to-b bg-clip-text text-transparent from-[#C3AFD5] via-[#B8B5E8] to-[#C2C6E4]">
              Appcon
            </h1>
            <p className="text-lg md:text-2xl bg-gradient-to-r from-[#4A5568] to-[#805AD5] bg-clip-text text-transparent font-light tracking-wide mt-2">
              Showing Ethereum Apps to the World
            </p>
            <div className="text-base md:text-xl text-gray-600 flex items-center justify-center gap-1 mt-2">
              hosted by <span className="font-semibold">Slice</span>
              <SliceLogo className="size-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
