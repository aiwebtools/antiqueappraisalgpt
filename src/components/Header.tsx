
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 bg-cyber-darker/90 backdrop-blur-lg shadow-lg' : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="https://chatgpt.com/g/g-R3XUdDD0O-antique-and-collectible-appraisal-gpt" 
           className="flex items-center gap-2" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 rounded-full bg-neon-gradient animate-spin-slow opacity-70"></div>
            <div className="absolute inset-0.5 rounded-full bg-cyber-darker flex items-center justify-center">
              <span className="text-neon-pink text-sm font-cyber">AI</span>
            </div>
          </div>
          <div>
            <h1 className="font-cyber text-lg md:text-xl font-bold tracking-wider text-shimmer">
              Antique & Collectible Appraisal GPT
            </h1>
            <p className="text-xs text-gray-400">Presented by <a href="https://www.aiwebtools.ai" className="text-neon-blue hover:underline" target="_blank" rel="noopener noreferrer">AiWebTools.Ai</a></p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="https://chatgpt.com/g/g-R3XUdDD0O-antique-and-collectible-appraisal-gpt" 
            className="text-gray-300 hover:text-neon-pink transition-colors font-cyber text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            TRY ANTIQUE & COLLECTIBLE APPRAISAL GPT
          </a>
          <a href="#faq" className="text-gray-300 hover:text-neon-pink transition-colors font-cyber text-sm">
            FAQ
          </a>
          <a href="#disclaimer" className="text-gray-300 hover:text-neon-pink transition-colors font-cyber text-sm">
            DISCLAIMER
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            className="text-gray-300 hover:text-neon-blue transition-colors font-cyber text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            MORE AI TOOLS
          </a>
          <a 
            href="https://chatgpt.com/g/g-R3XUdDD0O-antique-and-collectible-appraisal-gpt" 
            className="neon-button neon-button-pink ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>LAUNCH ANTIQUE APPRAISAL GPT</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-neon-pink" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cyber-darker/95 backdrop-blur-xl border-t border-neon-purple/20 py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <a 
              href="https://chatgpt.com/g/g-R3XUdDD0O-antique-and-collectible-appraisal-gpt" 
              className="text-gray-300 hover:text-neon-pink py-2 font-cyber text-sm"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              TRY ANTIQUE APPRAISAL GPT
            </a>
            <a 
              href="#faq" 
              className="text-gray-300 hover:text-neon-pink py-2 font-cyber text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-gray-300 hover:text-neon-pink py-2 font-cyber text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              DISCLAIMER
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              className="text-gray-300 hover:text-neon-blue py-2 font-cyber text-sm"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              MORE AI TOOLS
            </a>
            <a 
              href="https://chatgpt.com/g/g-R3XUdDD0O-antique-and-collectible-appraisal-gpt" 
              className="neon-button neon-button-pink text-center mt-2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>LAUNCH ANTIQUE APPRAISAL GPT</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
