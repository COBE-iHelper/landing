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
    question: "How are oral responses graded?",
    answer: "The original audio is evaluated with the COBE rubric. Topic development, delivery, vocabulary and language weigh 60/10/20/10 for 4 units and 50/15/20/15 for 5 units. Personal and project responses each count for 25 points; two clip responses count for 25 each. These are AI practice grades. Paid and school accounts also receive strengths, mistakes and explanations.",
  },
  {
    question: "How do teachers and students join a school?",
    answer: "The school operator invites teachers by email. Teachers create their classes and email personal invitations to students. Students register and verify their own accounts, then accept their invitation. Teachers can review only students in their assigned classes.",
  },
  {
    question: "How many practice exams can I take?",
    answer: "Free accounts receive one exam every seven days. Paid individuals and students at subscribed schools receive ten completed exams per Israel calendar day. Technical grading failures refund the allowance. Subscriptions are currently managed by the operator; online payment will be added later.",
  },
  {
    question: "Do I need to install software?",
    answer: "The browser app works with a microphone and internet connection. Subscribed schools can also use the desktop application. Choose between an official-style exam layout and a modern layout. Navigation supports English, Arabic and Hebrew; exam prompts and responses remain English.",
  },
  {
    question: "Who can access my recordings, and how long are they kept?",
    answer: "Recordings are stored privately and sent to the configured AI provider for grading. You can play your recordings, and your assigned teacher can review recordings from your school attempts. Audio expires after 90 days; grades, feedback and exam history remain available.",
  },
  {
    question: "Can our school discuss a pilot?",
    answer: "Contact us below to discuss your school’s needs and subscription access. Individual students can also create an account for one free practice exam every seven days.",
  },
];

const faqsAr = [
  {
    question: "كيف تُقيّم الإجابات الشفوية؟",
    answer: "تُقيّم التسجيلات الأصلية وفق معايير COBE. أوزان تطوير الموضوع والإلقاء والمفردات واللغة هي 60/10/20/10 لمسار 4 وحدات و50/15/20/15 لمسار 5 وحدات. الإجابة الشخصية والمشروع لكل منهما 25 علامة، وللفيديو إجابتان لكل منهما 25 علامة. هذه علامات تدريبية بالذكاء الاصطناعي، وتشمل الحسابات المدفوعة والمدرسية نقاط القوة والأخطاء وتفسير التقييم.",
  },
  {
    question: "كيف ينضم المعلمون والطلاب إلى المدرسة؟",
    answer: "يدعو مسؤول المنصة المعلمين بالبريد الإلكتروني. ينشئ المعلم صفوفه ويرسل دعوات شخصية للطلاب. يسجل الطلاب حساباتهم ويؤكدون البريد ثم يقبلون الدعوة. يمكن للمعلم مراجعة طلاب صفوفه المعينة فقط.",
  },
  {
    question: "كم امتحاناً تدريبياً يمكنني إجراءه؟",
    answer: "يحصل الحساب المجاني على امتحان كل سبعة أيام. تحصل الحسابات المدفوعة وطلاب المدارس المشتركة على عشرة امتحانات مكتملة في اليوم حسب توقيت إسرائيل. تُسترد الحصة عند فشل تقني في التقييم. تُدار الاشتراكات حالياً بواسطة مسؤول المنصة، وسيُضاف الدفع الإلكتروني لاحقاً.",
  },
  {
    question: "هل يجب تثبيت برنامج؟",
    answer: "يعمل التطبيق عبر المتصفح مع ميكروفون واتصال بالإنترنت، ويمكن للمدارس المشتركة استخدام تطبيق سطح المكتب أيضاً. تتوفر واجهة بنمط الامتحان وواجهة حديثة، مع تنقل بالعربية والعبرية والإنجليزية. تبقى أسئلة الامتحان والإجابات باللغة الإنجليزية.",
  },
  {
    question: "من يمكنه الوصول إلى تسجيلاتي، وكم تُحفظ؟",
    answer: "تُحفظ التسجيلات بشكل خاص وتُرسل إلى مزود الذكاء الاصطناعي المحدد للتقييم. يمكنك الاستماع إلى تسجيلاتك، ويمكن لمعلم صفك مراجعة تسجيلات محاولاتك المدرسية. تنتهي صلاحية الصوت بعد 90 يوماً، وتبقى العلامات والملاحظات وسجل الامتحانات.",
  },
  {
    question: "هل يمكن مناقشة تجربة المنصة لمدرستنا؟",
    answer: "تواصلوا معنا أدناه لمناقشة احتياجات المدرسة والاشتراك. ويمكن للطلاب إنشاء حساب فردي للحصول على امتحان مجاني كل سبعة أيام.",
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
              ? "إجابات شافية حول SkillUp iHelp، متطلبات امتحان COBE، دعوات الصفوف، ومعايير التقييم."
              : "Have questions about SkillUp iHelp, COBE Bagrut guidelines, classroom invitations, or rubric scoring? We've got answers."}
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
