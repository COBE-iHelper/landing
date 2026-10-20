import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Accessibility, Mail, Phone, Clock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AccessibilityStatement() {
  const { language, dir } = useLanguage();
  const Arrow = dir === "rtl" ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline mb-6"
          >
            <Arrow className="w-4 h-4" />
            {language === "ar" ? "العودة للرئيسية" : language === "he" ? "חזרה לדף הבית" : "Back to Home"}
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <Badge className="bg-accent/10 text-accent border-accent/20 px-3 py-1 font-semibold flex items-center gap-1.5">
              <Accessibility className="w-4 h-4" />
              {language === "ar"
                ? "إتاحة رقمية معيارية – مستوى AA"
                : language === "he"
                ? "נגישות אתרים – ת\"י 5568 ברמה AA"
                : "Web Accessibility – IS 5568 Level AA"}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {language === "ar"
                ? "آخر تحديث: تشرين أول 2026"
                : language === "he"
                ? "עודכן לאחרונה: אוקטובר 2026"
                : "Last updated: October 2026"}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {language === "ar"
              ? "הצהרת נגישות דיגיטלית – SkillUp iHelp"
              : language === "he"
              ? "הצהרת נגישות – SkillUp iHelp"
              : "Accessibility Statement – SkillUp iHelp"}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {language === "ar"
              ? "تولي منصة SkillUp iHelp أهمية قصوى لإتاحة خدماتها الرقمية لجميع الطلاب والمعلمين، بمن فيهم ذوو الإعاقات واحتياجات التعلم الخاصة، بما يتوافق مع المعايير الإسرائيلية والدولية لإتاحة الويب."
              : language === "he"
              ? "חברת SkillUp EdTech רואה חשיבות עליונה בהנגשת שירותיה הדיגיטליים לכלל התלמידים, המורים ואנשי החינוך בישראל, לרבות אנשים עם מוגבלות וצרכים מיוחדים, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות ותקנות הנגישות."
              : "SkillUp EdTech is fully committed to providing a digital platform that is accessible, equitable, and usable by all students, teachers, and educators, including individuals with disabilities and diverse learning needs."}
          </p>
        </div>

        {/* Commitment & Standards */}
        <Card className="p-6 bg-card border-border space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-accent" />
            {language === "ar"
              ? "1. المعايير والتوافق القانوني"
              : language === "he"
              ? "1. עמידה בתקנים ובדרישות החוק"
              : "1. Standards & Legal Compliance"}
          </h2>
          <div className="text-sm leading-relaxed text-muted-foreground space-y-3">
            <p>
              {language === "ar"
                ? "تم تطوير المنصة لتتوافق مع متطلبات תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע\"ג-2013, ובהתאם לתקן הישראלי ת\"י 5568 ברמה AA, המבוסס על הנחיות WCAG 2.0 / 2.1 של ארגון W3C הבינלאומי."
                : language === "he"
                ? "האתר והמערכת נבנו בהתאם להוראות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע\"ג-2013, ולפי התקן הישראלי ת\"י 5568 ברמה AA, המבוסס על הנחיות הנגישות הבינלאומיות WCAG 2.0 / 2.1 של ארגון ה-W3C."
                : "This platform is built in strict adherence to the Israeli Equal Rights for Persons with Disabilities Regulations (Accessibility Adjustments to Service) 2013, and complies with Israeli Standard IS 5568 Level AA, based on the W3C Web Content Accessibility Guidelines (WCAG) 2.0 / 2.1."}
            </p>
            <div className="p-3.5 rounded-lg bg-accent/5 border border-accent/20 text-foreground font-medium text-xs sm:text-sm">
              {language === "ar"
                ? "ملاحظة هامة: إتاحة منصتنا مدمجة مباشرة في بنية الكود البرمجية الأصلية (Native Accessibility) ولا تعتمد على إضافات خارجية غير فعالة (Overlay Widgets)."
                : language === "he"
                ? "חשוב לציין: הנגישות במערכת הוטמעה ישירות בקוד המקור (Native Accessibility) ללא הסתמכות על תוספי הנגשה צד-שלישי (סרגלי נגישות צפים), בהתאם להמלצות מומחי נגישות ודרישות משרד החינוך."
                : "Note: Accessibility is engineered directly into our core codebase (Native Accessibility) rather than relying on external third-party accessibility overlay widgets, ensuring maximum reliability and screen-reader fidelity."}
            </div>
          </div>
        </Card>

        {/* Accessibility Features */}
        <Card className="p-6 bg-card border-border space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            {language === "ar"
              ? "2. التعديلات والتسهيلات المطبقة"
              : language === "he"
              ? "2. התאמות הנגישות שבוצעו במערכת"
              : "2. Accessibility Accommodations Implemented"}
          </h2>
          <ul className="grid gap-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>
                <strong className="text-foreground">
                  {language === "ar" ? "التنقل الكامل بواسطة لوحة المفاتيح: " : language === "he" ? "ניווט מלא באמצעות מקלדת: " : "Full Keyboard Navigation: "}
                </strong>
                {language === "ar"
                  ? "إمكانية التنقل بين جميع عناصر المنصة والأزرار عبر مفتاح Tab وEnter والأسهم، مع مؤشر تركيز مرئي وواضح."
                  : language === "he"
                  ? "ניתן לנווט בכל רכיבי המערכת, הלחצנים והטפסים באמצעות מקש Tab, החצים ו-Enter, עם מסגרת פוקוס ברורה ומודגשת."
                  : "All interactive elements, buttons, and form inputs are fully operable via Tab, Arrow keys, and Enter with visible focus indicators."}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>
                <strong className="text-foreground">
                  {language === "ar" ? "التوافق مع برامج قراءة الشاشة: " : language === "he" ? "תאימות לתוכנות קוראות מסך: " : "Screen Reader Compatibility: "}
                </strong>
                {language === "ar"
                  ? "استخدام عناصر HTML دلالية وبطاقات ARIA مع تسميات واضحة لكل زر ومدخل وحقل تسجيل صوتي."
                  : language === "he"
                  ? "שימוש בתגיות HTML סמנטיות, מאפייני ARIA מותאמים, ותיאורי טקסט חלופי עבור קוראי מסך (כגון NVDA, JAWS, VoiceOver)."
                  : "Semantic HTML landmarks, ARIA live regions, and descriptive labels supporting modern screen readers (NVDA, JAWS, VoiceOver)."}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>
                <strong className="text-foreground">
                  {language === "ar" ? "تباين الألوان والسمات: " : language === "he" ? "ניגודיות צבעים ומצבי תצוגה: " : "High Color Contrast & Themes: "}
                </strong>
                {language === "ar"
                  ? "توفير نسب تباين تتجاوز 4.5:1 للنصوص العادية، ودعم السمات الفاتحة والداكنة لتسهيل القراءة وتخفيف إجهاد العين."
                  : language === "he"
                  ? "עמידה ביחסי ניגודיות מחמירים (מעל 4.5:1), לצד תמיכה מלאה במצב בהיר/כהה (Dark Mode) המקל על ראיית התוכן."
                  : "Strict contrast ratios exceeding 4.5:1 for standard text, paired with Light and Dark mode options."}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>
                <strong className="text-foreground">
                  {language === "ar" ? "تكبير الخط وتغيיר الحجم: " : language === "he" ? "הגדלת טקסטים ללא עיוות: " : "Text Zooming & Resizing: "}
                </strong>
                {language === "ar"
                  ? "إمكانية تكبير الخط حتى 200% باستخدام متصفح الويب دون فقدان أي وظيفة أو تشوه في الصفحة."
                  : language === "he"
                  ? "תמיכה מלאה בהגדלת תצוגה עד 200% באמצעות דפדפן האינטרנט ללא איבוד מידע או שיבוש במבנה האתר."
                  : "Scalable layouts supporting up to 200% browser zoom without clipping or horizontal scrollbars."}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>
                <strong className="text-foreground">
                  {language === "ar" ? "دعم متعدد اللغات وRTL: " : language === "he" ? "תמיכה מלאה בעברית, ערבית ואנגלית: " : "Multilingual RTL & LTR Support: "}
                </strong>
                {language === "ar"
                  ? "واجهات متكاملة بالعربية والعبرية والإنجليزية مع توجيه النص المناسب (RTL/LTR)."
                  : language === "he"
                  ? "ממשק שלם בעברית, ערבית ואנגלית עם התאמה מלאה של כיווניות (RTL) לקריאה טבעית."
                  : "Comprehensive interface localized in Hebrew, Arabic, and English with appropriate text direction."}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <span>
                <strong className="text-foreground">
                  {language === "ar" ? "مشغل صوت متاح مع إيقاف وتحكم: " : language === "he" ? "נגן שמע נגיש עם בקרה מלאה: " : "Accessible Audio Player: "}
                </strong>
                {language === "ar"
                  ? "التحكم في تشغيل التسجيلات الصوتية وحجم الصوت وتكرار الاستماع دون تشغيل تلقائي مفاجئ."
                  : language === "he"
                  ? "שליטה מלאה בהקלטות השמע, עוצמת הקול, השמעה חוזרת ומניעת ניגון אוטומטי העלול להפריע למשתמש."
                  : "Accessible controls for student audio recording and playback without disruptive autoplay."}
              </span>
            </li>
          </ul>
        </Card>

        {/* Accessibility Coordinator & Feedback */}
        <Card className="p-6 bg-card border-border space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Mail className="w-5 h-5 text-accent" />
            {language === "ar"
              ? "3. مسؤول ملف الإتاحة وطرق التواصل"
              : language === "he"
              ? "3. פרטי רכז הנגישות ופניות הציבור"
              : "3. Accessibility Coordinator & Inquiries"}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {language === "ar"
              ? "إذا واجهت أي صعوبة أو عائق في التصفח أو ترغب في اقتراح تحسينات تتعلق بإمكانية الوصول، يسعدنا تواصلك مع منسق الإتاحة لدينا:"
              : language === "he"
              ? "אנו ממשיכים לפעול לשיפור מתמיד של נגישות המערכת. במידה ונתקלתם בקושי בגלישה, תקלה בנגישות או שיש לכם הצעה לשיפור, אנא פנו לרכז הנגישות שלנו ונשמח לסייע בהקדם:"
              : "We continuously work to enhance accessibility. If you encounter any barriers or have recommendations, please contact our Accessibility Coordinator:"}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-background border border-border">
              <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-xs text-muted-foreground uppercase">
                  {language === "ar" ? "البريد الإلكتروني المخصص" : language === "he" ? "דואר אלקטרוני ייעודי" : "Dedicated Email"}
                </p>
                <a
                  href="mailto:support@skillup-edu.org?subject=Accessibility%20Inquiry"
                  className="text-sm font-mono text-accent hover:underline"
                >
                  support@skillup-edu.org
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-background border border-border">
              <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-xs text-muted-foreground uppercase">
                  {language === "ar" ? "أوقات الرد والمعالجة" : language === "he" ? "זמני מענה וטיפול" : "Operating Hours & Response SLA"}
                </p>
                <p className="text-sm text-foreground">
                  {language === "ar"
                    ? "الأحد - الخميس: 08:00 - 18:00 (رد خلال 24 ساعة)"
                    : language === "he"
                    ? "ימים א' - ה': 08:00 - 18:00 (מענה תוך 24 שעות)"
                    : "Sun - Thu: 08:00 - 18:00 (Response within 24h)"}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
