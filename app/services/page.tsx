import { ServicesTabs } from "@/components/services/services-tabs"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center bg-teal-50 px-4 py-16 sm:py-24 z-20">
        <div className="container relative z-20 mx-auto max-w-5xl text-center">
          <h1 className="font-serif text-3xl font-light tracking-tight text-teal-900 sm:text-4xl md:text-6xl">
            Our Services
          </h1>
          <p className="mt-2 text-lg font-light text-teal-700 sm:text-xl md:text-2xl">
            Experience the Art of Wellness
          </p>
        </div>
      </section>

      <div className="relative z-10">
        <ServicesTabs />
      </div>
    </div>
  )
} 