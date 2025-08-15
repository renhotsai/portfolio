import { Button } from "@/components/ui/button";
import Link from "next/link";
import MotionWrap from "@/components/MotionWrap";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-4 py-16">
      <div>
        <MotionWrap as="h1" delay={0.1} className={'text-xl md:text-6xl font-bold mb-20'}>
          Hi, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary-foreground">Jeremy</span>. A Software Developer.
        </MotionWrap>
        <MotionWrap 
          as="p" 
          delay={0.2} 
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-20"
        >
          I specialize in building modern, responsive, and user-friendly web applications. Currently seeking a full-time position in Toronto.
        </MotionWrap>
        <MotionWrap delay={0.3} className="mt-12">
          <div className="flex justify-center gap-4">
            <Link href="/projects">
              <Button size="lg">View My Projects</Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </Link>
          </div>
        </MotionWrap>
      </div>
    </main>
  );
}
