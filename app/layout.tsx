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
        <footer className="bg-[#0F172A] border-t border-slate-800 py-6 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-slate-200 text-base font-medium">
              A collaboration between NTU and Imperial College London.
              <br />
              <br />
              Made with <span className="text-red-500">❤</span> by {" "}
              <a
                className="inline-block align-middle rounded-xl transition-transform duration-300 hover:scale-110"
                href="https://devhub.ilabccds.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ verticalAlign: "middle" }}
              >
                <img
                  src="/images/devhublogo.svg"
                  alt="DevHub Logo"
                  className="inline h-7 w-auto align-middle"
                  style={{ display: 'inline-block', verticalAlign: 'middle' }}
                />
              </a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  )
}