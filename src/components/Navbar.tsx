import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Sparkles, GraduationCap, School, BookOpen, Globe } from "lucide-react";
import ihelpLogo from "@/assets/ihelp-logo.png";
import skillupLogo from "@/assets/skillup-logo.png";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Dual Logos & Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex items-center gap-2 bg-background/60 p-1.5 rounded-xl border border-border/70 shadow-sm backdrop-blur-sm">
            <img
              src={skillupLogo}
              alt="SkillUp Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-muted-foreground font-semibold text-xs px-0.5">✕</span>
            <img
              src={ihelpLogo}
              alt="iHelp Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-foreground text-lg tracking-tight">
                SkillUp
              </span>
              <span className="font-bold text-accent text-lg">iHelp</span>
              <Badge
                variant="outline"
                className="text-[10px] px-1.5 py-0 border-accent/40 text-accent font-medium hidden sm:inline-flex"
              >
                {t("nav.brandSub")}
              </Badge>
            </div>
            <span className="text-[10px] text-muted-foreground hidden md:inline">
              {t("nav.brandDesc")}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a
            href="#features"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            {t("nav.why")}
          </a>
          <a
            href="#curriculum"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-accent" />
            {t("nav.cobe")}
          </a>
          <a
            href="#teacher-dashboard"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            <School className="w-3.5 h-3.5 text-accent" />
            {t("nav.teacherPortal")}
          </a>
          <a
            href="#calculator"
            className="hover:text-foreground transition-colors"
          >
            {t("nav.roi")}
          </a>
          <a
            href="#faq"
            className="hover:text-foreground transition-colors"
          >
            {t("nav.faq")}
          </a>
        </nav>

        {/* Action Buttons & Language Switcher */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Language Switcher Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="border-border text-foreground hover:bg-accent/10 hover:border-accent gap-1.5 px-3 font-semibold text-xs"
            title={language === "en" ? "التبديل إلى العربية" : "Switch to English"}
          >
            <Globe className="w-3.5 h-3.5 text-accent" />
            <span>{t("nav.langSwitch")}</span>
          </Button>

          <a href="#teacher-dashboard">
            <Button
              variant="outline"
              size="sm"
              className="border-border text-foreground hover:bg-accent/10 hover:border-accent"
            >
              <School className="w-4 h-4 mr-1.5 text-accent" />
              {t("nav.teacherLogin")}
            </Button>
          </a>
          <a href="#contact">
            <Button variant="hero" size="sm" className="gap-1.5">
              <GraduationCap className="w-4 h-4" />
              {t("nav.getStarted")}
            </Button>
          </a>
        </div>

        {/* Mobile menu trigger & Lang */}
        <div className="xl:hidden flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="text-xs h-8 px-2 font-bold gap-1 border-accent/40"
          >
            <Globe className="w-3 h-3 text-accent" />
            {language === "en" ? "عربي" : "EN"}
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-accent py-1"
            >
              {t("nav.why")}
            </a>
            <a
              href="#curriculum"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-accent py-1"
            >
              {t("nav.cobe")}
            </a>
            <a
              href="#teacher-dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-accent py-1"
            >
              {t("nav.teacherPortal")}
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-accent py-1"
            >
              {t("nav.roi")}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-accent py-1"
            >
              {t("nav.faq")}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-accent py-1"
            >
              {t("contact.title")}
            </a>
          </div>
          <div className="pt-4 border-t border-border flex flex-col gap-2.5">
            <a href="#teacher-dashboard" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full justify-center">
                <School className="w-4 h-4 mr-2 text-accent" />
                {t("nav.teacherLogin")}
              </Button>
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="hero" className="w-full justify-center">
                <GraduationCap className="w-4 h-4 mr-2" />
                {t("nav.getStarted")}
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
