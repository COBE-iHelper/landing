import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { MoeOwlIcon } from "./MoeLoginButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  School,
  GraduationCap,
  Copy,
  Check,
  ArrowRight,
  ShieldCheck,
  KeyRound,
  Mail,
  ExternalLink,
} from "lucide-react";

export const TEACHER_REVIEWER = {
  email: "moe-reviewer-teacher@skillup-edu.org",
  password: "Review2026!MoE",
  role: "teacher" as const,
};

export const STUDENT_REVIEWER = {
  email: "moe-reviewer-student@skillup-edu.org",
  password: "Student2026!MoE",
  role: "student" as const,
};

export default function ReviewerAccessCard({ className = "" }: { className?: string }) {
  const { t, dir } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey((prev) => (prev === key ? null : prev));
    }, 2000);
  };

  const isRTL = dir === "rtl";

  return (
    <section
      id="reviewer-access"
      aria-label="Ministry of Education Reviewer Access"
      className={`w-full max-w-5xl mx-auto rounded-3xl border p-6 sm:p-8 relative overflow-hidden backdrop-blur-xl transition-all shadow-2xl ${
        isDark
          ? "bg-slate-900/90 border-blue-500/30 text-white shadow-blue-950/40"
          : "bg-white/95 border-blue-200 text-slate-900 shadow-blue-500/10"
      } ${className}`}
    >
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-emerald-500" />

      {/* Header with MoE Owl Emblem & Title */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-3.5 text-center sm:text-left rtl:sm:text-right">
          <div
            className={`p-2.5 rounded-2xl border shadow-md flex items-center justify-center shrink-0 ${
              isDark
                ? "bg-blue-950/60 border-blue-500/40"
                : "bg-blue-50 border-blue-200"
            }`}
          >
            <MoeOwlIcon size={28} />
          </div>
          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">
                {t("reviewer.title")}
              </h2>
              <Badge
                variant="outline"
                className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 ${
                  isDark
                    ? "border-blue-400/40 text-blue-300 bg-blue-500/10"
                    : "border-blue-600/40 text-blue-700 bg-blue-50"
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 mr-1 rtl:mr-0 rtl:ml-1 inline" />
                {t("reviewer.badge")}
              </Badge>
            </div>
            <p
              className={`text-xs sm:text-sm mt-1 max-w-2xl ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {t("reviewer.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Dual Reviewer Accounts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* 1. Teacher Portal Reviewer Card */}
        <div
          className={`rounded-2xl border p-5 sm:p-6 flex flex-col justify-between transition-all hover:scale-[1.01] ${
            isDark
              ? "bg-[#0f172a]/80 border-emerald-500/30 hover:border-emerald-400/50"
              : "bg-emerald-50/40 border-emerald-200 hover:border-emerald-300 shadow-sm"
          }`}
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <div
                  className={`p-2 rounded-xl ${
                    isDark ? "bg-emerald-950/80 text-emerald-400" : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  <School className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg">
                    {t("reviewer.teacherTitle")}
                  </h3>
                  <Badge
                    variant="outline"
                    className="text-[10px] font-bold px-2 py-0 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40"
                  >
                    {t("reviewer.teacherRole")}
                  </Badge>
                </div>
              </div>
            </div>

            <p
              className={`text-xs mb-4 leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {t("reviewer.teacherDesc")}
            </p>

            {/* Email Field with Copy */}
            <div className="space-y-2 mb-5">
              <div
                className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-mono transition-colors ${
                  isDark
                    ? "bg-[#090d16] border-slate-800 text-slate-200"
                    : "bg-white border-slate-200 text-slate-800"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="truncate select-all">{TEACHER_REVIEWER.email}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(TEACHER_REVIEWER.email, "teacher-email")}
                  className={`p-1.5 rounded-lg text-xs font-sans font-bold flex items-center gap-1 shrink-0 transition-colors ${
                    isDark
                      ? "hover:bg-slate-800 text-slate-300 hover:text-white"
                      : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
                  }`}
                  aria-label="Copy teacher reviewer email"
                >
                  {copiedKey === "teacher-email" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-[11px] text-emerald-500 font-semibold">{t("reviewer.copied")}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-medium hidden xs:inline">{t("reviewer.copyEmail")}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Password Field with Copy */}
              <div
                className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-mono transition-colors ${
                  isDark
                    ? "bg-[#090d16] border-slate-800 text-slate-200"
                    : "bg-white border-slate-200 text-slate-800"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <KeyRound className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="font-bold select-all">{TEACHER_REVIEWER.password}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(TEACHER_REVIEWER.password, "teacher-password")}
                  className={`p-1.5 rounded-lg text-xs font-sans font-bold flex items-center gap-1 shrink-0 transition-colors ${
                    isDark
                      ? "hover:bg-slate-800 text-slate-300 hover:text-white"
                      : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
                  }`}
                  aria-label="Copy teacher reviewer password"
                >
                  {copiedKey === "teacher-password" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-[11px] text-emerald-500 font-semibold">{t("reviewer.copied")}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-medium hidden xs:inline">{t("reviewer.copyPassword")}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Action Button: Direct Link to /login?role=teacher&auto=teacher */}
          <Link to="/login?role=teacher&auto=teacher" className="w-full">
            <Button
              className="w-full h-11 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
            >
              <span>{t("reviewer.loginAsTeacher")}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
            </Button>
          </Link>
        </div>

        {/* 2. Student Simulation Reviewer Card */}
        <div
          className={`rounded-2xl border p-5 sm:p-6 flex flex-col justify-between transition-all hover:scale-[1.01] ${
            isDark
              ? "bg-[#0f172a]/80 border-blue-500/30 hover:border-blue-400/50"
              : "bg-blue-50/40 border-blue-200 hover:border-blue-300 shadow-sm"
          }`}
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <div
                  className={`p-2 rounded-xl ${
                    isDark ? "bg-blue-950/80 text-blue-400" : "bg-blue-100 text-blue-700"
                  }`}
                >
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg">
                    {t("reviewer.studentTitle")}
                  </h3>
                  <Badge
                    variant="outline"
                    className="text-[10px] font-bold px-2 py-0 border-blue-500/40 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40"
                  >
                    {t("reviewer.studentRole")}
                  </Badge>
                </div>
              </div>
            </div>

            <p
              className={`text-xs mb-4 leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {t("reviewer.studentDesc")}
            </p>

            {/* Email Field with Copy */}
            <div className="space-y-2 mb-5">
              <div
                className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-mono transition-colors ${
                  isDark
                    ? "bg-[#090d16] border-slate-800 text-slate-200"
                    : "bg-white border-slate-200 text-slate-800"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span className="truncate select-all">{STUDENT_REVIEWER.email}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(STUDENT_REVIEWER.email, "student-email")}
                  className={`p-1.5 rounded-lg text-xs font-sans font-bold flex items-center gap-1 shrink-0 transition-colors ${
                    isDark
                      ? "hover:bg-slate-800 text-slate-300 hover:text-white"
                      : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
                  }`}
                  aria-label="Copy student reviewer email"
                >
                  {copiedKey === "student-email" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-blue-500" />
                      <span className="text-[11px] text-blue-500 font-semibold">{t("reviewer.copied")}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-medium hidden xs:inline">{t("reviewer.copyEmail")}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Password Field with Copy */}
              <div
                className={`p-2.5 rounded-xl border flex items-center justify-between text-xs font-mono transition-colors ${
                  isDark
                    ? "bg-[#090d16] border-slate-800 text-slate-200"
                    : "bg-white border-slate-200 text-slate-800"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <KeyRound className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span className="font-bold select-all">{STUDENT_REVIEWER.password}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(STUDENT_REVIEWER.password, "student-password")}
                  className={`p-1.5 rounded-lg text-xs font-sans font-bold flex items-center gap-1 shrink-0 transition-colors ${
                    isDark
                      ? "hover:bg-slate-800 text-slate-300 hover:text-white"
                      : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
                  }`}
                  aria-label="Copy student reviewer password"
                >
                  {copiedKey === "student-password" ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-blue-500" />
                      <span className="text-[11px] text-blue-500 font-semibold">{t("reviewer.copied")}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-medium hidden xs:inline">{t("reviewer.copyPassword")}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Action Button: Direct Link to /login?role=student&auto=student */}
          <Link to="/login?role=student&auto=student" className="w-full">
            <Button
              className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
            >
              <span>{t("reviewer.loginAsStudent")}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
