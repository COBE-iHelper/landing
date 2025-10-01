import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import logo from "@/assets/ihelp-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center animate-float">
            <img 
              src={logo} 
              alt="iHelp Logo" 
              className="w-32 h-32 md:w-40 md:h-40"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            Master Your Oral Exams with
            <span className="block text-accent mt-2">AI-Powered Practice</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            iHelp is your intelligent exam preparation platform. Practice COBE and Hebrew oral exams 
            with AI-simulated examiners, get instant feedback, and track your progress with advanced analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-base">
              Get Started Free
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-base bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              <Play className="mr-2" />
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span className="text-sm">AI-Powered Feedback</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span className="text-sm">Real-time Analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span className="text-sm">Multi-language Support</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
