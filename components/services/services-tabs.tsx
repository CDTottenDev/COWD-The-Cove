'use client'

import { useState, useEffect } from "react"
import { ServiceCard } from "./service-card"
import Image from "next/image"

// Declare the scrollTimeout property on the Window interface
declare global {
  interface Window {
    scrollTimeout: NodeJS.Timeout | undefined;
  }
}

const treatments = {
  packages: [
    {
      title: "The Serenity Duo",
      description: "Melt away tension with a deeply relaxing full-body massage, tailored to your needs, followed by a luxurious Japanese Head Spa treatment designed to cleanse, rejuvenate, and invigorate your scalp and mind. This perfect pairing delivers full-body renewal and head-to-toe tranquility.",
      image: "/head-treatment-ring.jpg",
    }
  ],
  spa: [
    {
      title: "The Cove Signature Head Spa",
      description: "Let your stress melt away with The Cove's Signature Head Spa—a deeply relaxing and revitalizing treatment designed to refresh both scalp and spirit. This luxurious service begins with a personalized aromatherapy scalp analysis to choose the right essential oils for your unique needs. We then move into a gentle exfoliating cleanse to remove buildup and stimulate healthy circulation. Followed up with a botanical hair rinse and oil scalp massage. Leaving your scalp feeling refreshed, at The Cove we strive for the headspa to be a journey for the senses.",
      image: "/head-treatment-ring.jpg"
    },
    {
      title: "The Cove Tranquil Head Escape",
      description: "Unwind with The Cove's Tranquil Head Escape, a luxurious dry head spa experience designed to rejuvenate your scalp and soothe tension. This treatment begins with a relaxing scalp massage to stimulate circulation and promote relaxation. A gentle neck and shoulders massage follows, easing muscle tension and enhancing overall well-being. Ideal for those seeking a calming escape and a refreshed sense of balance.​",
      image: "/head-treatment-dry.jpg"
    }
  ],
  massage: [
    {
      title: "The Cove Custom Blend Massage",
      description: "This fully personalized massage is designed to meet your unique needs—whether you're looking for deep tissue relief or gentle relaxation. Each session blends targeted techniques with your preferred pressure, and includes the soothing benefits of hot stones and cupping therapy. The result is a restorative experience that leaves you feeling balanced, relaxed, and renewed.",
      image: "/full-body-massage.jpg"
    },
    {
      title: "PreNatal Massage",
      description: "Embrace the journey of motherhood with our Prenatal Massage, thoughtfully designed to support and comfort you during pregnancy. This gentle, soothing treatment helps ease common prenatal discomforts such as backaches, leg tension, and swelling, while promoting relaxation and overall well-being. Tailored to your unique needs, this nurturing massage provides a tranquil experience.",
      image: "/services/pre-natal-massage.jpg"
    },
    {
      title: "TMJ Relief Massage",
      description: "Our TMJ Relief Massage is designed to ease jaw discomfort and tension. This targeted treatment focuses on the muscles around your jaw, neck, and shoulders to help reduce pain, alleviate headaches, and improve jaw movement. Using gentle techniques, we aim to release tightness, promote relaxation, and restore balance, providing you with relief and a sense of well-being.",
      image: "/services/tmj-relief-massage.jpg"
    }
  ],
  feet: [
    {
      title: "Citrus Foot Soak & Hot Stone",
      description: "Revitalize your senses with a citrus-infused foot soak, followed by an exfoliating citrus infused foot scrub. Hot stones are gently massaged into your feet and lower legs to enhance circulation and alleviate stress. The treatment concludes with a moisturizing finish, leaving your feet feeling soft, energized, and pampered.",
      image: "/services/foot-soak.jpg"
    },
    {
      title: "Herbal Foot Soak & Hot Stone",
      description: "Immerse your feet in a warm herbal-infused soak designed to detoxify and soothe. Following the soak, enjoy a gentle exfoliation using coffee scrub. Then relax as hot stones are applied to your feet and lower legs to relieve tension. The experience concludes with a soothing foot and calf massage, leaving you refreshed and rejuvenated.",
      image: "/services/herbal-foot-soak.jpg"
    },
    {
      title: "Rose Tidal Foot Soak",
      description: "Sink into the gentle rhythm of Rose Tide, a botanical foot soak ritual that swirls dried rose petals and lavender buds into a warm, mineral-rich bath. Followed by our Petal Polish Foot Scrub. Designed to soften skin and quiet the mind, this treatment invites you to drift away with calming scents and tranquil waters.",
      image: "/services/rose-foot-soak.jpg"
    }
  ],
  addons: [
    {
      title: "Face and Scalp Massage",
      description: "Enhance your wellness journey with our luxurious Face and Scalp Massage add-on. This deeply relaxing treatment includes gentle pressure point techniques on your face to release tension, followed by a soothing scalp massage that stimulates circulation and promotes deep relaxation. Perfect for relieving stress and enhancing your overall experience.",
      image: "/services/face-and-scalp-massage.jpg"
    },
    {
      title: "Cold Globes and Eye Mask",
      description: "Elevate your relaxation with our Cold Globes and Eye Mask add-on. This refreshing treatment uses chilled glass globes to reduce puffiness, soothe tired eyes, and stimulate circulation. Combined with a calming eye mask, it helps relieve tension headaches and brighten your complexion. The perfect complement to any service for those seeking a revitalizing facial experience.",
      image: "/services/cold-globes-and-eye-mask.jpg"
    },
    {
      title: "Facial Cupping Facial Massage",
      description: "Experience the ancient art of facial cupping with our specialized massage add-on. This gentle suction technique helps stimulate circulation, reduce puffiness, and enhance your skin's natural glow. The rhythmic movements promote collagen production, soften fine lines, and create a lifting effect. Perfect for those seeking both relaxation and rejuvenation, this treatment leaves your skin looking refreshed and radiant while providing a deeply soothing experience.",
      image: "/services/facial-cupping-facial-massage.jpg"
    }
  ],
  specials: [
    {
      title: "Coastal Calm",
      description: "Treat yourself to a well-deserved break with our 45-minute head spa session. Includes a relaxing scalp massage, tension-melting neck/shoulder massage and aromatherapy.",
      image: "/head-treatment-ring.jpg"
    },
    {
      title: "Salt & Serenity",
      description: "Enjoy a 30-minute headspa with aromatherapy and a 30-minute therapeutic massage focused on the neck, shoulders, and back. This will help melt the stress away and leave you feeling refreshed and rejuvenated.",
      image: "/head-treatment-ring.jpg"
    },
    {
      title: "Sunset Unwind",
      description: "60-minute therapeutic massage uses breezy summer oils and flowing techniques to help you let go and glow.",
      image: "/head-treatment-ring.jpg"
    },
    {
      title: "Midday Melt",
      description: "(Available Mondays only, 11am-1pm By Appointment Only) Take a break form the busy day and treat yourself to a refreshing 30-minute massage designed to melt away tension and rechare your body and mind. Perfect for a quesck reset during your lunch hour-- you'll leave feeling lighter, calmer and ready to take on the rest of your day.",
      image: "/head-treatment-ring.jpg"
    }
  ]
} as const

