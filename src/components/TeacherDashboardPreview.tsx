import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Headphones, TrendingUp, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { appLink } from "@/lib/app-link";

const TeacherDashboardPreview = () => {
  const { t, language } = useLanguage();
  const cards = [
    { icon: Users, title: t("eco.t1") },
    { icon: Headphones, title: t("eco.t2") },
    { icon: TrendingUp, title: t("eco.t3") },
  ];

  return (
    <section id="teacher-dashboard" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Ambient background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-accent/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent/15 text-accent border border-accent/30 text-xs px-3 py-1 font-semibold">
            {t("dash.badge")}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight text-foreground">
            {t("dash.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {t("dash.desc")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {cards.map(({ icon: Icon, title }) => (
            <Card
              key={title}
              className="glow-card p-7 border-border/80 bg-card shadow-elegant hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300 shadow-sm">
                <Icon className="w-7 h-7" />
              </div>
              <p className="text-sm leading-relaxed text-foreground/90 font-medium">{title}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="hero" className="shadow-glow hover:shadow-[0_0_50px_rgba(37,99,235,0.35)] transition-all hover:scale-105">
            <a href={appLink("/teacher")}>
              {t("nav.teacherLogin")} <ArrowRight className="w-4 h-4 ms-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            {language === "ar" ? "يتطلب حساب معلم مدعو من مدرسة مشتركة." : "Requires an invited teacher account at a subscribed school."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeacherDashboardPreview;
