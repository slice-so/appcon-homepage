import Image from "next/image"
import { CoinbaseLogo } from "./coinbaseLogo"
import Farcaster from "./farcaster"

interface Partner {
  name: string
  logo: string
  isSvg?: boolean
  svgComponent?: React.ComponentType<{ className?: string }>
  customClassName?: string
}

const partners: Partner[] = [
  {
    name: "Coinbase",
    logo: "",
    isSvg: true,
    svgComponent: CoinbaseLogo
  },
  {
    name: "Ethereum Foundation",
    logo: "/eth.png"
  },
  {
    name: "Nouns",
    logo: "/nouns.jpg",
    customClassName: "rounded-full"
  },
  {
    name: "Farcaster",
    logo: "",
    isSvg: true,
    svgComponent: Farcaster,
    customClassName: "text-[#855DCD]"
  }
]

export function Partners() {
  return (
    <div className="w-full py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#4A5568] to-[#805AD5] bg-clip-text text-transparent">
        Main Partners
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto px-4">
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="relative size-24 md:size-32">
              {partner.isSvg && partner.svgComponent ? (
                <partner.svgComponent
                  className={`w-full h-full ${partner.customClassName || ""}`}
                />
              ) : (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className={`object-contain ${partner.customClassName || ""}`}
                />
              )}
            </div>
            <p className="text-lg font-medium text-gray-700">{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
