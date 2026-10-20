import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, GraduationCap, BookOpen, Languages, ExternalLink } from "lucide-react";
import ihelpLogo from "@/assets/ihelp-logo.png";
import skillupLogo from "@/assets/skillup-logo.png";
import { useLanguage } from "@/context/LanguageContext";
import { cobeLink, amirnetLink, yaelLink } from "@/lib/app-link";

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
          <Card className="glow-card p-8 border-border/80 bg-card shadow-elegant hover:border-accent/50 hover:shadow-glow rounded-3xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/15 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-accent/25 transition-all"></div>

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
          <Card className="glow-card p-8 border-border/80 bg-card shadow-elegant hover:border-primary/50 hover:shadow-glow rounded-3xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/15 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/25 transition-all"></div>

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
                {t("eco.teachers")}
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
            <div className="glow-card p-5 rounded-2xl bg-card border border-border/80 shadow-sm text-center relative hover:border-accent/50 hover:shadow-md transition-all duration-300">
              <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground font-black text-sm flex items-center justify-center mx-auto mb-3 shadow-glow">
                1
              </span>
              <h4 className="font-bold text-foreground text-sm mb-1">
                {t("eco.step1Title")}
              </h4>
              <p className="text-xs text-muted-foreground">
                {t("eco.step1Desc")}
              </p>
            </div>

            <div className="glow-card p-5 rounded-2xl bg-card border border-border/80 shadow-sm text-center relative hover:border-accent/50 hover:shadow-md transition-all duration-300">
              <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground font-black text-sm flex items-center justify-center mx-auto mb-3 shadow-glow">
                2
              </span>
              <h4 className="font-bold text-foreground text-sm mb-1">
                {t("eco.step2Title")}
              </h4>
              <p className="text-xs text-muted-foreground">
                {t("eco.step2Desc")}
              </p>
            </div>

            <div className="glow-card p-5 rounded-2xl bg-card border border-border/80 shadow-sm text-center relative hover:border-accent/50 hover:shadow-md transition-all duration-300">
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-black text-sm flex items-center justify-center mx-auto mb-3 shadow-glow">
                3
              </span>
              <h4 className="font-bold text-foreground text-sm mb-1">
                {t("eco.step3Title")}
              </h4>
              <p className="text-xs text-muted-foreground">
                {t("eco.step3Desc")}
              </p>
            </div>

            <div className="glow-card p-5 rounded-2xl bg-card border border-border/80 shadow-sm text-center relative hover:border-accent/50 hover:shadow-md transition-all duration-300">
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-black text-sm flex items-center justify-center mx-auto mb-3 shadow-glow">
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

        {/* SkillUp Ecosystem Suite Cards (COBE, Eng, Heb) */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/15 text-primary border-primary/30 text-xs px-3 py-1 font-semibold">
              {t("suite.badge")}
            </Badge>
            <h3 className="text-2xl md:text-4xl font-black text-foreground mb-3 tracking-tight">
              {t("suite.title")}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              {t("suite.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. SkillUp COBE (iHelp) */}
            <Card className="glow-card p-6 border-border/80 bg-card rounded-2xl hover:border-accent/60 transition-all flex flex-col justify-between group shadow-sm hover:shadow-glow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent border border-accent/20">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <Badge variant="outline" className="text-[11px] font-semibold border-accent/40 text-accent">
                    cobe.skillup-edu.org
                  </Badge>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                  {t("suite.cobeTitle")}
                </h4>
                <p className="text-xs text-accent font-semibold mb-3">
                  {t("suite.cobeSub")}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  {t("suite.cobeDesc")}
                </p>
              </div>
              <Button asChild size="sm" variant="outline" className="w-full gap-1.5 border-accent/30 hover:bg-accent/10 hover:border-accent text-foreground">
                <a href={cobeLink()} target="_blank" rel="noopener noreferrer">
                  <span>{t("suite.cobeBtn")}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
            </Card>

            {/* 2. SkillUp Eng (AmirNet) */}
            <Card className="glow-card p-6 border-border/80 bg-card rounded-2xl hover:border-primary/60 transition-all flex flex-col justify-between group shadow-sm hover:shadow-glow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary border border-primary/20">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <Badge variant="outline" className="text-[11px] font-semibold border-primary/40 text-primary">
                    amirnet.skillup-edu.org
                  </Badge>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {t("suite.engTitle")}
                </h4>
                <p className="text-xs text-primary font-semibold mb-3">
                  {t("suite.engSub")}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  {t("suite.engDesc")}
                </p>
              </div>
              <Button asChild size="sm" variant="outline" className="w-full gap-1.5 border-primary/30 hover:bg-primary/10 hover:border-primary text-foreground">
                <a href={amirnetLink()} target="_blank" rel="noopener noreferrer">
                  <span>{t("suite.engBtn")}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
            </Card>

            {/* 3. SkillUp Heb (YaelNet) */}
            <Card className="glow-card p-6 border-border/80 bg-card rounded-2xl hover:border-blue-500/60 transition-all flex flex-col justify-between group shadow-sm hover:shadow-glow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-500 border border-blue-500/20">
                    <Languages className="w-5 h-5" />
                  </div>
                  <Badge variant="outline" className="text-[11px] font-semibold border-blue-500/40 text-blue-500">
                    yael.skillup-edu.org
                  </Badge>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-blue-500 transition-colors">
                  {t("suite.hebTitle")}
                </h4>
                <p className="text-xs text-blue-500 font-semibold mb-3">
                  {t("suite.hebSub")}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  {t("suite.hebDesc")}
                </p>
              </div>
              <Button asChild size="sm" variant="outline" className="w-full gap-1.5 border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-500 text-foreground">
                <a href={yaelLink()} target="_blank" rel="noopener noreferrer">
                  <span>{t("suite.hebBtn")}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
