import { Badge } from "@/components/ui/badge";
import { UserCheck, MessageSquare, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const stepsEn = [
  {
    number: "01",
    icon: UserCheck,
    title: "Create Your Account",
    description:
      "Sign up and verify your email. School students accept a personal invitation from their teacher; individuals can use the free weekly allowance.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Practice Spoken Bagrut with AI",
    description:
      "Choose an exam interface, record personal and project answers, and respond to two questions about a video clip. Submit your original audio for grading.",
  },
  {
    number: "03",
    icon: Award,
    title: "Review Grades & Progress",
    description:
      "Review grades and past attempts. Paid and school accounts receive detailed feedback; teachers follow progress across their classes.",
  },
];

const stepsAr = [
  {
    number: "01",
    icon: UserCheck,
    title: "إنشاء حسابك",
    description:
      "سجل حسابك وأكد بريدك الإلكتروني. يقبل طلاب المدارس دعوة شخصية من المعلم، ويمكن للأفراد استخدام الحصة الأسبوعية المجانية.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "التدرب على المحادثة مع الممتحن الذكي",
    description:
      "اختر واجهة الامتحان وسجل إجاباتك الشخصية وعن المشروع وسؤالين حول مقطع فيديو، ثم أرسل التسجيلات الأصلية للتقييم.",
  },
  {
    number: "03",
    icon: Award,
    title: "مراجعة العلامات والتقدم",
    description:
      "راجع العلامات والمحاولات السابقة. تحصل الحسابات المدفوعة والمدرسية على ملاحظات مفصلة، ويتابع المعلم تقدم طلاب صفوفه.",
  },
];

const stepsHe = [
  {
    number: "01",
    icon: UserCheck,
    title: "יצירת חשבון והתחברות",
    description:
      "נרשמים ומאמתים כתובת אימייל. תלמידי בית ספר מאשרים הזמנה אישית מהמורה; משתמשים פרטיים יכולים לנצל מבחן תרגול חינמי מדי שבוע.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "תרגול בגרות בעל פה עם AI",
    description:
      "בוחרים ממשק בחינה, מקליטים תשובות לראיון האישי, לפרויקט ולשתי שאלות על קטע הוידאו, ושולחים את ההקלטות לבדיקה מיידית.",
  },
  {
    number: "03",
    icon: Award,
    title: "קבלת ציונים וסקירת התקדמות",
    description:
      "צופים בציונים לפי מחוון הבגרות ובמשוב מפורט (למנויים ובתי ספר). מורים עוקבים אחר התקדמות הכיתה ומאזינים להקלטות.",
  },
];

const HowItWorks = () => {
  const { language, t } = useLanguage();
  const steps = language === "ar" ? stepsAr : language === "he" ? stepsHe : stepsEn;

  return (
    <section id="how-it-works" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 text-xs px-3 py-1 font-semibold">
            {language === "ar"
              ? "كيف يعمل النظام"
              : language === "he"
              ? "איך המערכת עובדת"
              : "HOW IT WORKS"}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            {language === "ar"
              ? "ثلاث خطوات بسيطة للتفوق في البجروت الشفوي"
              : language === "he"
              ? "שלושה צעדים פשוטים להצלחה בבגרות בעל פה"
              : "Three Simple Steps to Spoken Bagrut Success"}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {language === "ar"
              ? "المسار الأسهل والأنسب للطلاب لبناء ثقتهم الشفوية، وللمعلمين لتوفير مئات ساعات الاختبار والتصحيح."
              : language === "he"
              ? "הדרך היעילה ביותר לתלמידים לבנות ביטחון בדיבור, ולמורים לחסוך מאות שעות בדיקה ומבחנים אישיים."
              : "The streamlined pathway for students to build spoken confidence and educators to save hundreds of teaching hours"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glow-card text-center p-7 rounded-3xl bg-card border border-border/80 shadow-elegant hover:border-accent/50 hover:shadow-glow transition-all duration-300 h-full flex flex-col items-center group">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-elegant group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-black shadow-glow animate-pulse">
                      {step.number}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
