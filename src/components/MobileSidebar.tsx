"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Home,
  FolderOpen,
  User,
  Mail,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const pathname = usePathname();

  const closeSidebar = () => {
    setIsOpen(false);
    setIsAboutOpen(false);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-9 w-9 p-0"
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 p-0">
          <SheetHeader className="p-6 pb-4">
            <SheetTitle className="text-left">
              Jeremy&apos;s Portfolio
            </SheetTitle>
          </SheetHeader>

          <div className="px-4 pb-6">
            <nav className="space-y-2">
              {/* Home */}
              <Link
                href="/"
                onClick={closeSidebar}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <Home className="h-4 w-4" />
                Home
              </Link>

              {/* Projects */}
              <Link
                href="/projects"
                onClick={closeSidebar}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/projects")
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <FolderOpen className="h-4 w-4" />
                Projects
              </Link>

              {/* About Section */}
              <Collapsible open={isAboutOpen} onOpenChange={setIsAboutOpen}>
                <CollapsibleTrigger
                  className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    pathname.startsWith("/about")
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4" />
                    About
                  </div>
                  {isAboutOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-6 mt-1 space-y-1">
                  <Link
                    href="/about"
                    onClick={closeSidebar}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive("/about")
                        ? "bg-primary/20 text-primary font-medium"
                        : "hover:bg-muted/30 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <User className="h-3 w-3" />
                    About Me
                  </Link>
                  <Link
                    href="/about/skills"
                    onClick={closeSidebar}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive("/about/skills")
                        ? "bg-primary/20 text-primary font-medium"
                        : "hover:bg-muted/30 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Code className="h-3 w-3" />
                    Skills
                  </Link>
                  <Link
                    href="/about/experience"
                    onClick={closeSidebar}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive("/about/experience")
                        ? "bg-primary/20 text-primary font-medium"
                        : "hover:bg-muted/30 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Briefcase className="h-3 w-3" />
                    Experience
                  </Link>
                  <Link
                    href="/about/education"
                    onClick={closeSidebar}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive("/about/education")
                        ? "bg-primary/20 text-primary font-medium"
                        : "hover:bg-muted/30 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <GraduationCap className="h-3 w-3" />
                    Education
                  </Link>
                  <Link
                    href="/about/certificates"
                    onClick={closeSidebar}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      isActive("/about/certificates")
                        ? "bg-primary/20 text-primary font-medium"
                        : "hover:bg-muted/30 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Award className="h-3 w-3" />
                    Certificates
                  </Link>
                </CollapsibleContent>
              </Collapsible>

              <Separator className="my-2" />

              {/* Contact */}
              <Link
                href="/contact"
                onClick={closeSidebar}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive("/contact")
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                <Mail className="h-4 w-4" />
                Contact
              </Link>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;