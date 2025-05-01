import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant } from "next/font/google"
import "./globals.css"
import { MobileMenu } from "@/components/mobile-menu"
import { BookingButton } from "@/components/ui/booking-button"

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
              <a href="/" className="text-sm text-slate-600 hover:text-teal-700">
                Home
              </a>
              <a href="/#about" className="text-sm text-slate-600 hover:text-teal-700">
                About
              </a>
              <a href="/services" className="text-sm text-slate-600 hover:text-teal-700">
                Services
              </a>
              {/* <a href="/testimonials" className="text-sm text-slate-600 hover:text-teal-700">
                Testimonials
              </a> */}
              <a href="/#contact" className="text-sm text-slate-600 hover:text-teal-700">
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <BookingButton>Book Now</BookingButton>
              </div>
              <MobileMenu />
            </div>
          </div>
        </header>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
