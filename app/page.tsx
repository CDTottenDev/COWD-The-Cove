import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookingButton } from "@/components/ui/booking-button"
import { CTAButton } from "@/components/ui/cta-giftcard-button"
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
        <div className="container relative z-10 mx-auto max-w-5xl text-center bg-teal-50 opacity-80 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative w-full md:w-1/4 h-[200px] md:h-[400px] order-1 md:order-none">
            <Image
              src="/images/pro pics/13.jpeg"
              alt="Left decorative image"
              fill
              className="object-cover rounded-lg object-[center_10%] md:object-center"
              sizes="(min-width: 768px) 25vw, 100vw"
              priority
            />
          </div>
          <div className="flex-1 order-2 md:order-none">
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
          <div className="hidden md:block relative w-full md:w-1/4 h-[200px] md:h-[400px] order-3 md:order-none">
            <Image
              src="/images/pro pics/image1.jpeg"
              alt="Right decorative image"
              fill
              className="object-cover rounded-lg"
              sizes="(min-width: 768px) 25vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white px-4 py-12 sm:py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg sm:h-[400px] md:w-1/2">
              <Image
                src="/images/pro pics/image5.jpeg"
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
      <section id="cta-gift-cards" className="bg-teal-50 px-4 py-12 sm:py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-center font-serif text-2xl font-light text-teal-900 sm:text-3xl">
            Gift Cards
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-teal-600 sm:mt-4 sm:text-base">
            Give the gift of relaxation and renewal with a gift card.
          </p>
          <div className="mt-8 flex flex-col justify-center items-center">
            <div className="flex justify-center gap-8 mb-2 sm:hidden">
              <div className="animate-bounce text-teal-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </div>
              <div className="animate-bounce text-teal-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </div>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="animate-bounce text-teal-600 hidden sm:block">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
              <CTAButton className="w-full sm:w-auto">
                Purchase a Gift Card
              </CTAButton>
              <div className="animate-bounce text-teal-600 hidden sm:block">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 5 5 12 12 19"></polyline>
                </svg>
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
                  src="/images/pro pics/image4.jpeg"
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
              <BookingButton className="mt-4 w-full">Book Now</BookingButton>
            </div>

            {/* Therapeutic Massage */}
            <div className="rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-6">
              <div className="mb-3 h-40 overflow-hidden rounded-md sm:h-48 sm:mb-4">
                <Image
                  src="/images/pro pics/55.jpeg"
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
              <BookingButton className="mt-4 w-full">Book Now</BookingButton>
            </div>

            {/* Foot Soak & Reflexology */}
            <div className="rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md sm:p-6">
              <div className="mb-3 h-40 overflow-hidden rounded-md sm:h-48 sm:mb-4">
                <Image
                  src="/images/pro pics/22.jpeg"
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
              <BookingButton className="mt-4 w-full">Book Now</BookingButton>
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
      <section id="testimonials" className="bg-white px-4 py-12 sm:py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-center font-serif text-2xl font-light text-teal-900 sm:text-3xl">Client Experiences</h2>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-4 sm:p-6 border border-gray-200 shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">5.0</span>
              </div>
              <p className="text-sm text-slate-600 sm:text-base flex-grow">
                "Amazing!! Alex makes you feel so comfortable! I'm 34 weeks pregnant and prenatal massage was exactly what i needed!"
              </p>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-sm font-medium text-teal-700">Kathryn Flood</p>
                <p className="text-xs text-gray-500">05.10.2025</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-teal-100 text-teal-800">
                  Prenatal Massage
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-teal-100 text-teal-800">
                  Face and Scalp Massage
                </span>
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 sm:p-6 border border-gray-200 shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">5.0</span>
              </div>
              <p className="text-sm text-slate-600 sm:text-base flex-grow">
                "The picture of relaxation. Alex was wonderful and I highly recommend to check The Cove out ASAP. She has went above and beyond to make you feel comfortable and relaxed. It was a wonderful experience and I can't wait to go back."
              </p>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-sm font-medium text-teal-700">Kati</p>
                <p className="text-xs text-gray-500">05.16.2025</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-teal-100 text-teal-800">
                  The Caregiver's Reset
                </span>
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 sm:p-6 border border-gray-200 shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">5.0</span>
              </div>
              <p className="text-sm text-slate-600 sm:text-base flex-grow">
                "My experience with The Cove was everything that i knew it would be. I was so relaxed and worried free. I went in there with life stresses and feeling a bit down and I came out feeling refreshed, level headed and so relaxed! I HIGHLY recommend the scalp massage as that was favorite! I also had the relaxing/deep tissue massage that was greatly needed. Alex is so sweet. She asks questions and listens, let's you relax in silence and peace and works her magic. I will always recommend booking with her. Her place is beautiful and a true oasis to be in!-Thank you!! Can't wait to book again!!"
              </p>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-sm font-medium text-teal-700">Brittany Whittington</p>
                <p className="text-xs text-gray-500">05.26.2025</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-teal-100 text-teal-800">
                  The Serenity Duo
                </span>
              </div>
            </div>
            <div className="rounded-lg bg-white p-4 sm:p-6 border border-gray-200 shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">5.0</span>
              </div>
              <p className="text-sm text-slate-600 sm:text-base flex-grow">
                "Great experience! Nice, clean space. Staff was exceptional. Will be back!"
              </p>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-sm font-medium text-teal-700">Melanie</p>
                <p className="text-xs text-gray-500">05.19.2025</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-teal-100 text-teal-800">
                  The Cove Signature Head Spa
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="bg-teal-50 px-4 py-12 sm:py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-4 md:gap-8 md:grid-cols-2">
            {/* Sanctuary Description */}
            <div className="flex flex-col items-center justify-center gap-6 md:gap-24 rounded-lg bg-teal-100 p-6 md:p-8 border-2 border-black">
              <div className="relative w-full aspect-[4/3] mb-4">
                <Image
                  src="/images/pro pics/5.jpeg"
                  alt="The Cove Sanctuary"
                  fill
                  className="object-cover rounded-lg"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
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
                    <p className="text-sm text-slate-600 sm:text-base">Wednesday: 9am - 5pm</p>
                    <p className="text-sm text-slate-600 sm:text-base">Thursday: Closed</p>
                    <p className="text-sm text-slate-600 sm:text-base">Friday: 9am - 6pm</p>
                    <p className="text-sm text-slate-600 sm:text-base">Saturday: 9:30am - 4pm</p>
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
                  <li>
                    <Link href="/#testimonials" className="hover:text-white">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link href="/#blog" className="hover:text-white">
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
      <div className="w-full bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-4 text-center">
        <p className="text-xs text-gray-600 sm:text-sm">
          Designed with 💖 by{" "}
          <a 
            href="https://cdtottendev.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium text-purple-600 transition-colors hover:text-pink-600 underline decoration-dotted underline-offset-2"
          >
            Colt Totten
          </a>
        </p>
      </div>
    </div>
  )
}
