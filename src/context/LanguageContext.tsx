import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: "ltr" | "rtl";
  t: (key: string) => string;
}

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Top banner & Navbar
    "nav.brandSub": "Spoken Bagrut AI",
    "nav.brandDesc": "High School COBE Oral Exam & Classroom Platform",
    "nav.why": "Why iHelp",
    "nav.cobe": "COBE Formats",
    "nav.teacherPortal": "Teacher Portal",
    "nav.roi": "ROI Calculator",
    "nav.faq": "FAQ",
    "nav.teacherLogin": "Teacher Login",
    "nav.getStarted": "Get Started",
    "nav.langSwitch": "العربية",

    // Hero
    "hero.practice": "Start your free practice exam",
    "hero.allowance": "One free exam every seven days. School students sign in with their invited account.",
    "hero.announcement": "SkillUp Presents: iHelp Oral Platform",
    "hero.standard": "Israel Ministry of Education COBE Bagrut Standard",
    "hero.badgeSkillUp": "EdTech Brand",
    "hero.badgeIHelp": "AI Oral Platform",
    "hero.title1": "Master Your Spoken Bagrut with",
    "hero.title2": "AI-Powered Oral Practice",
    "hero.subtitle": "Practice the 4- and 5-point English oral Bagrut with realistic exam interfaces and AI grading. Get one free exam every seven days, detailed feedback with a paid or school account, and classroom progress analytics for teachers.",
    "hero.exploreFormats": "Explore COBE Formats",
    "hero.teacherDashboard": "Teacher Class Dashboard",
    "hero.watchDemo": "Watch Demo",
    "hero.stat1Val": "COBE",
    "hero.stat1Lbl": "Ministry of Education COBE Rubric Aligned",
    "hero.stat2Val": "4 & 5 Pts",
    "hero.stat2Lbl": "Complete Oral Bagrut Syllabus (Parts A, B, C)",
    "hero.stat3Val": "2",
    "hero.stat3Lbl": "Official-style and modern exam interfaces",
    "hero.stat4Val": "AI",
    "hero.stat4Lbl": "Grades and feedback by account plan",

    // Ecosystem
    "eco.badge": "THE iHELP ARCHITECTURE",
    "eco.title": "The Complete Spoken Bagrut Platform by SkillUp",
    "eco.desc": "Engineered specifically to solve the biggest bottleneck in Israeli high schools: preparing students for the Computerized Oral Bagrut Exam (COBE) without burning out teachers with endless 1-on-1 testing.",
    "eco.studentTitle": "Student AI Practice",
    "eco.studentTag": "FLUENCY & EXAM CONFIDENCE",
    "eco.grades": "Grades 10–12",
    "eco.studentDesc": "Provides a safe, judgment-free practice space. High school students overcome stage fright and practice real Bagrut oral prompts until they sound fluent and natural.",
    "eco.s1": "Official COBE Simulation: Parts A (Personal Interview), B (Project Presentation), and C (Video Clip Analysis).",
    "eco.s2": "Rubric-based grades for topic development, delivery, vocabulary and language. Paid and school accounts include detailed feedback.",
    "eco.s3": "Accessible Everywhere: Runs smoothly on any school Chromebook, laptop, or mobile phone with zero setup.",
    "eco.viewFormat": "View Exam Formats",
    "eco.teacherTitle": "Teacher Classroom Hub",
    "eco.teacherTag": "POWERED BY SKILLUP & iHELP SYSTEM",
    "eco.teachers": "Educators & Schools",
    "eco.teacherDesc": "Teachers invite students to their own classes, review completed exams and recordings, and follow student progress over time.",
    "eco.t1": "Personal account invitations: create your classes and invite students by email.",
    "eco.t2": "Private audio playback: review original student recordings for 90 days alongside their grades and feedback.",
    "eco.t3": "Class analytics: view participation, score trends, strong students and students who need extra attention.",
    "eco.viewPortal": "View Teacher Portal",
    "eco.cycleTitle": "The 4-Step Spoken Bagrut Cycle",
    "eco.cycleSub": "How schools seamlessly manage oral English exams with SkillUp iHelp",
    "eco.step1Title": "Classroom Invitations",
    "eco.step1Desc": "The teacher creates a class and sends personal invitations to students.",
    "eco.step2Title": "AI Spoken Mock Exam",
    "eco.step2Desc": "Students record English answers to personal, project and video questions in either exam interface.",
    "eco.step3Title": "AI Rubric Grading",
    "eco.step3Desc": "The original audio is graded against the track-specific rubric. The app displays progress while grading.",
    "eco.step4Title": "Teacher Review & Progress",
    "eco.step4Desc": "Teachers review audio, grades and feedback, then follow each student’s exam history and progress.",

    // Dashboard
    "dash.badge": "TEACHER CLASSROOM HUB",
    "dash.title": "Comprehensive Classroom Management & Analytics",
    "dash.desc": "Sign in to view your assigned classes, review student attempts and identify who needs more support.",

    // Curriculum
    "curriculum.badge": "OFFICIAL BAGRUT SYLLABUS",
    "curriculum.title": "Official COBE Spoken Bagrut Formats",
    "curriculum.desc": "iHelp by SkillUp covers the full Ministry of Education Computerized Oral Bagrut Exam (COBE) syllabus for 4 and 5-point matriculation candidates.",
    "curriculum.getAccess": "Get Practice Access",

    // Features
    "feat.badge": "PLATFORM CAPABILITIES",
    "feat.title": "Built for Students. Perfected for Teachers.",
    "feat.desc": "The combined power of iHelp's voice evaluation and SkillUp's EdTech ecosystem delivers an unmatched preparatory experience.",

    // Calculator
    "calc.badge": "ROI & EFFICIENCY CALCULATOR",
    "calc.title": "Calculate Your School's Savings",
    "calc.desc": "See how many hundreds of hours and shekels your school or department saves by automating COBE oral exam grading with SkillUp & iHelp.",
    "calc.institution": "Your Institution",
    "calc.students": "Number of Students",
    "calc.exams": "Oral Exams per Student / Year",
    "calc.hoursSaved": "Hours Saved for Teachers",
    "calc.budgetSaved": "Estimated Budget / Value Saved",
    "calc.shekel": "ILS",

    // Contact & Footer
    "contact.badge": "GET IN TOUCH",
    "contact.title": "Bring SkillUp iHelp to Your School",
    "contact.desc": "Schedule a pilot for your high school English department or request a municipal educational demonstration.",
    "footer.desc": "The premier AI-powered oral examination and classroom management platform for Israeli high school Spoken Bagrut (COBE).",
    "footer.rights": "SkillUp iHelp. All rights reserved.",
    "footer.devBy": "Developed by Mohamed Breek",
    "footer.tag": "Spoken Bagrut EdTech",
  },
  ar: {
    // Top banner & Navbar
    "nav.brandSub": "الذكاء الاصطناعي للبجروت الشفوي",
    "nav.brandDesc": "منصة امتحان البجروت الشفوي وإدارة الصفوف المدرسية COBE",
    "nav.why": "لماذا iHelp",
    "nav.cobe": "نماذج COBE",
    "nav.teacherPortal": "بوابة المعلم",
    "nav.roi": "حاسبة التوفير",
    "nav.faq": "الأسئلة الشائعة",
    "nav.teacherLogin": "دخول المعلمين",
    "nav.getStarted": "ابدأ الآن",
    "nav.langSwitch": "English",

    // Hero
    "hero.practice": "ابدأ امتحان التدريب المجاني",
    "hero.allowance": "امتحان مجاني كل سبعة أيام. طلاب المدارس يسجلون الدخول بحساباتهم المدعوة.",
    "hero.announcement": "SkillUp تقدم: منصة iHelp الشفوية",
    "hero.standard": "وفق معايير امتحان البجروت الشفوي COBE لوزارة التربية والتعليم",
    "hero.badgeSkillUp": "منظومة تكنولوجيا التعليم",
    "hero.badgeIHelp": "منصة البجروت الشفوي بالذكاء الاصطناعي",
    "hero.title1": "أتقن البجروت الشفوي في اللغة الإنجليزية مع",
    "hero.title2": "محاكاة ذكية للمحادثة الشفوية",
    "hero.subtitle": "تدرّب على البجروت الشفوي بالإنجليزية لمستوى 4 و5 وحدات بواجهات امتحان واقعية وتقييم بالذكاء الاصطناعي. امتحان مجاني كل سبعة أيام، وملاحظات مفصلة للحسابات المدفوعة والمدرسية، وتحليلات لتقدم الصفوف للمعلمين.",
    "hero.exploreFormats": "استكشف نماذج البجروت",
    "hero.teacherDashboard": "لوحة تحكم المعلم",
    "hero.watchDemo": "مشاهدة العرض",
    "hero.stat1Val": "COBE",
    "hero.stat1Lbl": "مطابق لمعايير تقييم COBE الرسمية لوزارة التربية",
    "hero.stat2Val": "4 و 5 وحدات",
    "hero.stat2Lbl": "تغطية شاملة لأقسام الامتحان الشفوي (أ، ب، ج)",
    "hero.stat3Val": "2",
    "hero.stat3Lbl": "واجهة بنمط الامتحان وواجهة حديثة",
    "hero.stat4Val": "AI",
    "hero.stat4Lbl": "علامات وملاحظات حسب خطة الحساب",

    // Ecosystem
    "eco.badge": "بنية نظام iHELP",
    "eco.title": "المنظومة الكاملة للبجروت الشفوي من SkillUp",
    "eco.desc": "صُممت خصيصاً لحل أكبر عقبة في المدارس الثانوية: إعداد الطلاب لامتحان البجروت المحوسب الشفوي (COBE) دون إرهاق المعلمين بجلسات اختبار فردية لا تنتهي.",
    "eco.studentTitle": "تدريب الطالب الذكي",
    "eco.studentTag": "طلاقة وثقة تامة بالامتحان",
    "eco.grades": "الصفوف 10–12",
    "eco.studentDesc": "توفير بيئة تدريب آمنة وخالية من التوتر. يتغلب طلاب الثانوية على رهبة التحدث ويتدربون على أسئلة البجروت الرسمية حتى تصبح لغتهم طليقة وطبيعية.",
    "eco.s1": "محاكاة رسمية لـ COBE: القسم أ (المقابلة الشخصية)، القسم ب (عرض المشروع)، والقسم ج (تحليل مقطع الفيديو).",
    "eco.s2": "علامات وفق معايير تطوير الموضوع والإلقاء والمفردات واللغة، مع ملاحظات مفصلة للحسابات المدفوعة والمدرسية.",
    "eco.s3": "متاح على جميع الأجهزة: يعمل بسلاسة على حواسيب المدرسة والكروم بوك والهواتف الذكية دون أي برامج معقدة.",
    "eco.viewFormat": "استعراض نماذج الامتحان",
    "eco.teacherTitle": "مركز المعلم وإدارة الصفوف",
    "eco.teacherTag": "مدعوم من SKILLUP ونظام iHELP",
    "eco.teachers": "للمعلمين والمدارس",
    "eco.teacherDesc": "يدعو المعلمون الطلاب إلى صفوفهم، ويراجعون الامتحانات والتسجيلات، ويتابعون تقدم كل طالب عبر الزمن.",
    "eco.t1": "حسابات شخصية مدعوة: أنشئ صفوفك وادعُ الطلاب عبر البريد الإلكتروني.",
    "eco.t2": "تسجيلات صوتية خاصة: راجع إجابات الطلاب الأصلية لمدة 90 يوماً إلى جانب علاماتهم وملاحظات التقييم.",
    "eco.t3": "تحليلات الصف: تابع المشاركة وتطور العلامات والطلاب المتفوقين والطلاب الذين يحتاجون إلى دعم إضافي.",
    "eco.viewPortal": "معاينة بوابة المعلم",
    "eco.cycleTitle": "دورة البجروت الشفوي في 4 خطوات",
    "eco.cycleSub": "كيف تدير المدارس الامتحانات الشفوية بسلاسة فائقة عبر SkillUp iHelp",
    "eco.step1Title": "دعوات الصف",
    "eco.step1Desc": "ينشئ المعلم صفاً ويرسل دعوات شخصية للطلاب عبر البريد الإلكتروني.",
    "eco.step2Title": "اختبار تجريبي شفوي ذكي",
    "eco.step2Desc": "يؤدي الطلاب تدريباً واقعياً مع الممتحن الذكي مجيبين على أسئلة المقابلة والمشروع والفيديو.",
    "eco.step3Title": "التقييم وفق المعايير",
    "eco.step3Desc": "تُقيّم التسجيلات الأصلية وفق معايير المسار المحدد، ويعرض التطبيق حالة التقييم أثناء الانتظار.",
    "eco.step4Title": "مراجعة التقدم",
    "eco.step4Desc": "يراجع المعلم التسجيلات والعلامات والملاحظات، ويتابع سجل امتحانات كل طالب وتقدمه.",

    // Dashboard
    "dash.badge": "معاينة بوابة المعلم ونظام iHelp",
    "dash.title": "إدارة شاملة للصفوف وتحليلات الأداء المتقدمة",
    "dash.desc": "سجل الدخول لعرض صفوفك ومراجعة محاولات الطلاب وتحديد من يحتاج إلى دعم إضافي.",

    // Curriculum
    "curriculum.badge": "منهاج البجروت الرسمي",
    "curriculum.title": "نماذج امتحان البجروت الشفوي COBE",
    "curriculum.desc": "تغطي منصة iHelp من SkillUp المنهاج الكامل لوزارة التربية والتعليم لامتحان البجروت المحوسب الشفوي لمساري 4 و 5 وحدات.",
    "curriculum.getAccess": "طلب وصول تجريبي",

    // Features
    "feat.badge": "ميزات المنصة",
    "feat.title": "صُممت للطلاب. وأُتقنت للمعلمين.",
    "feat.desc": "القوة المشتركة لتقييم الصوت الذكي من iHelp مع منظومة تكنولوجيا التعليم من SkillUp توفر تجربة تدريب وتحضير استثنائية.",

    // Calculator
    "calc.badge": "حاسبة التوفير والعائد",
    "calc.title": "احسب ما توفره مدرستك من وقت وتكاليف",
    "calc.desc": "تعرف على مئات الساعات والميزانيات التي توفرها مدرستك أو طاقم اللغة الإنجليزية من خلال أتمتة فحص امتحانات البجروت الشفوية عبر SkillUp و iHelp.",
    "calc.institution": "مؤسستك التعليمية",
    "calc.students": "عدد الطلاب",
    "calc.exams": "امتحانات شفوية لكل طالب سنوياً",
    "calc.hoursSaved": "ساعات العمل الموفرة للمعلمين",
    "calc.budgetSaved": "القيمة المالية التقديرية الموفرة",
    "calc.shekel": "شيكل",

    // Contact & Footer
    "contact.badge": "تواصل معنا",
    "contact.title": "جهّز مدرستك مع SkillUp iHelp",
    "contact.desc": "احجز برنامجاً تجريبياً لطاقم اللغة الإنجليزية في مدرستك الثانوية أو اطلب عرضاً توضيحياً لقسم التعليم في بلديتك.",
    "footer.desc": "المنصة الرائدة بالذكاء الاصطناعي لامتحان البجروت الشفوي وإدارة الصفوف المدرسية في البلاد.",
    "footer.rights": "SkillUp iHelp. جميع الحقوق محفوظة.",
    "footer.devBy": "تطوير محمد بريق",
    "footer.tag": "تكنولوجيا البجروت الشفوي",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  dir: "ltr",
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("ihelp_language");
    return saved === "ar" ? "ar" : "en";
  });

  const dir = language === "ar" ? "rtl" : "ltr";

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("ihelp_language", lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    if (language === "ar") {
      document.body.classList.add("font-arabic");
    } else {
      document.body.classList.remove("font-arabic");
    }
  }, [language, dir]);

  const t = (key: string): string => {
    return translations[language][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      <div dir={dir} className={language === "ar" ? "lang-ar" : "lang-en"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
