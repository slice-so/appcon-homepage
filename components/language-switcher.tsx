"use client"

import { usePathname, useRouter } from "next/navigation"

export function LanguageSwitcher() {
	const router = useRouter()
	const pathname = usePathname()
	const isItalian = pathname.startsWith("/it")

	const switchLanguage = () => {
		let newPath: string

		if (isItalian) {
			// Se siamo in italiano, rimuoviamo /it
			if (pathname === "/it") {
				newPath = "/"
			} else {
				newPath = pathname.replace("/it", "")
			}
		} else {
			// Se siamo in inglese, aggiungiamo /it
			if (pathname === "/") {
				newPath = "/it"
			} else {
				newPath = `/it${pathname}`
			}
		}
		router.push(newPath)
	}

	return (
		<button
			type="button"
			onClick={switchLanguage}
			className="text-xl hover:bg-gray-100 p-1 rounded-md transition-colors"
			aria-label={isItalian ? "Switch to English" : "Switch to Italian"}
		>
			{isItalian ? "🇬🇧" : "🇮🇹"}
		</button>
	)
}
