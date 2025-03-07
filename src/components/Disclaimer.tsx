
import { AlertCircle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-cyber mb-6">
            Legal <span className="neon-text">Disclaimer</span>
          </h2>
        </div>

        <div className="glassmorphism p-8 max-w-4xl mx-auto">
          <div className="flex items-start mb-6">
            <AlertCircle className="h-6 w-6 text-neon-pink flex-shrink-0 mt-1 mr-3" />
            <p className="text-gray-300 text-sm">
              Please read this disclaimer carefully before using our Antique and Collectible Appraisal GPT service.
            </p>
          </div>

          <div className="space-y-6 text-gray-300 text-sm">
            <div>
              <h3 className="font-cyber text-white text-lg mb-2">Appraisal Accuracy</h3>
              <p>
                The Antique and Collectible Appraisal GPT provides estimated valuations and information based on available data and AI analysis. These appraisals should be considered opinions and estimates only, not definitive or legally binding valuations. For items of significant value or for insurance, legal, or tax purposes, we strongly recommend consulting with a certified professional appraiser who can physically examine your items.
              </p>
            </div>

            <div>
              <h3 className="font-cyber text-white text-lg mb-2">Information Purposes Only</h3>
              <p>
                All information, content, materials, and services provided through our service are intended for informational and educational purposes only. We do not guarantee the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk.
              </p>
            </div>

            <div>
              <h3 className="font-cyber text-white text-lg mb-2">No Authentication Guarantee</h3>
              <p>
                While our AI attempts to identify authentic items and potential reproductions, it cannot provide definitive authentication services. Authentication of valuable items typically requires physical examination by qualified experts. We do not guarantee the authenticity of any item based on our AI analysis.
              </p>
            </div>

            <div>
              <h3 className="font-cyber text-white text-lg mb-2">No Investment Advice</h3>
              <p>
                Information provided by our service should not be considered investment advice. The antiques and collectibles market can be volatile and unpredictable. Any purchasing, selling, or collecting decisions you make based on our appraisals are entirely your responsibility.
              </p>
            </div>

            <div>
              <h3 className="font-cyber text-white text-lg mb-2">Limitation of Liability</h3>
              <p>
                AI Web Tools LLC and its affiliates, partners, and service providers shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use of, or inability to use, our service. This includes any losses, damages, or claims arising from inaccurate appraisals, reliance on information provided, or decisions made based on our service.
              </p>
            </div>

            <div>
              <h3 className="font-cyber text-white text-lg mb-2">Service Availability</h3>
              <p>
                We do not guarantee that our service will be available, uninterrupted, timely, secure, or error-free. We reserve the right to modify, suspend, or discontinue any aspect of our service at any time without prior notice.
              </p>
            </div>

            <div>
              <h3 className="font-cyber text-white text-lg mb-2">User Responsibility</h3>
              <p>
                By using our service, you acknowledge that you do so at your own discretion and risk. You are solely responsible for any decisions you make based on the information provided by our service.
              </p>
            </div>

            <div>
              <h3 className="font-cyber text-white text-lg mb-2">Governing Law</h3>
              <p>
                This disclaimer and your use of our service shall be governed by and construed in accordance with the laws of the United States, without giving effect to any principles of conflicts of law.
              </p>
            </div>

            <div className="border-t border-neon-purple/20 pt-4">
              <p className="font-bold text-white">
                By using the Antique and Collectible Appraisal GPT, you acknowledge that you have read, understood, and agree to this disclaimer.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              className="text-neon-blue hover:underline font-cyber text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a 
              href="https://aiwebtools.ai/terms-of-services" 
              className="text-neon-blue hover:underline font-cyber text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
