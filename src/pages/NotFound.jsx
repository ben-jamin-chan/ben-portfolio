
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Get the base URL from the environment or use default
  const baseUrl = import.meta.env.MODE === "production" ? "/ben-portfolio/" : "/";

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full glass-panel p-12 text-center">
        <h1 className="text-6xl font-pixel mb-6 text-primary">404</h1>
        <h2 className="text-2xl font-mono font-bold mb-4">Page Not Found</h2>
        <p className="text-foreground/70 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a 
          href={baseUrl} 
          className="pixel-btn bg-primary text-primary-foreground inline-flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
