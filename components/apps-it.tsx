import Image from "next/image"
import Link from "next/link"

interface App {
	name: string
	logo: string
	href: string
	description?: string
	imageClassName?: string
}

interface AppCategory {
	name: string
	description: string
	apps: App[]
}

const appCategories: AppCategory[] = [
	{
		name: "Creazione digitale",
		description:
			"Crea, mostra e condividi la tua arte e design digitale onchain",
		apps: [
			{
				name: "Highlight",
				logo: "/apps/highlight.jpg",
				href: "https://highlight.xyz",
				description:
					"Crea NFT dei pezzi di design esposti e supporta i designer"
			},
			{
				name: "Base Paint",
				logo: "/apps/basepaint.png",
				href: "https://basepaint.xyz",
				description:
					"Dipingi onchain e vedi il tuo contributo in diretta su uno schermo"
			},
			{
				name: "Moshicam",
				logo: "/apps/moshi.webp",
				href: "https://moshi.cam",
				description:
					'Esperienza "Minta la tua aura", che mostra l\'ultima aggiunta su uno schermo live'
			}
		]
	},
	{
		name: "Social",
		description:
			"Connettiti con la comunità Ethereum e gestisci la tua identità digitale",
		apps: [
			{
				name: "Warpcast",
				logo: "/apps/warpcast.svg",
				href: "https://warpcast.com",
				description:
					"Iscriviti a farcaster, trova la tua comunità e condividi contenuti"
			},
			{
				name: "Rodeo",
				logo: "/apps/rodeo.webp",
				href: "https://rodeo.club",
				description: "Social network per artisti e creativi"
			}
		]
	},
	{
		name: "Identità e Privacy",
		description:
			"Scopri la privacy in Ethereum e gestisci la tua identità digitale",
		apps: [
			{
				name: "Coinbase Wallet",
				logo: "/apps/cbw.png",
				href: "https://www.coinbase.com/wallet",
				description: "Onboarding, onramp, supporto clienti"
			},
			{
				name: "Fluidkey",
				logo: "/apps/fluidkey.png",
				href: "https://fluidkey.com",
				description: "Scopri la privacy in Ethereum e gli indirizzi stealth"
			}
		]
	},
	{
		name: "Comunità e Crowdfunding",
		description: "Partecipa e supporta DAO e progetti guidati dalla comunità",
		apps: [
			{
				name: "Nounswap",
				logo: "/apps/nounswap.jpg",
				href: "https://nounswap.wtf",
				description: "Esplora l'ecosistema nouns"
			},
			{
				name: "Juicebox",
				logo: "/apps/juicebox.jpg",
				href: "https://juicebox.money",
				description: "Finanzia progetti e comunità onchain"
			}
		]
	}
]

export function Apps() {
	return (
		<section className="w-full py-20">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#D1B9FE]">
					App
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{appCategories.map((category) => (
						<div
							key={category.name}
							className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200"
						>
							<h3 className="text-2xl font-semibold text-gray-900 mb-2">
								{category.name}
							</h3>
							<p className="text-gray-600 mb-6">{category.description}</p>
							<div className="space-y-4">
								{category.apps.map((app) => (
									<Link
										key={app.name}
										href={app.href}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
									>
										<div className="relative w-12 h-12 rounded-lg overflow-hidden">
											<Image
												src={app.logo}
												alt={app.name}
												fill
												className={`object-cover ${app.imageClassName || ""}`}
											/>
										</div>
										<div>
											<h4 className="font-medium text-gray-900">{app.name}</h4>
											{app.description && (
												<p className="text-sm text-gray-600">
													{app.description}
												</p>
											)}
										</div>
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
