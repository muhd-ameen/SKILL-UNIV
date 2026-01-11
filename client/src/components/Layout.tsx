import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactOptionsModal } from "@/components/ContactOptionsModal";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
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
            <img 
              src="/logo.png" 
              alt="Skill Univ" 
              className="h-10 md:h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span 
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    location === link.href ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Button 
              className="font-semibold rounded-full px-6"
              onClick={() => setIsContactModalOpen(true)}
            >
              Talk to an Advisor
            </Button>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button + Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button 
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span 
                  className="block p-3 text-lg font-medium text-foreground hover:bg-muted rounded-lg cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Button 
              className="w-full mt-2 rounded-full" 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsContactModalOpen(true);
              }}
            >
              Talk to an Advisor
            </Button>
          </div>
        )}
      </header>

      {/* Contact Options Modal */}
      <ContactOptionsModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen} 
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#252422] text-white py-10 md:py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-2">
              <Link href="/" onClick={() => window.scrollTo(0, 0)}>
                <img 
                  src="/logo.png" 
                  alt="Skill Univ" 
                  className="h-16 md:h-20 w-auto mb-4 cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
              <p className="text-white/70 max-w-sm mb-6">
                Not EdTech. EmployTech. Bridging the gap between education and employment with skills that actually matter.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><Link href="/programs" onClick={() => window.scrollTo(0, 0)}><span className="text-white/70 hover:text-primary cursor-pointer">All Programs</span></Link></li>
                <li><Link href={`/programs?category=${encodeURIComponent("Role-Based Skill Programs")}`} onClick={() => window.scrollTo(0, 0)}><span className="text-white/70 hover:text-primary cursor-pointer">Role-Based Skills</span></Link></li>
                <li><Link href={`/programs?category=${encodeURIComponent("Professional Upskilling")}`} onClick={() => window.scrollTo(0, 0)}><span className="text-white/70 hover:text-primary cursor-pointer">Professional Upskilling</span></Link></li>
                <li><Link href={`/programs?category=${encodeURIComponent("Language & Communication")}`} onClick={() => window.scrollTo(0, 0)}><span className="text-white/70 hover:text-primary cursor-pointer">Language & Communication</span></Link></li>
                <li><Link href={`/programs?category=${encodeURIComponent("Foundational")}`} onClick={() => window.scrollTo(0, 0)}><span className="text-white/70 hover:text-primary cursor-pointer">Foundational</span></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" onClick={() => window.scrollTo(0, 0)}><span className="text-white/70 hover:text-primary cursor-pointer">About Us</span></Link></li>
                <li><Link href="/contact" onClick={() => window.scrollTo(0, 0)}><span className="text-white/70 hover:text-primary cursor-pointer">Contact</span></Link></li>
                <li><a href="#" className="text-white/70 hover:text-primary">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/50 text-center md:text-left">
            <p>© 2026 Skill University. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" onClick={() => window.scrollTo(0, 0)}><span className="hover:text-white cursor-pointer">Privacy Policy</span></Link>
              <Link href="/terms-of-service" onClick={() => window.scrollTo(0, 0)}><span className="hover:text-white cursor-pointer">Terms of Service</span></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
