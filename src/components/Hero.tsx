import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import logo from "@/assets/ihelp-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Organic background shapes */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary-light/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
              Master Your Oral Exams with
              <span className="block text-accent mt-2">AI-Powered Practice</span>
            </h1>
            <img 
              src={logo} 
              alt="iHelp Logo" 
              className="w-24 h-24 md:w-32 md:h-32 animate-float"
            />
          </div>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            iHelp is your intelligent exam preparation platform. Practice COBE and Hebrew oral exams 
            with AI-simulated examiners, get instant feedback, and track your progress with advanced analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-base">
              Get Started
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-base bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              <Play className="mr-2" />
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 transition-all hover:bg-primary-foreground/15 hover:scale-105">
              <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></div>
              <span className="text-sm font-medium text-primary-foreground">AI-Powered Feedback</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 transition-all hover:bg-primary-foreground/15 hover:scale-105">
              <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></div>
              <span className="text-sm font-medium text-primary-foreground">Real-time Analytics</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 transition-all hover:bg-primary-foreground/15 hover:scale-105">
              <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></div>
              <span className="text-sm font-medium text-primary-foreground">Accessible</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
