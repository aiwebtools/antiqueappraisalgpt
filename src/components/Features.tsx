
import { Sparkles, Image, Database, History, DollarSign, BadgeCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Image className="h-10 w-10 text-neon-blue" />,
      title: "Image Analysis",
      description: "Upload images of your items for detailed visual analysis and accurate identification."
    },
    {
      icon: <Database className="h-10 w-10 text-neon-pink" />,
      title: "Comprehensive Database",
      description: "Access information on thousands of antiques, collectibles, and coins from various eras and regions."
    },
    {
      icon: <History className="h-10 w-10 text-neon-purple" />,
      title: "Historical Context",
      description: "Learn fascinating stories and historical context behind your treasured items."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-neon-green" />,
      title: "Value Estimation",
      description: "Get detailed price estimates including best-case, average, and minimum valuations."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-neon-yellow" />,
      title: "Rarity Assessment",
      description: "Understand how unique your item is and what factors affect its collectibility."
    },
    {
      icon: <BadgeCheck className="h-10 w-10 text-neon-blue" />,
      title: "Authentication Insights",
      description: "Receive guidance on authenticity markers and potential red flags to watch for."
    }
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-cyber mb-6">
            <span className="neon-text">Advanced</span> Appraisal <span className="neon-yellow-text">Features</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our AI tool combines cutting-edge technology with extensive knowledge of antiques and collectibles to provide you with accurate, detailed appraisals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glassmorphism p-6 transition-all duration-300 hover:border-neon-purple/30 hover:shadow-[0_0_15px_rgba(176,38,255,0.3)] group"
            >
              <div className="bg-cyber-mid bg-opacity-50 p-3 rounded-lg inline-block mb-4 transition-all duration-300 group-hover:bg-neon-purple/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-cyber mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
