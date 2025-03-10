
import { useState, useEffect } from 'react';
import { X, AlertTriangle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from '@/hooks/use-toast';

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Check if user has already agreed to disclaimer
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    
    if (!hasAgreed) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAgree = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    setIsOpen(false);
    
    toast({
      title: "Thank you for acknowledging our disclaimer",
      description: "Now you can explore and discover the value of your treasures!",
      duration: 5000,
    });
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="relative glassmorphism max-w-md w-full mx-4 overflow-hidden"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <AlertTriangle className="h-6 w-6 text-neon-pink mr-2" />
                  <h2 className="font-cyber text-2xl text-shimmer">Disclaimer</h2>
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-sm leading-relaxed text-gray-300">
                  The Antique & Collectible Appraisal GPT provides estimated valuations based on AI analysis. These appraisals should be considered as opinions only, not definitive valuations.
                </p>
                <p className="text-sm leading-relaxed text-gray-300">
                  For items of significant value or for insurance, legal, or tax purposes, we strongly recommend consulting with a certified professional appraiser who can physically examine your items.
                </p>
                <p className="text-sm leading-relaxed font-medium text-white">
                  By clicking "I AGREE", you acknowledge that you have read, understood, and agree to our full disclaimer.
                </p>
              </div>
              
              <div className="flex justify-center">
                <motion.button
                  onClick={handleAgree}
                  className="neon-button-blue group relative overflow-hidden px-8 py-3 rounded-lg font-cyber text-lg tracking-wider"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center">
                    I AGREE
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-neon-blue/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  />
                </motion.button>
              </div>
              
              <div className="mt-6 text-center">
                <a 
                  href="#disclaimer" 
                  onClick={() => {
                    setIsOpen(false);
                    document.querySelector('#disclaimer')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs text-neon-blue hover:underline font-cyber"
                >
                  Read our full disclaimer
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerPopup;
