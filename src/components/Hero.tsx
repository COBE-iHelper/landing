import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Play,
  Sparkles,
  School,
  Mic,
  Award,
  BookOpen,
  CheckCircle2,
  KeyRound,
  Check,
} from "lucide-react";
import ihelpLogo from "@/assets/ihelp-logo.png";
import skillupLogo from "@/assets/skillup-logo.png";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const [classCode, setClassCode] = useState("");
  const [joinedMessage, setJoinedMessage] = useState(false);
  const { t } = useLanguage();

  const handleJoinClass = (e: React.FormEvent) => {
    e.preventDefault();
    if (classCode.trim()) {
      setJoinedMessage(true);
      setTimeout(() => {
        const targetElement = document.getElementById("teacher-dashboard");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 1200);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-28 pb-16">
      {/* Organic background shapes */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary-light/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Ecosystem announcement pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-md mb-8 hover:bg-primary-foreground/15 transition-all">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs sm:text-sm font-semibold text-primary-foreground">
              {t("hero.announcement")}
            </span>
            <span className="text-primary-foreground/60 text-xs hidden sm:inline">•</span>
            <span className="text-primary-foreground/80 text-xs hidden sm:inline">
              {t("hero.standard")}
            </span>
          </div>

          {/* Dual Logos Showcase Card */}
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center gap-3 sm:gap-6 px-6 py-3.5 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/25 backdrop-blur-xl shadow-elegant">
              {/* SkillUp Logo */}
              <div className="flex items-center gap-2.5">
                <div className="bg-background/90 p-2 rounded-xl shadow-sm">
                  <img
                    src={skillupLogo}
                    alt="SkillUp Platform"
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </div>
                <div className="text-left hidden xs:block">
                  <p className="text-xs font-semibold text-primary-foreground">SkillUp</p>
                  <p className="text-[10px] text-accent font-medium">{t("hero.badgeSkillUp")}</p>
                </div>
              </div>

              {/* Connecting badge */}
              <div className="flex flex-col items-center px-1">
                <span className="w-7 h-7 rounded-full bg-accent text-accent-foreground font-black text-xs flex items-center justify-center shadow-glow">
                  ✕
                </span>
              </div>

              {/* iHelp Logo */}
              <div className="flex items-center gap-2.5">
                <div className="bg-background/90 p-2 rounded-xl shadow-sm">
                  <img
                    src={ihelpLogo}
                    alt="iHelp Platform"
                    className="h-10 sm:h-12 w-auto object-contain animate-float"
                  />
                </div>
                <div className="text-left hidden xs:block">
                  <p className="text-xs font-semibold text-primary-foreground">iHelp</p>
                  <p className="text-[10px] text-accent font-medium">{t("hero.badgeIHelp")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-primary-foreground tracking-tight mb-6">
            {t("hero.title1")}
            <span className="block text-accent mt-2 bg-gradient-to-r from-accent to-sky-300 bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          {/* Student Class Code Quick Join Box */}
          <div className="max-w-md mx-auto mb-8">
            <form
              onSubmit={handleJoinClass}
              className="p-1.5 rounded-2xl bg-primary-foreground/15 border border-primary-foreground/25 backdrop-blur-xl flex items-center gap-2 shadow-lg"
            >
              <div className="pl-3 text-primary-foreground/70">
                <KeyRound className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={classCode}
                onChange={(e) => setClassCode(e.target.value.toUpperCase())}
                placeholder={t("hero.codePlaceholder")}
                className="bg-transparent border-none text-primary-foreground placeholder:text-primary-foreground/60 text-xs sm:text-sm px-2 py-2 w-full focus:outline-none font-mono uppercase tracking-wider font-semibold"
              />
              <Button
                type="submit"
                variant="hero"
                size="sm"
                className="whitespace-nowrap text-xs font-bold px-4 py-2"
              >
                {joinedMessage ? (
                  <span className="flex items-center gap-1 text-emerald-950">
                    <Check className="w-3.5 h-3.5" /> {t("hero.joined")}
                  </span>
                ) : (
                  t("hero.joinBtn")
                )}
              </Button>
            </form>

            {joinedMessage && (
              <p className="text-xs text-accent mt-2 animate-in fade-in font-medium flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> {t("hero.joinedMessage")}
              </p>
            )}
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#curriculum">
              <Button variant="hero" size="lg" className="text-base px-8 py-6 w-full sm:w-auto">
                <BookOpen className="mr-2 h-5 w-5" />
                {t("hero.exploreFormats")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>

            <a href="#teacher-dashboard">
              <Button
                variant="outline"
                size="lg"
                className="text-base px-6 py-6 w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/25 hover:text-white"
              >
                <School className="mr-2 h-5 w-5 text-accent" />
                {t("hero.teacherDashboard")}
              </Button>
            </a>

            <Button
              variant="outline"
              size="lg"
              className="text-base px-6 py-6 w-full sm:w-auto bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/15"
              asChild
            >
              <a
                href="https://youtu.be/0UaTPcr7cRc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="mr-2 h-4 w-4 fill-current text-accent" />
                {t("hero.watchDemo")}
              </a>
            </Button>
          </div>

          {/* Real Bagrut Statistics & Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 hover:border-accent/50 transition-all">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-2xl font-black text-primary-foreground">{t("hero.stat1Val")}</span>
              </div>
              <p className="text-xs text-primary-foreground/80 font-medium">
                {t("hero.stat1Lbl")}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 hover:border-accent/50 transition-all">
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="w-5 h-5 text-accent" />
                <span className="text-2xl font-black text-primary-foreground">{t("hero.stat2Val")}</span>
              </div>
              <p className="text-xs text-primary-foreground/80 font-medium">
                {t("hero.stat2Lbl")}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 hover:border-accent/50 transition-all">
              <div className="flex items-center gap-2 mb-1">
                <School className="w-5 h-5 text-accent" />
                <span className="text-2xl font-black text-primary-foreground">{t("hero.stat3Val")}</span>
              </div>
              <p className="text-xs text-primary-foreground/80 font-medium">
                {t("hero.stat3Lbl")}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 hover:border-accent/50 transition-all">
              <div className="flex items-center gap-2 mb-1">
                <Mic className="w-5 h-5 text-accent" />
                <span className="text-2xl font-black text-primary-foreground">{t("hero.stat4Val")}</span>
              </div>
              <p className="text-xs text-primary-foreground/80 font-medium">
                {t("hero.stat4Lbl")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
