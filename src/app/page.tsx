import { Button } from "@/components/ui/button";
import Link from "next/link";
import MotionWrap from "@/components/MotionWrap";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4 py-16">
      <div>
        <MotionWrap as="h1" delay={0.1} className={'text-4xl md:text-6xl font-bold mb-8'}>
          Hi, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-foreground">Jeremy</span>
        </MotionWrap>
        <MotionWrap as="h2" delay={0.15} className={'text-2xl md:text-3xl font-semibold mb-12 text-muted-foreground'}>
          Backend Engineer & Full-Stack Developer
        </MotionWrap>
        <MotionWrap 
          as="p" 
          delay={0.2} 
          className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed"
        >
          I build robust backend systems and modern web applications that power real businesses. Specializing in <span className="text-foreground font-medium">RESTful APIs</span>, <span className="text-foreground font-medium">database optimization</span>, and <span className="text-foreground font-medium">AWS cloud architecture</span>. 
          From payment processing systems to scalable web platforms, I create reliable solutions that handle high-volume transactions.
        </MotionWrap>
        <MotionWrap delay={0.25} className="mb-12">
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>8 Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>AWS Cloud Certified Track</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>Backend & Web Expert</span>
            </div>
          </div>
        </MotionWrap>
        <MotionWrap delay={0.3} className="mt-12">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/projects">
              <Button size="lg" className="w-full sm:w-auto">
                Explore My Work
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn About Me
              </Button>
            </Link>
          </div>
        </MotionWrap>
      </div>
    </main>
  );
}
