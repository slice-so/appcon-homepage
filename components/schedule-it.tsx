import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "./ui/button"

interface ScheduleItem {
	time: string
	title: string
	description?: string
	type: "workshop" | "talk" | "meetup"
	link?: string
}

interface DaySchedule {
	date: string
	theme: string
	schedule: ScheduleItem[]
}

const scheduleData: DaySchedule[] = [
	{
		date: "7 Aprile",
		theme: "Ethereum: The World Computer",
		schedule: [
			{
				time: "11:00 - 12:00",
				title: "Ethereum nel mondo reale",
				description:
					"Moderatori: Jacopo Ranalli (Fondatore, Slice), Lorenzo Patuzzo (Akasha), Simone Staffa (Fondatore, Urbe.eth)",
				type: "talk",
				link: "https://lu.ma/ri1to44f"
			},
			{
				time: "17:30 - 18:30",
				title: "Oltre la Speculazione: App Ethereum",
				description:
					"Moderatori: Jacopo Ranalli (Fondatore, Slice), Lorenzo Patuzzo (Akasha), Simone Staffa (Fondatore, Urbe.eth)",
				type: "talk",
				link: "https://lu.ma/50tya0pk"
			},
			{
				time: "6:30 PM - 7:30 PM",
				title: "DIGITAL COMMONS. DESIGN, COMUNITA' E BLOCKCHAIN",
				description: "​I curatori, gli artisti e designer in mostra",
				type: "talk",
				link: "https://lu.ma/q5b6aj4j"
			}
		]
	},
	{
		date: "8 Aprile",
		theme: "Il Futuro del Commercio",
		schedule: [
			{
				time: "Online",
				title: "Talk Online",
				description:
					"Chintan Turakhia (Senior Director of Engineering, Coinbase)",
				type: "talk"
			},
			{
				time: "11:00 - 12:00",
				title: "Il futuro del commercio è onchain",
				description: "Moderatore: Jacopo Ranalli (Fondatore, Slice)",
				type: "talk",
				link: "https://lu.ma/u9azu0vu"
			},
			{
				time: "16:30 - 17:30",
				title: "Lancia il tuo negozio onchain con Slice",
				description:
					"Con: Slice / Jacopo, Coinbase e DUC. Max 30 persone - Piazzetta",
				type: "workshop",
				link: "https://lu.ma/w9r8ijoi"
			},
			{
				time: "17:30 - 18:30",
				title: "Come le aziende reali stanno andando onchain",
				description:
					"Moderatori: Jacopo Ranalli (Fondatore, Slice), Marco Tullio Giordano (Avvocato, 42LF), Commercianti onboardati durante il workshop",
				type: "talk",
				link: "https://lu.ma/fnbxlwq8"
			}
		]
	},
	{
		date: "9 Aprile",
		theme: "Social Decentralizzati e Comunità Digitali",
		schedule: [
			{
				time: "Online",
				title: "Talk Online",
				description: "Dan Romero (Fondatore, Farcaster)",
				type: "talk"
			},
			{
				time: "11:00 - 12:00",
				title:
					"Costruisci un'Identità Digitale su Farcaster, per designer e artisti",
				description:
					"Con: Farcaster / Simone Staffa. Max 30 persone - Piazzetta",
				type: "workshop",
				link: "https://lu.ma/9epfl0xc"
			},
			{
				time: "14:30 - 15:30",
				title: "L'Ascesa dei Social Network Decentralizzati",
				description:
					"Moderatori: Simone Staffa (Fondatore, Urbe.eth), Lorenzo Patuzzo (Akasha)",
				type: "talk",
				link: "https://lu.ma/bkqzxpwu"
			},
			{
				time: "17:30 - 18:30",
				title: "Comunità Digitali e Governance",
				description:
					"Moderatori: Simone Staffa (Fondatore, Urbe.eth), Lorenzo Patuzzo (Akasha)",
				type: "talk",
				link: "https://lu.ma/cw4fymgb"
			}
		]
	},
	{
		date: "10 Aprile",
		theme: "Arte e Design nel Mondo Digitale",
		schedule: [
			{
				time: "Online",
				title: "Talk Online",
				description: "Phil Mohun (Fondatore, Bright Moments)",
				type: "talk"
			},
			{
				time: "11:00 - 12:30",
				title: "Tokenizzazione delle Opere d'Arte: NFT per Artisti e Designer",
				description:
					"Con: Bright Moments, Nouns, Coinbase. Artisti: 3. Max 30 persone - Piazzetta",
				type: "workshop",
				link: "https://lu.ma/1f4ju8e9"
			},
			{
				time: "14:30 - 15:30",
				title: "NFT Dopo l'Hype: Cosa Rimane, Cosa Conta",
				description:
					"Moderatori: Jacopo, Alessia Cuccu, Deodato Salafia, Un artista che lavora con gli NFT",
				type: "talk",
				link: "https://lu.ma/lljjkwpi"
			},
			{
				time: "17:30 - 18:30",
				title: "Estetica Immutabile: L'Ascesa dell'Arte Onchain",
				description:
					"Moderatori: Jacopo Ranalli (Fondatore, Slice), I 3 artisti del workshop mattutino",
				type: "talk",
				link: "https://lu.ma/t1c20h8z"
			}
		]
	},
	{
		date: "12 Aprile",
		theme: "Hangout",
		schedule: [
			{
				time: "16:00 - 20:00",
				title: "Meetup Farcaster",
				description:
					"Unisciti a noi per una serata informale di conversazione e networking con la comunità Farcaster. Questa è un'ottima opportunità per incontrare nuove persone, condividere le tue idee e saperne di più su Farcaster.",
				type: "meetup",
				link: "https://lu.ma/g6sg7val?tk=ghHIgD"
			}
		]
	}
]

