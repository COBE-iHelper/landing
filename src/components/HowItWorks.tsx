import { Badge } from "@/components/ui/badge";
import { UserCheck, MessageSquare, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const stepsEn = [
  {
    number: "01",
    icon: UserCheck,
    title: "Join with Code or Start Self-Study",
    description:
      "Enter your teacher's 8-digit class code (e.g. ABCD1234) or launch self-guided practice instantly on any phone or laptop.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Practice Spoken Bagrut with AI",
    description:
      "Engage with our AI examiner across official COBE interview prompts and video clips. Receive instantaneous feedback on fluency and grammar.",
  },
  {
    number: "03",
    icon: Award,
    title: "Review Audio & Sync Ministry Grades",
    description:
      "Teachers listen to audio recordings, verify the AI rubric score with one click, and export grades directly to Ministry systems.",
  },
];

const stepsAr = [
  {
    number: "01",
    icon: UserCheck,
    title: "الانضمام برمز الصف أو البدء فوراً",
    description:
      "يقوم الطالب بإدخال رمز الصف المكون من 8 خانات (مثل ABCD1234) أو يبدأ التدريب الذاتي مباشرة من أي هاتف أو كمبيوتر.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "التدرب على المحادثة مع الممتحن الذكي",
    description:
      "يتفاعل الطالب صوتياً مع ممتحن الذكاء الاصطناعي مجيباً على أسئلة المقابلة والمشروع، ويتلقى تقييماً لحظياً للطلاقة والقواعد.",
  },
  {
    number: "03",
    icon: Award,
    title: "مراجعة التسجيل واعتماد علامات الوزارة",
    description:
      "يستمع المعلم للتسجيل الصوتي للطالب، ويعتمد العلامة بضغطة زر واحدة، ويصدر النتائج مباشرة لسجلات درجات المدرسة.",
  },
];

const HowItWorks = () => {
  const { language, t } = useLanguage();
  const steps = language === "ar" ? stepsAr : stepsEn;

  return (
    <section id="how-it-works" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 text-xs px-3 py-1 font-semibold">
            {language === "ar" ? "كيف يعمل النظام" : "HOW IT WORKS"}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            {language === "ar" ? "ثلاث خطوات بسيطة للتفوق في البجروت الشفوي" : "Three Simple Steps to Spoken Bagrut Success"}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {language === "ar"
              ? "المسار الأسهل والأنسب للطلاب لبناء ثقتهم الشفوية، وللمعلمين لتوفير مئات ساعات الاختبار والتصحيح."
              : "The streamlined pathway for students to build spoken confidence and educators to save hundreds of teaching hours"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center p-6 rounded-2xl bg-card border border-border/70 shadow-sm hover:border-accent/40 transition-all h-full flex flex-col items-center">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-elegant">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-black shadow-glow">
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
