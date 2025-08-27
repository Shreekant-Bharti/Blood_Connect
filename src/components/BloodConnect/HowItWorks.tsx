import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  UserPlus, 
  Search, 
  Calendar, 
  Heart,
  ArrowRight 
} from "lucide-react";

interface StepCardProps {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

function StepCard({ step, icon, title, description, isLast }: StepCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Step number and icon */}
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center shadow-hero">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
          {step}
        </div>
      </div>

      {/* Content */}
      <Card className="w-full bg-card-gradient shadow-card hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>

      {/* Arrow connector */}
      {!isLast && (
        <div className="hidden lg:block absolute top-8 -right-16 text-primary/30">
          <ArrowRight className="h-8 w-8" />
        </div>
      )}
    </div>
  );
}

export function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="h-8 w-8 text-primary-foreground" />,
      title: "Register",
      description: "Create your profile with basic information and blood type. It takes less than 2 minutes to get started."
    },
    {
      icon: <Search className="h-8 w-8 text-primary-foreground" />,
      title: "Find Match",
      description: "Our system matches you with nearby donors or recipients based on blood type and location."
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary-foreground" />,
      title: "Schedule",
      description: "Book an appointment at a convenient time and location. We'll send you all the details."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary-foreground" fill="currentColor" />,
      title: "Save Lives",
      description: "Complete the donation process and know that you've helped save up to three lives."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How BloodConnect Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our simple 4-step process makes blood donation and finding donors easier than ever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mb-12">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="hero" className="shadow-hero">
            <Heart className="mr-2 h-5 w-5" fill="currentColor" />
            Start Saving Lives Today
          </Button>
        </div>
      </div>
    </section>
  );
}