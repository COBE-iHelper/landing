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
      "Simulate real Bagrut oral exam conditions. The AI examiner asks official question prompts, manages timers, and creates an authentic test environment without student anxiety.",
    badge: "Voice AI Engine",
  },
  {
    icon: BarChart3,
    title: "Instant Rubric Analytics",
    description:
      "Get immediate grading aligned with Israel's Ministry of Education criteria: Fluency & Pronunciation, Vocabulary Variety, Grammar Accuracy, and Task Completion.",
    badge: "Official MoE Rubric",
  },
  {
    icon: School,
    title: "Teacher Classroom Codes",
    description:
      "Teachers generate 8-character class codes (e.g., ABCD1234). Students join instantly, and teachers get all oral recordings and auto-suggested grades in one centralized portal.",
    badge: "EdTech Dashboard",
  },
  {
    icon: GraduationCap,
    title: "4 & 5 Points Complete Syllabus",
    description:
      "Comprehensive coverage of the Ministry of Education oral curriculum. Practice official Part A personal interviews, Part B project presentations, and Part C video clip responses.",
    badge: "Full Curriculum",
  },
  {
    icon: Clock,
    title: "85% Time Saved for Schools",
    description:
      "Say goodbye to spending 15 minutes per student doing 1-on-1 oral Bagrut tests. Teachers can grade an entire cohort of 100+ students in minutes with automated AI pre-scoring.",
    badge: "Massive Efficiency",
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
      "محاكاة دقيقة لظروف امتحان البجروت الشفوي الحقيقي. يطرح الممتحن الذكي الأسئلة الرسمية ويدير المؤقت، مما يزيل حاجز الخوف والتوتر لدى الطالب.",
    badge: "محرك الصوت الذكي",
  },
  {
    icon: BarChart3,
    title: "تقييم فوري بالمعايير الرسمية",
    description:
      "تصحيح وعلامات فورية مطابقة لمعايير وزارة التربية والتعليم: الطلاقة ومخارج الحروف، تنوع المفردات، دقة القواعد، وإنجاز المهمة المطلوبة.",
    badge: "معايير الوزارة الرسمية",
  },
  {
    icon: School,
    title: "رموز انضمام سريعة للصفوف",
    description:
      "ينشئ المعلم رمز صف مكون من 8 خانات (مثل ABCD1234). ينضم الطلاب فوراً، وتصل كافة التسجيلات الصوتية والعلامات المقترحة إلى لوحة تحكم المعلم.",
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
    title: "توفير 85% من وقت المعلمين",
    description:
      "وداعاً لإهدار 15 دقيقة لكل طالب في الاختبارات الشفوية الفردية. يستطيع المعلمون الآن تقييم صفوف تضم أكثر من 100 طالب بدقائق معدودة عبر التقييم الآلي.",
    badge: "كفاءة قياسية",
  },
  {
    icon: ShieldCheck,
    title: "آمن، ومتاح عبر المتصفح",
    description:
      "يعمل بسهولة على أي جهاز كمبيوتر أو كروم بوك أو تابلت أو هاتف محمول دون الحاجة لتثبيت أي برامج أو شراء ميكروفونات خاصة.",
    badge: "جاهز فوراً",
  },
];

const Features = () => {
  const { language, t } = useLanguage();
  const features = language === "ar" ? featuresAr : featuresEn;

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
              className="p-7 shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border-border/80 bg-card flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
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
