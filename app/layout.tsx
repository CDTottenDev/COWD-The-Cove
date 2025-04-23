import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant } from "next/font/google"
import "./globals.css"
import { MobileMenu } from "@/components/mobile-menu"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "The Cove | A Sanctuary of Wellness in Frostproof, Florida",
  description:
    "Experience the art of relaxation through our signature Japanese head spa treatments, therapeutic massages, and rejuvenating foot soaks at The Cove in Frostproof, Florida.",
  keywords:
    "massage spa, Japanese head spa, foot soak, wellness, relaxation, Frostproof, Florida, Alexandra Cortez, massage therapy",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans`}>
        <header className="fixed top-0 z-50 w-full bg-white/90 px-4 py-4 shadow-sm backdrop-blur-sm">
          <div className="container mx-auto flex max-w-5xl items-center justify-between">
            <a href="/" className="font-serif text-xl font-light text-teal-900">
              The Cove
            </a>
            <nav className="hidden space-x-6 md:flex">
              <a href="#" className="text-sm text-slate-600 hover:text-teal-700">
                Home
              </a>
              <a href="#" className="text-sm text-slate-600 hover:text-teal-700">
                About
              </a>
              <a href="#" className="text-sm text-slate-600 hover:text-teal-700">
                Services
              </a>
              <a href="#" className="text-sm text-slate-600 hover:text-teal-700">
                Testimonials
              </a>
              <a href="#" className="text-sm text-slate-600 hover:text-teal-700">
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="hidden rounded-md bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800 sm:block"
              >
                Book Now
              </a>
              <MobileMenu />
            </div>
          </div>
        </header>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
