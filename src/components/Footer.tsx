import { Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const materialValuationUrl = "https://materialvaluationgpt.lovable.app/";
  const artVintageUrl = "https://artandvintagegpt.lovable.app/?via=aiwebtools";
  
  return (
    <footer className="relative bg-cyber-darker py-12 overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10" style={{ backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="https://chatgpt.com/g/g-R3XUdDD0O-antique-and-collectible-appraisal-gpt" 
               className="flex items-center gap-2 mb-4" 
               target="_blank" 
               rel="noopener noreferrer"
            >
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 rounded-full bg-neon-gradient animate-spin-slow opacity-70"></div>
                <div className="absolute inset-0.5 rounded-full bg-cyber-darker flex items-center justify-center">
                  <span className="text-neon-pink text-xs font-cyber">AI</span>
                </div>
              </div>
              <div>
                <h1 className="font-cyber text-lg font-bold tracking-wider text-white">
                  Antique & Collectible Appraisal GPT
                </h1>
                <p className="text-xs text-gray-400">Presented by <a href="https://www.aiwebtools.ai" className="text-neon-blue hover:underline" target="_blank" rel="noopener noreferrer">AiWebTools.Ai</a></p>
              </div>
            </a>
            <p className="text-gray-400 text-sm mb-4">
              Discover the history and value of your antiques and collectibles with our AI-powered appraisal tool. Get detailed valuations, historical context, and expert insights.
            </p>
            <p className="text-xs text-gray-500 italic mb-4">
              For informational, educational, and research purposes only.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+14758008096" className="flex items-center text-gray-300 hover:text-neon-pink transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                <span>(475) 800-8096</span>
              </a>
              <a href="mailto:Contact@ai-webtools.com" className="flex items-center text-gray-300 hover:text-neon-pink transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                <span>Contact@ai-webtools.com</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-cyber text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-R3XUdDD0O-antique-and-collectible-appraisal-gpt" 
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Antique & Collectible Appraisal GPT
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-neon-blue transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-neon-blue transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-neon-blue transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-neon-blue transition-colors">
                  Disclaimer
                </a>
              </li>
              <li className="pt-4">
                <a 
                  href={materialValuationUrl}
                  className="flex items-center text-neon-green hover:text-white bg-cyber-light/50 rounded-md p-2 transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">We also think you may like MATERIAL VALUATION GPT</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href={artVintageUrl}
                  className="flex items-center text-neon-blue hover:text-white bg-cyber-light/50 rounded-md p-2 transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">Check out ART & VINTAGE APPRAISAL GPT</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-cyber text-white text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  className="text-gray-400 hover:text-neon-blue transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <a 
                href="https://www.aiwebtools.ai" 
                className="neon-button neon-button-blue py-2 px-4 text-sm rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>More AI Tools</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-neon-purple/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            <a 
              href="https://www.aiwebtools.ai" 
              className="hover:text-neon-blue transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              © 2025 AI WEB TOOLS LLC
            </a> All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://chatgpt.com/g/g-R3XUdDD0O-antique-and-collectible-appraisal-gpt" 
              className="text-gray-400 hover:text-neon-pink transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Antique & Collectible Appraisal GPT
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              className="text-gray-400 hover:text-neon-blue transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore More AI Tools
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
