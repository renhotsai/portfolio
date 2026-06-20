import Link from 'next/link';
import MobileSidebar from '@/components/MobileSidebar';
import { Button } from '@/components/ui/button';

const Navbar = () => {

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Desktop Navigation */}
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Jeremy&apos;s Portfolio
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/projects"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex ml-auto">
          <a href="/resume/Jeremy_Tsai_202606.pdf" download="Jeremy_Tsai_202606.pdf">
            <Button size="sm" variant="outline">
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="flex w-full items-center gap-3 md:hidden">
          <MobileSidebar />
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg">Jeremy&apos;s Portfolio</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
