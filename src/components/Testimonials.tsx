
import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Emily Chen",
    role: "Antique Collector",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    content: "I inherited a collection of vintage pocket watches but had no idea of their value. This AI tool provided detailed information on each piece, including their makers, approximate age, and current market value. The historical context was fascinating!",
    rating: 5
  },
  {
    name: "Robert Johnson",
    role: "Estate Sale Specialist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "As someone who works with estates regularly, I needed a quick way to estimate values for various items. This tool has become indispensable for preliminary appraisals, giving me confidence when advising clients.",
    rating: 5
  },
  {
    name: "Sarah Williams",
    role: "Rare Coin Enthusiast",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "The coin identification features are impressive! I uploaded photos of some old coins I'd found metal detecting, and not only did it identify them correctly, but it provided condition-specific valuations and historical background.",
    rating: 4
  },
  {
    name: "Michael Thompson",
    role: "Flea Market Vendor",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    content: "I use this tool almost daily to check the potential value of items before purchasing them for resale. It's helped me identify several underpriced treasures and avoid overpriced reproductions.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-neon-purple/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-cyber mb-6">
            What Our <span className="neon-text">Users</span> Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover how collectors, dealers, and enthusiasts are using our AI tool to unlock the value and history of their antiques and collectibles.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Large quote mark */}
          <div className="absolute -top-10 -left-10 opacity-10">
            <Quote className="h-32 w-32 text-neon-pink" />
          </div>
          
          {/* Testimonial cards */}
          <div className="relative h-[400px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-500 glassmorphism p-8 md:p-10 ${
                  index === activeIndex 
                    ? 'opacity-100 z-10 translate-x-0' 
                    : index === (activeIndex + 1) % testimonials.length
                    ? 'opacity-0 z-0 translate-x-full'
                    : 'opacity-0 z-0 -translate-x-full'
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <p className="text-lg text-gray-200 mb-6 italic">"{testimonial.content}"</p>
                  </div>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full border-2 border-neon-purple/30 mr-4"
                    />
                    <div>
                      <h4 className="font-cyber text-white text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-neon-yellow fill-neon-yellow' : 'text-gray-600'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-neon-pink w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
