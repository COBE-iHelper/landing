import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  School,
  Users,
  Copy,
  Check,
  Play,
  Pause,
  CheckCircle,
  Clock,
  Sparkles,
  BarChart,
  Volume2,
  FileSpreadsheet,
  AlertTriangle,
  TrendingUp,
  Award,
  ChevronRight,
  RefreshCw,
  Layers,
  GraduationCap,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface StudentRecord {
  id: string;
  name: string;
  studentCode: string;
  task: string;
  duration: string;
  submittedAt: string;
  score: number;
  fluency: number;
  vocab: number;
  grammar: number;
  status: "graded" | "review";
  examType: string;
  examCount: number;
  trend: number[];
  spokenTranscript: string;
  aiAssessment: string;
  questions: {
    num: number;
    text: string;
    answer: string;
    score: number;
    feedback: string;
  }[];
}

const studentsData: StudentRecord[] = [
  {
    id: "1",
    name: "Maya Cohen",
    studentCode: "maya_cohen",
    task: "Part A: Personal Interview & Clip #4",
    duration: "4m 12s",
    submittedAt: "10 mins ago",
    score: 95,
    fluency: 29,
    vocab: 29,
    grammar: 19,
    status: "graded",
    examType: "COBE 5-Pts",
    examCount: 7,
    trend: [82, 85, 88, 91, 92, 94, 95],
    spokenTranscript:
      "Good morning teacher. For my English inquiry, I explored how bilingualism influences cognitive development in early childhood. The most fascinating finding was how dual-language immersion strengthens problem-solving flexibility.",
    aiAssessment:
      "Exceptional conversational cadence and sophisticated lexical variety. Demonstrated precise use of academic connectors with zero hesitation.",
    questions: [
      {
        num: 1,
        text: "Tell me about your research topic and what inspired you to choose it.",
        answer: "I chose bilingual cognitive flexibility because I grew up speaking both Hebrew and English at home.",
        score: 96,
        feedback: "Natural intonation, authentic personal context.",
      },
      {
        num: 2,
        text: "What was the most surprising conclusion you reached?",
        answer: "The surprising discovery was that dual-language learners switch cognitive tasks 20% faster.",
        score: 94,
        feedback: "Precise terminology and well-formed cause-and-effect structure.",
      },
    ],
  },
  {
    id: "2",
    name: "Yousef Mansour",
    studentCode: "yousef_mansour",
    task: "Part B: Project Presentation & Clip #2",
    duration: "5m 45s",
    submittedAt: "25 mins ago",
    score: 91,
    fluency: 27,
    vocab: 28,
    grammar: 18,
    status: "graded",
    examType: "COBE 5-Pts",
    examCount: 5,
    trend: [76, 80, 84, 89, 91],
    spokenTranscript:
      "Hello! In my research project, our team analyzed social media algorithms and teen sleep hygiene. Our survey showed that over seventy percent of students keep notifications on past midnight.",
    aiAssessment:
      "Clear articulation and sound statistical explanation. Excellent mastery of discourse markers ('Furthermore', 'Consequently').",
    questions: [
      {
        num: 1,
        text: "Explain the methodology your team used during your project.",
        answer: "We conducted anonymous questionnaires across 120 high school students and compared screen time logs.",
        score: 92,
        feedback: "Rich vocabulary: 'anonymous questionnaires', 'screen time logs'.",
      },
    ],
  },
  {
    id: "3",
    name: "Noam Levi",
    studentCode: "noam_levi",
    task: "Part A: Personal Interview & Clip #1",
    duration: "3m 50s",
    submittedAt: "1 hour ago",
    score: 84,
    fluency: 24,
    vocab: 26,
    grammar: 16,
    status: "review",
    examType: "COBE 4-Pts",
    examCount: 4,
    trend: [70, 75, 78, 84],
    spokenTranscript:
      "For Part A, I spoke about my football coach. He taught our team that resilience after a loss is more valuable than an easy victory. He helped me maintain focus during exam periods.",
    aiAssessment:
      "Strong storytelling ability with emotional resonance. Needs slight reinforcement on irregular past-tense verb conjugations.",
    questions: [
      {
        num: 1,
        text: "Describe a mentor who had a major impact on your life.",
        answer: "My coach always push us... pushes us to never surrender even when score is down.",
        score: 83,
        feedback: "Self-corrected verb agreement. Great perseverance.",
      },
    ],
  },
  {
    id: "4",
    name: "Sara Al-Hassan",
    studentCode: "sara_alhassan",
    task: "Part B: Project Presentation & Clip #4",
    duration: "4m 38s",
    submittedAt: "2 hours ago",
    score: 98,
    fluency: 30,
    vocab: 30,
    grammar: 20,
    status: "graded",
    examType: "COBE 5-Pts",
    examCount: 9,
    trend: [88, 90, 92, 94, 96, 97, 98],
    spokenTranscript:
      "In our clip response, I analyzed the documentary on marine conservation. The speaker emphasized how microplastics enter coastal food webs, requiring international regulatory policy.",
    aiAssessment:
      "Native-level fluency and native-standard phonetic clarity. Advanced academic lexicon applied accurately throughout the entire recording.",
    questions: [
      {
        num: 1,
        text: "Analyze the main ecological problem presented in the documentary.",
        answer: "The critical issue is bio-accumulation of microplastics across trophic levels in the Mediterranean sea.",
        score: 99,
        feedback: "Outstanding CEFR C1/C2 vocabulary command.",
      },
    ],
  },
  {
    id: "5",
    name: "Tariq Odeh",
    studentCode: "tariq_odeh",
    task: "Part C: Video Clip Analysis #3",
    duration: "3m 15s",
    submittedAt: "3 hours ago",
    score: 72,
    fluency: 21,
    vocab: 22,
    grammar: 15,
    status: "review",
    examType: "COBE 4-Pts",
    examCount: 2,
    trend: [65, 72],
    spokenTranscript:
      "The video shows engineers building solar panels in desert. It was hard because sand storms broke parts, but they made stronger glass covers with local team.",
    aiAssessment:
      "Good basic comprehension of video events. Recommendation: use PREP structure to expand answers beyond simple declarative statements.",
    questions: [
      {
        num: 1,
        text: "What obstacles did the engineers face?",
        answer: "Desert storms damaged solar panels and high temperature reduced battery power.",
        score: 74,
        feedback: "Accurate factual recall.",
      },
    ],
  },
];

