import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  School,
  Clock,
  BarChart3,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const featuresEn = [
  {
    icon: Bot,
    title: "AI-Powered Spoken Examiner",
    description:
      "Simulate real Bagrut oral exam conditions. The AI examiner asks standardized question prompts, manages timers, and creates an authentic test environment without student anxiety.",
    badge: "Voice AI Engine",
  },
  {
    icon: BarChart3,
    title: "Rubric Grades & Progress",
    description:
      "Receive grades for topic development, delivery, vocabulary and language. Detailed feedback is included for paid and school accounts.",
    badge: "Standard MoE Rubric",
  },
  {
    icon: School,
    title: "Personal School Invitations",
    description:
      "Teachers create classes and invite students by email. Each student has an individual account, exam history and private recordings.",
    badge: "EdTech Dashboard",
  },
  {
    icon: GraduationCap,
    title: "4 & 5 Points Complete Syllabus",
    description:
      "Comprehensive coverage of the Ministry of Education oral curriculum. Practice standardized Part A personal interviews, Part B project presentations, and Part C video clip responses.",
    badge: "Full Curriculum",
  },
  {
    icon: Clock,
    title: "Teacher Class Analytics",
    description:
      "Follow participation and score trends, review student attempts, and identify strong students and those who need more attention.",
    badge: "Class Progress",
  },
  {
    icon: ShieldCheck,
    title: "Safe, Browser-Based & Accessible",
    description:
      "Works effortlessly on any standard school computer, Chromebook, tablet, or smartphone without heavy software installation or specialized microphone hardware.",
    badge: "Zero Setup",
  },
];

const featuresAr = [
  {
    icon: Bot,
    title: "ممتحن شفهي ذكي بالصوت",
    description:
      "محاكاة دقيقة لظروف امتحان البجروت الشفوي الحقيقي. يطرح الممتحن الذكي الأسئلة النموذجية ويدير المؤقت، مما يزيل حاجز الخوف والتوتر لدى الطالب.",
    badge: "محرك الصوت الذكي",
  },
  {
    icon: BarChart3,
    title: "علامات وتقدم وفق المعايير",
    description:
      "علامات في تطوير الموضوع والإلقاء والمفردات واللغة، مع ملاحظات مفصلة للحسابات المدفوعة والمدرسية.",
    badge: "معايير وزارة التربية",
  },
  {
    icon: School,
    title: "دعوات مدرسية شخصية",
    description:
      "ينشئ المعلم صفوفاً ويدعو الطلاب بالبريد الإلكتروني. لكل طالب حساب شخصي وسجل امتحانات وتسجيلات خاصة.",
    badge: "لوحة تحكم المعلم",
  },
  {
    icon: GraduationCap,
    title: "تغطية كاملة لمساري 4 و 5 وحدات",
    description:
      "تغطية شاملة لكافة محاور منهاج البجروت الشفوي: القسم أ (المقابلة الشخصية)، القسم ب (المشروع والبحث)، والقسم ج (تحليل مقاطع الفيديو).",
    badge: "المنهاج الكامل",
  },
  {
    icon: Clock,
    title: "تحليلات صفوف المعلم",
    description:
      "تابع المشاركة وتطور العلامات، وراجع محاولات الطلاب، وحدد المتفوقين ومن يحتاجون إلى مزيد من الاهتمام.",
    badge: "تقدم الصف",
  },
  {
    icon: ShieldCheck,
    title: "آمن، ومتاح عبر المتصفح",
    description:
      "يعمل بسهولة على أي جهاز كمبيوتر أو كروم بوك أو تابلت أو هاتف محمول دون الحاجة لتثبيت أي برامج أو شراء ميكروفونات خاصة.",
    badge: "جاهز فوراً",
  },
];

const featuresHe = [
  {
    icon: Bot,
    title: "בוחן שפתי מבוסס בינה מלאכותית",
    description:
      "סימולציה אותנטית של תנאי בחינת הבגרות בעל פה. בוחן ה-AI שואל שאלות ממחוון הבגרות, מנהל זמנים ומסיר את חרדת המבחן של התלמיד.",
    badge: "מנוע קולי מתקדם",
  },
  {
    icon: BarChart3,
    title: "ציונים ומשוב לפי מחוון הבגרות",
    description:
      "ציונים מדויקים לפיתוח נושא, שטף ומסירה, אוצר מילים ומבנה דקדוקי. משוב מפורט כלול למנויים ובתי ספר.",
    badge: "מחוון משרד החינוך",
  },
  {
    icon: School,
    title: "הזמנות אישיות לבית הספר",
    description:
      "מורים פותחים כיתות ומזמינים תלמידים ישירות במייל. לכל תלמיד חשבון אישי, היסטוריית בחינות והקלטות פרטיות.",
    badge: "דשבורד מורים",
  },
  {
    icon: GraduationCap,
    title: "כיסוי מלא ל-4 ו-5 יח״ל",
    description:
      "תרגול מלא של כל חלקי הבגרות בעל פה: חלק א' (ראיון אישי), חלק ב' (הצגת פרויקט), וחלק ג' (ניתוח קטע וידאו).",
    badge: "סילבוס מלא",
  },
  {
    icon: Clock,
    title: "ניתוח כיתתי מתקדם למורים",
    description:
      "מעקב אחר שיעורי השתתפות, מגמות ציונים, סקירת ניסיונות התלמידים וזיהוי תלמידים הזקוקים לתגבור.",
    badge: "מעקב כיתתי",
  },
  {
    icon: ShieldCheck,
    title: "מאובטח, נגיש ופועל בדפדפן",
    description:
      "פועל באופן חלק בכל מחשב בית ספר, כרומבוק, טאבלט או סמארטפון ללא התקנת תוכנות כבדות או רכישת חומרה מיוחדת.",
    badge: "ללא צורך בהתקנה",
  },
];

const Features = () => {
  const { language, t } = useLanguage();
  const features = language === "ar" ? featuresAr : language === "he" ? featuresHe : featuresEn;

  return (
    <section id="features" className="py-24 px-4 gradient-feature">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/15 text-accent border-accent/30 text-xs px-3 py-1 font-semibold">
            {t("feat.badge")}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            {t("feat.title")}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("feat.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-card p-7 shadow-elegant hover:shadow-glow transition-all duration-300 border-border/80 bg-card rounded-2xl hover:border-accent/50 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <Badge variant="secondary" className="text-[11px] font-medium">
                    {feature.badge}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold mb-2.5 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
