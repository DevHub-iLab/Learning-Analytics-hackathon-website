import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "NTU x Imperial College London: Learning Analytics Hackathon",
	description: "NTU NALA x Imperial College London Hackathon. Create the future of learning analytics with us!",
	icons: {
		icon: "/favicon.png",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
