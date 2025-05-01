import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingButton } from "@/components/ui/booking-button"
import { ChevronRight, MapPin, Clock, Phone, Mail, Instagram } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex h-screen min-h-[600px] flex-col items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <Image
            src="/abstract-ocean.svg"
            alt="Background pattern"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto max-w-5xl text-center bg-teal-50 opacity-80 p-8">
          <h1 className="font-serif text-4xl font-light tracking-tight text-teal-900 sm:text-5xl md:text-6xl lg:text-7xl">
            The Cove
          </h1>
          <p className="mt-4 text-xl font-light text-teal-700 sm:text-2xl md:text-3xl">A Sanctuary of Wellness</p>
          <p className="mx-auto mt-6 max-w-2xl text-base text-teal-600 sm:text-lg md:text-xl">
            Experience the art of relaxation through our signature Japanese head spa treatments, therapeutic massages,
            and rejuvenating foot soaks.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <BookingButton className="w-full sm:w-auto">
              Book an Appointment
            </BookingButton>
            <Button
              asChild
              variant="outline"
              className="w-full border-teal-200 text-teal-700 sm:w-auto"
            >
              <Link href="#services" className="flex items-center justify-center gap-2">
                Explore Our Services
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white px-4 py-12 sm:py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg sm:h-[400px] md:w-1/2">
              <Image
                src="/alexandra-about.jpg"
                alt="Alexandra Cortez, Massage Specialist"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                loading="lazy"
                quality={75}
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-serif text-2xl font-light text-teal-900 sm:text-3xl">Meet Your Therapist</h2>
              <p className="mt-2 text-lg font-medium text-teal-700">Alexandra Cortez</p>
              <p className="mt-1 text-sm text-teal-600">6 Years of Specialized Experience</p>
              <div className="mt-4 space-y-3 text-sm text-slate-600 sm:mt-6 sm:space-y-4 sm:text-base">
                <p>
                  With over 6 years of dedicated practice in therapeutic massage and specialized training in Japanese
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
                  src="/headspa-sink-2.jpg"
                  alt="Japanese Head Spa"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  loading="lazy"
                  quality={75}
                />
              </div>
              <h3 className="font-serif text-lg font-medium text-teal-900 sm:text-xl">Japanese Head Spa</h3>
              <p className="mt-2 text-sm text-slate-600">
                Our specialty treatment combines scalp massage, pressure point therapy, and aromatherapy to release
                tension and promote deep relaxation.
              </p>
              <p className="flex justify-center mt-3 text-sm font-medium text-teal-700 sm:mt-4">60 min | 90 min</p>
            </div>

            {/* Therapeutic Massage */}
            <div className="rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-6">
              <div className="mb-3 h-40 overflow-hidden rounded-md sm:h-48 sm:mb-4">
                <Image
                  src="/massage-room-2.jpg"
                  alt="Therapeutic Massage"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  loading="lazy"
                  quality={75}
                />
              </div>
              <h3 className="font-serif text-lg font-medium text-teal-900 sm:text-xl">Therapeutic Massage</h3>
              <p className="mt-2 text-sm text-slate-600">
                A customized massage experience targeting specific areas of tension using a blend of techniques to
                alleviate pain and improve mobility.
              </p>
              <p className="flex justify-center mt-3 text-sm font-medium text-teal-700 sm:mt-4">60 min | 90 min</p>
            </div>

            {/* Foot Soak & Reflexology */}
            <div className="rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-6">
              <div className="mb-3 h-40 overflow-hidden rounded-md sm:h-48 sm:mb-4">
                <Image
                  src="/footsoak-room-2.jpg"
                  alt="Foot Soak & Reflexology"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  loading="lazy"
                  quality={75}
                />
              </div>
              <h3 className="font-serif text-lg font-medium text-teal-900 sm:text-xl">Foot Soak & Reflexology</h3>
              <p className="mt-2 text-sm text-slate-600">
                Begin with a therapeutic herbal foot soak followed by targeted reflexology to stimulate energy pathways
                and promote whole-body wellness.
              </p>
              <p className="flex justify-center mt-3 text-sm font-medium text-teal-700 sm:mt-4">30 min</p>
            </div>
          </div>

          <div className="mt-8 text-center sm:mt-10">
            <Button
              asChild
              className="flex items-center justify-center gap-2 mx-auto bg-teal-700 px-6 py-6 text-base hover:bg-teal-800 sm:w-auto sm:py-4"
            >
              <Link href="/services" className="flex items-center justify-center gap-2 text-white">View All Services</Link>
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
      <section id="contact" className="bg-teal-50 px-4 py-12 sm:py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-4 md:gap-8 md:grid-cols-2">
            {/* Sanctuary Description */}
            <div className="flex flex-col items-center justify-center gap-6 md:gap-24 rounded-lg bg-teal-100 p-6 md:p-8 border-2 border-black">
              <h2 className="font-serif text-center text-2xl font-light text-teal-900 sm:text-3xl">Visit Our Sanctuary</h2>
              <p className="mt-2 md:mt-4 text-sm text-center text-slate-600 sm:mt-6 sm:text-base">
                Located in the heart of Frostproof, Florida, The Cove offers a peaceful retreat from the demands of
                daily life. Our tranquil space is designed to engage all your senses and facilitate deep relaxation.
              </p>
            </div>
  
            {/* Contact Details */}
            <div className="flex flex-col items-center justify-center gap-6 md:gap-24">
              <div className="w-full space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-teal-700" />
                  <div>
                    <p className="font-medium text-teal-900">The Cove</p>
                    <p className="text-sm text-slate-600 sm:text-base">205 N Scenic Hwy</p>
                    <p className="text-sm text-slate-600 sm:text-base">Frostproof, FL 33843</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="mr-3 h-5 w-5 text-teal-700" />
                  <div>
                    <p className="font-medium text-teal-900">Hours</p>
                    <p className="text-sm text-slate-600 sm:text-base">Monday - Tuesday: 9am - 5pm</p>
                    <p className="text-sm text-slate-600 sm:text-base">Wednesday: Closed</p>
                    <p className="text-sm text-slate-600 sm:text-base">Thursday: 9am - 5pm</p>
                    <p className="text-sm text-slate-600 sm:text-base">Friday: 9am - 6pm</p>
                    <p className="text-sm text-slate-600 sm:text-base">Saturday: 9:30am - 1pm</p>
                    <p className="text-sm text-slate-600 sm:text-base">Sunday: Closed</p>
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
                <div className="flex items-center">
                  <Instagram className="mr-3 h-5 w-5 text-teal-700" />
                  <div>
                    <p className="font-medium text-teal-900">Instagram</p>
                    <Link href="https://www.instagram.com/covesanctuaryfl" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-teal-700 sm:text-base">
                      @covesanctuaryfl
                    </Link>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-5 w-5 text-teal-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                  </svg>
                  <div>
                    <p className="font-medium text-teal-900">TikTok</p>
                    <Link href="https://www.tiktok.com/@itsalex0777" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-teal-700 sm:text-base">
                      @itsalex0777
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <BookingButton className="w-full bg-teal-700 px-6 hover:bg-teal-800">Book Your Experience</BookingButton>
              </div>
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
                    <Link href="/services" className="hover:text-white">
                      Japanese Head Spa
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white">
                      Therapeutic Massage
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white">
                      Foot Soaks
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white">
                      Packages
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-medium uppercase text-teal-300 sm:text-sm">Company</h4>
                <ul className="mt-3 space-y-2 text-xs sm:mt-4 sm:text-sm">
                  <li>
                    <Link href="/#about" className="hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/#about" className="hover:text-white">
                      Our Team
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#" className="hover:text-white">
                      Testimonials
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href="#" className="hover:text-white">
                      Blog
                    </Link>
                  </li> */}
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
