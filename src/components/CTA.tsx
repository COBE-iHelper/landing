import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Unlimited practice sessions",
  "AI-powered feedback",
  "Detailed performance analytics",
  "Multi-language support"
];

const CTA = () => {
 {{
    <section className="py-20 px-4 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Ace Your Oral Exam?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Join students who are already using iHelp to prepare smarter and perform better
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-base">
              Start Practicing Now
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
            >
              Contact Sales
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-primary-foreground/70">
            No credit card required • Free trial available
          </p>
        </div>
      </div>
    </section> }}

  return (<></>
  );
};

export default CTA;
