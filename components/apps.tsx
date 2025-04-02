import Image from 'next/image';
import Link from 'next/link';

interface App {
  name: string;
  logo: string;
  href: string;
  description?: string;
}

interface AppCategory {
  name: string;
  description: string;
  apps: App[];
}

const appCategories: AppCategory[] = [
  {
    name: 'Digital creation',
    description:
      'Create, showcase, and share your digital art and design onchain',
    apps: [
      {
        name: 'Highlight',
        logo: '/apps/highlight.jpg',
        href: 'https://highlight.xyz',
        description:
          'Mint NFT of the displayed design pieces and support designers',
      },
      {
        name: 'Base Paint',
        logo: '/apps/basepaint.png',
        href: 'https://basepaint.xyz',
        description: 'Paint onchain and see your contribution live on a screen',
      },
      {
        name: 'Moshicam',
        logo: '/apps/moshi.webp',
        href: 'https://moshi.cam',
        description:
          '"Mint your aura" experience, showing the latest addition on a live screen',
      },
    ],
  },
  {
    name: 'Social',
    description: 'Connect with the Ethereum community and manage your digital identity',
    apps: [
      {
        name: 'Warpcast',
        logo: '/apps/warpcast.svg', 
        href: 'https://warpcast.com',
        description:
          'Onboard to farcaster, find your community and share content',
      },
      {
        name: 'Rodeo',
        logo: '/apps/rodeo.webp',
        href: 'https://rodeo.finance',
        description: 'Social network for artists and creatives',
      },
    ],
  },
  {
    name: 'Privacy & Identity',
    description:
      'Learn about privacy in Ethereum and manage your digital identity',
    apps: [
      {
        name: 'Fluidkey',
        logo: '/apps/fluidkey.png',
        href: 'https://fluidkey.com',
        description: 'Learn about privacy in Ethereum and stealth addresses',
      },
      {
        name: 'Coinbase Wallet',
        logo: '/apps/cbw.png',
        href: 'https://www.coinbase.com/wallet',
        description: 'Onboarding, onramp, customer support',
      },
    ],
  },
  {
    name: 'Communities & Crowdfunding',
    description:
      'Participate in and support DAOs and community-driven projects',
    apps: [
      {
        name: 'Nounswap',
        logo: '/apps/nounswap.jpg',
        href: 'https://nounswap.xyz',
        description: 'Explore nouns ecosystem',
      },
      {
        name: 'Juicebox',
        logo: '/apps/juicebox.jpg',
        href: 'https://juicebox.money',
        description:
          'Explore and contribute to DAOs, and learn how to set up one',
      }
    ],
  },
  {
    name: 'Onboarding',
    description: 'Essential tools for your Ethereum experience',
    apps: [
      {
        name: 'Slice',
        logo: '/apps/cbw.png', // Placeholder - replace with actual Slice logo
        href: 'https://slice.so',
        description:
          'Food, drinks and merch, with access to discounts based on POAPs',
      },
    ],
  },
];

export function Apps() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#4A5568] to-[#805AD5] bg-clip-text text-transparent">
          Featured Apps
        </h2>

        <div className="space-y-16">
          {appCategories.map((category) => (
            <div
              key={category.name}
              className="backdrop-blur-sm p-6"
            >
              <h3 className="text-2xl font-bold mb-2 text-purple-700">
                {category.name}
              </h3>
              <p className="text-gray-600 mb-8">{category.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {category.apps.map((app) => (
                  <Link
                    key={app.name}
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col h-full p-4 rounded-lg bg-white/50 hover:bg-white/80 transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-center mb-3">
                      <div className="relative size-12 mr-3">
                        <Image
                          src={app.logo}
                          alt={app.name}
                          fill
                          className="object-contain rounded-xl"
                        />
                      </div>
                      <h4 className="text-lg font-medium text-gray-800 group-hover:text-purple-600 transition-colors">
                        {app.name}
                      </h4>
                    </div>
                    {app.description && (
                      <p className="text-sm text-gray-600 mt-auto">
                        {app.description}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
