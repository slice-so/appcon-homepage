"use client"

import Image from "next/image"

export function EventOverview() {
	const handleCalendarDownload = () => {
		const event = {
			title: "APPCON MILANO 2025",
			description: "Design Thinking nell'Era di Ethereum - Mostra e Workshop",
			location: "Stecca3, Parco BAM, Quartiere Isola",
			startDate: "2025-04-07T00:00:00",
			endDate: "2025-04-13T23:59:59"
		}

		const icsContent = [
			"BEGIN:VCALENDAR",
			"VERSION:2.0",
			"PRODID:-//Slice//MILANO 2025//IT",
			"CALSCALE:GREGORIAN",
			"BEGIN:VEVENT",
			`UID:${Date.now()}@slice.com`,
			`DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
			`SUMMARY:${event.title}`,
			`DESCRIPTION:${event.description}`,
			`LOCATION:${event.location}`,
			`DTSTART:${event.startDate.replace(/[-:]/g, "")}Z`,
			`DTEND:${event.endDate.replace(/[-:]/g, "")}Z`,
			"END:VEVENT",
			"END:VCALENDAR"
		].join("\r\n")

		const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" })
		const link = document.createElement("a")
		link.href = window.URL.createObjectURL(blob)
		link.setAttribute("download", "milano-2025.ics")
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	return (
		<section className="w-full py-16 bg-white/70">
			<div className="container mx-auto px-4 space-y-16">
				{/* Event Dates and Location */}
				<div className="max-w-4xl mx-auto text-center space-y-4">
					<p className="text-4xl md:text-5xl font-extralight tracking-widest text-gray-600">
						MILANO 2025
					</p>

					<div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg ">
						<button
							type="button"
							className="flex items-center cursor-pointer hover:text-purple-600 transition-colors bg-transparent border-none p-0"
							onClick={handleCalendarDownload}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-purple-600 mr-2"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-label="Calendario"
							>
								<title>Calendario</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							<span>7-13 Aprile</span>
						</button>
						<div className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-purple-600 mr-2"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-label="Posizione"
							>
								<title>Posizione</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							<span>
								<a
									href="https://maps.app.goo.gl/CV9K5HsCK2v6ZmHYA"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-purple-600 transition-colors"
								>
									Stecca3, Parco BAM, Quartiere Isola
								</a>
							</span>
						</div>
					</div>
				</div>

				{/* Section 1: Design Thinking in the Ethereum age - Image Left, Text Right */}
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-col md:flex-row items-center gap-10">
						<div className="w-full md:w-1/2 relative">
							<div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
								<Image
									src="/stecca.webp"
									alt="Design Exhibition"
									fill
									className="object-cover"
								/>
							</div>
						</div>
						<div className="w-full md:w-1/2">
							<h3 className="text-2xl font-bold mb-4 text-purple-700">
								Design Thinking nell'Era di Ethereum
							</h3>
							<p className="text-gray-700 mb-4">
								Esplora le opere di design di artisti locali e internazionali,
								allestite in collaborazione con Isola Design District. Ogni
								opera di design è mintabile su Highlight e collegata a una o più
								app Ethereum.
							</p>
							<p className="text-gray-700 mb-4">
								Workshop e talk si terranno quotidianamente.
							</p>
							<div className="mt-4">
								<p className="font-medium text-gray-800 mb-1">
									Le opere di design e le app sono raggruppate in 5 temi
									principali:
								</p>
								<ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
									<li>Creazione Digitale</li>
									<li>Social</li>
									<li>Identità e Privacy</li>
									<li>Comunità e Crowdfunding</li>
									<li>Commercio</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* Section 2: App Showcase - Text Left, Image Right */}
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-col md:flex-row-reverse items-center gap-10">
						<div className="w-full md:w-1/2 relative">
							<div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
								<Image
									src="/eth-space.png"
									alt="Ethereum Apps Showcase"
									fill
									className="object-cover"
								/>
							</div>
						</div>
						<div className="w-full md:w-1/2">
							<h3 className="text-2xl font-bold mb-4 text-purple-700">
								L'Esperienza delle App Ethereum
							</h3>
							<p className="text-gray-700 mb-3">
								<span className="font-medium">Creazione Digitale:</span> Mint
								NFT con Highlight, dipingi onchain con BasePaint e cattura la
								tua aura digitale con Moshicam.
							</p>
							<p className="text-gray-700 mb-3">
								<span className="font-medium">Commercio:</span> Acquista onchain
								via Slice da commercianti locali che accettano pagamenti in
								crypto.
							</p>
							<p className="text-gray-700 mb-3">
								<span className="font-medium">Identità, Privacy e Social:</span>{" "}
								Unisciti a Farcaster, esplora la privacy con Fluidkey e
								connettiti con altri artisti su Rodeo.
							</p>
							<p className="text-gray-700">
								<span className="font-medium">Comunità e Crowdfunding:</span>{" "}
								Esplora l'ecosistema Nouns con NounSwap e scopri i DAO
								attraverso Juicebox. Servizi aggiuntivi includono onboarding con
								Coinbase Wallet, rinfreschi al Slice Cafe e collezionabili POAP
								esclusivi.
							</p>
						</div>
					</div>
				</div>

				{/* Section 3 */}
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-col md:flex-row items-center gap-10">
						<div className="w-full md:w-1/2 relative">
							<div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
								<Image
									src="/murales.png"
									alt="Design Exhibition"
									fill
									className="object-cover"
								/>
							</div>
						</div>
						<div className="w-full md:w-1/2">
							<h3 className="text-2xl font-bold mb-4 text-purple-700">
								Murales 3D e Noggles Rail
							</h3>
							<p className="text-gray-700 mb-4">
								Il murales 3D "Ethereum nella Società", un'installazione
								permanente sulla scalinata creata dagli studenti dell'ISIA
								Academy of Arts Urbino, sponsorizzata da Slice e Nouns.
							</p>
							<p className="text-gray-700 mb-4">
								Non perderti il Noggles Rail, il primo in Italia. Sponsorizzato
								da Gnars DAO, questa installazione unica sarà esposta durante la
								Design Week e successivamente installata permanentemente in uno
								skate park locale.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
