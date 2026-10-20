import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Lock, FileText, CheckCircle2, ArrowLeft, ArrowRight, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const { language, dir } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col" dir={dir}>
      <Navbar />

      <main className="flex-1 container mx-auto max-w-4xl px-4 py-16">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            {dir === "rtl" ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
            {language === "he" ? "חזרה לדף הבית" : language === "ar" ? "العودة للرئيسية" : "Back to Home"}
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge variant="outline" className="text-accent border-accent/40 bg-accent/5 px-3 py-1 text-xs font-bold flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5" />
            {language === "he" ? "תקן אבטחת מידע משרד החינוך 1.6" : language === "ar" ? "معايير أمان وزارة المعارف 1.6" : "Israel MoE Security Standard v1.6 Compliant"}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {language === "he" ? "עודכן לאחרונה: אוקטובר 2026" : language === "ar" ? "تحديث: تشرين أول 2026" : "Last Updated: October 2026"}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          {language === "he"
            ? "מדיניות פרטיות ואבטחת מידע – SkillUp iHelp"
            : language === "ar"
            ? "سياسة الخصوصية وأمان البيانات – SkillUp iHelp"
            : "Privacy Policy & Information Security – SkillUp iHelp"}
        </h1>

        <p className="text-muted-foreground text-base leading-relaxed mb-8">
          {language === "he"
            ? 'פלטפורמת SkillUp iHelp מבית SkillUp EdTech (להלן "הפלטפורמה" או "המערכת") מחויבת להגנה מלאה על פרטיותם של תלמידים, מורים ומוסדות החינוך. הפלטפורמה פועלת בכפיפות מלאה להוראות חוק הגנת הפרטיות, התשמ"א-1981, תקנות הגנת הפרטיות (אבטחת מידע), תשע"ז-2017, ותקן אבטחת המידע והסייבר לספקי מוסדות החינוך של משרד החינוך (מהדורה 1.6).'
            : language === "ar"
            ? "تلتزم منصة SkillUp iHelp التابعة لمبادرة SkillUp EdTech بأعلى معايير حماية الخصوصية للطلاب والمعلمين والمدارس، وذلك استناداً إلى قانون حماية الخصوصية الإسرائيلي لعام 1981، ولوائح أمان قواعد البيانات لعام 2017، ومعايير أمن المعلومات والسايبر الصادرة عن وزارة التربية والتعليم الإسرائيلية (الإصدار 1.6)."
            : "SkillUp iHelp (operated by SkillUp EdTech, \"we\" or \"the platform\") is strictly committed to protecting the privacy of high school students, teachers, and educational institutions. The platform operates in rigorous compliance with the Israeli Privacy Protection Law (5741-1981), Privacy Protection Regulations (Data Security 5777-2017), and the Israel Ministry of Education Information Security Standard for Educational Institution Suppliers (Version 1.6)."}
        </p>

        <div className="space-y-6">
          <Card className="p-6 border-border bg-card">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Lock className="h-5 w-5 text-accent" />
              1. {language === "he" ? "איסוף מידע ומטרת העיבוד" : language === "ar" ? "جمع البيانات والغرض منها" : "Data Collection & Purpose"}
            </h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>
                {language === "he"
                  ? "אנו אוספים אך ורק את המידע ההכרחי והמינימלי הנדרש להכנה ותרגול בחינת הבגרות המתוקשבת בעל פה באנגלית (COBE):"
                  : language === "ar"
                  ? "نجمع فقط الحد الأدنى والضروري من البيانات اللازمة لمحاكاة والتدريب على امتحان بجروت الشفوي المحوسب (COBE):"
                  : "We collect only the minimal data strictly necessary to prepare students for the Computerized Oral Bagrut Exam (COBE):"}
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  <strong className="text-foreground">{language === "he" ? "פרטי חשבון:" : language === "ar" ? "بيانات الحساب:" : "Account Info:"}</strong>{" "}
                  {language === "he" ? "כתובת דוא\"ל, שם ושיוך לבית ספר ולכיתה." : language === "ar" ? "البريد الإلكتروني، الاسم، والانتماء للمدرسة والصف." : "Email address, name, and school/class affiliation."}
                </li>
                <li>
                  <strong className="text-foreground">{language === "he" ? "הקלטות קול באנגלית:" : language === "ar" ? "التسجيلات الصوتية:" : "Audio Voice Recordings:"}</strong>{" "}
                  {language === "he" ? "תשובות מוקלטות באנגלית לשאלות הבחינה (ראיון אישי, פרויקט, קטעי וידאו) לצורכי בדיקה ומשוב בלבד." : language === "ar" ? "إجابات مسجلة بالإنجليزية لأقسام الامتحان بغرض التدريب والتقييم اللغوي حصراً." : "Spoken English answers to exam questions solely for rubric evaluation and pedagogical feedback."}
                </li>
                <li>
                  <strong className="text-foreground">{language === "he" ? "נתוני הערכה ומשוב:" : language === "ar" ? "سجلات التقييم والعلامات:" : "Rubric Performance Records:"}</strong>{" "}
                  {language === "he" ? "ציונים מפורטים לפי מחוון משרד החינוך (נושא, שטף, אוצר מילים, שפה)." : language === "ar" ? "العلامات وفق معايير وزارة المعارف (الموضوع، الطلاقة، الثروة اللغوية والقواعد)." : "Rubric scores aligned with the official Israeli Ministry of Education COBE specification."}
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 border-border bg-card">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-accent" />
              2. {language === "he" ? "שימוש בבינה מלאכותית ומדיניות אי-שמירה (Zero Data Retention)" : language === "ar" ? "الذكاء الاصطناعي وسياسة عدم الاحتفاظ بالبيانات (ZDR)" : "Generative AI & Zero Data Retention (ZDR)"}
            </h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p>
                {language === "he"
                  ? "בהתאם לדרישות סעיף 4.9 לתקן משרד החינוך למערכות מבוססות AI:"
                  : language === "ar"
                  ? "امتثالاً للبند 4.9 من معايير وزارة التربية والتعليم الخاصة بأنظمة الذكاء الاصطناعي:"
                  : "Pursuant to Section 4.9 of the MoE Security Standard for AI-powered educational systems:"}
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  <strong className="text-foreground">{language === "he" ? "איסור מוחלט על אימון מודלים:" : language === "ar" ? "حظر تدريب النماذج:" : "No AI Training on Student Data:"}</strong>{" "}
                  {language === "he" ? "חל איסור מוחלט על שימוש בקולות תלמידים, תמלילים או תשובות לצורך אימון מודלי AI חיצוניים." : language === "ar" ? "يمنع منعاً باتاً تدريب أو تحسين نماذج الذكاء الاصطناعي التجارية باستخدام أصوات الطلاب أو إجاباتهم." : "Student voice recordings and transcripts are NEVER used to train, retrain, or improve AI models."}
                </li>
                <li>
                  <strong className="text-foreground">{language === "he" ? "התממה וסינון מזהים (DLP):" : language === "ar" ? "تجريد البيانات الحساسة:" : "Data Leak Prevention (DLP):"}</strong>{" "}
                  {language === "he" ? "המערכת מפעילה רכיב DLP ייעודי לטשטוש מספרי ת\"ז, מספרי טלפון וכתובות טרם שליחת טקסט לעיבוד." : language === "ar" ? "تقوم المنصة تلقائياً بحجب أي أرقام هوية أو أرقام هواتف قبل إرسال النصوص لمحرك التقييم." : "Automated DLP filters mask Israeli ID numbers (Teudat Zehut), phone numbers, and identifying data before prompts are processed."}
                </li>
                <li>
                  <strong className="text-foreground">{language === "he" ? "עיבוד זמני בלבד (ZDR):" : language === "ar" ? "المعالجة المؤقتة الفورية:" : "Zero Data Retention:"}</strong>{" "}
                  {language === "he" ? "הערכת הביצועים מתבצעת בזיכרון זמני ללא שמירה אצל ספקי המודלים, ונמחקת מיד עם הפקת הציון." : language === "ar" ? "تتم معالجة التقييم بشكل مؤقت في الذاكرة اللحظية وتحذف فور صدور النتيجة دون حفظ لدى مزودي الذكاء الاصطناعي." : "Prompts and responses are processed transiently under commercial Zero Data Retention agreements and deleted immediately upon evaluation."}
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 border-border bg-card">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <FileText className="h-5 w-5 text-accent" />
              3. {language === "he" ? "הקלטת קול והסכמת הורים (סעיף 3.8.7)" : language === "ar" ? "تسجيل الصوت وموافقة أولياء الأمور" : "Student Audio & Parental Consent"}
            </h2>
            <div className="text-sm leading-relaxed text-muted-foreground">
              <p>
                {language === "he"
                  ? "הקלטות קול של תלמידים משמשות אך ורק לצורכי תרגול בעל פה והערכת מורה. בתי הספר והמורים מחויבים לוודא כי קיים אישור הורים תקפה כדין בהתאם להנחיות חוזר מנכ\"ל ותקנות משרד החינוך."
                  : language === "ar"
                  ? "تُستخدم التسجيلات الصوتية حصراً للتدريب الشفوي وتقييم المعلم. يلتزم المعلم والمدرسة بالتحقق من وجود موافقة أولياء الأمور المطلوبة وفقاً لتعاميم وزارة المعارف."
                  : "Audio recordings of minor students are utilized solely for oral English examination simulations. Schools and educators are responsible for obtaining and maintaining valid parental consent (אישור הורים) under Ministry of Education directives."}
              </p>
            </div>
          </Card>

          <Card className="p-6 border-border bg-card">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              4. {language === "he" ? "אבטחת מידע, מיקום שרתים וזכות המחיקה" : language === "ar" ? "الأمان، استضافة الخوادم وحق الحذف" : "Security, Data Residency & Erasure Rights"}
            </h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>
                  <strong className="text-foreground">{language === "he" ? "הצפנה מתקדמת:" : language === "ar" ? "تشفير شامل:" : "End-to-End Encryption:"}</strong>{" "}
                  {language === "he" ? "הצפנה בתעבורה (TLS 1.3/1.2) ובהצפנת מנוחה (AES-256) לכלל בסיסי הנתונים וקבצי האודיו." : language === "ar" ? "تشفير البيانات أثناء النقل (TLS 1.3) وفي التخزين (AES-256) لكافة قواعد البيانات والتسجيلات." : "Enforced TLS 1.3 / 1.2 in transit and AES-256 at rest across all storage and databases."}
                </li>
                <li>
                  <strong className="text-foreground">{language === "he" ? "אחסון בגבולות ישראל:" : language === "ar" ? "استضافة داخل إسرائيل:" : "Israeli Cloud Residency:"}</strong>{" "}
                  {language === "he" ? "כל שרתי המערכת ובסיסי הנתונים מאוחסנים באזורי ענן בישראל (AWS / GCP Tel Aviv) בהתאם למכרז נימבוס." : language === "ar" ? "يتم استضافة الخوادم وقواعد البيانات داخل مراكز البيانات السحابية في إسرائيل بما يتوافق مع عطاء نيمبوس الحكومي." : "All primary databases and audio storage reside within certified cloud regions in the State of Israel (Nimbus framework)."}
                </li>
                <li>
                  <strong className="text-foreground">{language === "he" ? "הזכות להישכח ומחיקת נתונים:" : language === "ar" ? "حق الحذف الفوري (النسيان):" : "Right to Erasure:"}</strong>{" "}
                  {language === "he" ? "כל תלמיד, מורה או בית ספר רשאים לדרוש ולבצע מחיקה מלאה, מיידית ולצמיתות של החשבון והקלטות הקול במסך ההגדרות." : language === "ar" ? "يحق لأي طالب أو معلم طلب وحذف حسابه وتسجيلاته الصوتية بشكل نهائي وفوري عبر صفحة الإعدادات أو بالتواصل معنا." : "Students, teachers, and school administrators may permanently purge their accounts, audio recordings, and test results at any time via the Settings page."}
                </li>
                <li>
                  <strong className="text-foreground">{language === "he" ? "הגבלת זמני פעילות (סעיף 4.1.7):" : language === "ar" ? "مهلة إنهاء الجلسة:" : "Session Security:"}</strong>{" "}
                  {language === "he" ? "ניתוק אוטומטי לאחר 30 דקות ללא פעילות, וסשן עבודה רציף מרבי של 8 שעות." : language === "ar" ? "تسجيل خروج تلقائي بعد 30 دقيقة من الخمول، وحد أقصى للجلسة المتواصلة 8 ساعات." : "Enforced 30-minute inactivity timeout and 8-hour maximum session duration."}
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 border-border bg-card">
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-accent" />
              5. {language === "he" ? "פניות לממונה אבטחת מידע" : language === "ar" ? "مسؤول حماية البيانات" : "Contact & Data Protection Officer"}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {language === "he"
                ? "לשאלות בנושא פרטיות, הגשת בקשות לעיון במידע או בקשות למחיקת נתונים, ניתן לפנות לממונה אבטחת המידע בכתובת:"
                : language === "ar"
                ? "لأي استفسارات أو طلبات تتعلق بالخصوصية أو حذف البيانات، يمكنكم مراسلة مسؤول أمان المعلومات عبر:"
                : "For inquiries regarding privacy, data access requests, or deletion verifications, contact our Data Protection Officer at:"}{" "}
              <a href="mailto:support@skillup-edu.org" className="text-accent font-semibold hover:underline">
                support@skillup-edu.org
              </a>
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
