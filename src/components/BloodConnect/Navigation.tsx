import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DonorRegistrationForm } from "./DonorRegistrationForm";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDonorFormOpen, setIsDonorFormOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-hero-gradient p-2 rounded-lg shadow-hero">
              <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="text-xl font-bold text-foreground">BloodConnect</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#compatibility" className="text-foreground hover:text-primary transition-colors">
              Blood Types
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.location.href = '/blood-banks'}
            >
              Find Donors
            </Button>
            <Dialog open={isDonorFormOpen} onOpenChange={setIsDonorFormOpen}>
              <DialogTrigger asChild>
                <Button variant="hero" size="sm">
                  Donate Now
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DonorRegistrationForm onSuccess={() => setIsDonorFormOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#compatibility" className="text-foreground hover:text-primary transition-colors">
                Blood Types
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = '/blood-banks';
                  }}
                >
                  Find Donors
                </Button>
                <Dialog open={isDonorFormOpen} onOpenChange={setIsDonorFormOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="hero" 
                      size="sm"
                      onClick={() => setIsOpen(false)}
                    >
                      Donate Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DonorRegistrationForm onSuccess={() => setIsDonorFormOpen(false)} />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}