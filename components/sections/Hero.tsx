"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, CalendarCheck, Bell, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function BookingMock() {
  const slots = [
    { time: "10:00", name: "田中 美咲",  service: "カット＋カラー", status: "confirmed" },
    { time: "11:30", name: "山田 花子",  service: "ヘッドスパ",     status: "confirmed" },
    { time: "13:00", name: "佐藤 由美",  service: "縮毛矯正",       status: "pending" },
    { time: "14:30", name: "（空き）",    service: "",               status: "empty" },
    { time: "16:00", name: "鈴木 あい",  service: "カット",          status: "confirmed" },
  ];
  return (
    <div className="w-full rounded-2xl overflow-hidden bg-white border border-gray-100 card-shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-50 bg-gray-50/60">
        <div className="flex items-center gap-2">
          <CalendarCheck className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-semibold text-gray-800">本日の予約 — 2026年6月6日（金）</span>
        </div>
        <span className="text-xs bg-orange-100 text-orange-600 font-medium px-2.5 py-0.5 rounded-full">4件確定</span>
      </div>
      {/* Slots */}
      <div className="divide-y divide-gray-50">
        {slots.map((s, i) => (
          <div key={i} className={`flex items-center gap-4 px-5 py-3 ${s.status === "empty" ? "bg-orange-50/40" : ""}`}>
            <span className="text-sm font-mono font-medium text-gray-500 w-12 shrink-0">{s.time}</span>
            {s.status === "empty" ? (
              <span className="text-sm text-orange-400 italic">空き枠あり</span>
            ) : (
              <>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{s.name}</p>
                  <p className="text-xs text-gray-400 truncate">{s.service}</p>
                </div>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full shrink-0 ${
                  s.status === "confirmed" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                }`}>
                  {s.status === "confirmed" ? "確定" : "仮予約"}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
      {/* Footer */}
      <div className="px-5 py-3 bg-gray-50/60 border-t border-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1"><Bell className="w-3 h-3 text-orange-400" /> リマインド送信済み</span>
          <span className="flex items-center gap-1"><Users className="w-3 h-3 text-blue-400" /> 顧客履歴あり</span>
        </div>
        <button className="text-xs font-medium text-orange-500 hover:text-orange-600 transition-colors">
          全件表示 →
        </button>
      </div>
    </div>
  );
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-white">
      {/* Dot pattern */}
      <div className="absolute inset-0 hero-dots opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/20 to-white pointer-events-none" />
      {/* Orange glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange-400/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center text-center mb-12">
          <FadeUp delay={0}>
            <Badge variant="outline" className="mb-5 border-orange-200 bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              累計導入1,200店舗突破 · 無料トライアル実施中
            </Badge>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 max-w-3xl text-gray-900">
              予約管理を、<br />
              <span className="text-orange-gradient">もっとかんたんに。</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-lg sm:text-xl text-gray-500 max-w-2xl leading-relaxed mb-3">
              無断キャンセルを減らし、リピート来店を増やす。
            </p>
            <p className="text-base text-gray-400 max-w-xl leading-relaxed mb-8">
              予約・顧客管理・LINE自動リマインドをひとつにまとめた、<br className="hidden sm:block" />
              店舗オーナーのための予約管理システムです。
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Button
                size="lg"
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                className="group bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 h-13 rounded-xl text-base shadow-md hover:shadow-lg hover:shadow-orange-200 transition-all"
              >
                14日間無料で試す
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                className="border-gray-200 bg-white hover:bg-gray-50 text-gray-700 px-7 h-13 rounded-xl text-base transition-all"
              >
                デモを見る
              </Button>
            </div>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="mt-5 flex flex-col sm:flex-row items-center gap-4">
              <p className="text-xs text-gray-400">クレジットカード不要 · 14日間無料 · いつでも解約OK</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs text-gray-500 ml-1">4.9 / 5.0（182件のレビュー）</span>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Booking mock */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="absolute -inset-4 bg-orange-400/8 rounded-3xl blur-2xl" />
          <BookingMock />
        </motion.div>
      </div>
    </section>
  );
}
