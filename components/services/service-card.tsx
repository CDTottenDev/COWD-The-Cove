import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { DisclaimerPopup } from "../ui/disclaimer-popup"

interface ServiceCardProps {
  title: string
  description: string
  image: string
}

export function ServiceCard({ title, description, image }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [showDisclaimer, setShowDisclaimer] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  const handleBookingClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowDisclaimer(true)
  }

  const handleConfirm = () => {
    setShowDisclaimer(false)
    window.open("https://covesanctuaryfl.glossgenius.com/services", "_blank")
  }

  return (
    <>
      <div 
        ref={cardRef}
        className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl opacity-0 translate-y-4"
      >
        <div className="relative h-48 sm:h-64">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            priority={false}
            loading="lazy"
            quality={75}
          />
        </div>
        <div className="p-4 sm:p-6">
          <h3 className="font-serif text-lg sm:text-xl font-light text-teal-900">{title}</h3>
          <p className="mt-2 text-xs sm:text-sm text-teal-700 line-clamp-3 sm:line-clamp-none">{description}</p>
          <button 
            onClick={handleBookingClick}
            className="mt-4 w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors duration-300 text-center"
          >
            Book Now
          </button>
        </div>
      </div>
      <DisclaimerPopup 
        isOpen={showDisclaimer}
        onClose={() => setShowDisclaimer(false)}
        onConfirm={handleConfirm}
      />
    </>
  )
} 