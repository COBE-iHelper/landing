import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mic,
  MicOff,
  Volume2,
  Sparkles,
  RotateCcw,
  Play,
  Pause,
  Award,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const cobePrompts = [
  {
    id: "part-a",
    part: "Part A • Personal Interview",
    timeLimit: 60,
    prompt:
      "Tell me about a person who has greatly influenced or inspired you. Why is this person important to you, and what lessons did you learn from them?",
    modelResponse:
      "One person who has greatly influenced me is my older sister. When she was in high school, she balanced demanding studies with volunteering at an animal shelter. Seeing her dedication taught me the importance of time management and persistence, which inspires me in my own academic journey.",
    aiAnalysis: {
      fluency: 29,
      vocab: 28,
      grammar: 19,
      overall: 96,
      cefr: "B2 / C1 (Advanced)",
      strengths: [
        "Natural conversational flow without artificial pauses",
        "Rich lexical range: 'dedication', 'persistence', 'balanced'",
        "Accurate use of past simple and present perfect tense",
      ],
      tip: "Try adding a closing reflective summary sentence to maximize Part A depth.",
    },
  },
  {
    id: "part-b",
    part: "Part B • Project Presentation",
    timeLimit: 90,
    prompt:
      "Describe the topic of your high school English research project. What was the most surprising discovery you made, and what challenges did you face?",
    modelResponse:
      "For my English project, my team researched the psychological effects of social media algorithms on teenagers. The most surprising finding was how recommendation engines amplify echo chambers. Our main challenge was finding peer-reviewed studies, but we overcame it by collaborating with our municipal public library.",
    aiAnalysis: {
      fluency: 30,
      vocab: 29,
      grammar: 20,
      overall: 99,
      cefr: "C1 (Fluent)",
      strengths: [
        "Exceptional academic phrasing: 'psychological effects', 'echo chambers', 'peer-reviewed'",
        "Precise pronunciation and sentence stress",
        "Directly addresses all parts of the MoE project rubric",
      ],
      tip: "Outstanding mastery. Ready for 5-point Bagrut honors.",
    },
  },
];

