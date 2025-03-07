
import { UploadCloud, Search, Clock, FileText } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UploadCloud className="h-12 w-12 text-neon-pink" />,
      title: "Upload Your Item",
      description: "Take clear photos of your antique or collectible and upload them to our AI tool."
    },
    {
      icon: <Search className="h-12 w-12 text-neon-blue" />,
      title: "AI Analysis",
      description: "Our AI identifies the item, researches similar pieces, and analyzes condition and authenticity markers."
    },
    {
      icon: <Clock className="h-12 w-12 text-neon-purple" />,
      title: "Detailed Research",
      description: "The system gathers historical information, sales data, and market trends specific to your item."
    },
    {
      icon: <FileText className="h-12 w-12 text-neon-green" />,
      title: "Comprehensive Appraisal",
      description: "Receive a detailed report with valuation range, historical context, and collectibility factors."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden bg-cyber-darker">
      {/* 3D effect background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20" style={{ backgroundSize: '30px 30px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-cyber mb-6">
            How It <span className="neon-text">Works</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Getting an expert appraisal for your antiques and collectibles is simple with our AI-powered tool. Here's the process:
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-purple transform -translate-y-1/2 opacity-30"></div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center z-10">
                <div className="bg-cyber-mid p-6 rounded-full mb-6 relative shadow-[0_0_20px_rgba(176,38,255,0.3)]">
                  <div className="absolute inset-0 rounded-full bg-neon-gradient animate-spin-slow opacity-20"></div>
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-cyber-dark rounded-full border border-neon-pink flex items-center justify-center font-cyber text-neon-pink text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-cyber mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://chatgpt.com/g/g-R3XUdDD0O-antique-and-collectible-appraisal-gpt" 
            className="neon-button neon-button-pink inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>START YOUR APPRAISAL NOW</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
