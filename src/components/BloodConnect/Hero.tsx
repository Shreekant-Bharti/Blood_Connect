import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Users, MapPin } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DonorRegistrationForm } from "./DonorRegistrationForm";

export function Hero() {
  const [isDonorFormOpen, setIsDonorFormOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Save Lives Through
            <span className="block bg-gradient-to-r from-primary-foreground to-primary-foreground/80 bg-clip-text text-transparent">
              Blood Donation
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with blood donors and recipients in your community. Every donation can save up to three lives.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Dialog open={isDonorFormOpen} onOpenChange={setIsDonorFormOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-hero animate-pulse-glow"
                >
                  <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" fill="currentColor" />
                  Donate Blood Now
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DonorRegistrationForm onSuccess={() => setIsDonorFormOpen(false)} />
              </DialogContent>
            </Dialog>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => window.location.href = '/blood-banks'}
            >
              <Users className="mr-2 h-5 w-5" />
              Find Donors
            </Button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">2M+</div>
              <div className="text-sm text-primary-foreground/80">Lives Saved</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">50K+</div>
              <div className="text-sm text-primary-foreground/80">Active Donors</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">200+</div>
              <div className="text-sm text-primary-foreground/80">Locations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-16 fill-background"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}