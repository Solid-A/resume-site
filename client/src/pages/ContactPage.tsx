import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { useProfile } from "@/hooks/use-portfolio";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const { data: profile } = useProfile();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Get In Touch" 
            subtitle="Interested in discussing a potential opportunity? Let's connect."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto">
            {/* Contact Info Column */}
            <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-lg shadow-xl">
              <h3 className="text-2xl font-display font-bold mb-8 text-white">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-primary-foreground/80">{profile?.email || "loading..."}</p>
                    <p className="text-sm text-primary-foreground/50 mt-1">For official inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-primary-foreground/80">{profile?.phone || "loading..."}</p>
                    <p className="text-sm text-primary-foreground/50 mt-1">Available Sun-Thu, 9am - 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Location</h4>
                    <p className="text-primary-foreground/80">{profile?.location || "loading..."}</p>
                    <p className="text-sm text-primary-foreground/50 mt-1">Open to relocation</p>
                  </div>
                </div>
              </div>

              {/* Decorative Map Graphic Placeholder */}
              <div className="mt-12 h-40 bg-black/20 rounded border border-white/5 flex items-center justify-center">
                <p className="text-white/30 font-display uppercase tracking-widest text-sm">Location Map</p>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-card border border-border rounded-lg shadow-lg p-8 md:p-12">
              <h3 className="text-2xl font-display font-bold mb-2 text-foreground">Send a Message</h3>
              <p className="text-muted-foreground mb-8">Fill out the form below and I'll respond as soon as possible.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
