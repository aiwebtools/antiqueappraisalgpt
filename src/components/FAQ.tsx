
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How accurate are the appraisals provided by the AI?",
      answer: "Our AI provides estimates based on extensive data from auction results, market trends, and expert valuations. While these appraisals offer a good indication of an item's value, they should be considered estimates. For items of significant value or for insurance purposes, we recommend following up with a certified human appraiser."
    },
    {
      question: "What types of items can the AI appraise?",
      answer: "The AI specializes in a wide range of antiques and collectibles including furniture, jewelry, coins, stamps, artwork, porcelain, watches, toys, memorabilia, and more. It's particularly strong with antique coins, offering detailed information about mint marks, condition grading, and historical significance."
    },
    {
      question: "How do I get the best appraisal results?",
      answer: "For optimal results, upload clear, well-lit photos of your item from multiple angles. Include close-ups of any signatures, marks, stamps, or detailed areas. Provide information about the item's size, weight, condition, and any known history. The more information you provide, the more accurate the appraisal will be."
    },
    {
      question: "Can the AI tell if my item is authentic or a reproduction?",
      answer: "The AI can identify many common signs of authenticity or reproduction based on visible features, known patterns, and manufacturing techniques. However, definitive authentication of high-value items might require physical examination by a specialist, especially for items where sophisticated counterfeits exist."
    },
    {
      question: "How often is the database updated with current market values?",
      answer: "Our database is regularly updated to reflect current market trends, recent auction results, and shifts in collector interest. This ensures that the valuations provided are based on the most current available data about the antiques and collectibles market."
    },
    {
      question: "Is my data and information about my items kept private?",
      answer: "Yes, we take privacy seriously. The images and information you share about your items are processed securely and not shared publicly. Please refer to our Privacy Policy for complete details on how we handle and protect your data."
    }
  ];

  const toggleQuestion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden bg-cyber-mid/20">
      {/* Background effects */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-cyber mb-6">
            Frequently Asked <span className="neon-text">Questions</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions about our antique and collectible appraisal service? Find answers to common queries below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 glassmorphism overflow-hidden transition-all duration-300 hover:border-neon-blue/30"
            >
              <button
                className="w-full p-5 text-left flex items-center justify-between font-cyber text-white"
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-neon-pink flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-neon-blue flex-shrink-0" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 border-t border-neon-purple/20 text-gray-300">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
