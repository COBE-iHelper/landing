import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/context/LanguageContext";

const faqsEn = [
  {
    question: "How does the AI evaluate oral responses against the Ministry of Education rubric?",
    answer:
      "Our AI voice model is calibrated specifically on Israel's official COBE oral rubric. It scores spoken responses across four key criteria: Fluency & Pronunciation (30%), Vocabulary Diversity & CEFR level (30%), Grammar Accuracy (20%), and Task Completion (20%). It provides instant numerical grades and pinpoint qualitative feedback for student improvement.",
  },
  {
    question: "How do teachers set up classes and assign mock oral exams?",
    answer:
      "Within seconds, a teacher logs into the Teacher Portal, creates a classroom (e.g. 'Grade 11B - COBE Prep'), and generates a unique 8-character join code (such as ABCD1234). Students enter this code on their phones or laptops to join. As students record their mock exams, all recordings, AI-suggested grades, and transcripts stream live into the teacher's dashboard.",
  },
  {
    question: "Does iHelp support both 4-point and 5-point English Bagrut tracks?",
    answer:
      "Yes! iHelp fully supports both the 4-point and 5-point matriculation tracks. The AI examiner automatically calibrates its question complexity, vocabulary depth, and scoring rubric thresholds according to the student's enrolled level.",
  },
  {
    question: "Does the platform require specialized microphone equipment or software installation?",
    answer:
      "Not at all. The entire platform is 100% web-based and responsive. Students and teachers can use any standard computer, Chromebook, iPad, or smartphone with built-in microphones and headphones.",
  },
  {
    question: "Is student audio data private and protected?",
    answer:
      "Yes. All student voice recordings and transcripts are encrypted and accessible strictly by the verified student and their assigned teacher. Audio recordings are never sold or shared with third parties.",
  },
  {
    question: "Can our school test the platform before committing to a departmental license?",
    answer:
      "Absolutely! We offer free pilot programs for high school English departments and educational networks. Reach out via our contact form below to activate a pilot class code for your school.",
  },
];

const faqsAr = [
  {
    question: "كيف يقيّم الذكاء الاصطناعي الإجابات الشفوية وفق معايير وزارة التربية والتعليم؟",
    answer:
      "تم تدريب وضبط نموذج الصوت الذكي خصيصاً وفق المعايير الرسمية لامتحان COBE للبجروت الشفوي في البلاد. يقيّم النموذج الإجابات عبر 4 محاور رئيسية: الطلاقة والنطق الصوتي (30%)، الثروة اللغوية ومستوى المفردات (30%)، دقة القواعد والتراكيب (20%)، وإنجاز المهمة (20%). كما يقدم درجات عددية وملاحظات نوعية دقيقة للتحسين الفوري.",
  },
  {
    question: "كيف ينشئ المعلمون الصفوف ويوزعون الامتحانات التجريبية؟",
    answer:
      "خلال ثوانٍ معدودة، يدخل المعلم إلى بوابة المعلم، وينشئ صفاً جديداً، ويولد رمز انضمام سريع من 8 خانات (مثل ABCD1234). يدخل الطلاب هذا الرمز من هواتفهم أو حواسيبهم. ومع قيام الطلاب بتسجيل إجاباتهم، تتدفق التسجيلات والعلامات المقترحة والنصوص المفرغة مباشرة إلى شاشة المعلم.",
  },
  {
    question: "هل يدعم نظام iHelp كلاً من مسار 4 وحدات و 5 وحدات؟",
    answer:
      "نعم بالتأكيد! يدعم النظام مساري 4 و 5 وحدات بالكامل، حيث يعاير الممتحن الذكي مستوى صعوبة الأسئلة، وثراء المفردات، وسقف العلامات تلقائياً بحسب المسار المحدد للطالب.",
  },
  {
    question: "هل تحتاج المنصة إلى ميكروفونات خاصة أو تثبيت برامج؟",
    answer:
      "كلا، المنصة سحابية وتعمل 100% عبر المتصفح. يستطيع الطلاب والمعلمون استخدام أي حاسوب عادي أو كروم بوك أو تابلت أو هاتف ذكي بميكروفون وسماعات عادية.",
  },
  {
    question: "هل التسجيلات الصوتية وبيانات الطلاب محمية وتتمتع بالخصوصية؟",
    answer:
      "نعم، جميع التسجيلات الصوتية ونصوص التفريغ مشفرة بالكامل، ولا تتاح إلا للطالب ومعلمه المعتمد في المدرسة، ولا يتم أبداً بيع البيانات أو مشاركتها مع أي جهة خارجية.",
  },
  {
    question: "هل يمكن لمدرستنا تجربة المنصة ضمن برنامج تجريبي أولاً؟",
    answer:
      "بكل سرور! نحن نقدم برامج تجريبية مجانية لمدارس المرحلة الثانوية وأقسام اللغة الإنجليزية. تواصلوا معنا عبر النموذج أدناه لتفعيل رمز تجريبي لمدرستكم.",
  },
];

const FAQ = () => {
  const { language, t } = useLanguage();
  const faqs = language === "ar" ? faqsAr : faqsEn;

  return (
    <section id="faq" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 text-xs px-3 py-1 font-semibold">
            {t("nav.faq")}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            {language === "ar" ? "كل ما تود معرفته عن المنصة" : "Everything You Need to Know"}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {language === "ar"
              ? "إجابات شافية حول SkillUp iHelp، متطلبات امتحان COBE، رموز الصفوف، ومعايير التقييم."
              : "Have questions about SkillUp iHelp, COBE Bagrut guidelines, classroom codes, or rubric scoring? We've got answers."}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-xl px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-bold text-base hover:text-accent hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
