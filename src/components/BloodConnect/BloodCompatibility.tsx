import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Users, AlertCircle } from "lucide-react";

interface BloodTypeCardProps {
  type: string;
  canDonateTo: string[];
  canReceiveFrom: string[];
  percentage: number;
  isUniversal?: boolean;
  universalType?: "donor" | "recipient";
}

function BloodTypeCard({ 
  type, 
  canDonateTo, 
  canReceiveFrom, 
  percentage, 
  isUniversal,
  universalType 
}: BloodTypeCardProps) {
  return (
    <Card className="bg-card-gradient shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
      {isUniversal && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold rounded-bl-lg">
          Universal {universalType}
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Droplets className="h-5 w-5 text-primary" fill="currentColor" />
            </div>
            {type}
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            {percentage}% of population
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-1">
            <Users className="h-4 w-4" />
            Can Donate To
          </h4>
          <div className="flex flex-wrap gap-1">
            {canDonateTo.map((bloodType) => (
              <Badge 
                key={bloodType} 
                variant="outline" 
                className="text-xs border-primary/30 text-primary"
              >
                {bloodType}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-1">
            <Droplets className="h-4 w-4" />
            Can Receive From
          </h4>
          <div className="flex flex-wrap gap-1">
            {canReceiveFrom.map((bloodType) => (
              <Badge 
                key={bloodType} 
                variant="outline" 
                className="text-xs border-muted-foreground/30"
              >
                {bloodType}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function BloodCompatibility() {
  const bloodTypes = [
    {
      type: "O-",
      canDonateTo: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
      canReceiveFrom: ["O-"],
      percentage: 6.6,
      isUniversal: true,
      universalType: "donor" as const
    },
    {
      type: "O+",
      canDonateTo: ["O+", "A+", "B+", "AB+"],
      canReceiveFrom: ["O-", "O+"],
      percentage: 37.4
    },
    {
      type: "A-",
      canDonateTo: ["A-", "A+", "AB-", "AB+"],
      canReceiveFrom: ["O-", "A-"],
      percentage: 6.3
    },
    {
      type: "A+",
      canDonateTo: ["A+", "AB+"],
      canReceiveFrom: ["O-", "O+", "A-", "A+"],
      percentage: 35.7
    },
    {
      type: "B-",
      canDonateTo: ["B-", "B+", "AB-", "AB+"],
      canReceiveFrom: ["O-", "B-"],
      percentage: 1.5
    },
    {
      type: "B+",
      canDonateTo: ["B+", "AB+"],
      canReceiveFrom: ["O-", "O+", "B-", "B+"],
      percentage: 8.5
    },
    {
      type: "AB-",
      canDonateTo: ["AB-", "AB+"],
      canReceiveFrom: ["O-", "A-", "B-", "AB-"],
      percentage: 0.6
    },
    {
      type: "AB+",
      canDonateTo: ["AB+"],
      canReceiveFrom: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
      percentage: 3.4,
      isUniversal: true,
      universalType: "recipient" as const
    }
  ];

  return (
    <section id="compatibility" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Blood Type Compatibility
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Understanding blood type compatibility is crucial for safe transfusions. 
            Learn about your blood type and who you can help.
          </p>
        </div>

        {/* Important notice */}
        <div className="bg-accent/50 border border-accent-foreground/20 rounded-lg p-6 mb-12 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-accent-foreground mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-accent-foreground mb-2">
              Important Medical Information
            </h3>
            <p className="text-sm text-accent-foreground/80">
              This information is for educational purposes only. Always consult with medical professionals 
              for actual blood transfusion procedures. Blood compatibility involves more factors than just ABO and Rh types.
            </p>
          </div>
        </div>

        {/* Blood type grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bloodTypes.map((bloodType) => (
            <BloodTypeCard
              key={bloodType.type}
              type={bloodType.type}
              canDonateTo={bloodType.canDonateTo}
              canReceiveFrom={bloodType.canReceiveFrom}
              percentage={bloodType.percentage}
              isUniversal={bloodType.isUniversal}
              universalType={bloodType.universalType}
            />
          ))}
        </div>

        {/* Quick facts */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Droplets className="h-8 w-8 text-primary" fill="currentColor" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Every 2 Seconds</h3>
            <p className="text-sm text-muted-foreground">Someone needs blood in the United States</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">1 in 7 Patients</h3>
            <p className="text-sm text-muted-foreground">Entering a hospital needs blood</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Only 38%</h3>
            <p className="text-sm text-muted-foreground">Of the population is eligible to donate</p>
          </div>
        </div>
      </div>
    </section>
  );
}