import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Sparkles,
  GraduationCap,
  Video,
  FileText,
  UserCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { appLink } from "@/lib/app-link";

interface BagrutPart {
  id: string;
  part: string;
  weight: string;
  focus: string;
  prompt: string;
  sampleAnswer: string;
  teacherTip: string;
}

const bagrutPartsEn: BagrutPart[] = [
  {
    id: "part-a",
    part: "Part A • Personal Interview",
    weight: "25% of Total Grade",
    focus: "Spontaneous interaction on personal background, hobbies, values, and experiences",
    prompt:
      "Tell me about a hobby or after-school activity you are passionate about. How did you get started, and what important life skills has it taught you?",
    sampleAnswer:
      "One activity I am deeply passionate about is volunteering at our local youth center. I started three years ago through our school community service program. Working with younger children taught me immense patience, active listening, and how to resolve conflicts calmly.",
    teacherTip:
      "Encourage students to expand beyond one-sentence answers by using the PREP method (Point, Reason, Example, Point).",
  },
  {
    id: "part-b",
    part: "Part B • Project Presentation",
    weight: "25% of Total Grade",
    focus: "Structured spoken delivery of the student's high school English research inquiry",
    prompt:
      "Describe the main research question of your English project. What sources did you examine, and what was the most surprising conclusion you reached?",
    sampleAnswer:
      "In our English research inquiry, we investigated how remote work environments impact workplace productivity and mental health. We surveyed several corporate managers and reviewed academic case studies. Surprisingly, we discovered that hybrid arrangements produce higher satisfaction than fully remote models.",
    teacherTip:
      "Students should never read from notes! iHelp trains them to speak spontaneously using bullet-point conceptual memory.",
  },
  {
    id: "part-c",
    part: "Part C • Video Clip Response",
    weight: "50% — two answers of 25 points",
    focus: "Listening comprehension of an authentic video clip followed by spoken analytical synthesis",
    prompt:
      "Based on the clip you just watched about renewable solar innovations, what were the main obstacles faced by the engineers and how did community collaboration help them succeed?",
    sampleAnswer:
      "According to the clip, the primary obstacle was developing cost-effective battery storage for remote desert villages during winter storms. Community collaboration proved vital because local residents provided geographical knowledge that allowed engineers to position panels optimally.",
    teacherTip:
      "Teach students to take quick mental notes during the clip and structure their answer with 'First', 'Additionally', and 'Consequently'.",
  },
];

const bagrutPartsAr: BagrutPart[] = [
  {
    id: "part-a",
    part: "القسم أ • المقابلة الشخصية (Personal Interview)",
    weight: "25% من العلامة الكلية",
    focus: "تفاعل عفوي حول الاهتمامات الشخصية، الهوايات، القيم، والتجارب اليومية",
    prompt:
      "Tell me about a hobby or after-school activity you are passionate about. How did you get started, and what important life skills has it taught you?",
    sampleAnswer:
      "One activity I am deeply passionate about is volunteering at our local youth center. I started three years ago through our school community service program. Working with younger children taught me immense patience, active listening, and how to resolve conflicts calmly.",
    teacherTip:
      "شجع الطلاب على التوسع بأكثر من جملة واحدة باستخدام منهجية PREP (نقطة، سبب، مثال، استنتاج).",
  },
  {
    id: "part-b",
    part: "القسم ب • عرض المشروع (Project Presentation)",
    weight: "25% من العلامة الكلية",
    focus: "عرض شفوي منظم لبحث ومشروع اللغة الإنجليزية في المرحلة الثانوية",
    prompt:
      "Describe the main research question of your English project. What sources did you examine, and what was the most surprising conclusion you reached?",
    sampleAnswer:
      "In our English research inquiry, we investigated how remote work environments impact workplace productivity and mental health. We surveyed several corporate managers and reviewed academic case studies. Surprisingly, we discovered that hybrid arrangements produce higher satisfaction than fully remote models.",
    teacherTip:
      "تنبيه هام للطلاب: تجنب القراءة المباشرة من الورق! يدرب نظام iHelp الطلاب على الحديث العفوي والاستناد على رؤوس أقلام.",
  },
  {
    id: "part-c",
    part: "القسم ج • تحليل مقطع الفيديو (Video Clip Response)",
    weight: "50% — إجابتان لكل منهما 25 علامة",
    focus: "فهم مسموع ومرئي لمقطع فيديو أصيل يتبعه تحليل شفوي سببي وربط منطقي",
    prompt:
      "Based on the clip you just watched about renewable solar innovations, what were the main obstacles faced by the engineers and how did community collaboration help them succeed?",
    sampleAnswer:
      "According to the clip, the primary obstacle was developing cost-effective battery storage for remote desert villages during winter storms. Community collaboration proved vital because local residents provided geographical knowledge that allowed engineers to position panels optimally.",
    teacherTip:
      "درب الطلاب على تدوين ملاحظات ذهنية سريعة أثناء عرض الفيديو وهيكلة إجابتهم بترتيب زمني ومنطقي.",
  },
];

