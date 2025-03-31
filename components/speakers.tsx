import Image from "next/image"

interface Speaker {
  name: string
  role: string
  image: string
  company: string
}

const speakers: Speaker[] = [
  {
    name: "Dan",
    role: "Founder",
    image: "/speakers/dan.png",
    company: "Farcaster"
  },
  {
    name: "Chintan",
    role: "Director",
    image: "/speakers/chintan.jpg",
    company: "Coinbase Wallet"
  },

  {
    name: "Jacopo",
    role: "Founder",
    image: "/speakers/jacopo.jpg",
    company: "Slice"
  },
  {
    name: "Phil",
    role: "Founder",
    image: "/speakers/phil.png",
    company: "Bright Moments"
  },
  {
    name: "Aneri",
    role: "Product Lead",
    image: "/speakers/aneri.jpg",
    company: "Base"
  },
  {
    name: "Limone",
    role: "Ambassador",
    image: "/speakers/limone.jpg",
    company: "Farcaster"
  }
]

export function Speakers() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#4A5568] to-[#805AD5] bg-clip-text text-transparent">
          Speakers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 hover:border-purple-200 transition-all duration-300"
            >
              <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {speaker.name}
              </h3>
              <p className="text-purple-600 font-medium">{speaker.role}</p>
              <p className="text-gray-600 text-center">{speaker.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
