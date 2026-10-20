import { Link } from "react-router-dom";
import ihelpLogo from "@/assets/ihelp-logo.png";
import skillupLogo from "@/assets/skillup-logo.png";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck } from "lucide-react";

const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-background border-t border-border py-14 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-border">
          {/* Dual Brands */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-card p-1.5 rounded-xl border border-border shadow-sm">
                <img
                  src={skillupLogo}
                  alt="SkillUp Logo"
                  className="h-7 w-auto object-contain"
                />
                <span className="text-muted-foreground font-semibold text-xs px-1">✕</span>
                <img
                  src={ihelpLogo}
                  alt="iHelp Logo"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <span className="font-black text-foreground text-lg">
                SkillUp <span className="text-accent">iHelp</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground max-w-sm text-center md:text-left">
              {t("footer.desc")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">
              {t("nav.why")}
            </a>
            <a href="#curriculum" className="hover:text-foreground transition-colors">
              {t("nav.cobe")}
            </a>
            <a href="#teacher-dashboard" className="hover:text-foreground transition-colors">
              {t("nav.teacherPortal")}
            </a>
            <a href="#calculator" className="hover:text-foreground transition-colors">
              {t("nav.roi")}
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              {t("nav.faq")}
            </a>
            <Link to="/privacy" className="hover:text-foreground transition-colors font-semibold">
              {t("footer.privacy")}
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors font-semibold">
              {t("footer.terms")}
            </Link>
            <Link to="/accessibility" className="hover:text-foreground transition-colors font-semibold">
              {t("footer.accessibility")}
            </Link>
          </div>
        </div>

        {/* Security & Regulatory Compliance Row */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground border-b border-border/50">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <Badge variant="outline" className="text-[11px] text-accent border-accent/40 bg-accent/5 flex items-center gap-1.5 py-0.5">
              <ShieldCheck className="h-3.5 w-3.5" />
              {t("footer.moeBadge")}
            </Badge>
            <Badge variant="outline" className="text-[11px] text-muted-foreground border-border py-0.5">
              {t("footer.zdrBadge")}
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/privacy" className="hover:text-foreground underline transition-colors">
              {t("footer.privacy")}
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-foreground underline transition-colors">
              {t("footer.terms")}
            </Link>
            <span>•</span>
            <Link to="/accessibility" className="hover:text-foreground underline transition-colors">
              {t("footer.accessibility")}
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {t("footer.rights")}
          </p>
          <div className="flex items-center gap-2">
            <span>{t("footer.devBy")}</span>
            <span>•</span>
            <Badge variant="outline" className="text-[10px] text-accent border-accent/40">
              {t("footer.tag")}
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

