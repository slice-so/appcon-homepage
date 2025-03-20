"use client"

import React from "react"

export const AppconLogo = ({ className }: { className?: string }) => {
	const colors = ["#A3B9FA", "#819FFB", "#CCB1FF", "#C1C8FE", "#E7CCC2"]
	const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
	const svgRef = React.useRef<SVGSVGElement>(null)

	React.useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePos({ x: e.clientX, y: e.clientY })
		}

		window.addEventListener("mousemove", handleMouseMove)
		return () => window.removeEventListener("mousemove", handleMouseMove)
	}, [])

	const getColorForPath = (pathIndex: number) => {
		let viewportX = 0
		let viewportY = 0
		if (typeof window !== "undefined") {
			// Calculate position in viewport (0 to 1)
			viewportX = mousePos.x / window.innerWidth
			viewportY = mousePos.y / window.innerHeight
		}

		// Create a spectrum index based on viewport position and path index
		const baseIndex = pathIndex % colors.length
		const spectrumOffset = (viewportX + viewportY) * 0.5 // Reduced influence of cursor position
		const spectrumIndex = (baseIndex + spectrumOffset) % colors.length

		// Get the two colors to interpolate between
		const index1 = Math.floor(spectrumIndex)
		const index2 = Math.min(index1 + 1, colors.length - 1)
		const t = spectrumIndex - index1

		// Interpolate between colors
		const color1 = colors[index1]
		const color2 = colors[index2]

		// Convert hex to RGB
		const r1 = Number.parseInt(color1.slice(1, 3), 16)
		const g1 = Number.parseInt(color1.slice(3, 5), 16)
		const b1 = Number.parseInt(color1.slice(5, 7), 16)

		const r2 = Number.parseInt(color2.slice(1, 3), 16)
		const g2 = Number.parseInt(color2.slice(3, 5), 16)
		const b2 = Number.parseInt(color2.slice(5, 7), 16)

		// Interpolate RGB values
		const r = Math.round(r1 + (r2 - r1) * t)
		const g = Math.round(g1 + (g2 - g1) * t)
		const b = Math.round(b1 + (b2 - b1) * t)

		// Convert back to hex
		return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`
	}

	const getOpacityForPath = (pathIndex: number) => {
		if (typeof window === "undefined") return 1

		// Calculate position in viewport (0 to 1)
		const viewportX = mousePos.x / window.innerWidth
		const viewportY = mousePos.y / window.innerHeight

		// Create a wave effect based on path index and cursor position
		const waveOffset = (pathIndex / 16) * Math.PI * 2 // Full circle for all paths
		const waveX = Math.cos(viewportX * Math.PI * 2 + waveOffset)
		const waveY = Math.sin(viewportY * Math.PI * 2 + waveOffset)

		// Combine waves and normalize to 0-1 range
		const wave = (waveX + waveY) / 2
		const normalizedWave = (wave + 1) / 2

		// Calculate opacity based on wave
		const baseOpacity = 0.8
		const maxExtraOpacity = 0.2
		const opacity = baseOpacity + normalizedWave * maxExtraOpacity

		return opacity
	}

	return (
		<svg
			ref={svgRef}
			width="536"
			height="543"
			viewBox="0 0 536 543"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className || "w-full h-full"}
		>
			<title>Appcon Logo</title>
			<path
				d="M267 61L267 244L187 108.5L267 61Z"
				fill={getColorForPath(0)}
				style={{ opacity: getOpacityForPath(0) }}
			/>
			<path
				d="M267 61L267 244L347 108.5L267 61Z"
				fill={getColorForPath(1)}
				style={{ opacity: getOpacityForPath(1) }}
			/>
			<path
				d="M267 474V291L347 426.5L267 474Z"
				fill={getColorForPath(2)}
				style={{ opacity: getOpacityForPath(2) }}
			/>
			<path
				d="M267 474V291L187 426.5L267 474Z"
				fill={getColorForPath(3)}
				style={{ opacity: getOpacityForPath(3) }}
			/>
			<path
				d="M473.5 267.5L290.5 267.5L426 187.5L473.5 267.5Z"
				fill={getColorForPath(4)}
				style={{ opacity: getOpacityForPath(4) }}
			/>
			<path
				d="M473.5 267.5L290.5 267.5L426 347.5L473.5 267.5Z"
				fill={getColorForPath(0)}
				style={{ opacity: getOpacityForPath(5) }}
			/>
			<path
				d="M60.5 267.5L243.5 267.5L108 347.5L60.5 267.5Z"
				fill={getColorForPath(1)}
				style={{ opacity: getOpacityForPath(6) }}
			/>
			<path
				d="M60.5 267.5L243.5 267.5L108 187.5L60.5 267.5Z"
				fill={getColorForPath(2)}
				style={{ opacity: getOpacityForPath(7) }}
			/>
			<path
				d="M87.9126 448.378L0 424.87L138.521 401.476L87.9126 448.378Z"
				fill={getColorForPath(3)}
				style={{ opacity: getOpacityForPath(8) }}
			/>
			<path
				d="M88.2789 448.038L105.727 538.215L138.52 401.476L88.2789 448.038Z"
				fill={getColorForPath(4)}
				style={{ opacity: getOpacityForPath(9) }}
			/>
			<path
				d="M447.628 452.378L535.541 428.87L397.02 405.476L447.628 452.378Z"
				fill={getColorForPath(0)}
				style={{ opacity: getOpacityForPath(10) }}
			/>
			<path
				d="M447.262 452.038L429.814 542.215L397.021 405.476L447.262 452.038Z"
				fill={getColorForPath(1)}
				style={{ opacity: getOpacityForPath(11) }}
			/>
			<path
				d="M87.9126 90.1767L0 113.685L138.521 137.079L87.9126 90.1767Z"
				fill={getColorForPath(2)}
				style={{ opacity: getOpacityForPath(12) }}
			/>
			<path
				d="M88.2789 90.5165L105.727 0.339844L138.52 137.079L88.2789 90.5165Z"
				fill={getColorForPath(3)}
				style={{ opacity: getOpacityForPath(13) }}
			/>
			<path
				d="M447.628 90.1767L535.541 113.685L397.02 137.079L447.628 90.1767Z"
				fill={getColorForPath(4)}
				style={{ opacity: getOpacityForPath(14) }}
			/>
			<path
				d="M447.262 90.5165L429.814 0.339844L397.021 137.079L447.262 90.5165Z"
				fill={getColorForPath(0)}
				style={{ opacity: getOpacityForPath(15) }}
			/>
		</svg>
	)
}
