import { Card } from "@/components/ui/card";
import { Bot, Mic, Layers, Zap, DollarSign } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Exam Simulation",
    description: "Experience realistic exam conditions with our AI that simulates the real exam platform and provides intelligent feedback on your responses.",
    color: "text-accent"
  },
  {
    icon: Mic,
    title: "Instant Analytics",
    description: "Record your practice sessions, replay them, and track your performance with detailed on-submittion analytics and progress metrics.",
    color: "text-accent"
  },
  {
    icon: DollarSign,
    title: "Saving time & Money",
    description: "Instructors/teachers save hours of prep time per exam, reducing costs and allowing focus on personalized student support.",
    color: "text-accent"
  },
  {
    icon: Zap,
    title: "Fast & Easy Setup",
    description: "Get started in minutes, and get blazingly fast application performance with our optimized platform.",
    color: "text-accent"
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 gradient-feature">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive tools and features designed to help you ace your oral exams with confidence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <div className="mb-4">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
