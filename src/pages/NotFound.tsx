import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="bg-primary/10 rounded-full p-6 w-24 h-24 mx-auto mb-8 flex items-center justify-center">
          <AlertCircle className="h-12 w-12 text-primary" />
        </div>
        
        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-xl font-semibold text-foreground mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="hero">
            <a href="/">
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#how-it-works">
              <Heart className="mr-2 h-5 w-5" />
              Learn About Donation
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
