
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = spotlightRef.current.getBoundingClientRect();
      
      const x = clientX - left;
      const y = clientY - top;
      
      spotlightRef.current.style.setProperty('--x', `${x}px`);
      spotlightRef.current.style.setProperty('--y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toolsUrl = "https://chatgpt.com/g/g-R3XUdDD0O-antique-and-collectible-appraisal-gpt";
  const materialValuationUrl = "https://materialvaluationgpt.lovable.app/";
  const artVintageUrl = "https://artandvintagegpt.lovable.app/?via=aiwebtools";

  return (
    <>
      <section 
        className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(176, 38, 255, 0.1) 0%, rgba(7, 7, 15, 0) 70%)' }}
      >
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-cyber-grid opacity-20" style={{ backgroundSize: '40px 40px' }}></div>

        {/* Spotlight Effect */}
        <div 
          ref={spotlightRef}
          className="absolute inset-0 pointer-events-none" 
          style={{
            background: 'radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(255, 0, 255, 0.15), transparent 40%)',
          }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute top-1/3 left-10 h-32 w-32 rounded-full bg-neon-purple/20 blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/4 right-10 h-40 w-40 rounded-full bg-neon-blue/20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/4 h-24 w-24 rounded-full bg-neon-pink/20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-cyber leading-tight">
                <span className="neon-yellow-text">Discover</span> the <span className="neon-text">Value</span> of Your Antiques & Collectibles
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg">
                Our AI-powered appraisal tool offers detailed valuations, historical insights, and fascinating stories about your treasured items.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={toolsUrl} 
                  className="neon-button neon-button-pink group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">START YOUR APPRAISAL</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a 
                  href="#how-it-works" 
                  className="neon-button neon-button-blue"
                >
                  <span>LEARN MORE</span>
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                {/* Main image with connected URL */}
                <a 
                  href={toolsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="cyber-panel w-full max-w-md aspect-square md:aspect-auto md:h-[500px] overflow-hidden rounded-lg relative animate-float">
                    <img 
                      src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/an-advertisement-for-an-antique-and-collectibl.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true" 
                      alt="Antique and Collectible Appraisal" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                      <span className="text-xs text-neon-blue font-cyber tracking-widest animate-pulse">CLICK TO EXPLORE</span>
                    </div>
                  </div>
                </a>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 h-24 w-24 border border-neon-purple/30 rounded-lg rotate-12 animate-pulse-glow"></div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 border border-neon-blue/30 rounded-lg -rotate-12 animate-pulse-glow"></div>
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 h-16 w-2 bg-neon-pink/50 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 h-16 w-2 bg-neon-blue/50 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related GPTs Section */}
      <section className="py-12 bg-cyber-mid/30 relative overflow-hidden">
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-cyber-grid opacity-10" style={{ backgroundSize: '30px 30px' }}></div>
        
        {/* Glowing accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-neon-green/30 blur-sm"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-neon-green/30 blur-sm"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-cyber mb-4">
              <span className="text-shimmer">Related AI Appraisal Tools</span>
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Explore our suite of specialized AI appraisal tools for different types of items
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Material Valuation GPT */}
            <div className="bg-cyber-light/10 backdrop-blur-sm rounded-lg p-6 border border-neon-green/20 hover:border-neon-green/40 transition-all">
              <h3 className="text-xl font-cyber mb-3 text-neon-green">Material Valuation GPT</h3>
              <p className="text-gray-300 mb-6">
                Assess the value of raw materials, gemstones, precious metals, and more with our specialized AI valuation tool.
              </p>
              <a 
                href={materialValuationUrl} 
                className="neon-button neon-button-green inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2">TRY IT HERE</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            
            {/* Art & Vintage Appraisal GPT */}
            <div className="bg-cyber-light/10 backdrop-blur-sm rounded-lg p-6 border border-neon-blue/20 hover:border-neon-blue/40 transition-all">
              <h3 className="text-xl font-cyber mb-3 text-neon-blue">Art & Vintage Appraisal GPT</h3>
              <p className="text-gray-300 mb-6">
                Get expert valuations and historical insights for your art pieces, vintage items, and rare collectibles.
              </p>
              <a 
                href={artVintageUrl} 
                className="neon-button neon-button-blue inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2">TRY IT HERE</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