const StudentSimulator = () => {
  const [activePromptIndex, setActivePromptIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedDuration, setRecordedDuration] = useState(0);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  const activePrompt = cobePrompts[activePromptIndex];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Handle Voice Synthesis for Examiner Prompt
  const speakExaminerPrompt = () => {
    if ("speechSynthesis" in window) {
      if (isSynthesizing) {
        window.speechSynthesis.cancel();
        setIsSynthesizing(false);
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(activePrompt.prompt);
      utterance.lang = "en-US";
      utterance.rate = 0.95;
      utterance.onend = () => setIsSynthesizing(false);
      utterance.onerror = () => setIsSynthesizing(false);
      setIsSynthesizing(true);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech not supported in this browser.");
    }
  };

  // Recording timer simulation
  useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(() => {
        setRecordedDuration((prev) => {
          if (prev >= 18) {
            // auto finish simulated recording after 18 seconds
            setIsRecording(false);
            setShowAnalysis(true);
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRecording]);

  const handleStartSimulatedRecording = () => {
    if (isSynthesizing) {
      window.speechSynthesis.cancel();
      setIsSynthesizing(false);
    }
    setIsRecording(true);
    setShowAnalysis(false);
    setRecordedDuration(0);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setShowAnalysis(true);
  };

  const handleReset = () => {
    if (isSynthesizing) {
      window.speechSynthesis.cancel();
      setIsSynthesizing(false);
    }
    setIsRecording(false);
    setShowAnalysis(false);
    setRecordedDuration(0);
    setIsPlayingAudio(false);
  };

  return (
    <section id="simulator" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-accent/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/15 text-accent border-accent/30 text-xs px-3 py-1 font-semibold">
            LIVE INTERACTIVE DEMO
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            Experience the AI Oral Examiner Right Now
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Test how a high school student interacts with the <strong>COBE Computerized Oral Exam</strong>. Listen to the AI examiner, simulate an audio response, and watch real-time rubric scoring in action.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="max-w-4xl mx-auto bg-card rounded-3xl border border-border/80 shadow-2xl overflow-hidden">
          {/* Top Bar with Question Selector */}
          <div className="bg-muted/70 px-6 py-4 border-b border-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              <span className="text-xs font-mono font-bold text-muted-foreground ml-2">
                COBE Sim v2.4 • Ministry of Education Official Format
              </span>
            </div>

            {/* Prompt Selector Pills */}
            <div className="flex items-center gap-2">
              {cobePrompts.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setActivePromptIndex(idx);
                    handleReset();
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activePromptIndex === idx
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "bg-background text-muted-foreground hover:text-foreground border border-border/60"
                  }`}
                >
                  {p.part}
                </button>
              ))}
            </div>
          </div>

          {/* Examiner Speaking Prompt Area */}
          <div className="p-6 md:p-8 border-b border-border bg-gradient-to-b from-card to-muted/20">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                  <Volume2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm">
                    AI Examiner Spoken Prompt
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    Time Allowed: {activePrompt.timeLimit} seconds
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={speakExaminerPrompt}
                className="gap-2 border-accent/40 text-accent hover:bg-accent/10"
              >
                <Volume2 className={`w-4 h-4 ${isSynthesizing ? "animate-pulse text-emerald-500" : ""}`} />
                {isSynthesizing ? "Stop Examiner Voice" : "Play Examiner Voice"}
              </Button>
            </div>

            <div className="p-5 rounded-2xl bg-muted/60 border border-border/80">
              <p className="text-foreground font-medium text-base md:text-lg leading-relaxed">
                "{activePrompt.prompt}"
              </p>
            </div>
          </div>

          {/* Student Interaction & Recording Simulation */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col items-center justify-center py-6 text-center">
              {/* Animated Mic Button & Status */}
              <div className="relative mb-6">
                {isRecording && (
                  <span className="absolute -inset-3 rounded-full bg-red-500/20 animate-ping"></span>
                )}
                <button
                  onClick={isRecording ? handleStopRecording : handleStartSimulatedRecording}
                  className={`relative w-24 h-24 rounded-full flex flex-col items-center justify-center transition-all shadow-xl ${
                    isRecording
                      ? "bg-red-500 text-white scale-105"
                      : "bg-accent text-accent-foreground hover:scale-105 shadow-glow"
                  }`}
                >
                  {isRecording ? (
                    <Mic className="w-10 h-10 animate-bounce" />
                  ) : (
                    <Mic className="w-10 h-10" />
                  )}
                  <span className="text-[10px] font-black uppercase mt-1">
                    {isRecording ? "Stop & Grade" : "Test Speech"}
                  </span>
                </button>
              </div>

              {/* Status & Timers */}
              {isRecording ? (
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 font-mono text-sm font-bold border border-red-500/20">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    Simulating Spoken Audio: 00:{recordedDuration.toString().padStart(2, "0")} / 00:60
                  </div>

                  {/* Dynamic Sound Wave Simulation */}
                  <div className="flex items-center justify-center gap-1.5 h-10">
                    {[12, 28, 44, 20, 36, 16, 40, 24, 48, 32, 14, 38, 22].map((height, i) => (
                      <div
                        key={i}
                        className="w-1.5 bg-accent rounded-full animate-pulse"
                        style={{
                          height: `${Math.max(10, (height * (Math.sin(recordedDuration + i) + 1.2)) / 1.5)}px`,
                          animationDuration: `${0.4 + (i % 5) * 0.15}s`,
                        }}
                      ></div>
                    ))}
                  </div>

                  <p className="text-xs text-muted-foreground">
                    Speaking response into simulated examiner engine...
                  </p>
                </div>
              ) : !showAnalysis ? (
                <div className="space-y-2">
                  <p className="font-semibold text-foreground text-sm">
                    Click "Test Speech" to simulate a student responding
                  </p>
                  <p className="text-xs text-muted-foreground max-w-md">
                    Our AI evaluates pronunciation, vocabulary complexity, syntax structure, and natural cadence.
                  </p>
                </div>
              ) : null}

              {/* Reset action if analysis shown */}
              {showAnalysis && (
                <div className="mb-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleReset}
                    className="text-xs text-muted-foreground gap-1.5 hover:text-foreground"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset & Try Another Response
                  </Button>
                </div>
              )}
            </div>

            {/* Instant AI Evaluation Results Card */}
            {showAnalysis && (
              <div className="mt-4 p-6 rounded-2xl bg-card border border-accent/40 shadow-lg animate-in fade-in slide-in-from-bottom-3 duration-500">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-base">
                        AI Rubric Evaluation Complete
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Evaluated against Israel Ministry of Education Bagrut criteria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2 bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20">
                    <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
                      {activePrompt.aiAnalysis.overall}
                    </span>
                    <span className="text-xs font-bold text-muted-foreground">
                      / 100 Grade
                    </span>
                    <Badge variant="outline" className="ml-2 text-xs font-semibold text-accent border-accent/40">
                      {activePrompt.aiAnalysis.cefr}
                    </Badge>
                  </div>
                </div>

                {/* Rubric Breakdown Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-muted/40 border border-border/60">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-foreground">Fluency & Pronunciation</span>
                      <span className="text-xs font-black text-accent">
                        {activePrompt.aiAnalysis.fluency}/30
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-accent h-1.5 rounded-full"
                        style={{ width: `${(activePrompt.aiAnalysis.fluency / 30) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-[11px] text-muted-foreground mt-1.5 block">
                      Natural flow, no hesitation
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-muted/40 border border-border/60">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-foreground">Vocabulary Variety</span>
                      <span className="text-xs font-black text-accent">
                        {activePrompt.aiAnalysis.vocab}/30
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-accent h-1.5 rounded-full"
                        style={{ width: `${(activePrompt.aiAnalysis.vocab / 30) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-[11px] text-muted-foreground mt-1.5 block">
                      Advanced lexical register
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-muted/40 border border-border/60">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-foreground">Grammar Accuracy</span>
                      <span className="text-xs font-black text-accent">
                        {activePrompt.aiAnalysis.grammar}/20
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-accent h-1.5 rounded-full"
                        style={{ width: `${(activePrompt.aiAnalysis.grammar / 20) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-[11px] text-muted-foreground mt-1.5 block">
                      Accurate compound syntax
                    </span>
                  </div>
                </div>

                {/* Key Strengths & Growth Tip */}
                <div className="space-y-2 mb-6 text-xs">
                  <p className="font-bold text-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Key Strengths Identified by AI:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-2">
                    {activePrompt.aiAnalysis.strengths.map((str, i) => (
                      <li key={i}>{str}</li>
                    ))}
                  </ul>

                  <div className="mt-3 p-3 rounded-lg bg-accent/5 border border-accent/20 text-foreground flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Examiner Tip for 100%:</strong> {activePrompt.aiAnalysis.tip}
                    </span>
                  </div>
                </div>

                {/* Model Spoken Transcript */}
                <div className="p-4 rounded-xl bg-muted/30 border border-border text-xs">
                  <span className="font-bold text-foreground block mb-1">
                    Simulated Student Speech Transcript:
                  </span>
                  <p className="italic text-muted-foreground">
                    "{activePrompt.modelResponse}"
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSimulator;
