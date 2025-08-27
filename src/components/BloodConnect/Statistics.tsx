import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, MapPin, Clock } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

function StatCard({ icon, value, label, suffix = "", delay = 0 }: StatCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000;
      const increment = value / (duration / 16);
      let current = 0;
      
      const counter = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <Card className="bg-card-gradient shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
          {icon}
        </div>
        <div className="text-3xl font-bold text-primary mb-2">
          {count.toLocaleString()}{suffix}
        </div>
        <div className="text-muted-foreground font-medium">{label}</div>
      </CardContent>
    </Card>
  );
}

export function Statistics() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every donation counts. See how our community is making a difference every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<Heart className="h-6 w-6 text-primary" fill="currentColor" />}
            value={2500000}
            label="Lives Saved"
            suffix="+"
            delay={0}
          />
          <StatCard
            icon={<Users className="h-6 w-6 text-primary" />}
            value={50000}
            label="Active Donors"
            suffix="+"
            delay={200}
          />
          <StatCard
            icon={<MapPin className="h-6 w-6 text-primary" />}
            value={200}
            label="Locations"
            suffix="+"
            delay={400}
          />
          <StatCard
            icon={<Clock className="h-6 w-6 text-primary" />}
            value={24}
            label="Emergency Response"
            suffix=" hrs"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
}