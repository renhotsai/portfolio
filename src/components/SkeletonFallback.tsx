import { Skeleton } from "@/components/ui/skeleton";

// Projects Page Skeleton
export const ProjectsSkeleton = () => {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <Skeleton className="h-10 w-64 mb-2" />
        <Skeleton className="h-6 w-96" />
      </div>
      
      <div className="relative">
        <div className="flex justify-center gap-4 mb-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-80">
              <div className="border rounded-lg p-6">
                <Skeleton className="h-48 w-full mb-4" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6 mb-4" />
                <div className="flex flex-wrap gap-2 mb-4">
                  {[...Array(4)].map((_, j) => (
                    <Skeleton key={j} className="h-6 w-16" />
                  ))}
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-9 w-24" />
                  <Skeleton className="h-9 w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="w-2 h-2 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

// About Page Skeleton
export const AboutSkeleton = () => {
  return (
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Side */}
        <div className="lg:col-span-4">
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
            <Skeleton className="w-32 h-32 rounded-full mb-6" />
            <Skeleton className="h-10 w-48 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6 mb-2" />
            <Skeleton className="h-4 w-4/5 mb-6" />
            <Skeleton className="h-10 w-36" />
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:col-span-8">
          {/* Tabs */}
          <div className="flex space-x-1 mb-8">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-24" />
            ))}
          </div>
          
          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border rounded-lg p-6">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="flex flex-wrap gap-2">
                  {[...Array(4)].map((_, j) => (
                    <Skeleton key={j} className="h-6 w-16" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Page Skeleton
export const ContactSkeleton = () => {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-2xl mx-auto text-center">
        <Skeleton className="h-10 w-48 mx-auto mb-4" />
        <Skeleton className="h-6 w-96 mx-auto mb-10" />

        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-32" />
          ))}
        </div>

        <div className="text-left space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-32 w-full" />
          </div>
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </div>
  );
};

// Home Page Skeleton
export const HomeSkeleton = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4 py-16">
      <div>
        <Skeleton className="h-16 w-96 mx-auto mb-20" />
        <Skeleton className="h-8 w-80 mx-auto mb-20" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Skeleton className="h-12 w-36" />
          <Skeleton className="h-12 w-36" />
        </div>
      </div>
    </main>
  );
};

// Generic Page Skeleton
export const PageSkeleton = () => {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-6 w-96" />
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
};