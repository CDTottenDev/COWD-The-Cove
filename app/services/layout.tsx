import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Our Services | The Cove",
    template: "%s | The Cove Services"
  },
  description: "Discover our range of wellness services including Japanese head spa treatments, therapeutic massages, and rejuvenating foot soaks.",
  openGraph: {
    title: "Our Services | The Cove",
    description: "Discover our range of wellness services including Japanese head spa treatments, therapeutic massages, and rejuvenating foot soaks.",
    type: "website",
    locale: "en_US",
    siteName: "The Cove",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | The Cove",
    description: "Discover our range of wellness services including Japanese head spa treatments, therapeutic massages, and rejuvenating foot soaks.",
  },
  alternates: {
    canonical: "/services",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  )
} 