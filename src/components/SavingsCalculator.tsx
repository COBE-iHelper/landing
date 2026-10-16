import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, Users, HandCoins } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SavingsCalculator = () => {
  const [students, setStudents] = useState([60]);
  const [exams, setExams] = useState([3]);
  const { language, t } = useLanguage();

  // Calculations:
  // Each student 1-on-1 exam takes ~15 mins (0.25 hrs).
  // AI reduces this to ~2 mins review per student (~85% savings).
  const hoursPerExam = 15 / 60;
  const hoursSavedPerExam = hoursPerExam * 0.85;
  const totalHoursSaved = Math.round(students[0] * exams[0] * hoursSavedPerExam);

  // Hourly value in Shekels (~80 ILS/hour)
  const costPerHour = 80;
  const totalMoneySaved = totalHoursSaved * costPerHour;

  return (
    <section id="calculator" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            {t("calc.badge")}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            {t("calc.title")}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            {t("calc.desc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Input Section */}
          <Card className="p-8 shadow-elegant border-border bg-card">
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              {t("calc.institution")}
            </h3>

            <div className="space-y-8">
              {/* Students Input */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-accent" />
                    <label className="text-sm font-medium text-foreground">
                      {t("calc.students")}
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
                  max={400}
                  step={10}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>10 {language === "ar" ? "طلاب" : "students"}</span>
                  <span>200 {language === "ar" ? "طالب" : "students"}</span>
                  <span>400 {language === "ar" ? "طالب" : "students"}</span>
                </div>
              </div>

              {/* Exams per student */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <label className="text-sm font-medium text-foreground">
                      {t("calc.exams")}
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
                  max={6}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 {language === "ar" ? "اختبار" : "exam"}</span>
                  <span>3 {language === "ar" ? "اختبارات" : "exams"}</span>
                  <span>6 {language === "ar" ? "اختبارات" : "exams"}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Results Section */}
          <Card className="p-8 shadow-elegant border-border bg-gradient-to-br from-card to-muted flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-foreground">
                {language === "ar" ? "العائد السنوي المتوقع لمدرستك" : "Projected Annual Return"}
              </h3>

              <div className="space-y-6">
                {/* Hours Saved */}
                <div className="p-6 rounded-2xl bg-background/80 border border-border shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      {t("calc.hoursSaved")}
                    </span>
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-foreground">
                      {totalHoursSaved}
                    </span>
                    <span className="text-sm text-muted-foreground font-semibold">
                      {language === "ar" ? "ساعة تدريس موفرة" : "hours / year"}
                    </span>
                  </div>
                  <p className="text-xs text-emerald-600 font-medium mt-1">
                    {language === "ar"
                      ? "ما يعادل قرابة 4 أسابيع عمل كاملة للمركزين"
                      : "Equivalent to ~4 full work weeks for English faculty"}
                  </p>
                </div>

                {/* Financial Value Saved */}
                <div className="p-6 rounded-2xl bg-background/80 border border-border shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      {t("calc.budgetSaved")}
                    </span>
                    <HandCoins className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-accent">
                      ₪{totalMoneySaved.toLocaleString()}
                    </span>
                    <span className="text-sm text-muted-foreground font-semibold">
                      {t("calc.shekel")}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {language === "ar"
                      ? "محسوبة بتكلفة ساعات تدريس وفحص معتمدة"
                      : "Based on standard departmental instructor evaluation hours"}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border mt-6 text-center">
              <a href="#contact" className="text-sm font-bold text-accent hover:underline">
                {language === "ar" ? "احجز تجربة مخصصة لمدرستك الآن ←" : "Schedule a tailored school consultation →"}
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
