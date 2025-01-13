import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Particles } from "@/components/particles"
import { cn } from "@/lib/utils"
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function Page() {
  return (
    <div className={cn(
      "relative min-h-screen bg-black text-white flex flex-col",
      montserrat.variable,
      "font-sans"
    )}>
      <Particles />
      
      {/* Gradient Overlay - Adjusted for better visibility of lego blocks */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30 pointer-events-none" style={{ zIndex: 1 }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <main className="flex-grow container mx-auto px-4 flex flex-col items-center justify-center space-y-12 md:space-y-16">
          <div className="relative w-48 h-48 md:w-64 md:h-64 animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl opacity-20 animate-pulse" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_transp-gB13VpG17l1iGkDqMgxByKK6faciaw.png"
              alt="Appcon Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
          
          <div className="text-center space-y-6 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Appcon
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
              Showcasing Ethereum Apps to the World
            </p>
          </div>

          <div className="space-y-8 text-center">
            <p className="text-4xl md:text-5xl font-extralight tracking-widest text-white/90">
              MILAN <span className="font-light">2025</span>
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="mt-8 border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 text-lg"
              asChild
            >
              <Link href="#notify" className="flex items-center gap-2">
                Stay Updated
                <span className="text-xl">→</span>
              </Link>
            </Button>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 backdrop-blur-sm bg-black/30">
          <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between text-sm">
            <p className="text-gray-300 font-light tracking-wider">
              Organized by <span className="text-white font-normal">Slice</span>
            </p>
            <Link 
              href="https://warpcast.com" 
              className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
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
    </div>
  )
}

