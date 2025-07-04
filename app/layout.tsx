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
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="flex-1 flex flex-col">{children}</div>
        <footer className="w-full bg-[#0F172A] py-6 mt-20 border-t border-slate-800">
          <div className="text-center text-white text-base font-medium tracking-wide">
            Made with <span className="inline-block align-middle text-red-500 mx-1">❤️</span>
            by <span className="inline-block align-middle font-bold" style={{ color: "#ff9500" }}>DEVHUB_</span>
          </div>
        </footer>
      </body>
    </html>
  )
}