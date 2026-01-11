import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display uppercase tracking-wider">Ahmed Farouk</h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-xs">
              Senior Furnace Operator & Technician with over 18 years of dedication to industrial excellence and operational safety.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-display uppercase tracking-wider text-accent">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-primary-foreground/80 hover:text-white hover:underline decoration-accent underline-offset-4 w-fit">Home</Link>
              <Link href="/experience" className="text-primary-foreground/80 hover:text-white hover:underline decoration-accent underline-offset-4 w-fit">Experience</Link>
              <Link href="/skills" className="text-primary-foreground/80 hover:text-white hover:underline decoration-accent underline-offset-4 w-fit">Skills</Link>
              <Link href="/contact" className="text-primary-foreground/80 hover:text-white hover:underline decoration-accent underline-offset-4 w-fit">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-display uppercase tracking-wider text-accent">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>Alexandria, Egypt</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+20 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>contact@ahmedfarouk.com</span>
              </li>
            </ul>
            <div className="flex gap-4 pt-4">
              <a href="#" className="p-2 bg-white/10 rounded hover:bg-accent hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded hover:bg-accent hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Ahmed Farouk Ahmed Yousef. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
