
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';
import DisclaimerPopup from '@/components/DisclaimerPopup';
import { toast } from '@/hooks/use-toast';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to Antique & Collectible Appraisal GPT",
        description: "Discover the history and value of your treasured items.",
        duration: 5000,
      });
    }, 1500);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <DisclaimerPopup />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
