import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, Users, FileText } from "lucide-react";

const SavingsCalculator = () => {
  const [students, setStudents] = useState([50]);
  const [exams, setExams] = useState([3]);

  // Calculations
  // Assume: Each exam takes 2 hours to prepare manually
  // AI reduces preparation time by 75% (saving 1.5 hours per exam)
  const hoursPerExam = 2;
  const efficiencyGain = 0.75; // 75% time saved
  const hoursSavedPerExam = hoursPerExam * efficiencyGain;
  const totalHoursSaved = students[0] * exams[0] * hoursSavedPerExam;

  // Cost calculation
  // Assume: Average instructor cost is $50/hour
  const costPerHour = 50;
  const totalMoneySaved = totalHoursSaved * costPerHour;

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            ROI Calculator
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how much time and money your institution can save with iHelp's AI-powered exam preparation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Input Section */}
          <Card className="p-8 shadow-elegant border-border bg-card">
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              Your Institution
            </h3>

            <div className="space-y-8">
              {/* Students Input */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    <label className="text-sm font-medium text-foreground">
                      Number of Students
                    </label>
                  </div>
                  <span className="text-2xl font-bold text-accent">
                    {students[0]}
                  </span>
                </div>
                <Slider
                  value={students}
                  onValueChange={setStudents}
                  min={10}
                  max={500}
                  step={10}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>10</span>
                  <span>500</span>
                </div>
              </div>

              {/* Exams Input */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-accent" />
                    <label className="text-sm font-medium text-foreground">
                      Exams per Student
                    </label>
                  </div>
                  <span className="text-2xl font-bold text-accent">
                    {exams[0]}
                  </span>
                </div>
                <Slider
                  value={exams}
                  onValueChange={setExams}
                  min={1}
                  max={10}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>10</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Results Section */}
          <div className="space-y-6">
            <Card className="p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border-border bg-gradient-to-br from-accent/5 to-accent/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">
                    Time Saved Per Year
                  </p>
                  <p className="text-4xl font-bold text-foreground mb-1">
                    {totalHoursSaved.toLocaleString()}
                  </p>
                  <p className="text-lg text-foreground">hours</p>
                  <p className="text-sm text-muted-foreground mt-3">
                    That's {Math.round(totalHoursSaved / 24)} days of instructor time
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border-border bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">
                    Cost Savings Per Year
                  </p>
                  <p className="text-4xl font-bold text-foreground mb-1">
                    ${totalMoneySaved.toLocaleString()}
                  </p>
                  <p className="text-lg text-foreground">saved</p>
                  <p className="text-sm text-muted-foreground mt-3">
                    Based on ${costPerHour}/hour instructor cost
                  </p>
                </div>
              </div>
            </Card>

            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-xs text-muted-foreground text-center">
                * Calculations based on 2 hours of manual prep per exam and 75% efficiency gain with AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
