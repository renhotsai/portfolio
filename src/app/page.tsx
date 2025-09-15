import { Button } from "@/components/ui/button";
import Link from "next/link";
import MotionWrap from "@/components/MotionWrap";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <MotionWrap as="h1" delay={0.1} className={'text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8'}>
          Hi, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-foreground">Jeremy</span>
        </MotionWrap>
        <MotionWrap as="h2" delay={0.15} className={'text-xl md:text-2xl lg:text-3xl font-semibold mb-8 md:mb-12 text-muted-foreground'}>
          Backend Engineer & Full-Stack Developer
        </MotionWrap>
        <MotionWrap
          as="p"
          delay={0.2}
          className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed px-2"
        >
          I build robust backend systems and modern web applications that power real businesses. Specializing in <span className="text-foreground font-medium">RESTful APIs</span>, <span className="text-foreground font-medium">database optimization</span>, and <span className="text-foreground font-medium">AWS cloud architecture</span>.
          From payment processing systems to scalable web platforms, I create reliable solutions that handle high-volume transactions.
        </MotionWrap>
        <MotionWrap delay={0.25} className="mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
              <span>8 Projects Delivered</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
              <span>AWS Cloud Certified Track</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></span>
              <span>Backend & Web Expert</span>
            </div>
          </div>
        </MotionWrap>
        <MotionWrap delay={0.3} className="mt-8 md:mt-12">
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 max-w-md mx-auto">
            <Link href="/projects" className="w-full sm:w-auto">
              <Button size="lg" className="w-full min-h-[48px] text-base">
                Explore My Work
              </Button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full min-h-[48px] text-base">
                Learn About Me
              </Button>
            </Link>
          </div>
        </MotionWrap>
      </div>
    </main>
  );
}
