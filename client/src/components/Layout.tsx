import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactOptionsModal } from "@/components/ContactOptionsModal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BackToTop } from "@/components/BackToTop";

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

      {/* Back to Top Button */}
      <BackToTop />

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
              
              {/* Social Media Links */}
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com/skilluniv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#252422] transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/company/skilluniv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#252422] transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com/skilluniv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#252422] transition-all duration-200"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://youtube.com/@skilluniv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-[#252422] transition-all duration-200"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
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
