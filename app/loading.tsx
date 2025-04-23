import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section Skeleton */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-teal-50 px-4 py-16 sm:py-24 md:py-32">
        <div className="container relative z-10 mx-auto max-w-5xl text-center">
          <Skeleton className="mx-auto h-12 w-48 rounded-md" />
          <Skeleton className="mx-auto mt-4 h-6 w-64 rounded-md" />
          <Skeleton className="mx-auto mt-6 h-24 w-full max-w-2xl rounded-md" />
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Skeleton className="h-10 w-full rounded-md sm:w-40" />
            <Skeleton className="h-10 w-full rounded-md sm:w-40" />
          </div>
        </div>
      </section>

      {/* About Section Skeleton */}
      <section className="bg-white px-4 py-12 sm:py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <Skeleton className="h-[300px] w-full rounded-lg sm:h-[400px] md:w-1/2" />
            <div className="w-full md:w-1/2">
              <Skeleton className="h-8 w-3/4 rounded-md" />
              <Skeleton className="mt-4 h-6 w-1/2 rounded-md" />
              <Skeleton className="mt-2 h-4 w-1/3 rounded-md" />
              <div className="mt-6 space-y-4">
                <Skeleton className="h-20 w-full rounded-md" />
                <Skeleton className="h-20 w-full rounded-md" />
                <Skeleton className="h-20 w-full rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
