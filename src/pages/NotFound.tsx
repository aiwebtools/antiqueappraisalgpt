
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-dark p-4">
      <div className="glassmorphism p-8 md:p-12 max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <div className="cyber-panel p-4 rounded-full">
            <AlertTriangle className="h-16 w-16 text-neon-pink" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-cyber neon-text">404</h1>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent my-6"></div>
        <p className="text-xl text-gray-300 mb-8">This page has been lost in the digital void.</p>
        <a 
          href="/" 
          className="neon-button neon-button-blue group inline-flex items-center gap-2"
        >
          <Home className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          <span>Return to Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
