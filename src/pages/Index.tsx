import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import TeacherDashboardPreview from "@/components/TeacherDashboardPreview";
import ExamCatalog from "@/components/ExamCatalog";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import SavingsCalculator from "@/components/SavingsCalculator";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Ecosystem />
      <TeacherDashboardPreview />
      <ExamCatalog />
      <Features />
      <HowItWorks />
      <SavingsCalculator />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
