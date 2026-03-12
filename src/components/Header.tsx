
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

  const antiqueCollectibleUrl = "https://chatgpt.com/g/g-R3XUdDD0O-antique-and-collectible-appraisal-gpt";
  const materialValuationUrl = "https://materialvaluationgpt.lovable.app/";
  const artVintageUrl = "https://artandvintagegpt.lovable.app/?via=aiwebtools";
  const aiwebtoolsUrl = "https://aiwebtools.lovable.app/?via=aiwebtools";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 bg-cyber-darker/90 backdrop-blur-lg shadow-lg' : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href={antiqueCollectibleUrl} 
           className="flex items-center gap-2 min-w-0 flex-shrink" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <div className="relative h-10 w-10 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-neon-gradient animate-spin-slow opacity-70"></div>
            <div className="absolute inset-0.5 rounded-full bg-cyber-darker flex items-center justify-center">
              <span className="text-neon-pink text-sm font-cyber">AI</span>
            </div>
          </div>
          <div className="min-w-0">
            <h1 className="font-cyber text-sm sm:text-lg md:text-xl font-bold tracking-wider text-shimmer truncate">
              Antique & Collectible Appraisal GPT
            </h1>
            <p className="text-xs text-gray-400">Presented by <a href={aiwebtoolsUrl} className="text-neon-blue hover:underline" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>AiWebTools.Ai</a></p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <a 
            href={antiqueCollectibleUrl} 
            className="neon-button neon-button-pink px-3 py-1.5 text-xs xl:text-sm whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>ANTIQUE & COLLECTIBLE GPT</span>
          </a>
          <a 
            href={materialValuationUrl} 
            className="neon-button neon-button-green px-3 py-1.5 text-xs xl:text-sm whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>MATERIAL VALUATION GPT</span>
          </a>
          <a 
            href={artVintageUrl} 
            className="neon-button neon-button-blue px-3 py-1.5 text-xs xl:text-sm whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>ART & VINTAGE GPT</span>
          </a>
          <a 
            href={aiwebtoolsUrl} 
            className="text-gray-300 hover:text-neon-blue transition-colors font-cyber text-xs xl:text-sm whitespace-nowrap"
            target="_blank"
            rel="noopener noreferrer"
          >
            MORE AI TOOLS
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-300 hover:text-white p-2 -mr-2 touch-manipulation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-neon-pink" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu with smooth transition */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-cyber-darker/95 backdrop-blur-xl border-t border-neon-purple/20 py-4">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <a 
              href={antiqueCollectibleUrl} 
              className="neon-button neon-button-pink text-center py-3 text-sm"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>ANTIQUE & COLLECTIBLE GPT</span>
            </a>
            <a 
              href={materialValuationUrl} 
              className="neon-button neon-button-green text-center py-3 text-sm"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>MATERIAL VALUATION GPT</span>
            </a>
            <a 
              href={artVintageUrl} 
              className="neon-button neon-button-blue text-center py-3 text-sm"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>ART & VINTAGE GPT</span>
            </a>
            <a 
              href={aiwebtoolsUrl} 
              className="text-gray-300 hover:text-neon-blue py-3 font-cyber text-sm text-center active:text-neon-blue"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              MORE AI TOOLS
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
