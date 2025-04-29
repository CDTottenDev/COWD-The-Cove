import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingButton } from "@/components/ui/booking-button"
import { ChevronRight, MapPin, Clock, Phone, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-teal-50 px-4 py-16 sm:py-24 md:py-32">
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
            The Cove
          </h1>
          <p className="mt-2 text-lg font-light text-teal-700 sm:text-xl md:text-2xl">A Sanctuary of Wellness</p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-teal-600 sm:mt-6 sm:text-base">
            Experience the art of relaxation through our signature Japanese head spa treatments, therapeutic massages,
            and rejuvenating foot soaks.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <BookingButton className="w-full sm:w-auto">
              Book an Appointment
            </BookingButton>
            <Button
              asChild
              variant="outline"
              className="w-full border-teal-200 text-teal-700 sm:w-auto"
            >
              <Link href="#services">Explore Our Services <ChevronRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white px-4 py-12 sm:py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg sm:h-[400px] md:w-1/2">
              <Image
                src="/serene-spa-massage.png"
                alt="Alexandra Cortez, Massage Specialist"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-serif text-2xl font-light text-teal-900 sm:text-3xl">Meet Your Therapist</h2>
              <p className="mt-2 text-lg font-medium text-teal-700">Alexandra Cortez</p>
              <p className="mt-1 text-sm text-teal-600">8 Years of Specialized Experience</p>
              <div className="mt-4 space-y-3 text-sm text-slate-600 sm:mt-6 sm:space-y-4 sm:text-base">
                <p>
                  With over 8 years of dedicated practice in therapeutic massage and specialized training in Japanese
                  head spa techniques, Alexandra brings a wealth of expertise to every session.
                </p>
                <p>
                  Her approach combines traditional methods with modern techniques to create a truly personalized
                  experience that addresses both physical tension and mental stress.
                </p>
                <p>
                  At The Cove, Alexandra has created a sanctuary where clients can disconnect from the outside world and
                  embark on a journey of deep relaxation and renewal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen bg-teal-50 px-4 py-12 sm:py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-center font-serif text-2xl font-light text-teal-900 sm:text-3xl">
            Our Signature Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-teal-600 sm:mt-4 sm:text-base">
            Discover our carefully crafted treatments designed to restore balance to your body and mind.
          </p>

          <div className="mt-8 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3">
            {/* Japanese Head Spa */}
            <div className="rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-6">
              <div className="mb-3 h-40 overflow-hidden rounded-md sm:h-48 sm:mb-4">
                <Image
                  src="/serene-scalp-care.png"
                  alt="Japanese Head Spa"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <h3 className="font-serif text-lg font-medium text-teal-900 sm:text-xl">Japanese Head Spa</h3>
              <p className="mt-2 text-sm text-slate-600">
                Our specialty treatment combines scalp massage, pressure point therapy, and aromatherapy to release
                tension and promote deep relaxation.
              </p>
              <p className="mt-3 text-sm font-medium text-teal-700 sm:mt-4">60 min | 90 min</p>
            </div>

            {/* Therapeutic Massage */}
            <div className="rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-6">
              <div className="mb-3 h-40 overflow-hidden rounded-md sm:h-48 sm:mb-4">
                <Image
                  src="/serene-touch.png"
                  alt="Therapeutic Massage"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <h3 className="font-serif text-lg font-medium text-teal-900 sm:text-xl">Therapeutic Massage</h3>
              <p className="mt-2 text-sm text-slate-600">
                A customized massage experience targeting specific areas of tension using a blend of techniques to
                alleviate pain and improve mobility.
              </p>
              <p className="mt-3 text-sm font-medium text-teal-700 sm:mt-4">60 min | 90 min | 120 min</p>
            </div>

            {/* Foot Soak & Reflexology */}
            <div className="rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-6">
              <div className="mb-3 h-40 overflow-hidden rounded-md sm:h-48 sm:mb-4">
                <Image
                  src="/minimalist-foot-spa.png"
                  alt="Foot Soak & Reflexology"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <h3 className="font-serif text-lg font-medium text-teal-900 sm:text-xl">Foot Soak & Reflexology</h3>
              <p className="mt-2 text-sm text-slate-600">
                Begin with a therapeutic herbal foot soak followed by targeted reflexology to stimulate energy pathways
                and promote whole-body wellness.
              </p>
              <p className="mt-3 text-sm font-medium text-teal-700 sm:mt-4">45 min | 60 min</p>
            </div>
          </div>

          <div className="mt-8 text-center sm:mt-10">
            <Button
              asChild
              className="w-full bg-teal-700 px-6 hover:bg-teal-800 sm:w-auto"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="bg-white px-4 py-12 sm:py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-center font-serif text-2xl font-light text-teal-900 sm:text-3xl">Client Experiences</h2>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-teal-50 p-4 sm:p-6">
              <p className="text-sm text-slate-600 sm:text-base">
                "The Japanese head spa treatment at The Cove was unlike anything I've experienced before. Alexandra's
                technique melted away weeks of tension in just one session. I left feeling completely renewed."
              </p>
              <p className="mt-3 text-sm font-medium text-teal-700 sm:mt-4">— Sarah M.</p>
            </div>

            <div className="rounded-lg bg-teal-50 p-4 sm:p-6">
              <p className="text-sm text-slate-600 sm:text-base">
                "I've been coming to The Cove monthly for over a year now. The combination of foot soaks and massage
                therapy has significantly improved my chronic pain issues. This place is truly a sanctuary."
              </p>
              <p className="mt-3 text-sm font-medium text-teal-700 sm:mt-4">— Michael T.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact & Location */}
      <section className="bg-teal-50 px-4 py-12 sm:py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col gap-8 md:flex-row md:gap-12">
            <div className="md:w-1/2">
              <h2 className="font-serif text-2xl font-light text-teal-900 sm:text-3xl">Visit Our Sanctuary</h2>
              <p className="mt-4 text-sm text-slate-600 sm:mt-6 sm:text-base">
                Located in the heart of Frostproof, Florida, The Cove offers a peaceful retreat from the demands of
                daily life. Our tranquil space is designed to engage all your senses and facilitate deep relaxation.
              </p>

              <div className="mt-6 space-y-4 sm:mt-8">
                <div className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-teal-700" />
                  <div>
                    <p className="font-medium text-teal-900">The Cove</p>
                    <p className="text-sm text-slate-600 sm:text-base">123 Serenity Lane</p>
                    <p className="text-sm text-slate-600 sm:text-base">Frostproof, FL 33843</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="mr-3 h-5 w-5 text-teal-700" />
                  <div>
                    <p className="font-medium text-teal-900">Hours</p>
                    <p className="text-sm text-slate-600 sm:text-base">Tuesday - Saturday: 9am - 7pm</p>
                    <p className="text-sm text-slate-600 sm:text-base">Sunday - Monday: Closed</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-teal-700" />
                  <div>
                    <p className="font-medium text-teal-900">Phone</p>
                    <p className="text-sm text-slate-600 sm:text-base">(863) 605-3045</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-teal-700" />
                  <div>
                    <p className="font-medium text-teal-900">Email</p>
                    <p className="text-sm text-slate-600 sm:text-base">thecovesanctuary@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <BookingButton className="w-full bg-teal-700 px-6 hover:bg-teal-800 sm:w-auto">Book Your Experience</BookingButton>
              </div>
            </div>

            <div className="relative h-[250px] w-full overflow-hidden rounded-lg sm:h-[300px] md:h-[400px] md:w-1/2">
              <Image
                src="/teal-tranquility.png"
                alt="The Cove Spa Interior"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 px-4 py-8 text-teal-100 sm:py-12">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:gap-8">
            <div>
              <h3 className="font-serif text-xl font-light sm:text-2xl">The Cove</h3>
              <p className="mt-1 text-sm text-teal-300">A Sanctuary of Wellness</p>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8">
              <div>
                <h4 className="text-xs font-medium uppercase text-teal-300 sm:text-sm">Services</h4>
                <ul className="mt-3 space-y-2 text-xs sm:mt-4 sm:text-sm">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Japanese Head Spa
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Therapeutic Massage
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Foot Soaks
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Packages
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-medium uppercase text-teal-300 sm:text-sm">Company</h4>
                <ul className="mt-3 space-y-2 text-xs sm:mt-4 sm:text-sm">
                  <li>
                    <Link href="#" className="hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-medium uppercase text-teal-300 sm:text-sm">Legal</h4>
                <ul className="mt-3 space-y-2 text-xs sm:mt-4 sm:text-sm">
                  <li>
                    <Link href="#" className="hover:text-white">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white">
                      Cancellation Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-teal-800 pt-6 text-center text-xs text-teal-400 sm:mt-12 sm:pt-8 sm:text-sm">
            <p>© {new Date().getFullYear()} The Cove. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
