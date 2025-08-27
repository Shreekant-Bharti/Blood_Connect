import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-foreground/10 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="text-xl font-bold">BloodConnect</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Connecting lives through blood donation. Every drop counts, every donation saves lives.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">How It Works</a></li>
              <li><a href="#compatibility" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blood Types</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Find Donors</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Request Blood</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blood Banks</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Emergency Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">1-800-BLOOD-HELP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">help@bloodconnect.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">Available 24/7 Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 BloodConnect. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Medical Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}