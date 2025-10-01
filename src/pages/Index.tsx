import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SavingsCalculator from "@/components/SavingsCalculator";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
	// {{ <CTA /> }} 
 
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <SavingsCalculator />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
