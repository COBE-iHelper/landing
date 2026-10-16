import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { Mail, Send, User, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  organization: z
    .string()
    .trim()
    .min(2, { message: "Organization must be at least 2 characters" })
    .max(100, { message: "Organization must be less than 100 characters" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      message: "",
    },
  });

  const webhookURL = "https://discord.com/api/webhooks/1423236950323761182/o9uDjsB0k8fGYjTAglsVKm5G3spV2CLMMkBjHNZP66ZiSOqha0S1jeDazVYmG42YdEvE";

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Send to Discord webhook
      await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `<@705193056223363144> , <@457326685977706498>`,
          embeds: [{
            title: "📩 New School Form Submission",
            color: 0x3b82f6,
            fields: [
              {
                name: "🏫 School/Organization",
                value: data.organization,
                inline: false
              },
              {
                name: "👤 Contact Name",
                value: data.name,
                inline: true
              },
              {
                name: "📧 Email Address",
                value: data.email,
                inline: true
              },
              {
                name: "📝 Message",
                value: data.message,
                inline: false
              }
            ],
            timestamp: new Date().toISOString(),
            footer: {
              text: "iHelper Landing Form"
            }
          }]
        }),
      });
      
      toast({
        title: language === "ar" ? "تم إرسال الرسالة بنجاح!" : "Message sent successfully!",
        description: language === "ar" ? "سنقوم بالرد عليكم في أقرب وقت ممكن." : "We'll get back to you as soon as possible.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: language === "ar" ? "حدث خطأ غير متوقع" : "Something went wrong",
        description: language === "ar" ? "يرجى المحاولة مرة أخرى لاحقاً." : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 gradient-feature">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            {language === "ar" ? "جهّز مدرستك مع SkillUp iHelp" : "Bring the Ecosystem to Your School"}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            {language === "ar"
              ? "احجز عرضاً تقديمياً لطاقم اللغة الإنجليزية في مدرستك أو اطلب وصولاً تجريبياً."
              : "Schedule a demo for your school's English department or request pilot access."}
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-elegant border-border bg-card">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left side - Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {language === "ar" ? "تواصل معنا مباشرة" : "Let's Talk"}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === "ar"
                    ? "سواء كنت مؤسسة تعليمية تسعى لتطوير إعداد طلابها لامتحان البجروت الشفوي، أو مركزاً يرغب بأتمتة الفحص، يسعدنا التحدث معكم."
                    : "Whether you're an educational institution looking to improve exam preparation or a teacher seeking better evaluation tools, we'd love to hear from you."}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{language === "ar" ? "البريد الإلكتروني" : "Email"}</p>
                    <p className="text-sm text-muted-foreground">taw.coding@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{language === "ar" ? "للمدارس والشبكات" : "Schools & Networks"}</p>
                    <p className="text-sm text-muted-foreground">
                      {language === "ar"
                        ? "يمكنكم جدولة لقاء أو جلسة تدريب عبر زوم أو زيارة مدرسية حسب رغبتكم."
                        : "You can schedule a demo or meeting with us at your convenience."}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  {language === "ar" ? "نقوم بالرد عادةً خلال 24 ساعة في أيام العمل." : "We typically respond within 24 hours during business days."}
                </p>
              </div>
            </div>

            {/* Right side - Form */}
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">{language === "ar" ? "الاسم الكامل" : "Name"}</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              placeholder={language === "ar" ? "اسمك الكامل" : "Your full name"}
                              className="pl-10 rtl:pl-3 rtl:pr-10"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">{language === "ar" ? "البريد الإلكتروني" : "Email"}</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              className="pl-10 rtl:pl-3 rtl:pr-10"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">{language === "ar" ? "المدرسة أو المؤسسة" : "Organization"}</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Building2 className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              placeholder={language === "ar" ? "اسم المدرسة الثانوية أو الكلية" : "Your institution or school"}
                              className="pl-10 rtl:pl-3 rtl:pr-10"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">{language === "ar" ? "الرسالة" : "Message"}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={language === "ar" ? "أخبرنا عن عدد الطلاب واحتياجات طاقم اللغة الإنجليزية..." : "Tell us about your needs and how we can help..."}
                            className="min-h-[120px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      language === "ar" ? "جارٍ الإرسال..." : "Sending..."
                    ) : (
                      <>
                        {language === "ar" ? "إرسال الطلب" : "Send Message"}
                        <Send className="ml-2 rtl:mr-2 rtl:ml-0 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactForm;
