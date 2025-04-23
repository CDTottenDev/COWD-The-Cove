"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

type LazyImageProps = Omit<ImageProps, "onLoad"> & {
  lowQualitySrc?: string
}

export function LazyImage({ src, alt, className, lowQualitySrc, ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [ref, isInView] = useIntersectionObserver<HTMLDivElement>({ rootMargin: "200px" })
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (isInView && !shouldLoad) {
      setShouldLoad(true)
    }
  }, [isInView, shouldLoad])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {shouldLoad ? (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoadingComplete={() => setIsLoaded(true)}
          {...props}
        />
      ) : null}

      {(!isLoaded || !shouldLoad) && lowQualitySrc && (
        <Image
          src={lowQualitySrc || "/placeholder.svg"}
          alt={alt}
          className="absolute inset-0 blur-sm scale-105"
          fill
          sizes="100vw"
        />
      )}
    </div>
  )
}
