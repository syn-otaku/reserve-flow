"use client";
import { motion } from "framer-motion";
import { Bell, CheckCircle2, Calendar, ChevronRight } from "lucide-react";

function PhoneMock() {
  return (
    <div className="w-[240px] rounded-[36px] bg-gray-900 p-3 shadow-2xl mx-auto float">
      <div className="rounded-[28px] bg-white overflow-hidden">
        {/* Status bar */}
        <div className="flex items-center justify-between px-4 pt-3 pb-1 text-[10px] font-semibold text-gray-700">
          <span>9:41</span><span>●●●</span>
        </div>
        {/* LINE notification mock */}
        <div className="mx-3 mb-2 rounded-xl bg-green-50 border border-green-100 p-2.5">
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-4 h-4 rounded bg-green-500 flex items-center justify-center"><Bell className="w-2.5 h-2.5 text-white" /></div>
            <span className="text-[9px] font-bold text-green-700">LINE通知</span>
          </div>
          <p className="text-[9px] text-gray-700 leading-relaxed">田中様、明日14:00のご予約のリマインドです。キャンセルの場合はこちらから✉️</p>
        </div>
        {/* Calendar */}
        <div className="px-3 pb-2">
          <p className="text-[9px] font-bold text-gray-700 mb-1.5 flex items-center gap-1"><Calendar className="w-2.5 h-2.5 text-orange-500" /> 今日の予約</p>
          {["10:00 山田花子 — カット", "12:30 佐藤由美 — カラー", "15:00 鈴木あい — パーマ"].map((item, i) => (
            <div key={i} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
              <span className="text-[9px] text-gray-600">{item}</span>
              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 card-shadow-lg overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-50 flex items-center justify-between">
        <p className="text-sm font-bold text-gray-800">顧客管理</p>
        <span className="text-xs text-orange-500 font-medium">全245名</span>
      </div>
      <div className="divide-y divide-gray-50">
        {[
          { name: "田中 美咲", visits: 12, last: "3日前", tag: "VIP" },
          { name: "山田 花子", visits: 5,  last: "1週間前", tag: "リピーター" },
          { name: "佐藤 由美", visits: 1,  last: "2週間前", tag: "新規" },
        ].map((c) => (
          <div key={c.name} className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50/60 transition-colors">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-xs font-bold text-orange-600 shrink-0">
              {c.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800">{c.name}</p>
              <p className="text-xs text-gray-400">来店 {c.visits}回 · 最終来店 {c.last}</p>
            </div>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 ${
              c.tag === "VIP" ? "bg-orange-100 text-orange-600" :
              c.tag === "リピーター" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
            }`}>{c.tag}</span>
            <ChevronRight className="w-3 h-3 text-gray-300 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AppPreview() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-3">アプリプレビュー</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            スマホでも、PCでも。<br className="hidden sm:block" />どこからでも管理できます。
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">お店にいなくてもリアルタイムで予約確認・顧客対応が可能。以下はUIデモのイメージです。</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <PhoneMock />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            <DashboardMock />
            <div className="rounded-2xl bg-orange-50 border border-orange-100 p-5">
              <p className="text-sm font-bold text-gray-800 mb-1">💬 リマインド通知のUIイメージ</p>
              <p className="text-sm text-gray-500">予約の前日・当日にSMS・メールで通知するUIデモです。LINE連携は実装イメージであり、実際のAPI連携は別途開発が必要です。</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
