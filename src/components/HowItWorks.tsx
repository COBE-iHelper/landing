import { Badge } from "@/components/ui/badge";
import { UserPlus, MessageSquare, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign Up & Select Exam",
    description: "Create your account and choose your exam type - COBE or Hebrew oral exam preparation."
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Practice with AI",
    description: "Engage with our AI examiner, record your responses, and receive instant feedback on your performance."
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Track Your Progress",
    description: "Monitor your improvement with detailed analytics, identify weak areas, and build confidence for exam day."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">How It Works</Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Three Simple Steps to Success
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Start practicing and improving your oral exam skills in minutes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-elegant">
                      <step.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