type TreatmentType = keyof typeof treatments

export function ServicesTabs() {
  const [activeTab, setActiveTab] = useState<TreatmentType>('specials')
  const [isScrolling, setIsScrolling] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)
      if (window.scrollTimeout) {
        clearTimeout(window.scrollTimeout)
      }
      window.scrollTimeout = setTimeout(() => setIsScrolling(false), 100)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    handleResize()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      if (window.scrollTimeout) {
        clearTimeout(window.scrollTimeout)
      }
    }
  }, [])

  const handleTabChange = (tab: TreatmentType) => {
    setActiveTab(tab)
    // Smooth scroll to the tabs section with navbar offset
    const tabsSection = document.getElementById('tabs-section')
    if (tabsSection) {
      const navbarHeight = 80 // Adjust this value based on your navbar height
      const elementPosition = tabsSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src={`/${activeTab === 'packages' ? 'packages' : 
                activeTab === 'spa' ? 'spa-treatments' :
                activeTab === 'massage' ? 'massage-treatment' :
                activeTab === 'feet' ? 'foot-soaks' :
                'addons'}.svg`}
          alt="Background image"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
          loading="lazy"
          quality={75}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Tabs */}
        <div id="tabs-section" className="container mx-auto px-4 py-4 sm:py-8">
          <div className={`flex ${isMobile ? 'flex-col space-y-2' : 'flex-row justify-center space-x-4'}`}>
            <button
              onClick={() => handleTabChange('packages')}
              className={`w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'packages'
                  ? 'bg-teal-600 text-white scale-105'
                  : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
              }`}
            >
              Packages
            </button>
            <button
              onClick={() => handleTabChange('spa')}
              className={`w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'spa'
                  ? 'bg-teal-600 text-white scale-105'
                  : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
              }`}
            >
              Head Spa Treatments
            </button>
            <button
              onClick={() => handleTabChange('massage')}
              className={`w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'massage'
                  ? 'bg-teal-600 text-white scale-105'
                  : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
              }`}
            >
              Massage Treatments
            </button>
            <button
              onClick={() => handleTabChange('feet')}
              className={`w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'feet'
                  ? 'bg-teal-600 text-white scale-105'
                  : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
              }`}
            >
              Foot Soaks
            </button>
            <button
              onClick={() => handleTabChange('addons')}
              className={`w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'addons'
                  ? 'bg-teal-600 text-white scale-105'
                  : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
              }`}
            >
              Add-Ons
            </button>
            <button
              onClick={() => handleTabChange('specials')}
              className={`w-full sm:w-auto px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
                activeTab === 'specials'
                  ? 'bg-teal-600 text-white scale-105'
                  : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
              }`}
            >
              Specials
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <section id="services-section" className="container mx-auto px-4 py-8 sm:py-16 md:py-24">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mx-auto transition-opacity duration-300 ${isScrolling ? 'opacity-75' : 'opacity-100'}`}>
            {treatments[activeTab].map((treatment, index) => (
              <ServiceCard
                key={index}
                title={treatment.title}
                description={treatment.description}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
} 