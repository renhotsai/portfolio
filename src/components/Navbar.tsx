"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsAboutOpen(false);
  };

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

        {/* Mobile Navigation */}
        <div className="flex w-full justify-between md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg">Jeremy&apos;s Portfolio</span>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            className="h-9 w-9 p-0"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-14 left-0 right-0 bg-background/95 backdrop-blur border-b md:hidden">
            <nav className="container py-4 flex flex-col space-y-2">
              <Link
                href="/projects"
                className="text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-3 px-2 rounded-md hover:bg-muted/50"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>

              {/* Collapsible About Section */}
              <Collapsible open={isAboutOpen} onOpenChange={setIsAboutOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-3 px-2 rounded-md hover:bg-muted/50">
                  About
                  {isAboutOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-1">
                  <Link
                    href="/about"
                    className="block text-base font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-2 px-2 rounded-md hover:bg-muted/30"
                    onClick={closeMobileMenu}
                  >
                    About Me
                  </Link>
                  <Link
                    href="/about/skills"
                    className="block text-base font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-2 px-2 rounded-md hover:bg-muted/30"
                    onClick={closeMobileMenu}
                  >
                    Skills
                  </Link>
                  <Link
                    href="/about/experience"
                    className="block text-base font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-2 px-2 rounded-md hover:bg-muted/30"
                    onClick={closeMobileMenu}
                  >
                    Experience
                  </Link>
                  <Link
                    href="/about/education"
                    className="block text-base font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-2 px-2 rounded-md hover:bg-muted/30"
                    onClick={closeMobileMenu}
                  >
                    Education
                  </Link>
                  <Link
                    href="/about/certificates"
                    className="block text-base font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-2 px-2 rounded-md hover:bg-muted/30"
                    onClick={closeMobileMenu}
                  >
                    Certificates
                  </Link>
                </CollapsibleContent>
              </Collapsible>

              <Link
                href="/contact"
                className="text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60 py-3 px-2 rounded-md hover:bg-muted/50"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
