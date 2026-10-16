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
    <section id="teacher-dashboard" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <Badge className="mb-4">{t("dash.badge")}</Badge>
          <h2 className="text-3xl md:text-5xl font-black mb-4">{t("dash.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("dash.desc")}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {cards.map(({ icon: Icon, title }) => (
            <Card key={title} className="p-7 border-border shadow-elegant">
              <Icon className="w-8 h-8 text-accent mb-5" />
              <p className="text-sm leading-relaxed">{title}</p>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg" variant="hero">
            <a href={appLink("/teacher")}>{t("nav.teacherLogin")} <ArrowRight className="w-4 h-4 ms-2" /></a>
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
