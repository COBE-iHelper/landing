import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import {
  Mail,
  Send,
  User,
  Building2,
  Lock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Loader2,
  Crown,
  Clock,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  organization: z
    .string()
    .trim()
    .min(2, { message: "Organization must be at least 2 characters" })
    .max(100, { message: "Organization must be less than 100 characters" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage();

  // Membership Gating State
  const [isMember, setIsMember] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showUnlockInput, setShowUnlockInput] = useState(false);
  const [unlockEmail, setUnlockEmail] = useState("");
  const [unlockLoading, setUnlockLoading] = useState(false);
  const [unlockError, setUnlockError] = useState<string | null>(null);

  // Check existing session / membership on load
  useEffect(() => {
    const checkMembership = async () => {
      try {
        if (typeof window !== "undefined" && localStorage.getItem("skillup_vip_access") === "true") {
          setIsMember(true);
          return;
        }

        const res = await fetch("/api/me", { credentials: "include" });
        if (res.ok) {
          const data = await res.json();
          if (data.entitlement?.tier === "school" || data.entitlement?.tier === "paid") {
            setIsMember(true);
            localStorage.setItem("skillup_vip_access", "true");
          }
        }
      } catch {
        // Fallback silently if offline or unauthenticated
      }
    };
    checkMembership();
  }, []);

  const handleVerifyPasscode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!unlockEmail.trim()) return;
    setUnlockLoading(true);
    setUnlockError(null);
    try {
      const res = await fetch("/api/membership/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: unlockEmail.trim(), code: unlockEmail.trim() }),
      });
      const data = await res.json();
      if (res.ok && data.verified) {
        setIsMember(true);
        localStorage.setItem("skillup_vip_access", "true");
        toast({
          title:
            language === "ar"
              ? "تم التحقق من العضوية بنجاح!"
              : language === "he"
              ? "המנוי אומת בהצלחה!"
              : "VIP Membership Verified!",
          description:
            language === "ar"
              ? "أهلاً بك! تم فتح قنوات التواصل المباشرة ومكتب الفحص."
              : language === "he"
              ? "ברוכים הבאים! פרטי הקשר נפתחו כעת."
              : "Welcome! Direct contact channels have been unlocked.",
        });
        setShowBuyModal(false);
      } else {
        setUnlockError(
          data.error ||
            (language === "ar"
              ? "البريد أو رمز العضوية غير صالح"
              : language === "he"
              ? "אימייל או קוד לא תקין"
              : "Invalid VIP email or membership code.")
        );
      }
    } catch {
      setUnlockError(
        language === "ar"
          ? "تعذر التحقق حالياً، يرجى المحاولة لاحقاً"
          : language === "he"
          ? "שגיאה בחיבור לשרת"
          : "Verification request failed"
      );
    } finally {
      setUnlockLoading(false);
    }
  };

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      message: "",
    },
  });

  const contactUrl = import.meta.env.VITE_CONTACT_FORM_URL;
  const onSubmit = async (data: ContactFormValues) => {
    if (!contactUrl) return;
    setIsSubmitting(true);
    try {
      const response = await fetch(contactUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Contact request failed");
      toast({
        title:
          language === "ar"
            ? "تم إرسال الرسالة بنجاح!"
            : language === "he"
            ? "ההודעה נשלחה בהצלחה!"
            : "Message sent successfully!",
        description:
          language === "ar"
            ? "سنقوم بالرد عليكم في أقرب وقت ممكن."
            : language === "he"
            ? "נחזור אליכם בהקדם האפשרי."
            : "We'll get back to you as soon as possible.",
      });

      form.reset();
    } catch {
      toast({
        title:
          language === "ar"
            ? "حدث خطأ غير متوقع"
            : language === "he"
            ? "אירעה שגיאה"
            : "Something went wrong",
        description:
          language === "ar"
            ? "يرجى المحاولة مرة أخرى لاحقاً."
            : language === "he"
            ? "אנא נסו שוב מאוחר יותר."
            : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 gradient-feature relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            {language === "ar"
              ? "جهّز مدرستك مع SkillUp iHelp"
              : language === "he"
              ? "הטמעת המערכת בבית הספר שלך"
              : "Bring the Ecosystem to Your School"}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            {language === "ar"
              ? "احجز عرضاً تقديمياً لطاقم اللغة الإنجليزية في مدرستك أو اطلب وصولاً تجريبياً."
              : language === "he"
              ? "תאם הדגמה לצוות האנגלית בבית הספר או בקש גישת פיילוט."
              : "Schedule a demo for your school's English department or request pilot access."}
          </p>
        </div>

        <div className="relative">
          {/* Main Card with Contact details and Form (Blurred when !isMember) */}
          <Card
            className={`p-8 md:p-12 shadow-elegant border-border bg-card transition-all duration-300 ${
              !isMember ? "filter blur-md select-none pointer-events-none opacity-25" : ""
            }`}
          >
            {isMember && (
              <div className="mb-8 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between gap-3 text-emerald-800 dark:text-emerald-300">
                <div className="flex items-center gap-2 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>
                    {language === "ar"
                      ? "✓ تم التحقق: وصول عضوية VIP والمدارس الشريكة مفعّل بالكامل"
                      : language === "he"
                      ? "✓ אומת: גישת מנוי VIP ומוסדות מאושרת ופתוחה לשימוש"
                      : "✓ Verified: VIP & School Member Access is Fully Active"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    localStorage.removeItem("skillup_vip_access");
                    setIsMember(false);
                  }}
                  className="text-xs text-muted-foreground hover:text-foreground underline pointer-events-auto cursor-pointer"
                >
                  {language === "ar" ? "قفل" : language === "he" ? "נעילה" : "Lock"}
                </button>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-12">
              {/* Left side - Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {language === "ar"
                      ? "تواصل معنا مباشرة"
                      : language === "he"
                      ? "בואו נשוחח"
                      : "Let's Talk"}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === "ar"
                      ? "سواء كنت مؤسسة تعليمية تسعى لتطوير إعداد طلابها لامتحان البجروت الشفوي، أو مركزاً يرغب بأتمتة الفحص، يسعدنا التحدث معكم."
                      : language === "he"
                      ? "בין אם אתם מוסד חינוכי המעוניין לשדרג את ההכנה לבגרות בעל פה או מורים המחפשים כלים מתקדמים לבדיקה, נשמח לשוחח איתכם."
                      : "Whether you're an educational institution looking to improve exam preparation or a teacher seeking better evaluation tools, we'd love to hear from you."}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {language === "ar"
                          ? "البريد الإلكتروني"
                          : language === "he"
                          ? "דואר אלקטרוני"
                          : "Email"}
                      </p>
                      <a className="text-sm text-accent hover:underline font-mono" href="mailto:support@skillup-edu.org">
                        support@skillup-edu.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {language === "ar"
                          ? "ساعات العمل والدعم الفني"
                          : language === "he"
                          ? "שעות פעילות ותמיכה"
                          : "Support & Operating Hours"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {language === "ar"
                          ? "الأحد - الخميس: 08:00 - 18:00 (توقيت القدس)"
                          : language === "he"
                          ? "ימים א' - ה': 08:00 - 18:00 (שעון ישראל)"
                          : "Sunday – Thursday: 08:00 – 18:00 (Israel Time)"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {language === "ar"
                          ? "للمدارس والشبكات"
                          : language === "he"
                          ? "לבתי ספר ורשתות חינוך"
                          : "Schools & Networks"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {language === "ar"
                          ? "يمكنكم جدولة لقاء أو جلسة تدريب عبر زوم أو زيارة مدرسية حسب رغبتكم."
                          : language === "he"
                          ? "ניתן לתאם שיחת זום, הדרכה מקוונת או פגישה בבית הספר לפי נוחותכם."
                          : "You can schedule a demo or meeting with us at your convenience."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    {language === "ar"
                      ? "نقوم بالرد على استفسارات المدارس والمعلمين خلال 24 ساعة في أيام العمل."
                      : language === "he"
                      ? "אנו עונים לפניות בתי ספר ומורים תוך 24 שעות בימי עסקים."
                      : "We typically respond to school & teacher inquiries within 24 hours during business days."}
                  </p>
                </div>
              </div>

              {/* Right side - Form */}
              <div>
                {!contactUrl && (
                  <p className="text-sm text-muted-foreground mb-6">
                    {language === "ar"
                      ? "للاستفسارات، راسلنا عبر البريد الإلكتروني الموضح هنا."
                      : language === "he"
                      ? "לפניות ובירורים, ניתן ליצור קשר ישירות בכתובת המייל המצוינת."
                      : "For enquiries, use the email address shown here."}
                  </p>
                )}
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">
                            {language === "ar"
                              ? "الاسم الكامل"
                              : language === "he"
                              ? "שם מלא"
                              : "Name"}
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                              <Input
                                placeholder={
                                  language === "ar"
                                    ? "اسمك الكامل"
                                    : language === "he"
                                    ? "שמך המלא"
                                    : "Your full name"
                                }
                                className="pl-10 rtl:pl-3 rtl:pr-10"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">
                            {language === "ar"
                              ? "البريد الإلكتروني"
                              : language === "he"
                              ? "דואר אלקטרוני"
                              : "Email"}
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                              <Input
                                type="email"
                                placeholder="your.email@example.com"
                                className="pl-10 rtl:pl-3 rtl:pr-10"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">
                            {language === "ar"
                              ? "المدرسة أو المؤسسة"
                              : language === "he"
                              ? "בית ספר / מוסד"
                              : "Organization"}
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Building2 className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                              <Input
                                placeholder={
                                  language === "ar"
                                    ? "اسم المدرسة الثانوية أو الكلية"
                                    : language === "he"
                                    ? "שם בית הספר או המוסד החינוכי"
                                    : "Your institution or school"
                                }
                                className="pl-10 rtl:pl-3 rtl:pr-10"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">
                            {language === "ar"
                              ? "الرسالة"
                              : language === "he"
                              ? "הודעה"
                              : "Message"}
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={
                                language === "ar"
                                  ? "أخبرنا عن عدد الطلاب واحتياجات طاقم اللغة الإنجليزية..."
                                  : language === "he"
                                  ? "ספרו לנו על מספר התלמידים וצרכי צוות האנגלית..."
                                  : "Tell us about your needs and how we can help..."
                              }
                              className="min-h-[120px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting || !contactUrl}
                    >
                      {isSubmitting ? (
                        language === "ar"
                          ? "جارٍ الإرسال..."
                          : language === "he"
                          ? "שולח..."
                          : "Sending..."
                      ) : (
                        <>
                          {language === "ar"
                            ? "إرسال الطلب"
                            : language === "he"
                            ? "שליחת פנייה"
                            : "Send Message"}
                          <Send className="ml-2 rtl:mr-2 rtl:ml-0 w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </Card>

          {/* Locked Membership Overlay */}
          {!isMember && (
            <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
              <div className="bg-card/95 dark:bg-[#131b2e]/95 backdrop-blur-xl border-2 border-blue-500/30 dark:border-blue-500/20 rounded-2xl p-6 sm:p-10 max-w-xl w-full text-center shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center mx-auto text-white shadow-lg shadow-blue-500/30">
                  <Lock className="w-8 h-8" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs border border-blue-500/20">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    {language === "ar"
                      ? "مطلوب عضوية VIP أو اشتراك مدرسة"
                      : language === "he"
                      ? "נדרש מנוי VIP או רישיון בית ספרי"
                      : "VIP & School Membership Required"}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                    {language === "ar"
                      ? "قنوات التواصل المباشرة مقفلة"
                      : language === "he"
                      ? "ערוצי יצירת הקשר נעולים"
                      : "Contact & Onboarding Channels Are Locked"}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {language === "ar"
                      ? "للحصول على بريد التواصل المباشر، حجز لقاءات تجريبية لطاقم اللغة الإنجليزية، أو الاستشارة الأكاديمية، يتطلب ذلك عضوية VIP نشطة أو اشتراك مدرسة."
                      : language === "he"
                      ? "לצפייה בפרטי הקשר הישירים, תיאום הדגמות מקוונות לצוות האנגלית וליווי מוסדי, נדרש מנוי VIP פעיל או רישיון בית ספר."
                      : "Direct examiner contact, private Zoom demonstrations, and English department consultation are reserved for active VIP members and licensed partner schools."}
                  </p>
                </div>

                {/* Paid Buttons & Membership Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <Button
                    size="lg"
                    onClick={() => setShowBuyModal(true)}
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold shadow-md shadow-blue-600/30 gap-2 cursor-pointer"
                  >
                    <Crown className="w-4 h-4 text-amber-300" />
                    <span>
                      {language === "ar"
                        ? "شراء عضوية VIP الآن"
                        : language === "he"
                        ? "רכישת מנוי VIP עכשיו"
                        : "Buy VIP Membership"}
                    </span>
                  </Button>

                  <a
                    href="/login?role=student&next=%23contact"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-border bg-card hover:bg-accent/10 font-semibold gap-2 cursor-pointer"
                    >
                      <User className="w-4 h-4" />
                      <span>
                        {language === "ar"
                          ? "تسجيل دخول كعضو"
                          : language === "he"
                          ? "התחברות כמנוי"
                          : "Sign In as Member"}
                      </span>
                    </Button>
                  </a>
                </div>

                {/* Quick Unlock with Email / Code */}
                <div className="pt-4 border-t border-border/60">
                  {!showUnlockInput ? (
                    <button
                      type="button"
                      onClick={() => setShowUnlockInput(true)}
                      className="text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>
                        {language === "ar"
                          ? "لديك حساب VIP أو كود اشتراك؟ اضغط للفتح الفوري"
                          : language === "he"
                          ? "כבר יש לכם מנוי VIP או קוד בית ספרי? לחצו לפתיחה"
                          : "Already have a VIP account or school code? Unlock here"}
                      </span>
                      <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                    </button>
                  ) : (
                    <form onSubmit={handleVerifyPasscode} className="max-w-md mx-auto space-y-2 mt-2">
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          placeholder={
                            language === "ar"
                              ? "أدخل بريدك المشترك (مثال: mohamedbreek1175@gmail.com) أو الكود"
                              : language === "he"
                              ? "הזינו אימייל מנוי (למשל: mohamedbreek1175@gmail.com) או קוד"
                              : "Enter VIP email (e.g. mohamedbreek1175@gmail.com) or code"
                          }
                          value={unlockEmail}
                          onChange={(e) => setUnlockEmail(e.target.value)}
                          className="text-xs"
                        />
                        <Button
                          type="submit"
                          size="sm"
                          disabled={unlockLoading}
                          className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-bold"
                        >
                          {unlockLoading ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : language === "ar" ? (
                            "فتح"
                          ) : language === "he" ? (
                            "פתח"
                          ) : (
                            "Unlock"
                          )}
                        </Button>
                      </div>
                      {unlockError && (
                        <p className="text-xs text-red-500 font-medium text-left rtl:text-right">
                          {unlockError}
                        </p>
                      )}
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* VIP Purchase & Membership Modal */}
      <Dialog open={showBuyModal} onOpenChange={setShowBuyModal}>
        <DialogContent className="max-w-2xl bg-card border-border">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Crown className="w-5 h-5 text-amber-500" />
              </span>
              <DialogTitle className="text-2xl font-black">
                {language === "ar"
                  ? "اختر باقة العضوية المميزة (VIP)"
                  : language === "he"
                  ? "בחירת מנוי SkillUp VIP"
                  : "Choose Your VIP Membership"}
              </DialogTitle>
            </div>
            <DialogDescription>
              {language === "ar"
                ? "احصل على وصول كامل لجميع الامتحانات، فحص الذكاء الاصطناعي الشامل، وتواصل فوري مع الفاحصين."
                : language === "he"
                ? "גישה לכל הבחינות, בדיקת AI מקיפה, דוחות שגיאות וליווי ישיר."
                : "Get full access to all practice exams, in-depth AI teacher feedback, and priority support."}
            </DialogDescription>
          </DialogHeader>

          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {/* Student Pass */}
            <div className="p-5 rounded-2xl border-2 border-blue-500/40 bg-blue-50/50 dark:bg-blue-950/20 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-foreground text-lg">
                    {language === "ar"
                      ? "عضوية الطالب VIP"
                      : language === "he"
                      ? "מנוי תלמיד VIP"
                      : "Student VIP Pass"}
                  </span>
                  <Badge className="bg-blue-600 text-white font-bold">Popular</Badge>
                </div>
                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-3xl font-black text-foreground">₪49</span>
                  <span className="text-xs text-muted-foreground">
                    /{language === "ar" ? "شهرياً" : language === "he" ? "חודש" : "month"}
                  </span>
                </div>
                <ul className="text-xs space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2 text-foreground font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>
                      {language === "ar"
                        ? "10 امتحانات بجروت كاملة يومياً"
                        : language === "he"
                        ? "10 בחינות בגרות מלאות ביום"
                        : "10 full exams every day"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>
                      {language === "ar"
                        ? "فحص مفصل للأخطاء ومخارج النطق"
                        : language === "he"
                        ? "משוב מפורט על הגייה ודקדוק"
                        : "Detailed pronunciation & grammar feedback"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>
                      {language === "ar"
                        ? "وصول سحابي كامل عبر المتصفح (دون أي تثبيت)"
                        : language === "he"
                        ? "גישה מלאה בענן דרך הדפדפן (ללא צורך בהתקנה)"
                        : "100% Cloud & Browser-Based (No Installation)"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>
                      {language === "ar"
                        ? "قنوات تواصل مباشرة وخط دعم مخصص"
                        : language === "he"
                        ? "ערוץ קשר ישיר וקו תמיכה אישי"
                        : "Direct contact & priority line"}
                    </span>
                  </li>
                </ul>
              </div>
              <Button
                onClick={() => {
                  toast({
                    title:
                      language === "ar"
                        ? "جارٍ تحويلك لترقية الحساب..."
                        : language === "he"
                        ? "מועבר לשדרוג החשבון..."
                        : "Redirecting to VIP activation...",
                  });
                  window.location.href = "/login?role=student&next=%23contact";
                }}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold"
              >
                {language === "ar"
                  ? "شراء باقة الطالب VIP"
                  : language === "he"
                  ? "רכישת מנוי תלמיד VIP"
                  : "Buy Student VIP Pass"}
              </Button>
            </div>

            {/* School License */}
            <div className="p-5 rounded-2xl border border-border bg-card flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-foreground text-lg">
                    {language === "ar"
                      ? "ترخيص مدرسة وشبكة"
                      : language === "he"
                      ? "רישיון בית ספרי ורשתות"
                      : "School & Network"}
                  </span>
                  <Badge variant="outline" className="font-bold">Institutional</Badge>
                </div>
                <div className="flex items-baseline gap-1 my-3">
                  <span className="text-3xl font-black text-foreground">₪390</span>
                  <span className="text-xs text-muted-foreground">
                    /{language === "ar" ? "فصل دراسي" : language === "he" ? "סמסטר" : "semester"}
                  </span>
                </div>
                <ul className="text-xs space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2 text-foreground font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>
                      {language === "ar"
                        ? "حسابات غير محدودة للطلاب والمعلمين"
                        : language === "he"
                        ? "חשבונות ללא הגבלה לתלמידים ומורים"
                        : "Unlimited students & teachers"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>
                      {language === "ar"
                        ? "لوحة تحكم المعلم وتقارير البجروت"
                        : language === "he"
                        ? "לוח מורה ודוחות התקדמות"
                        : "Teacher dashboard & analytics"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>
                      {language === "ar"
                        ? "تدريب كامل لطاقم اللغة الإنجليزية"
                        : language === "he"
                        ? "הדרכה מלאה לצוות האנגלית"
                        : "Full teacher staff training"}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>
                      {language === "ar"
                        ? "دعم تقني وبيداغوجي مخصص"
                        : language === "he"
                        ? "תמיכה טכנית ופדגוגית צמודה"
                        : "Dedicated technical & pedagogical support"}
                    </span>
                  </li>
                </ul>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  toast({
                    title:
                      language === "ar"
                        ? "تم استلام الطلب!"
                        : language === "he"
                        ? "הבקשה התקבלה!"
                        : "Request Received!",
                    description:
                      language === "ar"
                        ? "سيتواصل معكم منسق المدارس قريباً."
                        : language === "he"
                        ? "רכז בתי הספר יצור עמכם קשר בהקדם."
                        : "Our school coordinator will contact you shortly.",
                  });
                  setShowBuyModal(false);
                }}
                className="w-full font-bold"
              >
                {language === "ar"
                  ? "طلب ترخيص مدرسة"
                  : language === "he"
                  ? "הזמנת רישיון בית ספר"
                  : "Request School License"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactForm;
