import Image from 'next/image';

export function EventOverview() {
  return (
    <section className="w-full py-16 bg-white/70">
      <div className="container mx-auto px-4 space-y-16">
        {/* Event Dates and Location */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-4xl md:text-5xl font-extralight tracking-widest text-gray-600">
            MILAN 2025
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg ">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-label="Calendar"
              >
                <title>Calendar</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>April 7-13</span>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-label="Location"
              >
                <title>Location</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>
                <a 
                  href="https://maps.app.goo.gl/CV9K5HsCK2v6ZmHYA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 transition-colors"
                >
                  Stecca3, BAM park, Isola District
                </a>
              </span>
            </div>
          </div>
        </div>
        
        {/* Section 1: Design Thinking in the Ethereum age - Image Left, Text Right */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/stecca.webp"
                  alt="Design Exhibition"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-purple-700">
                Design Thinking in the Ethereum Age
              </h3>
              <p className="text-gray-700 mb-4">
                Explore 8 design pieces from local and international artists, set up 
                in collaboration with Isola Design District. Each design piece is mintable 
                on Highlight and linked to one or more Ethereum apps.
              </p>
              <p className="text-gray-700 mb-4">
                Workshops and talks will be held daily.
              </p>
              <div className="mt-4">
                <p className="font-medium text-gray-800 mb-1">Design pieces and apps are grouped under 3 main themes:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                  <li>Digital Creation</li>
                  <li>Digital Identity & Social</li>
                  <li>Communities & Crowdfunding</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section 2: App Showcase - Text Left, Image Right */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/eth-space.png" 
                  alt="Ethereum Apps Showcase" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-purple-700">
                The Ethereum App Experience
              </h3>
              <p className="text-gray-700 mb-3">
                <span className="font-medium">Digital Creation:</span> Mint NFTs with Highlight, paint onchain with BasePaint, 
                and capture your digital aura with Moshicam.
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-medium">Commerce:</span> Buy onchain via Slice from local merchants that accept crypto payments.
              </p>
              <p className="text-gray-700 mb-3">
                <span className="font-medium">Identity, Privacy & Social:</span> Join Farcaster, explore 
                privacy with Fluidkey, and connect with other artists on Rodeo.
              </p>
              <p className="text-gray-700">
                <span className="font-medium">Communities & Crowdfunding:</span> Explore the Nouns ecosystem 
                with NounSwap and learn about DAOs through Juicebox. Additional services include 
                onboarding with Coinbase Wallet, refreshments at Slice Cafe, and exclusive POAP collectibles.
              </p>
            </div>
          </div>
        </div>
      
              {/* Section 3 */}
              <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/murales.png"
                  alt="Design Exhibition"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold mb-4 text-purple-700">
                3D Mural and Noggles Rail
              </h3>
              <p className="text-gray-700 mb-4">
                The "Ethereum in Society" 3D mural, a year-long installation on 
                the staircase created by students from ISIA Academy of Arts Urbino, sponsored 
                by Slice and Nouns.
              </p>
              <p className="text-gray-700 mb-4">
                The mural will be exhibited during Design Week and later 
                permanently installed in a local skate park.
              </p>
              <p className="text-gray-700 mb-4">
                Don't miss the Noggles Rail, the first in Italy sponsored by Gnars DAO. 
                This unique installation will be exhibited during Design Week and later 
                permanently installed in a local skate park.
              </p>
            </div>
          </div>
        </div>
        
      
      </div>
    </section>
  );
}
