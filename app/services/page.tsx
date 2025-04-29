import Image from "next/image"
import { ServicesTabs } from "@/components/services/services-tabs"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-teal-50 px-4 py-16 sm:py-24">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/zen-water-stones.png"
            alt="Background pattern"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <h1 className="font-serif text-3xl font-light tracking-tight text-teal-900 sm:text-4xl md:text-6xl">
            Our Services
          </h1>
          <p className="mt-2 text-lg font-light text-teal-700 sm:text-xl md:text-2xl">
            Experience the Art of Wellness
          </p>
        </div>
      </section>

      <ServicesTabs />
    </div>
  )
} 