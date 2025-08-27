-- Create blood banks table
CREATE TABLE public.blood_banks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  operating_hours TEXT,
  blood_types_needed TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create donor registrations table
CREATE TABLE public.donor_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  age INTEGER NOT NULL,
  blood_type TEXT NOT NULL,
  gender TEXT NOT NULL,
  weight DECIMAL(5, 2),
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  pin_code TEXT NOT NULL,
  medical_conditions TEXT,
  last_donation_date DATE,
  preferred_donation_date DATE,
  emergency_contact_name TEXT,
  emergency_contact_phone TEXT,
  terms_accepted BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blood_banks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donor_registrations ENABLE ROW LEVEL SECURITY;

-- Create policies for blood banks (public read access)
CREATE POLICY "Blood banks are viewable by everyone" 
ON public.blood_banks 
FOR SELECT 
USING (true);

-- Create policies for donor registrations (users can create their own)
CREATE POLICY "Anyone can create donor registrations" 
ON public.donor_registrations 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_blood_banks_updated_at
  BEFORE UPDATE ON public.blood_banks
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_donor_registrations_updated_at
  BEFORE UPDATE ON public.donor_registrations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample blood banks data
INSERT INTO public.blood_banks (name, address, city, state, phone, email, latitude, longitude, operating_hours, blood_types_needed) VALUES
('Central Blood Bank', '123 Main Street', 'Mumbai', 'Maharashtra', '+91-9876543210', 'contact@centralbloodbank.com', 19.0760, 72.8777, '24/7', ARRAY['O+', 'O-', 'A+', 'B+', 'AB+']),
('City Hospital Blood Center', '456 Hospital Road', 'Delhi', 'Delhi', '+91-9876543211', 'blood@cityhospital.com', 28.6139, 77.2090, '8:00 AM - 8:00 PM', ARRAY['O-', 'A-', 'B-', 'AB-']),
('Community Blood Bank', '789 Health Avenue', 'Bangalore', 'Karnataka', '+91-9876543212', 'info@communityblood.org', 12.9716, 77.5946, '9:00 AM - 6:00 PM', ARRAY['O+', 'A+', 'B+', 'AB+', 'O-']),
('Regional Medical Center', '321 Care Street', 'Chennai', 'Tamil Nadu', '+91-9876543213', 'blood@regionalmedical.com', 13.0827, 80.2707, '24/7', ARRAY['O+', 'O-', 'A+', 'A-', 'B+', 'B-']),
('Metro Blood Services', '654 Life Plaza', 'Hyderabad', 'Telangana', '+91-9876543214', 'donate@metroblood.in', 17.3850, 78.4867, '7:00 AM - 9:00 PM', ARRAY['AB+', 'AB-', 'O+', 'A+']);