import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "Appcon Milan 2025 | Showcasing Ethereum Apps to the World",
	description:
		"Discover Ethereum apps at Appcon in Milan. Explore an interactive public showcase, connect through the exclusive Builders’ Program, and experience real-world demos—bridging new adopters, developers, and investors in one vibrant setting."
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${GeistSans.variable} antialiased`}>{children}</body>
		</html>
	)
}
