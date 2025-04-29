"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingButton } from "@/components/ui/booking-button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="block rounded p-2 text-slate-600 hover:bg-teal-50 md:hidden"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 w-full bg-white py-4 shadow-md md:hidden">
          <div className="container mx-auto flex max-w-5xl flex-col space-y-4 px-4">
            <Link href="#" className="text-sm text-slate-600 hover:text-teal-700" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="#" className="text-sm text-slate-600 hover:text-teal-700" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="#" className="text-sm text-slate-600 hover:text-teal-700" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            {/* <Link href="#" className="text-sm text-slate-600 hover:text-teal-700" onClick={() => setIsOpen(false)}>
              Testimonials
            </Link> */}
            <Link href="#" className="text-sm text-slate-600 hover:text-teal-700" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <BookingButton 
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </BookingButton>
          </div>
        </div>
      )}
    </>
  )
}
