import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ihelpLogo from "@/assets/ihelp-logo.png";
import skillupLogo from "@/assets/skillup-logo.png";
import { useLanguage } from "@/context/LanguageContext";

const Ecosystem = () => {
  const { t } = useLanguage();

  return (
    <section id="ecosystem" className="py-24 px-4 bg-muted/40 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/15 text-accent border-accent/30 text-xs px-3 py-1 font-semibold">
            {t("eco.badge")}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            {t("eco.title")}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {t("eco.desc")}
          </p>
        </div>

        {/* 2-Pillar Grid: Student AI vs Teacher Portal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Pillar 1: Student Spoken AI Experience */}
          <Card className="p-8 border-border/80 bg-card shadow-elegant hover:border-accent/40 transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-accent/20 transition-all"></div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center p-1.5 border border-accent/20">
                    <img
                      src={ihelpLogo}
                      alt="iHelp"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-foreground">
                      {t("eco.studentTitle")}
                    </h3>
                    <p className="text-xs text-accent font-semibold tracking-wide">
                      {t("eco.studentTag")}
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="font-semibold text-xs">
                  {t("eco.grades")}
                </Badge>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {t("eco.studentDesc")}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{t("eco.s1")}</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{t("eco.s2")}</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{t("eco.s3")}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                Format: 4 & 5 Points Spoken Bagrut
              </span>
              <a href="#curriculum" className="text-xs font-bold text-accent flex items-center gap-1 hover:underline">
                {t("eco.viewFormat")} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Card>

          {/* Pillar 2: Teacher & School Management Hub */}
          <Card className="p-8 border-border/80 bg-card shadow-elegant hover:border-primary/40 transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-all"></div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center p-1.5 border border-primary/20">
                    <img
                      src={skillupLogo}
                      alt="SkillUp"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-foreground">
                      {t("eco.teacherTitle")}
                    </h3>
                    <p className="text-xs text-primary font-semibold tracking-wide">
                      {t("eco.teacherTag")}
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="font-semibold text-xs">
                  {t("eco.teachers")}
                </Badge>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {t("eco.teacherDesc")}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{t("eco.t1")}</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{t("eco.t2")}</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{t("eco.t3")}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                Efficiency: 85% Teacher Time Saved
              </span>
              <a href="#teacher-dashboard" className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                {t("eco.viewPortal")} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Card>
        </div>

        {/* The 4-Stage Oral Bagrut Workflow */}
        <div className="bg-card rounded-2xl p-8 border border-border shadow-elegant">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              {t("eco.cycleTitle")}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {t("eco.cycleSub")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="p-4 rounded-xl bg-muted/60 border border-border/60 text-center relative">
              <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground font-black text-sm flex items-center justify-center mx-auto mb-3">
                1
              </span>
              <h4 className="font-bold text-foreground text-sm mb-1">
                {t("eco.step1Title")}
              </h4>
              <p className="text-xs text-muted-foreground">
                {t("eco.step1Desc")}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/60 border border-border/60 text-center relative">
              <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground font-black text-sm flex items-center justify-center mx-auto mb-3">
                2
              </span>
              <h4 className="font-bold text-foreground text-sm mb-1">
                {t("eco.step2Title")}
              </h4>
              <p className="text-xs text-muted-foreground">
                {t("eco.step2Desc")}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/60 border border-border/60 text-center relative">
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-black text-sm flex items-center justify-center mx-auto mb-3">
                3
              </span>
              <h4 className="font-bold text-foreground text-sm mb-1">
                {t("eco.step3Title")}
              </h4>
              <p className="text-xs text-muted-foreground">
                {t("eco.step3Desc")}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-muted/60 border border-border/60 text-center relative">
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-black text-sm flex items-center justify-center mx-auto mb-3">
                4
              </span>
              <h4 className="font-bold text-foreground text-sm mb-1">
                {t("eco.step4Title")}
              </h4>
              <p className="text-xs text-muted-foreground">
                {t("eco.step4Desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
