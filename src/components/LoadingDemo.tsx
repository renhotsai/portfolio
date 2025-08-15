"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ProjectsSkeleton, 
  AboutSkeleton, 
  ContactSkeleton, 
  HomeSkeleton 
} from "@/components/SkeletonFallback";

type SkeletonType = 'projects' | 'about' | 'contact' | 'home' | null;

export const LoadingDemo = () => {
  const [activeDemo, setActiveDemo] = useState<SkeletonType>(null);

  const renderSkeleton = () => {
    switch (activeDemo) {
      case 'projects':
        return <ProjectsSkeleton />;
      case 'about':
        return <AboutSkeleton />;
      case 'contact':
        return <ContactSkeleton />;
      case 'home':
        return <HomeSkeleton />;
      default:
        return null;
    }
  };

  if (activeDemo) {
    return (
      <div>
        <div className="fixed top-4 right-4 z-50">
          <Button 
            onClick={() => setActiveDemo(null)}
            variant="outline"
            size="sm"
          >
            Hide Demo
          </Button>
        </div>
        {renderSkeleton()}
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <Button
        onClick={() => setActiveDemo('projects')}
        variant="outline"
        size="sm"
      >
        Projects Skeleton
      </Button>
      <Button
        onClick={() => setActiveDemo('about')}
        variant="outline"
        size="sm"
      >
        About Skeleton
      </Button>
      <Button
        onClick={() => setActiveDemo('contact')}
        variant="outline"
        size="sm"
      >
        Contact Skeleton
      </Button>
      <Button
        onClick={() => setActiveDemo('home')}
        variant="outline"
        size="sm"
      >
        Home Skeleton
      </Button>
    </div>
  );
};