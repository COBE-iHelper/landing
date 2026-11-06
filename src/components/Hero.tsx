import { Link } from "react-router-dom";
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
  Volume2,
} from "lucide-react";
import ihelpLogo from "@/assets/ihelp-logo.png";
import skillupLogo from "@/assets/skillup-logo.png";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-28 pb-16">
      {/* Animated organic background glow shapes */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/25 rounded-full blur-3xl pointer-events-none animate-float-slow"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none animate-float-reverse"></div>
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-2xl pointer-events-none animate-pulse-glow"></div>

      {/* Grid Pattern Effect Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Ecosystem announcement pill with shimmer effect */}
          <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-md mb-8 hover:bg-primary-foreground/15 hover:border-accent/40 transition-all shadow-sm hover:shadow-glow group cursor-default overflow-hidden">
            {/* Shimmer light sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>

            <span className="flex h-2 w-2 rounded-full bg-accent animate-ping"></span>
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-primary-foreground">
              {t("hero.announcement")}
            </span>
            <span className="text-primary-foreground/60 text-xs hidden sm:inline">•</span>
            <span className="text-primary-foreground/80 text-xs hidden sm:inline">
              {t("hero.standard")}
            </span>
          </div>

          {/* Dual Logos Showcase Card with glowing border and audio visualizer effect */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative inline-flex items-center gap-3 sm:gap-6 px-6 py-3.5 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/25 backdrop-blur-xl shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-[1.02]">
              {/* SkillUp Logo */}
              <div className="flex items-center gap-2.5">
                <div className="bg-background/90 p-2 rounded-xl shadow-sm hover:rotate-[-2deg] transition-transform">
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

              {/* Connecting badge with pulsing glow */}
              <div className="flex flex-col items-center px-1">
                <span className="w-7 h-7 rounded-full bg-accent text-accent-foreground font-black text-xs flex items-center justify-center shadow-glow animate-pulse">
                  ✕
                </span>
              </div>

              {/* iHelp Logo */}
              <div className="flex items-center gap-2.5">
                <div className="bg-background/90 p-2 rounded-xl shadow-sm hover:rotate-[2deg] transition-transform">
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

              {/* Ambient Voice Activity Equalizer Effect */}
              <div className="hidden md:flex items-center gap-1 ps-3 border-s border-primary-foreground/15 h-8">
                <Volume2 className="w-3.5 h-3.5 text-accent me-1 animate-pulse" />
                <span className="w-1 rounded-full bg-accent animate-soundwave-1"></span>
                <span className="w-1 rounded-full bg-sky-300 animate-soundwave-2"></span>
                <span className="w-1 rounded-full bg-accent animate-soundwave-3"></span>
                <span className="w-1 rounded-full bg-sky-300 animate-soundwave-4"></span>
                <span className="w-1 rounded-full bg-accent animate-soundwave-5"></span>
              </div>
            </div>
          </div>

          {/* Main Title with glowing gradient text */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-primary-foreground tracking-tight mb-6">
            {t("hero.title1")}
            <span className="block text-accent mt-2 bg-gradient-to-r from-accent via-sky-300 to-accent bg-clip-text text-transparent animate-shimmer">
              {t("hero.title2")}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="max-w-md mx-auto mb-8 text-center">
            <Link to="/login?role=student">
              <Button variant="hero" size="lg" className="w-full gap-2 text-base py-6 shadow-glow hover:shadow-[0_0_50px_rgba(37,99,235,0.4)] transition-all hover:scale-105">
                <Mic className="w-5 h-5 text-accent-foreground animate-pulse" /> {t("hero.practice")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <p className="text-sm text-primary-foreground/75 mt-3">{t("hero.allowance")}</p>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#curriculum">
              <Button variant="hero" size="lg" className="text-base px-8 py-6 w-full sm:w-auto hover:shadow-glow transition-all">
                <BookOpen className="mr-2 h-5 w-5" />
                {t("hero.exploreFormats")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>

            <Link to="/login?role=teacher">
              <Button
                variant="outline"
                size="lg"
                className="text-base px-6 py-6 w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/25 hover:border-accent hover:text-white transition-all hover:-translate-y-0.5"
              >
                <School className="mr-2 h-5 w-5 text-accent" />
                {t("hero.teacherDashboard")}
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              className="text-base px-6 py-6 w-full sm:w-auto bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/15 hover:border-primary-foreground/40 transition-all hover:-translate-y-0.5"
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

          {/* Real Bagrut Statistics & Highlights with glow-card hover effect */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
            <div className="glow-card p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 hover:border-accent/60">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-5 h-5 text-accent animate-pulse" />
                <span className="text-2xl font-black text-primary-foreground">{t("hero.stat1Val")}</span>
              </div>
              <p className="text-xs text-primary-foreground/80 font-medium">
                {t("hero.stat1Lbl")}
              </p>
            </div>

            <div className="glow-card p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 hover:border-accent/60">
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="w-5 h-5 text-accent" />
                <span className="text-2xl font-black text-primary-foreground">{t("hero.stat2Val")}</span>
              </div>
              <p className="text-xs text-primary-foreground/80 font-medium">
                {t("hero.stat2Lbl")}
              </p>
            </div>

            <div className="glow-card p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 hover:border-accent/60">
              <div className="flex items-center gap-2 mb-1">
                <School className="w-5 h-5 text-accent" />
                <span className="text-2xl font-black text-primary-foreground">{t("hero.stat3Val")}</span>
              </div>
              <p className="text-xs text-primary-foreground/80 font-medium">
                {t("hero.stat3Lbl")}
              </p>
            </div>

            <div className="glow-card p-4 rounded-xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 hover:border-accent/60">
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
