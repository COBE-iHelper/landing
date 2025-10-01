import { Card } from "@/components/ui/card";
import { Bot, Mic, Layers, Zap } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Exam Proxy",
    description: "Experience realistic exam conditions with our AI that simulates examiners and provides intelligent feedback on your responses.",
    color: "text-accent"
  },
  {
    icon: Mic,
    title: "Recording & Analytics",
    description: "Record your practice sessions, replay them, and track your performance with detailed analytics and progress metrics.",
    color: "text-accent"
  },
  {
    icon: Layers,
    title: "Full-Stack Architecture",
    description: "Built on robust Express.js and Fastify backends with a responsive frontend using Vanilla JS and HTMX for seamless interactions.",
    color: "text-accent"
  },
  {
    icon: Zap,
    title: "Scalable & Extensible",
    description: "Modular design allows easy integration with additional exam types and languages, growing with your needs.",
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
