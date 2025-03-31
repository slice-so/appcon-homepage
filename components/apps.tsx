import Image from "next/image"
import Link from "next/link"

const apps = [
  {
    name: "Coinbase Wallet",
    logo: "/apps/cbw.png",
    href: "https://www.coinbase.com/wallet"
  },
  {
    name: "Base Paint",
    logo: "/apps/basepaint.png",
    href: "https://basepaint.xyz"
  },
  {
    name: "Fluidkey",
    logo: "/apps/fluidkey.png",
    href: "https://fluidkey.com"
  },
  {
    name: "Highlight",
    logo: "/apps/highlight.jpg",
    href: "https://highlight.xyz"
  },
  {
    name: "Juicebox",
    logo: "/apps/juicebox.jpg",
    href: "https://juicebox.money"
  },
  {
    name: "Mage Phone",
    logo: "/apps/magephone.jpg",
    href: "https://mage.phone"
  },
  {
    name: "Moshi",
    logo: "/apps/moshi.webp",
    href: "https://moshi.com"
  },
  {
    name: "No Uniswap",
    logo: "/apps/nounswap.jpg",
    href: "https://nounswap.xyz"
  },
  {
    name: "POAP",
    logo: "/apps/poap.png",
    href: "https://poap.xyz"
  },
  {
    name: "Rodeo",
    logo: "/apps/rodeo.webp",
    href: "https://rodeo.finance"
  }
]

export function Apps() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#4A5568] to-[#805AD5] bg-clip-text text-transparent">
          Featured Apps
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {apps.map((app) => (
            <Link
              key={app.name}
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-6 rounded-lg bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
            >
              <div className="relative size-16 md:size-20 mb-4">
                <Image
                  src={app.logo}
                  alt={app.name}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors text-center whitespace-nowrap">
                {app.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
