import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/programs", label: "Programs" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 font-display font-bold text-2xl text-secondary cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-primary rounded-tr-xl rounded-bl-xl"></div>
              Skill Univ
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span 
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    location === link.href ? "text-primary" : "text-secondary/80"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="font-semibold rounded-full px-6">
                Talk to an Advisor
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span 
                  className="block p-3 text-lg font-medium text-secondary hover:bg-muted rounded-lg cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full mt-2 rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
                Talk to an Advisor
              </Button>
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 font-display font-bold text-2xl mb-4 text-white">
                <div className="w-8 h-8 bg-primary rounded-tr-xl rounded-bl-xl"></div>
                Skill Univ
              </div>
              <p className="text-secondary-foreground/70 max-w-sm mb-6">
                Not EdTech. EmployTech. Bridging the gap between education and employment with skills that actually matter.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><Link href="/programs"><span className="text-secondary-foreground/70 hover:text-primary cursor-pointer">All Courses</span></Link></li>
                <li><Link href="/programs/full-stack-development"><span className="text-secondary-foreground/70 hover:text-primary cursor-pointer">Full Stack Development</span></Link></li>
                <li><Link href="/programs/data-science"><span className="text-secondary-foreground/70 hover:text-primary cursor-pointer">Data Science</span></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about"><span className="text-secondary-foreground/70 hover:text-primary cursor-pointer">About Us</span></Link></li>
                <li><Link href="/contact"><span className="text-secondary-foreground/70 hover:text-primary cursor-pointer">Contact</span></Link></li>
                <li><a href="#" className="text-secondary-foreground/70 hover:text-primary">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-secondary-foreground/50">
            <p>© 2024 Skill University. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
