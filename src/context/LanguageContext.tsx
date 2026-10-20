import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ar" | "he";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: "ltr" | "rtl";
  t: (key: string) => string;
}

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Top banner & Navbar
    "nav.brandSub": "Spoken Bagrut",
    "nav.brandDesc": "High School COBE Oral Exam",
    "nav.why": "Why iHelp",
    "nav.cobe": "COBE Formats",
    "nav.teacherPortal": "Teacher Portal",
    "nav.roi": "ROI Calculator",
    "nav.faq": "FAQ",
    "nav.teacherLogin": "Teacher Login",
    "nav.studentLogin": "Student Login",
    "nav.getStarted": "Get Started",
    "nav.langSwitch": "Language",

    // Hero
    "hero.practice": "Start your free practice exam",
    "hero.allowance":
      "One free exam every seven days. School students sign in with their invited account.",
    "hero.announcement": "SkillUp Presents: iHelp Oral Platform",
    "hero.standard": "Israel Ministry of Education COBE Bagrut Standard",
    "hero.badgeSkillUp": "EdTech Brand",
    "hero.badgeIHelp": "AI Oral Platform",
    "hero.title1": "Master Your Spoken Bagrut with",
    "hero.title2": "AI-Powered Oral Practice",
    "hero.subtitle":
      "Practice the 4- and 5-point English oral Bagrut with realistic exam interfaces and AI grading. Get one free exam every seven days, detailed feedback with a paid or school account, and classroom progress analytics for teachers.",
    "hero.exploreFormats": "Explore COBE Formats",
    "hero.teacherDashboard": "Teacher Class Dashboard",
    "hero.watchDemo": "Watch Demo",
    "hero.stat1Val": "COBE",
    "hero.stat1Lbl": "Ministry of Education COBE Rubric Aligned",
    "hero.stat2Val": "4 & 5 Pts",
    "hero.stat2Lbl": "Complete Oral Bagrut Syllabus (Parts A, B, C)",
    "hero.stat3Val": "2",
    "hero.stat3Lbl": "Standardized and modern exam interfaces",
    "hero.stat4Val": "AI",
    "hero.stat4Lbl": "Grades and feedback by account plan",

    // Ecosystem
    "eco.badge": "THE iHELP ARCHITECTURE",
    "eco.title": "The Complete Spoken Bagrut Platform by SkillUp",
    "eco.desc":
      "Engineered specifically to solve the biggest bottleneck in Israeli high schools: preparing students for the Computerized Oral Bagrut Exam (COBE) without burning out teachers with endless 1-on-1 testing.",
    "eco.studentTitle": "Student AI Practice",
    "eco.studentTag": "FLUENCY & EXAM CONFIDENCE",
    "eco.grades": "Grades 10–12",
    "eco.studentDesc":
      "Provides a safe, judgment-free practice space. High school students overcome stage fright and practice real Bagrut oral prompts until they sound fluent and natural.",
    "eco.s1":
      "Comprehensive COBE Simulation: Parts A (Personal Interview), B (Project Presentation), and C (Video Clip Analysis).",
    "eco.s2":
      "Rubric-based grades for topic development, delivery, vocabulary and language. Paid and school accounts include detailed feedback.",
    "eco.s3":
      "Accessible Everywhere: Runs smoothly on any school Chromebook, laptop, or mobile phone with zero setup.",
    "eco.viewFormat": "View Exam Formats",
    "eco.teacherTitle": "Teacher Classroom Hub",
    "eco.teacherTag": "POWERED BY SKILLUP & iHELP SYSTEM",
    "eco.teachers": "Educators & Schools",
    "eco.teacherDesc":
      "Teachers invite students to their own classes, review completed exams and recordings, and follow student progress over time.",
    "eco.t1":
      "Personal account invitations: create your classes and invite students by email.",
    "eco.t2":
      "Private audio playback: review original student recordings for 90 days alongside their grades and feedback.",
    "eco.t3":
      "Class analytics: view participation, score trends, strong students and students who need extra attention.",
    "eco.viewPortal": "View Teacher Portal",
    "eco.cycleTitle": "The 4-Step Spoken Bagrut Cycle",
    "eco.cycleSub":
      "How schools seamlessly manage oral English exams with SkillUp iHelp",
    "eco.step1Title": "Classroom Invitations",
    "eco.step1Desc":
      "The teacher creates a class and sends personal invitations to students.",
    "eco.step2Title": "AI Spoken Mock Exam",
    "eco.step2Desc":
      "Students record English answers to personal, project and video questions in either exam interface.",
    "eco.step3Title": "AI Rubric Grading",
    "eco.step3Desc":
      "The original audio is graded against the track-specific rubric. The app displays progress while grading.",
    "eco.step4Title": "Teacher Review & Progress",
    "eco.step4Desc":
      "Teachers review audio, grades and feedback, then follow each student’s exam history and progress.",

    // Dashboard
    "dash.badge": "TEACHER CLASSROOM HUB",
    "dash.title": "Comprehensive Classroom Management & Analytics",
    "dash.desc":
      "Sign in to view your assigned classes, review student attempts and identify who needs more support.",

    // Curriculum
    "curriculum.badge": "COMPLETE BAGRUT SYLLABUS",
    "curriculum.title": "COBE Spoken Bagrut Formats & Syllabus",
    "curriculum.desc":
      "iHelp by SkillUp covers the full Ministry of Education Computerized Oral Bagrut Exam (COBE) syllabus for 4 and 5-point matriculation candidates.",
    "curriculum.getAccess": "Get Practice Access",

    // Features
    "feat.badge": "PLATFORM CAPABILITIES",
    "feat.title": "Built for Students. Perfected for Teachers.",
    "feat.desc":
      "The combined power of iHelp's voice evaluation and SkillUp's EdTech ecosystem delivers an unmatched preparatory experience.",

    // Calculator
    "calc.badge": "ROI & EFFICIENCY CALCULATOR",
    "calc.title": "Calculate Your School's Savings",
    "calc.desc":
      "See how many hundreds of hours and shekels your school or department saves by automating COBE oral exam grading with SkillUp & iHelp.",
    "calc.institution": "Your Institution",
    "calc.students": "Number of Students",
    "calc.exams": "Oral Exams per Student / Year",
    "calc.hoursSaved": "Hours Saved for Teachers",
    "calc.budgetSaved": "Estimated Budget / Value Saved",
    "calc.shekel": "ILS",

    // Suite
    "suite.badge": "SKILLUP ECOSYSTEM",
    "suite.title": "Explore the Full SkillUp Educational Suite",
    "suite.desc":
      "Specialized AI platforms built for Israeli students, matriculation candidates, and higher education applicants.",
    "suite.cobeTitle": "SkillUp COBE (iHelp)",
    "suite.cobeSub": "Spoken Bagrut English",
    "suite.cobeDesc":
      "High school 4 & 5-point Computerized Oral Bagrut Exam practice with real-time AI examiners.",
    "suite.cobeBtn": "Launch COBE Portal",
    "suite.engTitle": "SkillUp Eng (AmirNet)",
    "suite.engSub": "Academic & Psychometric English",
    "suite.engDesc":
      "121 full AmirNet simulations, 2,000+ vocabulary flashcards, and university exemption tools.",
    "suite.engBtn": "Launch AmirNet",
    "suite.hebTitle": "SkillUp Heb (YaelNet)",
    "suite.hebSub": "Hebrew Academic Proficiency",
    "suite.hebDesc":
      "Full preparation and simulations for the NITE YAEL / YAELNET Hebrew proficiency exam.",
    "suite.hebBtn": "Launch YaelNet",

    // Contact & Footer
    "contact.badge": "GET IN TOUCH",
    "contact.title": "Bring SkillUp iHelp to Your School",
    "contact.desc":
      "Schedule a pilot for your high school English department or request a municipal educational demonstration.",
    "footer.desc":
      "The premier AI-powered oral examination and classroom management platform for Israeli high school Spoken Bagrut (COBE).",
    "footer.rights": "SkillUp iHelp. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.accessibility": "Accessibility Statement",
    "footer.moeBadge": "MoE Cyber Security Standard v1.6 Aligned",
    "footer.zdrBadge": "Zero Data Retention AI",
    "footer.devBy": "Developed by Mohamed Breek",
    "footer.tag": "Spoken Bagrut EdTech",

    // Auth & Login
    "auth.title": "Sign In to SkillUp iHelp",
    "auth.subtitle":
      "Access the Computerized Oral Bagrut (COBE) practice platform and classroom dashboard.",
    "auth.badge": "SkillUp iHelp Portal",
    "auth.studentTab": "Student Practice Login",
    "auth.teacherTab": "Teacher & Dashboard Login",
    "auth.studentSubtitle":
      "Access the Computerized Oral Bagrut (COBE) exam practice app and AI feedback.",
    "auth.teacherSubtitle":
      "Access your classroom dashboard, student recordings, grading metrics, and school analytics.",
    "auth.googleSignIn": "Continue with Google",
    "auth.orEmail": "Or sign in with email",
    "auth.email": "Email address",
    "auth.password": "Password",
    "auth.submit": "Sign In & Continue",
    "auth.studentSubmit": "Sign In to COBE Practice",
    "auth.teacherSubmit": "Sign In to Teacher Dashboard",
    "auth.guestDirect": "Launch Practice Directly (Demo)",
    "auth.guestStudent": "Launch Free Practice directly (Demo)",
    "auth.guestTeacher": "Launch Teacher Dashboard directly (Demo)",
    "auth.teacherBadge": "Teacher & Administrator Portal",
    "auth.note":
      "Sign in with your school account or personal credentials to access your dashboard and exams.",
    "auth.teacherNote":
      "Authorized teachers can listen to student audio, review AI-scored rubrics, and manage classrooms.",
    "auth.studentNote":
      "High school students can simulate COBE Bagrut exams with live voice grading.",
    "auth.back": "Back to Home",
  },
  ar: {
    // Top banner & Navbar
    "nav.brandSub": "بجروت الشفوي",
    "nav.brandDesc": "منصة البجروت الشفوي وإدارة الصفوف المدرسية COBE",
    "nav.why": "لماذا iHelp",
    "nav.cobe": "نماذج COBE",
    "nav.teacherPortal": "بوابة المعلم",
    "nav.roi": "حاسبة التوفير",
    "nav.faq": "الأسئلة الشائعة",
    "nav.teacherLogin": "دخول المعلمين",
    "nav.studentLogin": "دخول الطلاب",
    "nav.getStarted": "ابدأ الآن",
    "nav.langSwitch": "اللغة",

    // Hero
    "hero.practice": "ابدأ امتحان التدريب المجاني",
    "hero.allowance":
      "امتحان مجاني كل سبعة أيام. طلاب المدارس يسجلون الدخول بحساباتهم المدعوة.",
    "hero.announcement": "SkillUp تقدم: منصة iHelp الشفوية",
    "hero.standard":
      "وفق معايير امتحان البجروت الشفوي COBE لوزارة التربية والتعليم",
    "hero.badgeSkillUp": "منظومة تكنولوجيا التعليم",
    "hero.badgeIHelp": "منصة البجروت الشفوي  ",
    "hero.title1": "أتقن البجروت الشفوي في اللغة الإنجليزية مع",
    "hero.title2": "محاكاة ذكية للمحادثة الشفوية",
    "hero.subtitle":
      "تدرّب على البجروت الشفوي بالإنجليزية لمستوى 4 و5 وحدات بواجهات امتحان واقعية وتقييم بالذكاء الاصطناعي. امتحان مجاني كل سبعة أيام، وملاحظات مفصلة للحسابات المدفوعة والمدرسية، وتحليلات لتقدم الصفوف للمعلمين.",
    "hero.exploreFormats": "استكشف نماذج البجروت",
    "hero.teacherDashboard": "لوحة تحكم المعلم",
    "hero.watchDemo": "مشاهدة العرض",
    "hero.stat1Val": "COBE",
    "hero.stat1Lbl": "مطابق لمعايير تقييم COBE لوزارة التربية والتعليم",
    "hero.stat2Val": "4 و 5 وحدات",
    "hero.stat2Lbl": "تغطية شاملة لأقسام الامتحان الشفوي (أ، ب، ج)",
    "hero.stat3Val": "2",
    "hero.stat3Lbl": "واجهة بنمط الامتحان وواجهة حديثة",
    "hero.stat4Val": "AI",
    "hero.stat4Lbl": "علامات وملاحظات حسب خطة الحساب",

    // Ecosystem
    "eco.badge": "بنية نظام iHELP",
    "eco.title": "المنظومة الكاملة للبجروت الشفوي من SkillUp",
    "eco.desc":
      "صُممت خصيصاً لحل أكبر عقبة في المدارس الثانوية: إعداد الطلاب لامتحان البجروت المحوسب الشفوي (COBE) دون إرهاق المعلمين بجلسات اختبار فردية لا تنتهي.",
    "eco.studentTitle": "تدريب الطالب الذكي",
    "eco.studentTag": "طلاقة وثقة تامة بالامتحان",
    "eco.grades": "الصفوف 10–12",
    "eco.studentDesc":
      "توفير بيئة تدريب آمنة وخالية من التوتر. يتغلب طلاب الثانوية على رهبة التحدث ويتدربون على أسئلة البجروت النموذجية حتى تصبح لغتهم طليقة وطبيعية.",
    "eco.s1":
      "محاكاة شاملة لـ COBE: القسم أ (المقابلة الشخصية)، القسم ب (عرض المشروع)، والقسم ج (تحليل مقطع الفيديو).",
    "eco.s2":
      "علامات وفق معايير تطوير الموضوع والإلقاء والمفردات واللغة، مع ملاحظات مفصلة للحسابات المدفوعة والمدرسية.",
    "eco.s3":
      "متاح على جميع الأجهزة: يعمل بسلاسة على حواسيب المدرسة والكروم بوك والهواتف الذكية دون أي برامج معقدة.",
    "eco.viewFormat": "استعراض نماذج الامتحان",
    "eco.teacherTitle": "مركز المعلم وإدارة الصفوف",
    "eco.teacherTag": "مدعوم من SKILLUP ونظام iHELP",
    "eco.teachers": "للمعلمين والمدارس",
    "eco.teacherDesc":
      "يدعو المعلمون الطلاب إلى صفوفهم، ويراجعون الامتحانات والتسجيلات، ويتابعون تقدم كل طالب عبر الزمن.",
    "eco.t1":
      "حسابات شخصية مدعوة: أنشئ صفوفك وادعُ الطلاب عبر البريد الإلكتروني.",
    "eco.t2":
      "تسجيلات صوتية خاصة: راجع إجابات الطلاب الأصلية لمدة 90 يوماً إلى جانب علاماتهم وملاحظات التقييم.",
    "eco.t3":
      "تحليلات الصف: تابع المشاركة وتطور العلامات والطلاب المتفوقين والطلاب الذين يحتاجون إلى دعم إضافي.",
    "eco.viewPortal": "معاينة بوابة المعلم",
    "eco.cycleTitle": "دورة البجروت الشفوي في 4 خطوات",
    "eco.cycleSub":
      "كيف تدير المدارس الامتحانات الشفوية بسلاسة فائقة عبر SkillUp iHelp",
    "eco.step1Title": "دعوات الصف",
    "eco.step1Desc":
      "ينشئ المعلم صفاً ويرسل دعوات شخصية للطلاب عبر البريد الإلكتروني.",
    "eco.step2Title": "اختبار تجريبي شفوي ذكي",
    "eco.step2Desc":
      "يؤدي الطلاب تدريباً واقعياً مع الممتحن الذكي مجيبين على أسئلة المقابلة والمشروع والفيديو.",
    "eco.step3Title": "التقييم وفق المعايير",
    "eco.step3Desc":
      "تُقيّم التسجيلات الأصلية وفق معايير المسار المحدد، ويعرض التطبيق حالة التقييم أثناء الانتظار.",
    "eco.step4Title": "مراجعة التقدم",
    "eco.step4Desc":
      "يراجع المعلم التسجيلات والعلامات والملاحظات، ويتابع سجل امتحانات كل طالب وتقدمه.",

    // Dashboard
    "dash.badge": "معاينة بوابة المعلم ونظام iHelp",
    "dash.title": "إدارة شاملة للصفوف وتحليلات الأداء المتقدمة",
    "dash.desc":
      "سجل الدخول لعرض صفوفك ومراجعة محاولات الطلاب وتحديد من يحتاج إلى دعم إضافي.",

    // Curriculum
    "curriculum.badge": "منهاج البجروت الشامل",
    "curriculum.title": "نماذج امتحان البجروت الشفوي COBE",
    "curriculum.desc":
      "تغطي منصة iHelp من SkillUp المنهاج الكامل لوزارة التربية والتعليم لامتحان البجروت المحوسب الشفوي لمساري 4 و 5 وحدات.",
    "curriculum.getAccess": "طلب وصول تجريبي",

    // Features
    "feat.badge": "ميزات المنصة",
    "feat.title": "صُممت للطلاب. وأُتقنت للمعلمين.",
    "feat.desc":
      "القوة المشتركة لتقييم الصوت الذكي من iHelp مع منظومة تكنولوجيا التعليم من SkillUp توفر تجربة تدريب وتحضير استثنائية.",

    // Calculator
    "calc.badge": "حاسبة التوفير والعائد",
    "calc.title": "احسب ما توفره مدرستك من وقت وتكاليف",
    "calc.desc":
      "تعرف على مئات الساعات والميزانيات التي توفرها مدرستك أو طاقم اللغة الإنجليزية من خلال أتمتة فحص امتحانات البجروت الشفوية عبر SkillUp و iHelp.",
    "calc.institution": "مؤسستك التعليمية",
    "calc.students": "عدد الطلاب",
    "calc.exams": "امتحانات شفوية لكل طالب سنوياً",
    "calc.hoursSaved": "ساعات العمل الموفرة للمعلمين",
    "calc.budgetSaved": "القيمة المالية التقديرية الموفرة",
    "calc.shekel": "شيكل",

    // Suite
    "suite.badge": "منظومة SKILLUP التعليمية",
    "suite.title": "استكشف باقة منصات SkillUp التعليمية الكاملة",
    "suite.desc":
      "منصات ذكية متخصصة صُممت للطلاب ومتقدمي امتحانات البجروت والقبول الأكاديمي والجامعي.",
    "suite.cobeTitle": "SkillUp COBE (iHelp)",
    "suite.cobeSub": "البجروت الشفوي بالإنجليزية",
    "suite.cobeDesc":
      "تدريب واقعي ومحاكاة لامتحان البجروت المحوسب الشفوي 4 و5 وحدات مع تقييم فوري بالذكاء الاصطناعي.",
    "suite.cobeBtn": "فتح بوابة COBE",
    "suite.engTitle": "SkillUp Eng (أمير نت)",
    "suite.engSub": "الإنجليزية الأكاديمية والبسيخومتري",
    "suite.engDesc":
      "121 امتحاناً كاملاً، أكثر من 2,000 بطاقة ذكية للكلمات، وحاسبة الإعفاء الجامعي (פטור).",
    "suite.engBtn": "فتح أمير نت",
    "suite.hebTitle": "SkillUp Heb (ياعيل نت)",
    "suite.hebSub": "إتقان اللغة العبرية الأكاديمية",
    "suite.hebDesc":
      "تحضير شامل ومحاكاة دقيقة لامتحانات ياعيل وياعيل نت التابعة للمركز القطري للامتحانات والتقييم.",
    "suite.hebBtn": "فتح ياعيل نت",

    // Contact & Footer
    "contact.badge": "تواصل معنا",
    "contact.title": "جهّز مدرستك مع SkillUp iHelp",
    "contact.desc":
      "احجز برنامجاً تجريبياً لطاقم اللغة الإنجليزية في مدرستك الثانوية أو اطلب عرضاً توضيحياً لقسم التعليم في بلديتك.",
    "footer.desc":
      "المنصة الرائدة بالذكاء الاصطناعي لامتحان البجروت الشفوي وإدارة الصفوف المدرسية في البلاد.",
    "footer.rights": "SkillUp iHelp. جميع الحقوق محفوظة.",
    "footer.privacy": "سياسة الخصوصية",
    "footer.terms": "شروط الاستخدام",
    "footer.accessibility": "بيان إمكانية الوصول",
    "footer.moeBadge": "معايير أمان وزارة المعارف 1.6",
    "footer.zdrBadge": "ذكاء اصطناعي آمن (ZDR)",
    "footer.devBy": "تطوير محمد ابريق",
    "footer.tag": "تكنولوجيا البجروت الشفوي",

    // Auth & Login
    "auth.title": "تسجيل الدخول إلى SkillUp iHelp",
    "auth.subtitle":
      "الوصول المباشر لمنصة تدريب البجروت الشفوي (COBE) ولوحة التحكم المدرسية.",
    "auth.badge": "بوابة SkillUp iHelp",
    "auth.studentTab": "دخول تدريب الطلاب",
    "auth.teacherTab": "دخول المعلمين ولوحة التحكم",
    "auth.studentSubtitle":
      "الوصول المباشر لتطبيق محاكاة امتحان البجروت الشفوي (COBE) والتقييم الفوري.",
    "auth.teacherSubtitle":
      "الوصول للوحة تحكم الصفوف، تسجيلات الطلاب الصوتية، ومؤشرات الأداء المدرسية.",
    "auth.googleSignIn": "المتابعة عبر حساب Google",
    "auth.orEmail": "أو تسجيل الدخول عبر البريد الإلكتروني",
    "auth.email": "البريد الإلكتروني",
    "auth.password": "كلمة المرور",
    "auth.submit": "تسجيل الدخول والمتابعة",
    "auth.studentSubmit": "تسجيل الدخول وبدء تدريب COBE",
    "auth.teacherSubmit": "تسجيل الدخول إلى لوحة تحكم المعلم",
    "auth.guestDirect": "دخول تدريبي مباشر (نسخة تجريبية)",
    "auth.guestStudent": "دخول تجريبي سريع ومباشر (طالب)",
    "auth.guestTeacher": "دخول مباشر للوحة تحكم المعلم (معلم)",
    "auth.teacherBadge": "بوابة المعلمين والإدارة المدرسية",
    "auth.note":
      "سجّل الدخول بحسابك المدرسي أو الشخصي للوصول المباشر إلى لوحة التحكم والامتحانات.",
    "auth.teacherNote":
      "يملك المعلمون صلاحية الاستماع لتسجيلات الصفوف ومراجعة تفاصيل التقييم وإدارة الطلاب.",
    "auth.studentNote":
      "يمكن للطلاب محاكاة امتحان البجروت بالصوت والحصول على تقييم فوري بالذكاء الاصطناعي.",
    "auth.back": "العودة للرئيسية",
  },
  he: {
    // Top banner & Navbar
    "nav.brandSub": "בגרות בעל פה",
    "nav.brandDesc": "פלטפורמת בגרות בעל פה וניהול כיתות COBE",
    "nav.why": "למה iHelp",
    "nav.cobe": "מבנה ה-COBE",
    "nav.teacherPortal": "פורטל מורים",
    "nav.roi": "מחשבון חיסכון",
    "nav.faq": "שאלות נפוצות",
    "nav.teacherLogin": "כניסת מורים",
    "nav.studentLogin": "כניסת תלמיד",
    "nav.getStarted": "התחל תרגול",
    "nav.langSwitch": "שפה",

    // Hero
    "hero.practice": "התחל מבחן תרגול חינם",
    "hero.allowance":
      "מבחן תרגול חינם כל שבעה ימים. תלמידי בית ספר מתחברים עם חשבונם המוזמן.",
    "hero.announcement": "SkillUp מציגה: פלטפורמת הדיבור iHelp",
    "hero.standard": "תואם לנוהל בגרות בעל פה COBE של משרד החינוך",
    "hero.badgeSkillUp": "טכנולוגיה חינוכית",
    "hero.badgeIHelp": "פלטפורמת AI לבגרות בעל פה",
    "hero.title1": "שלוט בבגרות בעל פה באנגלית עם",
    "hero.title2": "סימולציה מבוססת בינה מלאכותית",
    "hero.subtitle":
      "תרגול לבגרות בעל פה ברמת 4 ו-5 יחידות בממשק בחינה מציאותי ומשוב AI מדויק. מבחן תרגול חינם מדי שבוע, משוב מפורט לחשבונות בית ספר ומנויים, ודשבורד מעקב מתקדם למורים.",
    "hero.exploreFormats": "צפייה במבנה ה-COBE",
    "hero.teacherDashboard": "דשבורד כיתה למורים",
    "hero.watchDemo": "צפה בהדגמה",
    "hero.stat1Val": "COBE",
    "hero.stat1Lbl": "תואם למחוון משרד החינוך",
    "hero.stat2Val": "4 ו-5 יח״ל",
    "hero.stat2Lbl": "כיסוי מלא של חלקי הבחינה (חלק א', ב', ג')",
    "hero.stat3Val": "2",
    "hero.stat3Lbl": "ממשק מבחן תקני וממשק מודרני לבחירה",
    "hero.stat4Val": "AI",
    "hero.stat4Lbl": "ציונים ומשוב לפי מסלול החשבון",

    // Ecosystem
    "eco.badge": "ארכיטקטורת מערכת iHELP",
    "eco.title": "הפלטפורמה המושלמת לבגרות בעל פה מבית SkillUp",
    "eco.desc":
      "פותחה במיוחד כדי לפתור את צוואר הבקבוק המרכזי בבתי הספר התיכוניים: הכנת תלמידים לבחינת הבגרות המתוקשבת בעל פה (COBE) מבלי לשחוק את המורים בבחינות יחידניות אינסופיות.",
    "eco.studentTitle": "תרגול תלמידים חכם",
    "eco.studentTag": "שטף וביטחון מלא במבחן",
    "eco.grades": "כיתות י'–י״ב",
    "eco.studentDesc":
      "סביבת תרגול בטוחה ומעודדת ללא שיפוטיות. תלמידי תיכון מתגברים על פחד הדיבור ומתרגלים שאלות בגרות אותנטיות עד להגעה לשטף וביטחון דיבור טבעי.",
    "eco.s1":
      "סימולציית COBE מלאה: חלק א' (ראיון אישי), חלק ב' (הצגת פרויקט), וחלק ג' (ניתוח קטע וידאו).",
    "eco.s2":
      "ציונים לפי מחוון משרד החינוך: פיתוח נושא, שטף ומסירה, אוצר מילים ומבנה שפתי, עם משוב מפורט לחשבונות מנויים ובתי ספר.",
    "eco.s3":
      "נגיש מכל מכשיר: פועל בצורה חלקה על כרומבוקים, מחשבים ניידים וסמארטפונים ללא צורך בהתקנות מורכבות.",
    "eco.viewFormat": "צפייה במבנה המבחן",
    "eco.teacherTitle": "מרכז ניהול כיתות למורים",
    "eco.teacherTag": "מופעל באמצעות מערכת SKILLUP ו-iHELP",
    "eco.teachers": "מורים, רכזי אנגלית ובתי ספר",
    "eco.teacherDesc":
      "מורים מזמינים תלמידים לכיתות שלהם, מאזינים להקלטות התלמידים, בודקים ציונים ועוקבים אחר ההתקדמות לאורך השנה.",
    "eco.t1": "הזמנות אישיות לכיתה: צור כיתה והזמן תלמידים ישירות במייל.",
    "eco.t2":
      "האזנה להקלטות מקוריות: שמירת הקלטות התלמידים למשך 90 יום לצד הציונים והמשוב המפורט.",
    "eco.t3":
      "ניתוח כיתתי מתקדם: מעקב השתתפות, גרף ציונים, איתור תלמידים מצטיינים ותלמידים הזקוקים לתגבור.",
    "eco.viewPortal": "כניסה לפורטל המורים",
    "eco.cycleTitle": "מחזור 4 השלבים לבגרות בעל פה",
    "eco.cycleSub":
      "כיצד בתי ספר מנהלים מבחנים בעל פה ביעילות שיא בעזרת SkillUp iHelp",
    "eco.step1Title": "הזמנת כיתה",
    "eco.step1Desc": "המורה יוצר כיתה ושולח הזמנות אישיות לתלמידים במייל.",
    "eco.step2Title": "סימולציית בגרות בדיבור",
    "eco.step2Desc":
      "התלמידים מקליטים תשובות לשאלות אישיות, פרויקט וקטע וידאו בממשק הבחינה.",
    "eco.step3Title": "בדיקת AI לפי מחוון",
    "eco.step3Desc":
      "הקול המקורי נבדק לפי מחוון הבגרות של משרד החינוך, והמערכת מציגה משוב מיידי.",
    "eco.step4Title": "מעקב והערכת מורה",
    "eco.step4Desc":
      "המורה מאזין להקלטות, סוקר את המשוב ועוקב אחר התקדמות כל תלמיד.",

    // Dashboard
    "dash.badge": "מרכז ניהול כיתות למורים",
    "dash.title": "ניהול כיתה מקיף ואנליטיקות מתקדמות",
    "dash.desc":
      "התחבר כדי לצפות בכיתות שלך, לבדוק ניסיונות תלמידים ולזהות מי זקוק לתמיכה נוספת.",

    // Curriculum
    "curriculum.badge": "סילבוס הבגרות המלא",
    "curriculum.title": "מבנה מבחן הבגרות המתוקשב COBE",
    "curriculum.desc":
      "פלטפורמת iHelp מבית SkillUp מכסה את כל סילבוס בחינת הבגרות המתוקשבת בעל פה (COBE) למסלולי 4 ו-5 יחידות לימוד.",
    "curriculum.getAccess": "קבלת גישה לתרגול",

    // Features
    "feat.badge": "יכולות הפלטפורמה",
    "feat.title": "נבנה עבור תלמידים. שוכלל עבור מורים.",
    "feat.desc":
      "השילוב בין ניתוח הדיבור המתקדם של iHelp לבין מערכת הלמידה של SkillUp מעניק חווית הכנה ללא תחרות.",

    // Calculator
    "calc.badge": "מחשבון החיסכון והיעילות",
    "calc.title": "חשב את החיסכון של בית הספר שלך",
    "calc.desc":
      "גלה כמה מאות שעות והוצאות בית הספר או צוות האנגלית שלך חוסכים באמצעות אוטומציית בדיקת מבחני הבגרות בעל פה עם SkillUp ו-iHelp.",
    "calc.institution": "מוסד הלימודים שלך",
    "calc.students": "מספר תלמידים",
    "calc.exams": "מבחנים בעל פה לתלמיד בשנה",
    "calc.hoursSaved": "שעות עבודה שנחסכו למורים",
    "calc.budgetSaved": "שווי תקציבי משוער שנחסך",
    "calc.shekel": "ש״ח",

    // Suite
    "suite.badge": "מערכת SKILLUP לחינוך",
    "suite.title": "גלה את מגוון פלטפורמות הלימוד של SkillUp",
    "suite.desc":
      "פלטפורמות בינה מלאכותית ייעודיות לתלמידי תיכון, מועמדי בגרות ופסיכומטרי, וסטודנטים להשכלה גבוהה.",
    "suite.cobeTitle": "SkillUp COBE (iHelp)",
    "suite.cobeSub": "בגרות בעל פה באנגלית",
    "suite.cobeDesc":
      "תרגול לבחינת הבגרות המתוקשבת בעל פה 4 ו-5 יח״ל עם בוחן AI בזמן אמת.",
    "suite.cobeBtn": "כניסה לפורטל COBE",
    "suite.engTitle": "SkillUp Eng (אמירנט)",
    "suite.engSub": "אנגלית אקדמית ופסיכומטרית",
    "suite.engDesc":
      "121 סימולציות מלאות, מעל 2,000 כרטיסיות מילים חכמות ומחשבון פטור אוניברסיטאי.",
    "suite.engBtn": "כניסה לאמירנט",
    "suite.hebTitle": "SkillUp Heb (יעלנט)",
    "suite.hebSub": "מיומנות אקדמית בעברית",
    "suite.hebDesc":
      "הכנה מקיפה וסימולציות מדויקות למבחני יע״ל ויעלנט של המרכז הארצי לבחינות ולהערכה.",
    "suite.hebBtn": "כניסה ליעלנט",

    // Contact & Footer
    "contact.badge": "צור קשר",
    "contact.title": "הטמעת SkillUp iHelp בבית הספר שלך",
    "contact.desc":
      "קבע פיילוט לצוות האנגלית בתיכון שלך או תאם הדגמה חינוכית למחלקת החינוך ברשות.",
    "footer.desc":
      "הפלטפורמה המובילה מבוססת AI לבחינת הבגרות בעל פה (COBE) וניהול כיתות בבתי ספר תיכוניים.",
    "footer.rights": "SkillUp iHelp. כל הזכויות שמורות.",
    "footer.privacy": "מדיניות פרטיות",
    "footer.terms": "תנאי שימוש",
    "footer.accessibility": "הצהרת נגישות",
    "footer.moeBadge": "תקן אבטחת מידע משרד החינוך 1.6",
    "footer.zdrBadge": "Zero Data Retention AI",
    "footer.devBy": "פותח ע״י מוחמד אבריק",
    "footer.tag": "טכנולוגיית בגרות בעל פה",

    // Auth & Login
    "auth.title": "התחברות ל-SkillUp iHelp",
    "auth.subtitle":
      "גישה ישירה לאפליקציית תרגול הבגרות בעל פה (COBE) ודשבורד המערכת.",
    "auth.badge": "פורטל SkillUp iHelp",
    "auth.studentTab": "כניסת תלמידים לתרגול",
    "auth.teacherTab": "כניסת מורים ודשבורד",
    "auth.studentSubtitle":
      "גישה ישירה לאפליקציית תרגול הבגרות בעל פה (COBE) ומשוב AI.",
    "auth.teacherSubtitle":
      "גישה לדשבורד הכיתתי, האזנה להקלטות תלמידים, מחווני בדיקה וסטטיסטיקות.",
    "auth.googleSignIn": "המשך עם חשבון Google",
    "auth.orEmail": "או התחברות באמצעות דוא״ל",
    "auth.email": "כתובת דוא״ל",
    "auth.password": "סיסמה",
    "auth.submit": "התחברות והמשך",
    "auth.studentSubmit": "התחבר לתרגול COBE",
    "auth.teacherSubmit": "התחבר לדשבורד המורה",
    "auth.guestDirect": "כניסה ישירה לתרגול מהיר (הדגמה)",
    "auth.guestStudent": "כניסה ישירה לתרגול ללא המתנה (הדגמה)",
    "auth.guestTeacher": "כניסה ישירה לדשבורד הכיתה (הדגמה למורה)",
    "auth.teacherBadge": "פורטל מורים והנהלה",
    "auth.note":
      "התחבר עם פרטי החשבון האישי או הבית-ספרי כדי לגשת לדשבורד ולמבחנים.",
    "auth.teacherNote":
      "למורים מאושרים ניתנת גישה מלאה להאזנה להקלטות התלמידים, ציוני המחוון וניהול כיתתי שוטף.",
    "auth.studentNote":
      "תלמידי תיכון מתרגלים הדמיה מלאה של בחינת הבגרות בדיבור ומקבלים הערכה מידית.",
    "auth.back": "חזרה לדף הבית",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  dir: "ltr",
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("ihelp_language") as Language | null;
    if (saved === "ar" || saved === "he" || saved === "en") {
      return saved;
    }
    return "en";
  });

  const dir: "ltr" | "rtl" =
    language === "ar" || language === "he" ? "rtl" : "ltr";

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("ihelp_language", lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;

    // Font classes
    document.body.classList.remove("font-arabic", "font-hebrew");
    if (language === "ar") {
      document.body.classList.add("font-arabic");
    } else if (language === "he") {
      document.body.classList.add("font-hebrew");
    }
  }, [language, dir]);

  const t = (key: string): string => {
    return translations[language]?.[key] || translations["en"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      <div dir={dir} className={`lang-${language}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