export function Schedule() {
	return (
		<section className="w-full py-16 bg-white/70">
			<div className="container mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[#4A5568] to-[#805AD5] bg-clip-text text-transparent">
					Programma
				</h2>

				<Tabs defaultValue="7 Aprile" className="w-full max-w-6xl mx-auto">
					<TabsList className="grid grid-cols-5 mb-8">
						{scheduleData.map((day) => (
							<TabsTrigger
								key={day.date}
								value={day.date}
								className="text-center py-2"
							>
								<span className="block text-sm font-medium">{day.date}</span>
							</TabsTrigger>
						))}
					</TabsList>

					{scheduleData.map((day) => (
						<TabsContent
							key={day.date}
							value={day.date}
							className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100"
						>
							<div className="mb-4">
								<h3 className="text-xl font-bold text-purple-700">
									{day.date}: {day.theme}
								</h3>
							</div>

							<div className="space-y-6">
								{day.schedule.map((item) => (
									<div
										key={`${day.date}-${item.time}-${item.title}`}
										className={`p-4 rounded-lg ${item.type === "workshop" ? "bg-purple-50" : "bg-blue-50"}`}
									>
										<div className="flex items-center mb-2">
											<span
												className={`px-2 py-1 text-xs font-semibold rounded ${item.type === "workshop" ? "bg-purple-200 text-purple-800" : "bg-blue-200 text-blue-800"}`}
											>
												{item.type.toUpperCase()}
											</span>
											<span className="ml-3 text-sm font-medium text-gray-500">
												{item.time}
											</span>
										</div>
										<h4 className="text-lg font-medium text-gray-800">
											{item.title}
										</h4>
										{item.description && (
											<p className="mt-1 text-sm text-gray-600">
												{item.description}
											</p>
										)}
										{item.link && (
											<div className="mt-4">
												<a
													href={item.link}
													target="_blank"
													rel="noopener noreferrer"
												>
													<Button>Join the event</Button>
												</a>
											</div>
										)}
									</div>
								))}
							</div>
						</TabsContent>
					))}
				</Tabs>
			</div>
		</section>
	)
}