const ExamCatalog = () => {
  const [activeTab, setActiveTab] = useState("part-a");
  const { language, t } = useLanguage();
  const parts = language === "ar" ? bagrutPartsAr : bagrutPartsEn;

  return (
    <section id="curriculum" className="py-24 px-4 bg-muted/40 relative overflow-hidden">
      {/* Ambient background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-accent/5 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/15 text-accent border-accent/30 text-xs px-3 py-1 font-semibold">
            {t("curriculum.badge")}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            {t("curriculum.title")}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {t("curriculum.desc")}
          </p>
        </div>

        {/* Tabs for Bagrut Parts */}
        <Tabs
          defaultValue="part-a"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 h-auto p-1.5 bg-card border border-border/80 rounded-2xl shadow-sm">
              <TabsTrigger
                value="part-a"
                className="py-2.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold gap-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-glow transition-all"
              >
                <UserCheck className="w-4 h-4" />
                {language === "ar" ? "القسم أ: المقابلة" : "Part A: Interview"}
              </TabsTrigger>

              <TabsTrigger
                value="part-b"
                className="py-2.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold gap-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-glow transition-all"
              >
                <FileText className="w-4 h-4" />
                {language === "ar" ? "القسم ب: المشروع" : "Part B: Project"}
              </TabsTrigger>

              <TabsTrigger
                value="part-c"
                className="py-2.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold gap-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-glow transition-all"
              >
                <Video className="w-4 h-4" />
                {language === "ar" ? "القسم ج: الفيديو" : "Part C: Video Clip"}
              </TabsTrigger>
            </TabsList>
          </div>

          {parts.map((item) => (
            <TabsContent key={item.id} value={item.id} className="space-y-6">
              <Card className="p-6 md:p-8 border-border/80 bg-card/95 backdrop-blur-sm shadow-elegant hover:shadow-glow hover:border-accent/30 transition-all duration-300 rounded-3xl">
                {/* Header of the part */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-border">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-foreground">{item.part}</h3>
                      <Badge className="bg-accent/15 text-accent border-accent/30 text-xs font-semibold">
                        {item.weight}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.focus}</p>
                  </div>

                  <a href={appLink("/signup")}>
                    <Button variant="outline" size="sm" className="text-xs gap-1.5 border-accent/40 text-accent hover:bg-accent/10">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {t("curriculum.getAccess")}
                    </Button>
                  </a>
                </div>

                {/* Question Prompt Box */}
                <div className="mb-6">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">
                    {language === "ar" ? "مثال توضيحي لسؤال تدريبي:" : "Illustrative Practice Prompt:"}
                  </span>
                  <div className="p-4 rounded-xl bg-muted/60 border border-border/80">
                    <p className="font-semibold text-foreground text-base leading-relaxed" dir="ltr">
                      "{item.prompt}"
                    </p>
                  </div>
                </div>

                {/* Model Student Response */}
                <div className="mb-6">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1.5">
                    {language === "ar" ? "مثال توضيحي لإجابة شفوية:" : "Illustrative Spoken Response:"}
                  </span>
                  <div className="p-4 rounded-xl bg-accent/5 border border-accent/20">
                    <p className="italic text-foreground/90 text-sm leading-relaxed" dir="ltr">
                      "{item.sampleAnswer}"
                    </p>
                  </div>
                </div>

                <div className="mb-6 p-4 rounded-xl bg-accent/5 border border-accent/20 text-sm leading-relaxed">
                  {language === "ar"
                    ? "أوزان تطوير الموضوع والإلقاء والمفردات واللغة: 60/10/20/10 لمسار 4 وحدات، و50/15/20/15 لمسار 5 وحدات. كل إجابة من 25 علامة؛ يتطلب قسم الفيديو إجابتين منفصلتين."
                    : "Topic development / delivery / vocabulary / language weights: 60/10/20/10 for 4 units; 50/15/20/15 for 5 units. Each response is out of 25. The video section has two separate responses."}
                </div>

                {/* Teacher / Pedagogical Tip */}
                <div className="p-4 rounded-xl bg-muted/40 border border-border flex items-start gap-3 text-xs text-muted-foreground">
                  <Sparkles className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">{language === "ar" ? "إرشاد تربوي للمعلم: " : "Pedagogical Guideline: "}</strong>
                    {item.teacherTip}
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ExamCatalog;
