import Image from "next/image"
import { AppconLogo } from "./logo/appconLogo"
import SliceLogo from "./logo/sliceLogo"

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
						<h1 className="text-6xl md:text-[7rem] font-bold text-[#D1B9FE]">
							Appcon
						</h1>
						<div className="text-lg md:text-2xl text-[#9568e8] flex items-center justify-end gap-2 w-full mt-3">
							<p className="font-extralight text-4xl">
								hosted by <span className="font-bold">Slice</span>
							</p>
							<SliceLogo className="size-6" />
						</div>
					</div>
					<p className="text-xl md:text-4xl text-[#9568e8] font-light tracking-wide mt-12">
						Showing Ethereum Apps to the World
					</p>
				</div>
			</div>
		</div>
	)
}
