"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, GitPullRequest, Activity, Clock, Shield } from "lucide-react";

/* ── Mock: Code Review UI ── */
function ReviewMock() {
  return (
    <div className="w-full rounded-2xl overflow-hidden glass-card border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.1)]">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-white/[0.04] border-b border-white/[0.06]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-3 text-zinc-500 text-[11px] font-mono">PR #142 — AI Review</span>
        <span className="ml-auto text-[10px] text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded-full border border-purple-500/20">
          ● Live
        </span>
      </div>

      <div className="p-5 font-mono text-[11px] space-y-2">
        {/* Comment threads */}
        {[
          { type: "success", file: "auth/oauth.ts:24", msg: "Add error handling for network timeouts", severity: "warning" },
          { type: "info", file: "utils/token.ts:8", msg: "Consider using a constant for expiry duration", severity: "info" },
          { type: "security", file: "middleware.ts:15", msg: "Validate token origin before processing", severity: "critical" },
        ].map((c, i) => (
          <div
            key={i}
            className={`rounded-lg p-3 border flex gap-3 items-start ${
              c.severity === "critical"
                ? "bg-red-500/8 border-red-500/20"
                : c.severity === "warning"
                ? "bg-yellow-500/8 border-yellow-500/20"
                : "bg-white/[0.03] border-white/[0.06]"
            }`}
          >
            <div className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${
              c.severity === "critical" ? "bg-red-400" : c.severity === "warning" ? "bg-yellow-400" : "bg-blue-400"
            }`} />
            <div>
              <span className="text-zinc-400">{c.file}</span>
              <p className={`mt-0.5 ${c.severity === "critical" ? "text-red-300" : "text-zinc-300"}`}>
                {c.msg}
              </p>
            </div>
            <span className="ml-auto text-zinc-600 text-[10px] shrink-0">AI</span>
          </div>
        ))}

        {/* Summary bar */}
        <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-zinc-500">
          <span className="flex items-center gap-1.5"><GitPullRequest className="w-3 h-3" /> 3 suggestions</span>
          <span className="text-purple-300">Review complete in 1m 42s →</span>
        </div>
      </div>
    </div>
  );
}

/* ── Mock: Deploy Pipeline ── */
function DeployMock() {
  const steps = [
    { label: "Build", status: "done", time: "1m 12s" },
    { label: "Test", status: "done", time: "2m 03s" },
    { label: "Lint", status: "done", time: "0m 14s" },
    { label: "Deploy", status: "active", time: "Running…" },
    { label: "Health", status: "pending", time: "—" },
  ];

  return (
    <div className="w-full rounded-2xl overflow-hidden glass-card border border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.1)]">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-white/[0.04] border-b border-white/[0.06]">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-3 text-zinc-500 text-[11px] font-mono">Deploy Pipeline — production</span>
      </div>

      <div className="p-5 space-y-2">
        {/* Progress bar */}
        <div className="h-1 rounded-full bg-white/[0.05] mb-5 overflow-hidden">
          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          </div>
        </div>

        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-3 py-1.5">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${
                step.status === "done"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : step.status === "active"
                  ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 animate-pulse"
                  : "bg-white/[0.05] text-zinc-600 border border-white/[0.06]"
              }`}
            >
              {step.status === "done" ? "✓" : i + 1}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${
                  step.status === "done" ? "text-zinc-300" : step.status === "active" ? "text-indigo-300" : "text-zinc-600"
                }`}>
                  {step.label}
                </span>
                <span className="text-[11px] text-zinc-500 font-mono">{step.time}</span>
              </div>
              {step.status === "active" && (
                <div className="mt-1 h-0.5 rounded-full bg-white/[0.05] overflow-hidden">
                  <div className="h-full w-2/3 bg-indigo-500 rounded-full" />
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06] text-xs text-zinc-500">
          <Activity className="w-3.5 h-3.5 text-green-400" />
          <span>All systems operational</span>
          <span className="ml-auto flex items-center gap-1"><Clock className="w-3 h-3" /> avg 4m 02s</span>
        </div>
      </div>
    </div>
  );
}

/* ── Spotlight items ── */
const spots = [
  {
    tag: "AI Code Review",
    headline: "Replace 80% of routine review comments with AI",
    body: "Helix reads your PR like a senior engineer. It understands context, catches subtle logic errors, flags security vulnerabilities, and suggests improvements — in minutes, not days.",
    points: [
      "Context-aware review across the entire codebase",
      "Security and performance analysis built-in",
      "Learns your team's coding standards over time",
    ],
    mock: ReviewMock,
    reverse: false,
  },
  {
    tag: "Deploy Pipeline",
    headline: "Deploy with confidence, every single time",
    body: "Zero-config deployment pipelines that adapt to your stack. Automatic rollbacks, health checks, and canary releases mean you can ship fast without fear.",
    points: [
      "One-click rollback to any previous state",
      "Canary releases with automatic promotion",
      "Health checks before traffic is shifted",
    ],
    mock: DeployMock,
    reverse: true,
  },
];

export default function FeatureSpotlight() {
  return (
    <section className="py-28 px-6 space-y-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent pointer-events-none" />

      {spots.map((spot) => {
        const Mock = spot.mock;
        return (
          <div
            key={spot.tag}
            className="mx-auto max-w-6xl relative z-10"
          >
            <div className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${spot.reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: spot.reverse ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" as const }}
              >
                <span className="inline-block text-xs text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full mb-5">
                  {spot.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gradient-subtle mb-4 leading-tight">
                  {spot.headline}
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed mb-6">
                  {spot.body}
                </p>
                <ul className="space-y-3 mb-8">
                  {spot.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <button className="group flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </motion.div>

              {/* Mock */}
              <motion.div
                initial={{ opacity: 0, x: spot.reverse ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" as const }}
              >
                <Mock />
              </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
