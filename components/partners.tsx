import Image from 'next/image';

interface Partner {
  name: string;
  logo: string;
  isSvg?: boolean;
  svgComponent?: React.ComponentType<{ className?: string }>;
  customClassName?: string;
}

const partners: Partner[] = [
  {
    name: 'Coinbase Wallet',
    logo: '/partners/coinbase-wallet.png',
  },
  {
    name: 'Ethereum Foundation',
    logo: '/partners/eth.png',
    customClassName: 'p-6', // padding just for ecosystem logo not for ethereum foundation logo
  },
  {
    name: 'Farcaster',
    logo: '/partners/farcaster.svg',
  },
  {
    name: 'Nouns',
    logo: '/partners/nouns.png',
  },
];

export function Partners() {
  return (
    <section className="w-full py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  items-center justify-items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="relative size-48">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className={`object-contain ${partner.customClassName || ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