const TeacherDashboardPreview = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "submissions" | "student">("submissions");
  const [copied, setCopied] = useState(false);
  const [joinCode, setJoinCode] = useState("ABCD1234");
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "graded" | "review">("all");
  const [selectedStudent, setSelectedStudent] = useState<StudentRecord>(studentsData[0]);
  const [approvedIds, setApprovedIds] = useState<string[]>(["4"]);
  const [exported, setExported] = useState(false);
  const { t } = useLanguage();

  // Speech synthesis for live spoken playback demo
  const togglePlayAudio = (student: StudentRecord) => {
    if ("speechSynthesis" in window) {
      if (playingId === student.id) {
        window.speechSynthesis.cancel();
        setPlayingId(null);
        return;
      }

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(student.spokenTranscript);
      utterance.lang = "en-US";
      utterance.rate = 1.0;
      utterance.onend = () => setPlayingId(null);
      utterance.onerror = () => setPlayingId(null);

      setPlayingId(student.id);
      window.speechSynthesis.speak(utterance);
    } else {
      setPlayingId(playingId === student.id ? null : student.id);
    }
  };

  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(joinCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const regenCode = () => {
    const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    const nums = "23456789";
    let code = "";
    for (let i = 0; i < 4; i++) code += letters.charAt(Math.floor(Math.random() * letters.length));
    for (let i = 0; i < 4; i++) code += nums.charAt(Math.floor(Math.random() * nums.length));
    setJoinCode(code);
  };

  const handleApprove = (studentId: string) => {
    if (!approvedIds.includes(studentId)) {
      setApprovedIds([...approvedIds, studentId]);
    }
  };

  const handleExportCSV = () => {
    setExported(true);
    setTimeout(() => setExported(false), 3000);
  };

  const filteredStudents = studentsData.filter((s) => {
    if (filter === "all") return true;
    return s.status === filter;
  });

  return (
    <section id="teacher-dashboard" className="py-24 px-4 bg-background relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent/15 text-accent border-accent/30 text-xs px-3 py-1 font-semibold">
            {t("dash.badge")}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            {t("dash.title")}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {t("dash.desc")}
          </p>
        </div>

        {/* Dashboard Shell Frame */}
        <div className="rounded-3xl border border-border shadow-2xl bg-card overflow-hidden">
          {/* Top Window Bar with School Name & Join Code */}
          <div className="bg-muted/80 border-b border-border px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                <School className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-foreground text-sm sm:text-base">
                    English 4 & 5-Points • Grade 11B
                  </h3>
                  <Badge variant="outline" className="text-[10px] bg-accent/10 text-accent border-accent/30 font-semibold">
                    {t("dash.activeSession")}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {t("dash.school")}
                </p>
              </div>
            </div>

            {/* Class Join Code Badge with Copy & Regen */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-3 bg-background/90 px-4 py-2 rounded-xl border border-border shadow-sm">
                <div className="text-left">
                  <span className="text-[10px] text-muted-foreground uppercase font-bold block">
                    {t("dash.joinCodeLabel")}
                  </span>
                  <span className="font-mono font-black text-base text-accent tracking-widest">
                    {joinCode}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyCode}
                  className="h-8 px-2 text-xs text-muted-foreground hover:text-foreground"
                  title={t("dash.copyCode")}
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={regenCode}
                className="h-9 text-xs gap-1 border-border text-muted-foreground hover:text-foreground"
                title="Generate new class code"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t("dash.newCode")}</span>
              </Button>
            </div>
          </div>

          {/* Tab Navigation (Inspired by iHelp-system SPA pages) */}
          <div className="bg-muted/40 border-b border-border px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Button
                variant={activeTab === "overview" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("overview")}
                className="h-8 text-xs font-bold gap-1.5"
              >
                <BarChart className="w-3.5 h-3.5" />
                {t("dash.tabOverview")}
              </Button>
              <Button
                variant={activeTab === "submissions" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("submissions")}
                className="h-8 text-xs font-bold gap-1.5"
              >
                <Volume2 className="w-3.5 h-3.5" />
                {t("dash.tabSubmissions")}
              </Button>
              <Button
                variant={activeTab === "student" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("student")}
                className="h-8 text-xs font-bold gap-1.5"
              >
                <Users className="w-3.5 h-3.5" />
                {t("dash.tabStudent")} ({selectedStudent.name})
              </Button>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleExportCSV}
              className="h-8 text-xs gap-1.5 border-accent/40 text-accent hover:bg-accent/10"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              {exported ? t("dash.exportSuccess") : t("dash.exportCsv")}
            </Button>
          </div>

          {/* Quick Metrics Bar (Classroom summary from iHelp-system) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-muted/20 border-b border-border">
            <div className="p-3.5 bg-card rounded-xl border border-border/60">
              <span className="text-xs text-muted-foreground">{t("dash.statEnrolled")}</span>
              <p className="text-xl font-bold text-foreground mt-0.5">28 / 30</p>
              <span className="text-[10px] text-emerald-600 font-medium">93% attendance</span>
            </div>
            <div className="p-3.5 bg-card rounded-xl border border-border/60">
              <span className="text-xs text-muted-foreground">{t("dash.statTotalExams")}</span>
              <p className="text-xl font-bold text-accent mt-0.5">47 Sessions</p>
              <span className="text-[10px] text-accent font-medium">{t("dash.statThisWeek")}</span>
            </div>
            <div className="p-3.5 bg-card rounded-xl border border-border/60">
              <span className="text-xs text-muted-foreground">{t("dash.statClassAvg")}</span>
              <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">
                88.4 / 100
              </p>
              <span className="text-[10px] text-muted-foreground">COBE 4 & 5 Pts</span>
            </div>
            <div className="p-3.5 bg-card rounded-xl border border-border/60">
              <span className="text-xs text-muted-foreground">{t("dash.statTimeSaved")}</span>
              <p className="text-xl font-bold text-primary mt-0.5">14.5 Hours</p>
              <span className="text-[10px] text-emerald-600 font-medium">85% efficiency gain</span>
            </div>
          </div>

          {/* ================= TAB 1: OVERVIEW & ANALYTICS ================= */}
          {activeTab === "overview" && (
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* 30-Day Activity Bar Chart Simulation */}
                <div className="lg:col-span-2 p-5 bg-card rounded-2xl border border-border shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-sm text-foreground">
                      {t("dash.activity30Days")}
                    </span>
                    <Badge variant="secondary" className="text-[10px]">
                      47 Total Exams
                    </Badge>
                  </div>
                  {/* Visual Bar representation */}
                  <div className="h-44 flex items-end justify-between gap-1.5 pt-4 px-2">
                    {[
                      { day: "Sun", val: 5 },
                      { day: "Mon", val: 8 },
                      { day: "Tue", val: 12 },
                      { day: "Wed", val: 9 },
                      { day: "Thu", val: 14 },
                      { day: "Fri", val: 3 },
                      { day: "Sun", val: 7 },
                      { day: "Mon", val: 11 },
                      { day: "Tue", val: 16 },
                      { day: "Wed", val: 10 },
                      { day: "Thu", val: 13 },
                    ].map((item, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 group">
                        <span className="text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                          {item.val}
                        </span>
                        <div
                          className="w-full bg-accent/80 hover:bg-accent rounded-t-md transition-all group-hover:scale-y-105"
                          style={{ height: `${(item.val / 16) * 110}px` }}
                        ></div>
                        <span className="text-[9px] text-muted-foreground font-mono">
                          {item.day}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Score Distribution Ring/Donut */}
                <div className="p-5 bg-card rounded-2xl border border-border shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-bold text-sm text-foreground block mb-4">
                      {t("dash.scoreDistribution")}
                    </span>
                    <div className="flex items-center gap-4">
                      {/* SVG Donut */}
                      <div className="relative w-28 h-28 flex-shrink-0">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="15.915" fill="none" stroke="currentColor" strokeWidth="3.5" className="text-muted" />
                          <circle cx="18" cy="18" r="15.915" fill="none" stroke="#22c55e" strokeWidth="3.5" strokeDasharray="50, 100" strokeDashoffset="0" />
                          <circle cx="18" cy="18" r="15.915" fill="none" stroke="#84cc16" strokeWidth="3.5" strokeDasharray="30, 100" strokeDashoffset="-50" />
                          <circle cx="18" cy="18" r="15.915" fill="none" stroke="#f59e0b" strokeWidth="3.5" strokeDasharray="15, 100" strokeDashoffset="-80" />
                          <circle cx="18" cy="18" r="15.915" fill="none" stroke="#ef4444" strokeWidth="3.5" strokeDasharray="5, 100" strokeDashoffset="-95" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-base font-black text-foreground">88</span>
                          <span className="text-[9px] text-muted-foreground uppercase">AVG</span>
                        </div>
                      </div>

                      <div className="space-y-1.5 flex-1 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span>
                            {t("dash.distExcellent")}
                          </span>
                          <strong className="font-mono">14</strong>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-[#84cc16]"></span>
                            {t("dash.distGood")}
                          </span>
                          <strong className="font-mono">9</strong>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span>
                            {t("dash.distAverage")}
                          </span>
                          <strong className="font-mono">4</strong>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-muted-foreground">
                            <span className="w-2 h-2 rounded-full bg-[#ef4444]"></span>
                            {t("dash.distNeedsWork")}
                          </span>
                          <strong className="font-mono">1</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border mt-3 text-xs text-muted-foreground flex justify-between">
                    <span>{t("dash.statPassing")}:</span>
                    <strong className="text-emerald-600 font-bold">23 / 28 (82%)</strong>
                  </div>
                </div>
              </div>

              {/* Two Column: Top Performers & Needs Attention (from iHelp-system overview) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Top Performers */}
                <div className="p-5 bg-card rounded-2xl border border-border shadow-sm">
                  <span className="font-bold text-sm text-foreground flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-accent" />
                    {t("dash.topPerformers")}
                  </span>
                  <div className="space-y-2.5">
                    {studentsData
                      .filter((s) => s.score >= 90)
                      .map((s, idx) => (
                        <div
                          key={s.id}
                          onClick={() => {
                            setSelectedStudent(s);
                            setActiveTab("student");
                          }}
                          className="p-2.5 rounded-xl bg-muted/40 hover:bg-muted cursor-pointer flex items-center justify-between transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-6 h-6 rounded-full bg-accent/20 text-accent font-black text-xs flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <div>
                              <p className="font-bold text-xs text-foreground">{s.name}</p>
                              <span className="text-[10px] text-muted-foreground">
                                {s.examType} • {s.examCount} exams
                              </span>
                            </div>
                          </div>
                          <Badge className="bg-emerald-500/15 text-emerald-600 border-none font-bold text-xs">
                            {s.score}
                          </Badge>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Needs Attention / At Risk */}
                <div className="p-5 bg-card rounded-2xl border border-border shadow-sm">
                  <span className="font-bold text-sm text-foreground flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    {t("dash.needsAttention")}
                  </span>
                  <div className="space-y-2.5">
                    {studentsData
                      .filter((s) => s.score < 85)
                      .map((s) => (
                        <div
                          key={s.id}
                          onClick={() => {
                            setSelectedStudent(s);
                            setActiveTab("student");
                          }}
                          className="p-2.5 rounded-xl bg-muted/40 hover:bg-muted cursor-pointer flex items-center justify-between transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-600 font-black text-xs flex items-center justify-center">
                              !
                            </span>
                            <div>
                              <p className="font-bold text-xs text-foreground">{s.name}</p>
                              <span className="text-[10px] text-muted-foreground">
                                {s.task}
                              </span>
                            </div>
                          </div>
                          <Badge variant="outline" className="border-amber-500/40 text-amber-600 text-xs font-bold">
                            {s.score} • Needs Practice
                          </Badge>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 2: LIVE SUBMISSIONS & AUDIO PLAYER ================= */}
          {activeTab === "submissions" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
              {/* Left Column: Student Submissions Roster */}
              <div className="lg:col-span-7 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <Button
                      variant={filter === "all" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter("all")}
                      className="h-7 text-xs font-semibold"
                    >
                      {t("dash.allSubmissions")} ({studentsData.length})
                    </Button>
                    <Button
                      variant={filter === "graded" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter("graded")}
                      className="h-7 text-xs font-semibold"
                    >
                      {t("dash.autoGraded")} (3)
                    </Button>
                    <Button
                      variant={filter === "review" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter("review")}
                      className="h-7 text-xs font-semibold"
                    >
                      {t("dash.flagged")} (2)
                    </Button>
                  </div>

                  <span className="text-xs text-muted-foreground hidden sm:inline">
                    Click audio icon to listen
                  </span>
                </div>

                <div className="space-y-2.5">
                  {filteredStudents.map((student) => {
                    const isSelected = selectedStudent.id === student.id;
                    const isPlaying = playingId === student.id;
                    const isApproved = approvedIds.includes(student.id);

                    return (
                      <div
                        key={student.id}
                        onClick={() => setSelectedStudent(student)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isSelected
                            ? "bg-accent/10 border-accent shadow-sm"
                            : "bg-card hover:bg-muted/50 border-border/70"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              togglePlayAudio(student);
                            }}
                            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
                              isPlaying
                                ? "bg-accent text-accent-foreground shadow-glow"
                                : "bg-muted text-foreground hover:bg-accent/20"
                            }`}
                            title={isPlaying ? "Pause Audio" : "Play Student Spoken Audio"}
                          >
                            {isPlaying ? (
                              <Pause className="w-4 h-4 fill-current" />
                            ) : (
                              <Play className="w-4 h-4 fill-current ml-0.5" />
                            )}
                          </button>

                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-bold text-sm text-foreground">
                                {student.name}
                              </p>
                              {isApproved && (
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {student.task} • {student.duration}
                            </p>
                          </div>
                        </div>

                        {/* Animated mini sound wave when playing */}
                        {isPlaying && (
                          <div className="hidden sm:flex items-center gap-1 h-4">
                            <span className="w-1 bg-accent rounded-full animate-bounce h-3"></span>
                            <span className="w-1 bg-accent rounded-full animate-bounce h-5 delay-75"></span>
                            <span className="w-1 bg-accent rounded-full animate-bounce h-2 delay-150"></span>
                            <span className="w-1 bg-accent rounded-full animate-bounce h-4 delay-100"></span>
                          </div>
                        )}

                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <span className="text-base font-black text-foreground">
                              {student.score}
                            </span>
                            <span className="text-xs text-muted-foreground block">
                              / 100
                            </span>
                          </div>
                          <Badge
                            variant={student.status === "graded" ? "secondary" : "outline"}
                            className={`text-[10px] ${
                              student.status === "graded"
                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                                : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                            }`}
                          >
                            {student.status === "graded" ? "Ready" : "Review"}
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: AI Rubric Breakdown of Selected Student */}
              <div className="lg:col-span-5 p-6 bg-muted/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                    <div>
                      <h4 className="font-bold text-foreground text-sm">
                        {selectedStudent.name} • {t("dash.rubricTitle")}
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        {selectedStudent.task} • {selectedStudent.submittedAt}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-accent">
                        {selectedStudent.score}
                      </span>
                      <span className="text-xs text-muted-foreground block">
                        Ministry Grade
                      </span>
                    </div>
                  </div>

                  {/* Spoken Recording Player Bar */}
                  <div className="p-3.5 rounded-xl bg-card border border-border mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={() => togglePlayAudio(selectedStudent)}
                        className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center"
                      >
                        {playingId === selectedStudent.id ? (
                          <Pause className="w-3.5 h-3.5 fill-current" />
                        ) : (
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        )}
                      </button>
                      <div>
                        <span className="text-xs font-bold text-foreground block">
                          {t("dash.audioRecording")}
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          {selectedStudent.duration} • {t("dash.audioQuality")}
                        </span>
                      </div>
                    </div>
                    <Volume2 className="w-4 h-4 text-accent" />
                  </div>

                  {/* Spoken Transcript Preview */}
                  <div className="p-3 rounded-lg bg-muted/50 border border-border/80 text-xs text-muted-foreground mb-4">
                    <span className="font-bold text-foreground block mb-0.5">
                      {t("dash.transcriptLabel")}
                    </span>
                    <p className="italic">"{selectedStudent.spokenTranscript}"</p>
                  </div>

                  {/* Rubric Breakdown Progress Bars */}
                  <div className="space-y-3.5 mb-6">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-foreground">{t("dash.fluency")}</span>
                        <span className="text-accent">{selectedStudent.fluency} / 30 pts</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-accent h-2 rounded-full"
                          style={{ width: `${(selectedStudent.fluency / 30) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-foreground">{t("dash.vocab")}</span>
                        <span className="text-accent">{selectedStudent.vocab} / 30 pts</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-accent h-2 rounded-full"
                          style={{ width: `${(selectedStudent.vocab / 30) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-foreground">{t("dash.grammar")}</span>
                        <span className="text-accent">{selectedStudent.grammar} / 20 pts</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-accent h-2 rounded-full"
                          style={{ width: `${(selectedStudent.grammar / 20) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* AI Examiner Comment */}
                  <div className="p-3.5 rounded-xl bg-accent/5 border border-accent/20 text-xs text-muted-foreground leading-relaxed mb-4">
                    <div className="flex items-center gap-1.5 font-bold text-foreground mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-accent" />
                      {t("dash.aiFeedback")}
                    </div>
                    "{selectedStudent.aiAssessment}"
                  </div>
                </div>

                {/* Action Buttons for Teacher */}
                <div className="pt-4 border-t border-border flex items-center gap-2">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => handleApprove(selectedStudent.id)}
                    className={`w-full text-xs font-bold transition-all ${
                      approvedIds.includes(selectedStudent.id)
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                        : ""
                    }`}
                  >
                    <CheckCircle className="w-3.5 h-3.5 mr-1.5" />
                    {approvedIds.includes(selectedStudent.id)
                      ? t("dash.approved")
                      : t("dash.approveBtn")}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveTab("student")}
                    className="text-xs whitespace-nowrap"
                  >
                    Full Profile →
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* ================= TAB 3: STUDENT PROFILE DEEP-DIVE ================= */}
          {activeTab === "student" && (
            <div className="p-6 space-y-6">
              {/* Profile Card Header (from iHelp-system student-detail.js) */}
              <div className="p-6 bg-gradient-to-r from-primary to-primary-light text-primary-foreground rounded-2xl flex flex-wrap items-center justify-between gap-6 shadow-elegant">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-black">
                    {selectedStudent.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{selectedStudent.name}</h3>
                    <p className="text-xs text-primary-foreground/80 mt-1">
                      {t("dash.studentCode")}: <code className="bg-black/20 px-2 py-0.5 rounded font-mono font-bold">{selectedStudent.studentCode}</code> • {selectedStudent.examType}
                    </p>
                  </div>
                </div>

                {/* Performance stats pills */}
                <div className="flex items-center gap-4 text-center">
                  <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                    <span className="text-xs text-primary-foreground/70 block">Exams Taken</span>
                    <strong className="text-xl font-black">{selectedStudent.examCount}</strong>
                  </div>
                  <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                    <span className="text-xs text-primary-foreground/70 block">Best Score</span>
                    <strong className="text-xl font-black text-accent">{selectedStudent.score}</strong>
                  </div>
                  <div className="bg-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                    <span className="text-xs text-primary-foreground/70 block">Fluency Rating</span>
                    <strong className="text-xl font-black text-emerald-300">A+</strong>
                  </div>
                </div>
              </div>

              {/* Score Trend & Per-Question Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Score over time line simulation */}
                <div className="lg:col-span-5 p-5 bg-card rounded-2xl border border-border shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="font-bold text-sm text-foreground block mb-2">
                      {t("dash.scoreOverTime")}
                    </span>
                    <p className="text-xs text-muted-foreground mb-4">
                      Progress across {selectedStudent.trend.length} recorded exam sessions
                    </p>

                    <div className="h-36 flex items-end justify-between gap-2 pt-4 px-2">
                      {selectedStudent.trend.map((sc, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1.5 group">
                          <span className="text-[10px] text-accent font-bold">
                            {sc}
                          </span>
                          <div
                            className="w-full bg-primary/70 hover:bg-primary rounded-t-md transition-all"
                            style={{ height: `${((sc - 60) / 40) * 90}px` }}
                          ></div>
                          <span className="text-[9px] text-muted-foreground font-mono">
                            #{i + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border mt-3 text-xs text-muted-foreground flex justify-between">
                    <span>Overall Growth:</span>
                    <strong className="text-emerald-600 font-bold">
                      +{selectedStudent.trend[selectedStudent.trend.length - 1] - selectedStudent.trend[0]} pts improvement
                    </strong>
                  </div>
                </div>

                {/* Per-Question Details (from iHelp-system Question-Breakdown) */}
                <div className="lg:col-span-7 p-5 bg-card rounded-2xl border border-border shadow-sm">
                  <span className="font-bold text-sm text-foreground block mb-3">
                    Question-by-Question Oral Transcript Breakdown
                  </span>
                  <div className="space-y-3">
                    {selectedStudent.questions.map((q) => (
                      <div key={q.num} className="p-3.5 rounded-xl bg-muted/30 border border-border/80">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-xs font-bold text-foreground">
                            Question #{q.num}: {q.text}
                          </span>
                          <Badge className="bg-accent/15 text-accent border-none font-bold text-xs">
                            {q.score} pts
                          </Badge>
                        </div>
                        <p className="text-xs text-foreground/90 italic mb-2">
                          💬 "{q.answer}"
                        </p>
                        <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-accent" />
                          <strong>AI Feedback: </strong> {q.feedback}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeacherDashboardPreview;
