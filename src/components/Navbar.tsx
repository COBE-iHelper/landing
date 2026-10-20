import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  Sparkles,
  GraduationCap,
  School,
  BookOpen,
  Globe,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import ihelpLogo from "@/assets/ihelp-logo.png";
import skillupLogo from "@/assets/skillup-logo.png";
import { useLanguage, type Language } from "@/context/LanguageContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const { language, setLanguage, t, dir } = useLanguage();
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close language dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (langDropdownRef.current && !langDropdownRef.current.contains(target)) {
        setLangDropdownOpen(false);
      }
      if (mobileLangRef.current && !mobileLangRef.current.contains(target)) {
        setMobileLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
    { code: "he", label: "עברית" },
  ];

  const currentLangLabel =
    languages.find((l) => l.code === language)?.label || "English";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-xl border-b border-slate-200/90 dark:border-slate-800/90 shadow-sm py-2.5"
          : "bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-4">
        {/* Brand Logo & Name (never compressed / never truncated in RTL) */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-fit">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white dark:bg-[#131b2e] p-1.5 px-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs group-hover:border-blue-500/40 transition-all shrink-0">
            <img
              src={skillupLogo}
              alt="SkillUp Logo"
              className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
            />
            <span className="text-slate-300 dark:text-slate-600 font-bold text-xs shrink-0">✕</span>
            <img
              src={ihelpLogo}
              alt="iHelp Logo"
              className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
            />
          </div>
          <div className="flex flex-col shrink-0 text-left rtl:text-right">
            <div className="flex items-center gap-1.5 shrink-0 whitespace-nowrap">
              <span className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg tracking-tight">
                Skill<span className="text-blue-600 dark:text-blue-400">Up</span>
              </span>
              <span className="font-bold text-blue-600 dark:text-blue-400 text-base sm:text-lg">iHelp</span>
              <Badge
                variant="outline"
                className="text-[10px] px-1.5 py-0 border-blue-500/30 text-blue-600 dark:text-blue-400 font-bold hidden sm:inline-flex shrink-0 bg-blue-50 dark:bg-blue-950/60"
              >
                {t("nav.brandSub")}
              </Badge>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 hidden lg:inline shrink-0 whitespace-nowrap">
              {t("nav.brandDesc")}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 lg:gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <a
            href="#features"
            className="whitespace-nowrap px-3 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-[#131b2e] hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
            {t("nav.why")}
          </a>
          <a
            href="#curriculum"
            className="whitespace-nowrap px-3 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-[#131b2e] hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
            {t("nav.cobe")}
          </a>
          <a
            href="#teacher-dashboard"
            className="whitespace-nowrap px-3 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-[#131b2e] hover:text-emerald-600 dark:hover:text-emerald-400 transition-all flex items-center gap-1.5"
          >
            <School className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            {t("nav.teacherPortal")}
          </a>
          <a
            href="#calculator"
            className="whitespace-nowrap px-3 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-[#131b2e] hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          >
            {t("nav.roi")}
          </a>
          <a
            href="#faq"
            className="whitespace-nowrap px-3 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-[#131b2e] hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          >
            {t("nav.faq")}
          </a>
        </nav>

        {/* Action Controls: SkillUp Hub Language Dropdown, Theme Toggle, Auth Buttons */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* SkillUp Hub Style Language Dropdown (Matches Image 2) */}
          <div className="relative shrink-0" ref={langDropdownRef}>
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="h-9 px-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap bg-white dark:bg-[#131b2e] shadow-2xs"
              aria-label="Select Language"
              aria-expanded={langDropdownOpen}
            >
              <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>{currentLangLabel}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform shrink-0 ${
                  langDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-36 rounded-xl bg-white dark:bg-[#131b2e] border border-slate-200 dark:border-slate-800 shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLanguage(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left rtl:text-right px-3.5 py-2 text-xs font-bold flex items-center justify-between cursor-pointer transition-colors ${
                      language === l.code
                        ? "bg-blue-50/80 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-extrabold"
                        : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    <span>{l.label}</span>
                    {language === l.code && (
                      <span className="text-blue-600 dark:text-blue-400 font-extrabold text-xs">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle (Unified SkillUp theme) */}
          <ThemeToggle />

          {/* Teacher Login Button */}
          <Link to="/login?role=teacher" className="shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="rounded-xl border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131b2e] text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold shadow-2xs"
            >
              <School className="w-4 h-4 mr-1.5 rtl:mr-0 rtl:ml-1.5 text-emerald-500" />
              {t("nav.teacherLogin")}
            </Button>
          </Link>

          {/* Student Start / Practice Exam Button */}
          <Link to="/login?role=student" className="shrink-0">
            <Button
              size="sm"
              className="rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-sm shadow-blue-600/20 gap-1.5 transition-all hover:scale-[1.02] active:scale-98"
            >
              <GraduationCap className="w-4 h-4" />
              {t("nav.getStarted")}
            </Button>
          </Link>
        </div>

        {/* Mobile controls & Menu toggle */}
        <div className="xl:hidden flex items-center gap-2 shrink-0">
          {/* Mobile SkillUp Hub Language Dropdown */}
          <div className="relative shrink-0" ref={mobileLangRef}>
            <button
              type="button"
              onClick={() => setMobileLangOpen(!mobileLangOpen)}
              className="h-8 px-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-[#131b2e] flex items-center gap-1 cursor-pointer shadow-2xs"
              aria-label="Select Language"
              aria-expanded={mobileLangOpen}
            >
              <Globe className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>{language.toUpperCase()}</span>
              <ChevronDown
                className={`w-3 h-3 text-slate-400 transition-transform ${
                  mobileLangOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mobileLangOpen && (
              <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-1.5 w-36 rounded-xl bg-white dark:bg-[#131b2e] border border-slate-200 dark:border-slate-800 shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLanguage(l.code);
                      setMobileLangOpen(false);
                    }}
                    className={`w-full text-left rtl:text-right px-3.5 py-2 text-xs font-bold flex items-center justify-between cursor-pointer transition-colors ${
                      language === l.code
                        ? "bg-blue-50/80 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-extrabold"
                        : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    <span>{l.label}</span>
                    {language === l.code && <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          <ThemeToggle className="p-1.5" />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/98 dark:bg-[#090d16]/98 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 px-5 py-6 space-y-5 animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-1.5 text-sm font-semibold">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-2.5 px-3 rounded-xl hover:bg-slate-50 dark:hover:bg-[#131b2e] transition-colors flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                {t("nav.why")}
              </span>
              <ArrowRight className={`w-4 h-4 text-slate-400 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </a>
            <a
              href="#curriculum"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-2.5 px-3 rounded-xl hover:bg-slate-50 dark:hover:bg-[#131b2e] transition-colors flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                {t("nav.cobe")}
              </span>
              <ArrowRight className={`w-4 h-4 text-slate-400 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </a>
            <a
              href="#teacher-dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 py-2.5 px-3 rounded-xl hover:bg-slate-50 dark:hover:bg-[#131b2e] transition-colors flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <School className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                {t("nav.teacherPortal")}
              </span>
              <ArrowRight className={`w-4 h-4 text-slate-400 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-2.5 px-3 rounded-xl hover:bg-slate-50 dark:hover:bg-[#131b2e] transition-colors flex items-center justify-between"
            >
              <span>{t("nav.roi")}</span>
              <ArrowRight className={`w-4 h-4 text-slate-400 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-2.5 px-3 rounded-xl hover:bg-slate-50 dark:hover:bg-[#131b2e] transition-colors flex items-center justify-between"
            >
              <span>{t("nav.faq")}</span>
              <ArrowRight className={`w-4 h-4 text-slate-400 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
            <Link to="/login?role=teacher" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="outline"
                className="w-full justify-center h-11 rounded-xl border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20 font-semibold"
              >
                <School className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                {t("nav.teacherLogin")}
              </Button>
            </Link>
            <Link to="/login?role=student" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full justify-center h-11 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-md shadow-blue-600/20">
                <GraduationCap className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                {t("nav.getStarted")}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
