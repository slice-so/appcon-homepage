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
		date: "April 7",
		theme: "Ethereum: The World Computer",
		schedule: [
			{
				time: "11:00 AM - 12:00 PM",
				title: "Ethereum in the real world",
				description:
					"Moderators: Jacopo Ranalli (Founder, Slice), Lorenzo Patuzzo (Akasha), Simone Staffa (Founder, Urbe.eth)",
				type: "talk"
			},
			{
				time: "5:30 PM - 6:30 PM",
				title: "Beyond Speculation: Ethereum apps",
				description:
					"Moderators: Jacopo Ranalli (Founder, Slice), Lorenzo Patuzzo (Akasha), Simone Staffa (Founder, Urbe.eth)",
				type: "talk"
			}
		]
	},
	{
		date: "April 8",
		theme: "The Future of Commerce",
		schedule: [
			{
				time: "Online",
				title: "Online Talk",
				description:
					"Chintan Turakhia (Senior Director of Engineering, Coinbase)",
				type: "talk"
			},
			{
				time: "11:00 AM - 12:00 PM",
				title: "Launch your onchain store with Slice",
				description:
					"With: Slice / Jacopo, Coinbase and DUC. Max 30 people - Piazzetta",
				type: "workshop"
			},
			{
				time: "2:30 PM - 3:30 PM",
				title: "The future of commerce is onchain",
				description: "Moderator: Jacopo Ranalli (Founder, Slice)",
				type: "talk"
			},
			{
				time: "4:30 PM - 5:30 PM",
				title: "How real businesses are going onchain",
				description:
					"Moderators: Jacopo Ranalli (Founder, Slice), Marco Tullio Giordano (Lawyer, 42LF), Merchants onboarded during the workshop",
				type: "talk"
			}
		]
	},
	{
		date: "April 9",
		theme: "Decentralized Socials and Digital Communities",
		schedule: [
			{
				time: "Online",
				title: "Online Talks",
				description:
					"Dan Romero (Founder, Farcaster), Aneri Amin (Product Lead, Coinbase)",
				type: "talk"
			},
			{
				time: "11:00 AM - 12:00 PM",
				title:
					"Building a Digital Identity on Farcaster, for designers and artists",
				description:
					"With: Farcaster / Simone Staffa. Max 30 people - Piazzetta",
				type: "workshop"
			},
			{
				time: "2:30 PM - 3:30 PM",
				title: "The Rise of Decentralized Social Networks",
				description:
					"Moderators: Simone Staffa (Founder, Urbe.eth), Lorenzo Patuzzo (Akasha)",
				type: "talk"
			},
			{
				time: "5:30 PM - 6:30 PM",
				title:
					"From Followers to DAO Members: The Future of Digital Participation",
				description:
					"Moderators: fattybuthappy (Nouns), 0XBA5ED (Juicebox), Lorenzo Patuzzo (Web3 community representative)",
				type: "talk"
			}
		]
	},
	{
		date: "April 10",
		theme: "Art and Design in the Digital World",
		schedule: [
			{
				time: "Online",
				title: "Online Talk",
				description: "Phil Mohun (Founder, Bright Moments)",
				type: "talk"
			},
			{
				time: "11:00 AM - 12:30 PM",
				title: "Tokenizing Artworks: NFTs for Artists and Designers",
				description:
					"With: Bright Moments, Nouns, Coinbase. Artists: 3. Max 30 people - Piazzetta",
				type: "workshop"
			},
			{
				time: "2:30 PM - 3:30 PM",
				title: "NFTs After the Hype: What Stays, What Matters",
				description:
					"Moderators: Jacopo, Alessia Cuccu, Deodato Salafia, An artist working with NFTs",
				type: "talk"
			},
			{
				time: "5:30 PM - 6:30 PM",
				title: "Immutable Aesthetics: The Rise of Onchain Art",
				description:
					"Moderators: Jacopo Ranalli (Founder, Slice), The 3 artists from the morning workshop",
				type: "talk"
			}
		]
	},
	{
		date: "April 12",
		theme: "Hangout",
		schedule: [
			{
				time: "4:00 PM - 8:00 PM",
				title: "Farcaster meetup",
				description:
					"Join us for a casual evening of conversation and networking with the Farcaster community. This is a great opportunity to meet new people, share your ideas, and learn more about Farcaster.",
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
					Workshops & Talks
				</h2>

				<p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
					On April 7-10, workshops take place in the morning (11 am-12 pm) while
					talks in the afternoon (5:30-6:30 pm)
				</p>

				<Tabs defaultValue="April 7" className="max-w-4xl mx-auto">
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
