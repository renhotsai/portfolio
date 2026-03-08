import { Button } from "@/components/ui/button";
import Link from "next/link";
import MotionWrap from "@/components/MotionWrap";

const badges = [
  { color: "bg-green-500", label: "AI Integration & LLM Apps" },
  { color: "bg-blue-500", label: "Cloud Architecture (AWS)" },
  { color: "bg-purple-500", label: "System Design & Databases" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <MotionWrap as="h1" delay={0.1} className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
          Hi, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-foreground">Jeremy</span>
        </MotionWrap>
        <MotionWrap as="h2" delay={0.15} className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 md:mb-12 text-muted-foreground">
          Full-Stack Engineer & AI Application Architect
        </MotionWrap>
        <MotionWrap
          as="p"
          delay={0.2}
          className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed px-2"
        >
          I design and ship production-ready applications end-to-end — from scalable <span className="text-foreground font-medium">API backends</span> and <span className="text-foreground font-medium">relational database schemas</span> to <span className="text-foreground font-medium">LLM-integrated features</span> and <span className="text-foreground font-medium">AI coding workflows</span>.
          With hands-on experience in <span className="text-foreground font-medium">system architecture design</span>, <span className="text-foreground font-medium">AWS cloud deployment</span>, and modern full-stack development, I help teams move fast without sacrificing reliability or maintainability.
        </MotionWrap>
        <MotionWrap delay={0.25} className="mb-8 md:mb-12">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
            {badges.map(({ color, label }) => (
              <div key={label} className="flex items-center justify-center gap-2">
                <span className={`w-2 h-2 ${color} rounded-full flex-shrink-0`}></span>
                <span>{label}</span>
              </div>
            ))}
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
