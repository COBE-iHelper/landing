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
    "hero.announcement": "SkillUp Presents: iHelp Oral Platform",
    "hero.standard": "Israel Ministry of Education COBE Bagrut Standard",
    "hero.badgeSkillUp": "EdTech Brand",
    "hero.badgeIHelp": "AI Oral Platform",
    "hero.title1": "Master Your Spoken Bagrut with",
    "hero.title2": "AI-Powered Oral Practice",
    "hero.subtitle": "iHelp by SkillUp is Israel's intelligent oral examination platform. Practice high school COBE Spoken Bagrut (4 & 5 Points) with realistic AI-simulated examiners, receive instant pronunciation and fluency feedback, and give teachers full classroom grading analytics with simple join codes.",
    "hero.codePlaceholder": "Enter Class Code (e.g. ABCD1234)",
    "hero.joinBtn": "Join Class",
    "hero.joined": "Joined!",
    "hero.joinedMessage": "Connected to Ort Singalovski (Grade 12B). Redirecting to Teacher Portal preview...",
    "hero.exploreFormats": "Explore COBE Formats",
    "hero.teacherDashboard": "Teacher Class Dashboard",
    "hero.watchDemo": "Watch Demo",
    "hero.stat1Val": "100%",
    "hero.stat1Lbl": "Ministry of Education COBE Rubric Aligned",
    "hero.stat2Val": "4 & 5 Pts",
    "hero.stat2Lbl": "Complete Oral Bagrut Syllabus (Parts A, B, C)",
    "hero.stat3Val": "85%",
    "hero.stat3Lbl": "Grading Time Saved for Teachers & Coordinators",
    "hero.stat4Val": "Instant",
    "hero.stat4Lbl": "AI Voice Fluency & Pronunciation Scoring",

    // Ecosystem
    "eco.badge": "THE iHELP ARCHITECTURE",
    "eco.title": "The Complete Spoken Bagrut Platform by SkillUp",
    "eco.desc": "Engineered specifically to solve the biggest bottleneck in Israeli high schools: preparing students for the Computerized Oral Bagrut Exam (COBE) without burning out teachers with endless 1-on-1 testing.",
    "eco.studentTitle": "Student AI Practice",
    "eco.studentTag": "FLUENCY & EXAM CONFIDENCE",
    "eco.grades": "Grades 10–12",
    "eco.studentDesc": "Provides a safe, judgment-free practice space. High school students overcome stage fright and practice real Bagrut oral prompts until they sound fluent and natural.",
    "eco.s1": "Official COBE Simulation: Parts A (Personal Interview), B (Project Presentation), and C (Video Clip Analysis).",
    "eco.s2": "Instant Ministry Rubric Feedback: Numerical scoring on Fluency, Pronunciation, Vocabulary, and Grammar.",
    "eco.s3": "Accessible Everywhere: Runs smoothly on any school Chromebook, laptop, or mobile phone with zero setup.",
    "eco.viewFormat": "View Exam Formats",
    "eco.teacherTitle": "Teacher Classroom Hub",
    "eco.teacherTag": "POWERED BY SKILLUP & iHELP SYSTEM",
    "eco.teachers": "Educators & Schools",
    "eco.teacherDesc": "English coordinators and teachers generate a class join code, track real-time exam sessions, view student progression, and export grades to Ministry systems.",
    "eco.t1": "Classroom Join Codes: Create cohorts in 5 seconds (e.g. ABCD1234) without tedious student registration.",
    "eco.t2": "Integrated Audio Player & Transcripts: Listen to student spoken responses, inspect word-by-word transcripts, and adjust scores.",
    "eco.t3": "Full Analytics & Ministry Gradebook: Performance rings, score distribution donuts, at-risk flags, and 1-click CSV export.",
    "eco.viewPortal": "View Teacher Portal",
    "eco.cycleTitle": "The 4-Step Spoken Bagrut Cycle",
    "eco.cycleSub": "How schools seamlessly manage oral English exams with SkillUp iHelp",
    "eco.step1Title": "Classroom Code Creation",
    "eco.step1Desc": "Teacher generates a code (e.g. ABCD1234) and shares it with the class.",
    "eco.step2Title": "AI Spoken Mock Exam",
    "eco.step2Desc": "Students practice official COBE interview and project questions with the simulated voice examiner.",
    "eco.step3Title": "Instant Rubric Grading",
    "eco.step3Desc": "AI scores responses on Fluency, Pronunciation, Vocabulary, and Grammar according to MoE criteria.",
    "eco.step4Title": "Teacher Review & Sync",
    "eco.step4Desc": "Teacher listens to student audio recordings, confirms grades with 1 click, and exports to Ministry grade sheets.",

    // Dashboard
    "dash.badge": "LIVE TEACHER PORTAL & SYSTEM PREVIEW",
    "dash.title": "Comprehensive Classroom Management & Analytics",
    "dash.desc": "Experience the actual iHelp teacher analytics portal: switch between class overview, real-time student submissions with audio playback, and deep individual performance analysis.",
    "dash.tabOverview": "Teacher Overview",
    "dash.tabSubmissions": "Live Submissions & Audio",
    "dash.tabStudent": "Student Profile Deep-Dive",
    "dash.activeSession": "Active Session",
    "dash.school": "Ort Singalovski High School • Class 11B (COBE Prep)",
    "dash.joinCodeLabel": "Class Join Code",
    "dash.copyCode": "Copy Code",
    "dash.copied": "Copied!",
    "dash.newCode": "↺ New Code",
    "dash.exportCsv": "↓ Export CSV",
    "dash.exportSuccess": "Downloaded Ministry CSV! ✓",
    "dash.statActiveClasses": "Active Classes",
    "dash.statEnrolled": "Enrolled Students",
    "dash.statTotalExams": "Exam Sessions",
    "dash.statThisWeek": "18 this week",
    "dash.statClassAvg": "Class Average Score",
    "dash.statPassing": "Passing Students (75+)",
    "dash.statTimeSaved": "Teacher Time Saved",
    "dash.scoreDistribution": "Score Distribution",
    "dash.distExcellent": "Excellent (90+)",
    "dash.distGood": "Good (75–89)",
    "dash.distAverage": "Average (60–74)",
    "dash.distNeedsWork": "Needs Work (<60)",
    "dash.topPerformers": "Top Performers",
    "dash.needsAttention": "Needs Attention / At Risk",
    "dash.activity30Days": "Exam Activity — Last 30 Days",
    "dash.byExamType": "By Exam Type",
    "dash.allSubmissions": "All",
    "dash.autoGraded": "Auto-Graded",
    "dash.flagged": "Flagged Review",
    "dash.rubricTitle": "Spoken Bagrut Rubric Breakdown",
    "dash.audioRecording": "Spoken Audio Recording",
    "dash.audioQuality": "16kHz High-Fidelity Audio",
    "dash.transcriptLabel": "Recorded Audio Transcript:",
    "dash.fluency": "Fluency & Pronunciation",
    "dash.vocab": "Vocabulary & Topic Depth",
    "dash.grammar": "Grammar & Syntax Accuracy",
    "dash.aiFeedback": "AI Examiner Assessment:",
    "dash.approveBtn": "Approve & Sync with Gradebook",
    "dash.approved": "Grade Synced to Ministry ✓",
    "dash.leaveNote": "Leave Teacher Note",
    "dash.studentProfile": "Student Performance Profile",
    "dash.studentCode": "Student Code",
    "dash.joined": "Joined",
    "dash.scoreOverTime": "Score Progress Over Time",
    "dash.examHistory": "Exam Session History",

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
    "hero.announcement": "SkillUp تقدم: منصة iHelp الشفوية",
    "hero.standard": "وفق معايير امتحان البجروت الشفوي COBE لوزارة التربية والتعليم",
    "hero.badgeSkillUp": "منظومة تكنولوجيا التعليم",
    "hero.badgeIHelp": "منصة البجروت الشفوي بالذكاء الاصطناعي",
    "hero.title1": "أتقن البجروت الشفوي في اللغة الإنجليزية مع",
    "hero.title2": "محاكاة ذكية للمحادثة الشفوية",
    "hero.subtitle": "منصة iHelp من SkillUp هي المنصة الرائدة في البلاد لاختبارات البجروت الشفوي باللغة الإنجليزية (COBE 4 و 5 وحدات). تتيح للطلاب التدرّب مع ممتحن ذكاء اصطناعي يحاكي الامتحان الرسمي، مع تقييم فوري للطلاقة والنطق، وتمنح المعلمين لوحة تحكم كاملة لعلامات الصفوف عبر رموز انضمام سهلة.",
    "hero.codePlaceholder": "أدخل رمز الصف (مثال: ABCD1234)",
    "hero.joinBtn": "انضم للصف",
    "hero.joined": "تم الانضمام!",
    "hero.joinedMessage": "تم الاتصال بالصف بنجاح. جارٍ نقلك إلى لوحة تحكم المعلم...",
    "hero.exploreFormats": "استكشف نماذج البجروت",
    "hero.teacherDashboard": "لوحة تحكم المعلم",
    "hero.watchDemo": "مشاهدة العرض",
    "hero.stat1Val": "100%",
    "hero.stat1Lbl": "مطابق لمعايير تقييم COBE الرسمية لوزارة التربية",
    "hero.stat2Val": "4 و 5 وحدات",
    "hero.stat2Lbl": "تغطية شاملة لأقسام الامتحان الشفوي (أ، ب، ج)",
    "hero.stat3Val": "85%",
    "hero.stat3Lbl": "توفير في وقت الفحص والتقييم للمعلمين والمركزين",
    "hero.stat4Val": "فوري",
    "hero.stat4Lbl": "تقييم فوري بالذكاء الاصطناعي للطلاقة والنطق وقواعد اللغة",

    // Ecosystem
    "eco.badge": "بنية نظام iHELP",
    "eco.title": "المنظومة الكاملة للبجروت الشفوي من SkillUp",
    "eco.desc": "صُممت خصيصاً لحل أكبر عقبة في المدارس الثانوية: إعداد الطلاب لامتحان البجروت المحوسب الشفوي (COBE) دون إرهاق المعلمين بجلسات اختبار فردية لا تنتهي.",
    "eco.studentTitle": "تدريب الطالب الذكي",
    "eco.studentTag": "طلاقة وثقة تامة بالامتحان",
    "eco.grades": "الصفوف 10–12",
    "eco.studentDesc": "توفير بيئة تدريب آمنة وخالية من التوتر. يتغلب طلاب الثانوية على رهبة التحدث ويتدربون على أسئلة البجروت الرسمية حتى تصبح لغتهم طليقة وطبيعية.",
    "eco.s1": "محاكاة رسمية لـ COBE: القسم أ (المقابلة الشخصية)، القسم ب (عرض المشروع)، والقسم ج (تحليل مقطع الفيديو).",
    "eco.s2": "تقييم فوري وفق المعايير الوزارية: علامات دقيقة على الطلاقة، النطق، الثروة اللغوية، ودقة القواعد.",
    "eco.s3": "متاح على جميع الأجهزة: يعمل بسلاسة على حواسيب المدرسة والكروم بوك والهواتف الذكية دون أي برامج معقدة.",
    "eco.viewFormat": "استعراض نماذج الامتحان",
    "eco.teacherTitle": "مركز المعلم وإدارة الصفوف",
    "eco.teacherTag": "مدعوم من SKILLUP ونظام iHELP",
    "eco.teachers": "للمعلمين والمدارس",
    "eco.teacherDesc": "يقوم معلمو ومركزو اللغة الإنجليزية بإنشاء رمز صف بدقائق، ومتابعة تسجيلات الطلاب الشفوية، ومراجعة الدرجات المقترحة تلقائياً، وتصدير العلامات بضغطة زر.",
    "eco.t1": "رموز انضمام سريعة: إنشاء صفوف خلال 5 ثوانٍ (مثل ABCD1234) دون الحاجة لتسجيلات معقدة.",
    "eco.t2": "مشغل صوت متكامل ونصوص تفريغ: الاستماع لتسجيلات الطلاب الصوتية، ومراجعة النص كلمة بكلمة، وتعديل العلامة بسهولة.",
    "eco.t3": "إحصائيات متقدمة وتصدير وزاري: حلقات تقييم الطلاب، ورسوم بيانية لتوزيع الدرجات، وتنبيه الطلاب المتعثرين، وتصدير فوري لملف Excel/CSV.",
    "eco.viewPortal": "معاينة بوابة المعلم",
    "eco.cycleTitle": "دورة البجروت الشفوي في 4 خطوات",
    "eco.cycleSub": "كيف تدير المدارس الامتحانات الشفوية بسلاسة فائقة عبر SkillUp iHelp",
    "eco.step1Title": "إنشاء رمز الصف",
    "eco.step1Desc": "ينشئ المعلم رمزاً للصف (مثل ABCD1234) ويشاركه مع الطلاب.",
    "eco.step2Title": "اختبار تجريبي شفوي ذكي",
    "eco.step2Desc": "يؤدي الطلاب تدريباً واقعياً مع الممتحن الذكي مجيبين على أسئلة المقابلة والمشروع والفيديو.",
    "eco.step3Title": "تصحيح وتقييم فوري",
    "eco.step3Desc": "يُقيّم الذكاء الاصطناعي الأداء على الطلاقة، النطق، المفردات، والقواعد وفق المعايير الرسمية.",
    "eco.step4Title": "مراجعة وتصدير للوزارة",
    "eco.step4Desc": "يستمع المعلم إلى التسجيلات، ويعتمد العلامات بضغطة واحدة، ويصدرها فوراً لسجلات المدرسة.",

    // Dashboard
    "dash.badge": "معاينة بوابة المعلم ونظام iHelp",
    "dash.title": "إدارة شاملة للصفوف وتحليلات الأداء المتقدمة",
    "dash.desc": "جرب لوحة تحكم المعلم الفعلية المستوحاة من نظام iHelp: تنقل بين نظرة عامة على الصف، وتسجيلات الطلاب الصوتية الحية، وتحليل أداء كل طالب بالتفصيل.",
    "dash.tabOverview": "نظرة عامة على الصف",
    "dash.tabSubmissions": "التسجيلات الحية والتصحيح",
    "dash.tabStudent": "الملف التفصيلي للطالب",
    "dash.activeSession": "جلسة نشطة",
    "dash.school": "المدرسة الثانوية • صف 11 ب (تحضير COBE)",
    "dash.joinCodeLabel": "رمز انضمام الصف",
    "dash.copyCode": "نسخ الرمز",
    "dash.copied": "تم النسخ!",
    "dash.newCode": "↺ رمز جديد",
    "dash.exportCsv": "↓ تصدير ملف CSV",
    "dash.exportSuccess": "تم تنزيل ملف الدرجات الوزاري! ✓",
    "dash.statActiveClasses": "الصفوف النشطة",
    "dash.statEnrolled": "الطلاب المسجلون",
    "dash.statTotalExams": "جلسات الامتحانات",
    "dash.statThisWeek": "18 جلسة هذا الأسبوع",
    "dash.statClassAvg": "معدل علامات الصف",
    "dash.statPassing": "الطلاب الناجحون (+75)",
    "dash.statTimeSaved": "الوقت الموفر للمعلم",
    "dash.scoreDistribution": "توزيع الدرجات",
    "dash.distExcellent": "ممتاز (+90)",
    "dash.distGood": "جيد جداً (75–89)",
    "dash.distAverage": "متوسط (60–74)",
    "dash.distNeedsWork": "بحاجة لتحسين (<60)",
    "dash.topPerformers": "أعلى الطلاب أداءً",
    "dash.needsAttention": "طلاب يحتاجون متابعة",
    "dash.activity30Days": "نشاط الامتحانات — آخر 30 يوماً",
    "dash.byExamType": "حسب نوع الامتحان",
    "dash.allSubmissions": "الكل",
    "dash.autoGraded": "مصحح تلقائياً",
    "dash.flagged": "يحتاج مراجعة",
    "dash.rubricTitle": "تفصيل تقييم البجروت الشفوي",
    "dash.audioRecording": "التسجيل الصوتي للطالب",
    "dash.audioQuality": "جودة صوتية نقية 16kHz",
    "dash.transcriptLabel": "نص الإجابة الصوتية المسجلة:",
    "dash.fluency": "الطلاقة والنطق الصوتي",
    "dash.vocab": "الثروة اللغوية والعمق",
    "dash.grammar": "دقة القواعد وتركيب الجمل",
    "dash.aiFeedback": "ملاحظات الممتحن الذكي:",
    "dash.approveBtn": "اعتماد ومزامنة مع سجل العلامات",
    "dash.approved": "تمت المزامنة مع سجل الوزارة ✓",
    "dash.leaveNote": "إضافة ملاحظة للمعلم",
    "dash.studentProfile": "ملف أداء الطالب الشفوي",
    "dash.studentCode": "معرّف الطالب",
    "dash.joined": "تاريخ الانضمام",
    "dash.scoreOverTime": "تطور الدرجات عبر الزمن",
    "dash.examHistory": "سجل جلسات الامتحانات السابقة",

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
