import { AppconLogo } from "@/components/appconLogo"
import Farcaster from "@/components/farcaster"
import { Particles } from "@/components/particles"
import SliceLogo from "@/components/sliceLogo"
import { cn } from "@/lib/utils"
import logo from "@/public/logo_transp.png"
import Image from "next/image"

export default function Page() {
	return (
		<div
			className={cn(
				"relative min-h-screen bg-black text-white flex flex-col font-sans"
			)}
		>
			<Particles />

			{/* Gradient Overlay - Adjusted for better visibility of lego blocks */}
			<div
				className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30 pointer-events-none"
				style={{ zIndex: 1 }}
			/>

			{/* Content */}
			<div className="relative z-10 flex flex-col min-h-screen">
				{/* Hero Section */}
				<main className="flex-grow container mx-auto px-4 flex flex-col items-center justify-center space-y-12">
					<div className="relative size-48 md:size-56">
						<AppconLogo className="w-full h-full" />
					</div>

					<div className="text-center space-y-6 md:space-y-8 max-w-3xl">
						<h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#CCB1FF] to-[#E7CCC2] bg-clip-text text-transparent">
							Appcon
						</h1>
						<p className="text-2xl md:text-3xl bg-gradient-to-r from-[#C1C8FE] to-[#E7CCC2] bg-clip-text text-transparent font-light tracking-wide">
							Showing Ethereum Apps to the World
						</p>
					</div>

					<div className="space-y-7 text-center">
						<p className="mt-16 text-4xl md:text-5xl font-extralight tracking-widest text-white/60">
							MILAN 2025
						</p>
						<p className="text-2xl md:text-3xl font-extralight tracking-widest text-white/60">
							April 7-13
						</p>
						{/* <Button 
              variant="outline" 
              size="lg"
              className="mt-8 border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 text-lg"
              asChild
            >
              <Link href="#notify" className="flex items-center gap-2">
                Stay Updated
                <span className="text-xl">→</span>
              </Link>
            </Button> */}
					</div>
				</main>

				{/* Footer */}
				<footer className="border-t border-white/10 backdrop-blur-sm bg-black/30">
					<div className="p-6 sm:px-10 flex items-center justify-between mx-auto max-w-screen-lg">
						<p className="text-gray-300 font-light tracking-wider">
							Organized by{" "}
							<a
								href="https://slice.so"
								className="text-white font-semibold hover:text-yellow-200"
								target="_blank"
								rel="noopener noreferrer"
							>
								Slice
								<SliceLogo className="inline-block ml-1.5 size-3.5" />
							</a>
						</p>
						<a
							href="https://warpcast.com/~/channel/appcon"
							className="group flex items-center gap-2 text-gray-300 transition-colors hover:text-purple-400"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Farcaster className="size-5" />
						</a>
					</div>
				</footer>
			</div>
		</div>
	)
}
