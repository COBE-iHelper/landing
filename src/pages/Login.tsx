import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useLanguage, type Language } from "@/context/LanguageContext";
import { signInWithGoogle, signInWithEmail, signUpWithEmail } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Lock,
  Mail,
  CheckCircle2,
  AlertCircle,
  Globe,
  Loader2,
  ChevronDown,
  LogIn,
  School,
  GraduationCap,
  Copy,
  Check,
  ShieldCheck,
  KeyRound,
} from "lucide-react";
import ihelpLogo from "@/assets/ihelp-logo.png";
import skillupLogo from "@/assets/skillup-logo.png";
import { useTheme } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import { MoeLoginButton, MoeOwlIcon } from "@/components/MoeLoginButton";
import { TEACHER_REVIEWER, STUDENT_REVIEWER } from "@/components/ReviewerAccessCard";

export default function LoginPage() {
  const { language, setLanguage, dir, t } = useLanguage();
  const { theme } = useTheme();
  const [searchParams] = useSearchParams();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = React.useRef<HTMLDivElement>(null);

  // Click outside to close language dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(e.target as Node)
      ) {
        setLangDropdownOpen(false);
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

  const roleParam = searchParams.get("role");
  const isTeacher = roleParam === "teacher";
  const autoParam = searchParams.get("auto") || searchParams.get("reviewer");
  const [activeReviewerTab, setActiveReviewerTab] = useState<"teacher" | "student">(
    isTeacher || autoParam === "teacher" ? "teacher" : "student"
  );
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(
    searchParams.get("signup") === "true" || searchParams.get("mode") === "signup"
  );
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Auto-fill reviewer credentials if requested via URL or query
  useEffect(() => {
    if (autoParam === "teacher") {
      setActiveReviewerTab("teacher");
      setEmail(TEACHER_REVIEWER.email);
      setPassword(TEACHER_REVIEWER.password);
    } else if (autoParam === "student") {
      setActiveReviewerTab("student");
      setEmail(STUDENT_REVIEWER.email);
      setPassword(STUDENT_REVIEWER.password);
    }
  }, [autoParam]);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey((prev) => (prev === key ? null : prev));
    }, 2000);
  };

  const handleFillReviewer = (targetRole: "teacher" | "student") => {
    setActiveReviewerTab(targetRole);
    const creds = targetRole === "teacher" ? TEACHER_REVIEWER : STUDENT_REVIEWER;
    setEmail(creds.email);
    setPassword(creds.password);
  };

  const handleReviewerQuickLogin = async (targetRole: "teacher" | "student") => {
    setActiveReviewerTab(targetRole);
    const creds = targetRole === "teacher" ? TEACHER_REVIEWER : STUDENT_REVIEWER;
    setEmail(creds.email);
    setPassword(creds.password);
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const res = await signInWithEmail(creds.email, creds.password);
      if (res?.user) {
        const token = await syncUserToSessionToken(res.user);
        setSuccessMsg(
          language === "ar"
            ? "تم الدخول بنجاح كمعرّف/مقيّم! جارٍ التحويل مباشرة..."
            : language === "he"
            ? "התחברת בהצלחה כמעריך/בוחן! מועבר ישירות למערכת..."
            : "Logged in successfully as MoE Reviewer! Launching your portal..."
        );
        handleRedirect(token);
      }
    } catch (err: unknown) {
      console.error("Reviewer quick sign-in error:", err);
      const authErr = err as { code?: string; message?: string };
      setErrorMsg(authErr?.message || "Failed to log in with reviewer account");
    } finally {
      setLoading(false);
    }
  };

  const syncUserToSessionToken = async (user: {
    email: string | null;
    displayName?: string | null;
    photoURL?: string | null;
  }): Promise<string | undefined> => {
    if (!user.email) return undefined;
    const body = JSON.stringify({
      email: user.email,
      name: user.displayName || user.email.split("@")[0],
      image: user.photoURL || null,
    });

    const isLocal =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
    const cobeBase = isLocal
      ? "http://localhost:5173"
      : import.meta.env.VITE_IHELP_APP_URL || "https://ihelp.skillup-edu.org";
    const proxyBase = isLocal
      ? "http://localhost:3001"
      : import.meta.env.VITE_AI_PROXY_URL || "https://ai-proxy-sepia-nine.vercel.app";

    const endpoints = [
      "/api/auth/google",
      `${cobeBase}/api/auth/google`,
      `${proxyBase}/api/auth/google`,
    ];

    for (const endpoint of endpoints) {
      try {
        const authRes = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body,
        });
        if (authRes.ok) {
          const text = await authRes.text();
          const data = JSON.parse(text);
          if (data?.token) {
            return data.token as string;
          }
        }
      } catch (err) {
        console.warn(`Auth sync fallback tried ${endpoint}:`, err);
      }
    }
    return undefined;
  };

  // Auto-forward token if user arrived at landing with a token (e.g. from previous redirect loop)
  useEffect(() => {
    const existingToken = searchParams.get("token");
    if (existingToken) {
      setLoading(true);
      setSuccessMsg(
        language === "ar"
          ? "تم التحقق من الحساب! جارٍ توجيهك إلى لوحة التحكم..."
          : language === "he"
          ? "החשבון אומת! מועבר ישירות ללוח הבקרה..."
          : "Verified! Launching your dashboard..."
      );
      handleRedirect(existingToken);
    }
  }, [searchParams]);

  // Seamless redirect: logs directly into the practice app with session so user doesn't sign in again
  const handleRedirect = (token?: string) => {
    const isLocal =
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
    const configuredBase = import.meta.env.VITE_IHELP_APP_URL?.replace(/\/$/, "");
    const base = isLocal
      ? "http://localhost:5173"
      : (configuredBase && configuredBase !== window.location.origin
          ? configuredBase
          : "https://ihelp.skillup-edu.org");

    const nextParam = searchParams.get("next") || (isTeacher ? "/teacher" : "/");
    const params = new URLSearchParams();
    if (token) params.set("token", token);
    params.set("next", nextParam);
    if (roleParam) params.set("role", roleParam);
    const queryString = params.toString() ? `?${params.toString()}` : "";
    window.location.replace(`${base}/login${queryString}`);
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);
    try {
      const res = await signInWithGoogle();
      if (res?.user) {
        const token = await syncUserToSessionToken(res.user);

        setSuccessMsg(
          language === "ar"
            ? "تم تسجيل الدخول بنجاح! جارٍ تحويلك مباشرة..."
            : language === "he"
            ? "התחברת בהצלחה! מועבר ישירות למערכת..."
            : "Signed in successfully! Launching your portal..."
        );
        handleRedirect(token);
      }
    } catch (err: unknown) {
      console.error("Google sign-in error:", err);
      const authErr = err as { code?: string; message?: string };
      if (authErr?.code === "auth/popup-closed-by-user") {
        setErrorMsg(
          language === "ar"
            ? "تم إغلاق نافذة تسجيل الدخول."
            : language === "he"
            ? "חלון ההתחברות נסגר ע״י המשתמש."
            : "Sign-in popup was closed."
        );
      } else {
        setErrorMsg(authErr?.message || "Failed to authenticate with Google");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg(
        language === "ar"
          ? "يرجى إدخال البريد الإلكتروني وكلمة المرور"
          : language === "he"
          ? "נא להזין כתובת אימייל וסיסמה"
          : "Please enter both email and password"
      );
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      let res;
      if (isSignUp) {
        res = await signUpWithEmail(email, password);
      } else {
        res = await signInWithEmail(email, password);
      }
      if (res?.user) {
        const token = await syncUserToSessionToken(res.user);

        setSuccessMsg(
          language === "ar"
            ? "تم الدخول بنجاح! جارٍ توجيهك مباشرة..."
            : language === "he"
            ? "התחברת בהצלחה! פותח את המערכת..."
            : "Success! Launching your portal..."
        );
        handleRedirect(token);
      }
    } catch (err: unknown) {
      console.error("Email auth error:", err);
      const authErr = err as { code?: string; message?: string };
      if (
        authErr?.code === "auth/invalid-credential" ||
        authErr?.code === "auth/user-not-found" ||
        authErr?.code === "auth/wrong-password"
      ) {
        setErrorMsg(
          language === "ar"
            ? "بيانات الحساب غير صحيحة، يرجى التأكد من البريد الإلكتروني وكلمة المرور."
            : language === "he"
            ? "פרטי החשבון אינם נכונים, נא לוودא את כתובת האימייל והסיסמה."
            : "Invalid account credentials. Please verify your email and password."
        );
      } else {
        setErrorMsg(authErr?.message || "Authentication error");
      }
    } finally {
      setLoading(false);
    }
  };

  const BackIcon = dir === "rtl" ? ArrowRight : ArrowLeft;
  const isDark = theme === "dark";
  const currentLangLabel = languages.find((l) => l.code === language)?.label || "English";

  return (
    <div
      className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${
        isDark
          ? "bg-[#090d16] text-slate-100 selection:bg-blue-500/30 selection:text-white"
          : "bg-[#f8fafc] text-slate-900 selection:bg-blue-500/20 selection:text-slate-900"
      }`}
    >
      {/* Top Header / Language / Theme Switcher */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${
          isDark
            ? "border-slate-800/80 bg-[#090d16]/80"
            : "border-slate-200/90 bg-white/80 shadow-xs"
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            to="/"
            className={`flex items-center gap-2 text-sm font-medium transition-colors group shrink-0 ${
              isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <BackIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{t("auth.back")}</span>
          </Link>

          {/* Central logos */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 min-w-fit">
            <div
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl border transition-colors shrink-0 ${
                isDark
                  ? "bg-[#131b2e] border-slate-800"
                  : "bg-white border-slate-200 shadow-xs"
              }`}
            >
              <img src={skillupLogo} alt="SkillUp" className="h-6 w-auto object-contain" />
              <span className={`text-xs ${isDark ? "text-slate-500" : "text-slate-400"}`}>✕</span>
              <img src={ihelpLogo} alt="iHelp" className="h-6 w-auto object-contain" />
            </div>
            <span
              className={`font-extrabold text-base tracking-tight hidden sm:inline shrink-0 whitespace-nowrap ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              SkillUp <span className="text-blue-600 dark:text-blue-400">iHelp</span>
            </span>
          </Link>

          {/* Right Action Controls: SkillUp Hub Language Dropdown & Theme Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            {/* SkillUp Hub Style Language Dropdown (Matches Image 2) */}
            <div className="relative shrink-0" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="h-9 px-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap bg-white dark:bg-[#131b2e] shadow-xs"
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
                <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-36 rounded-xl bg-white dark:bg-[#131b2e] border border-slate-200 dark:border-slate-800 shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-100">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => {
                        setLanguage(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className="w-full text-left rtl:text-right px-3.5 py-2 text-xs font-bold hover:bg-blue-50 dark:hover:bg-slate-800/80 flex items-center justify-between text-slate-800 dark:text-slate-200 cursor-pointer transition-colors"
                    >
                      <span>{l.label}</span>
                      {language === l.code && (
                        <span className="text-blue-600 dark:text-blue-400 font-extrabold">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* SkillUp Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-lg mx-auto">
          {/* Card */}
          <div
            className={`border rounded-2xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-xl transition-all ${
              isDark
                ? "bg-[#131b2e] border-slate-800 shadow-2xl"
                : "bg-white border-slate-200 shadow-xl"
            }`}
          >
            {/* Top decorative gradient glow */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600" />

            {/* Header info */}
            <div className="text-center mb-6">
              <Badge
                variant="outline"
                className={`mb-3 text-xs px-3 py-1 font-bold uppercase tracking-wider ${
                  isDark
                    ? "border-blue-500/30 text-blue-400 bg-blue-500/10"
                    : "border-blue-600/30 text-blue-700 bg-blue-50"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 mr-1.5 inline" />
                {t("auth.badge")}
              </Badge>
              <h1
                className={`text-2xl sm:text-3xl font-black tracking-tight ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {t("auth.title")}
              </h1>
              <p className={`text-xs sm:text-sm mt-2 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                {t("auth.subtitle")}
              </p>
            </div>

            {/* Error or Success notification */}
            {errorMsg && (
              <div
                className={`mb-5 p-3.5 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 border animate-in fade-in duration-200 ${
                  isDark
                    ? "bg-red-950/60 border-red-800/80 text-red-200"
                    : "bg-red-50 border-red-200 text-red-700"
                }`}
              >
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}
            {successMsg && (
              <div
                className={`mb-5 p-3.5 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 border animate-in fade-in duration-200 ${
                  isDark
                    ? "bg-emerald-950/60 border-emerald-800/80 text-emerald-200"
                    : "bg-emerald-50 border-emerald-200 text-emerald-800"
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Social / IDM Logins */}
            <div className="space-y-3">
              <MoeLoginButton
                variant="blue"
                disabled={loading}
                onClick={() => {
                  const isLocal =
                    typeof window !== "undefined" &&
                    (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
                  const base = isLocal
                    ? "http://localhost:3001"
                    : import.meta.env.VITE_AI_PROXY_URL || "https://cobe.skillup-edu.org";
                  window.location.href = `${base}/api/auth/moe/login`;
                }}
              />

              <Button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                variant="outline"
                className={`w-full h-11 font-semibold text-sm rounded-xl flex items-center justify-center gap-3 transition-all ${
                  isDark
                    ? "bg-[#090d16] hover:bg-slate-800/80 border-slate-800 text-white shadow-xs"
                    : "bg-white hover:bg-slate-50 border-slate-300 text-slate-800 shadow-xs"
                }`}
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin text-blue-600 dark:text-blue-400" />
                ) : (
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.3 9 5 12 5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15.1s.7 5.4 1.9 7.8l3.7-2.9z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23.5c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.3-6.4-5.2L1.9 16.5C3.7 20.2 7.5 23.5 12 23.5z"
                    />
                  </svg>
                )}
                <span>{t("auth.googleSignIn")}</span>
              </Button>

              {/* Divider */}
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div
                    className={`w-full border-t ${
                      isDark ? "border-slate-800" : "border-slate-200"
                    }`}
                  />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span
                    className={`px-3 font-medium transition-colors ${
                      isDark
                        ? "bg-[#131b2e] text-slate-400"
                        : "bg-white text-slate-400"
                    }`}
                  >
                    {t("auth.orEmail")}
                  </span>
                </div>
              </div>

              {/* MoE Official Reviewer Credentials Box */}
              <div
                className={`p-4 rounded-2xl border transition-all ${
                  isDark
                    ? "bg-[#090d16]/95 border-blue-500/30 shadow-lg"
                    : "bg-blue-50/70 border-blue-200 shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <MoeOwlIcon size={20} />
                    <span className="text-xs font-black tracking-tight">
                      {t("reviewer.title")}
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-[10px] font-bold px-2 py-0 border-blue-500/30 text-blue-600 dark:text-blue-400 bg-white dark:bg-[#131b2e]"
                  >
                    <ShieldCheck className="w-3 h-3 mr-1 rtl:mr-0 rtl:ml-1 inline" />
                    MoE Review
                  </Badge>
                </div>

                {/* Role Switcher Tabs */}
                <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-slate-200/70 dark:bg-slate-800/80 mb-3 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveReviewerTab("teacher");
                      handleFillReviewer("teacher");
                    }}
                    className={`py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      activeReviewerTab === "teacher"
                        ? "bg-white dark:bg-[#131b2e] text-emerald-600 dark:text-emerald-400 shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <School className="w-3.5 h-3.5" />
                    <span>{t("reviewer.teacherTitle")}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveReviewerTab("student");
                      handleFillReviewer("student");
                    }}
                    className={`py-1.5 px-2 rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      activeReviewerTab === "student"
                        ? "bg-white dark:bg-[#131b2e] text-blue-600 dark:text-blue-400 shadow-xs"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{t("reviewer.studentTitle")}</span>
                  </button>
                </div>

                {/* Display Current Active Reviewer Credentials */}
                {(() => {
                  const currentCreds =
                    activeReviewerTab === "teacher" ? TEACHER_REVIEWER : STUDENT_REVIEWER;
                  const isTeacherActive = activeReviewerTab === "teacher";
                  return (
                    <div className="space-y-2 mb-3">
                      <div
                        className={`p-2 rounded-xl border flex items-center justify-between text-xs font-mono transition-colors ${
                          isDark
                            ? "bg-[#131b2e] border-slate-800 text-slate-200"
                            : "bg-white border-slate-200 text-slate-800"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 truncate">
                          <Mail
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isTeacherActive ? "text-emerald-500" : "text-blue-500"
                            }`}
                          />
                          <span className="truncate select-all">{currentCreds.email}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy(currentCreds.email, "login-email")}
                          className="p-1 rounded-md text-[11px] font-sans font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 cursor-pointer shrink-0"
                          title="Copy email"
                        >
                          {copiedKey === "login-email" ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                              <span className="text-[10px] text-emerald-500 font-bold">{t("reviewer.copied")}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span className="text-[10px] hidden sm:inline">{t("reviewer.copyEmail")}</span>
                            </>
                          )}
                        </button>
                      </div>

                      <div
                        className={`p-2 rounded-xl border flex items-center justify-between text-xs font-mono transition-colors ${
                          isDark
                            ? "bg-[#131b2e] border-slate-800 text-slate-200"
                            : "bg-white border-slate-200 text-slate-800"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 truncate">
                          <KeyRound
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isTeacherActive ? "text-emerald-500" : "text-blue-500"
                            }`}
                          />
                          <span className="font-bold select-all">{currentCreds.password}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy(currentCreds.password, "login-pass")}
                          className="p-1 rounded-md text-[11px] font-sans font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 cursor-pointer shrink-0"
                          title="Copy password"
                        >
                          {copiedKey === "login-pass" ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                              <span className="text-[10px] text-emerald-500 font-bold">{t("reviewer.copied")}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span className="text-[10px] hidden sm:inline">{t("reviewer.copyPassword")}</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Dual Action Buttons: Quick Fill or Instant Sign In */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          disabled={loading}
                          onClick={() => handleFillReviewer(activeReviewerTab)}
                          className={`rounded-xl text-xs font-bold border transition-colors ${
                            isDark
                              ? "bg-[#131b2e] border-slate-700 hover:bg-slate-800 text-slate-200"
                              : "bg-white border-slate-300 hover:bg-slate-50 text-slate-700"
                          }`}
                        >
                          {t("reviewer.fillCredentials")}
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          disabled={loading}
                          onClick={() => handleReviewerQuickLogin(activeReviewerTab)}
                          className={`rounded-xl text-xs font-bold text-white transition-all shadow-xs ${
                            isTeacherActive
                              ? "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20"
                              : "bg-blue-600 hover:bg-blue-500 shadow-blue-600/20"
                          }`}
                        >
                          {loading ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin mr-1 rtl:mr-0 rtl:ml-1" />
                          ) : (
                            <LogIn className="w-3.5 h-3.5 mr-1 rtl:mr-0 rtl:ml-1" />
                          )}
                          {t("reviewer.quickSignIn")}
                        </Button>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Email + Password Form */}
              <form onSubmit={handleEmailAuth} className="space-y-3.5">
                <div>
                  <label
                    className={`block text-xs font-medium mb-1.5 ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    {t("auth.email")}
                  </label>
                  <div className="relative">
                    <Mail
                      className={`w-4 h-4 absolute left-3 top-3 ${
                        isDark ? "text-slate-500" : "text-slate-400"
                      }`}
                    />
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="user@school.org"
                      required
                      className={`pl-9 h-10 text-sm rounded-xl transition-colors ${
                        isDark
                          ? "bg-[#090d16] border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-blue-500"
                          : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-blue-600"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-xs font-medium mb-1.5 ${
                      isDark ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    {t("auth.password")}
                  </label>
                  <div className="relative">
                    <Lock
                      className={`w-4 h-4 absolute left-3 top-3 ${
                        isDark ? "text-slate-500" : "text-slate-400"
                      }`}
                    />
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className={`pl-9 h-10 text-sm rounded-xl transition-colors ${
                        isDark
                          ? "bg-[#090d16] border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-blue-500"
                          : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus-visible:ring-blue-600"
                      }`}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 font-bold text-sm rounded-xl transition-all shadow-md mt-2 bg-blue-600 hover:bg-blue-500 text-white"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : (
                    <LogIn className="w-4 h-4 mr-2" />
                  )}
                  {t("auth.submit")}
                </Button>
              </form>

              {/* Bottom Info Note */}
              <div
                className={`mt-4 p-3.5 rounded-xl border text-[11px] leading-relaxed transition-colors ${
                  isDark
                    ? "bg-[#090d16]/80 border-slate-800/80 text-slate-400"
                    : "bg-slate-50 border-slate-200 text-slate-600"
                }`}
              >
                {t("auth.note")}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`py-4 border-t text-center text-xs transition-colors ${
          isDark
            ? "border-slate-800/80 bg-[#090d16] text-slate-500"
            : "border-slate-200 bg-white/70 text-slate-500"
        }`}
      >
        SkillUp iHelp &copy; {new Date().getFullYear()} &bull; {t("footer.rights")}
      </footer>
    </div>
  );
}
