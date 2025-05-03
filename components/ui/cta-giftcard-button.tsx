'use client'

import Link from 'next/link'
import { useState } from 'react'
import { DisclaimerPopup } from './disclaimer-popup'

interface CTAButtonProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'outline'
  onClick?: () => void
}

export function CTAButton({ children, className = '', variant = 'default', onClick }: CTAButtonProps) {
  const [showDisclaimer, setShowDisclaimer] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowDisclaimer(true)
    onClick?.()
  }

  const handleConfirm = () => {
    setShowDisclaimer(false)
    window.open("https://covesanctuaryfl.glossgenius.com/about", "_blank")
  }

  return (
    <>
      <button
        onClick={handleClick}
        className={`${className} ${
          variant === 'default'
            ? 'bg-teal-600 hover:bg-teal-700 text-white'
            : 'border border-teal-200 text-teal-700 hover:bg-teal-50'
        } px-4 py-2 rounded-full transition-colors duration-300`}
      >
        {children}
      </button>
      <DisclaimerPopup 
        isOpen={showDisclaimer}
        onClose={() => setShowDisclaimer(false)}
        onConfirm={handleConfirm}
      />
    </>
  )
} 