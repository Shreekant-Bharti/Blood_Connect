import { useState, useEffect } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface BloodBank {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  phone?: string;
  email?: string;
  operating_hours?: string;
  blood_types_needed?: string[];
}

export const BloodBankFinder = () => {
  const [bloodBanks, setBloodBanks] = useState<BloodBank[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchBloodBanks();
  }, []);

  const fetchBloodBanks = async () => {
    try {
      const { data, error } = await supabase
        .from('blood_banks')
        .select('*')
        .order('name');

      if (error) throw error;
      setBloodBanks(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch blood banks",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredBloodBanks = bloodBanks.filter(bank =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bank.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bank.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading blood banks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Find Nearby Blood Banks</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Locate blood banks in your area and check their current blood type needs
        </p>
      </div>

      <div className="max-w-md mx-auto mb-8">
        <Input
          type="text"
          placeholder="Search by city, state, or bank name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBloodBanks.map((bank) => (
          <Card key={bank.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{bank.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-primary" />
                <div className="text-sm">
                  <p>{bank.address}</p>
                  <p>{bank.city}, {bank.state}</p>
                </div>
              </div>

              {bank.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <p className="text-sm">{bank.phone}</p>
                </div>
              )}

              {bank.email && (
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <p className="text-sm">{bank.email}</p>
                </div>
              )}

              {bank.operating_hours && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <p className="text-sm">{bank.operating_hours}</p>
                </div>
              )}

              {bank.blood_types_needed && bank.blood_types_needed.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">Urgently Needed:</p>
                  <div className="flex flex-wrap gap-1">
                    {bank.blood_types_needed.map((type) => (
                      <Badge key={type} variant="secondary" className="text-xs">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <Button 
                className="w-full" 
                onClick={() => window.open(`tel:${bank.phone}`, '_blank')}
                disabled={!bank.phone}
              >
                Call Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredBloodBanks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No blood banks found matching your search.</p>
        </div>
      )}
    </div>
  );
};