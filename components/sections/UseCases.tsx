"use client";
import { motion } from "framer-motion";
import { Scissors, UtensilsCrossed, Heart, Stethoscope, ArrowRight } from "lucide-react";

const cases = [
  {
    icon: Scissors, type: "美容室・ヘアサロン", color: "text-pink-500", bg: "bg-pink-500", light: "bg-pink-50", border: "border-pink-100",
    title: "指名スタイリストへの予約がLINEで完結",
    body: "お客様はLINEから指名スタイリストを選んで予約。前日にリマインドが届き、当日のキャンセルが激減。スタッフもスマホで空き状況を確認できます。",
    results: ["無断キャンセル 71%削減", "LINE予約率 85%達成", "リピート率 2.4倍に向上"],
  },
  {
    icon: UtensilsCrossed, type: "飲食店・カフェ", color: "text-amber-500", bg: "bg-amber-500", light: "bg-amber-50", border: "border-amber-100",
    title: "コース予約・席管理をスマホひとつで",
    body: "コース別・テーブル別の予約をリアルタイム管理。常連のお客様情報や記念日を登録して、パーソナルな対応が可能に。誕生日クーポンも自動送信。",
    results: ["予約管理工数 60%削減", "常連客のリピート率向上", "スタッフ対応満足度 UP"],
  },
  {
    icon: Heart, type: "整体院・リラクゼーション", color: "text-emerald-500", bg: "bg-emerald-500", light: "bg-emerald-50", border: "border-emerald-100",
    title: "施術記録と次回予約をデジタルカルテで管理",
    body: "施術内容・症状の経過をデジタルカルテに記録。次回予約をLINEで自動提案するため、リピート来店率が大幅に向上しています。",
    results: ["リピート来店率 2.8倍", "キャンセル率 65%改善", "カルテ記入時間 ゼロに"],
  },
  {
    icon: Stethoscope, type: "クリニック・歯科医院", color: "text-blue-500", bg: "bg-blue-500", light: "bg-blue-50", border: "border-blue-100",
    title: "定期検診のご案内を自動化で患者来院を促進",
    body: "診察・処置ごとに予約枠を細かく設定し、待ち時間を最小化。定期検診の時期が来たら自動でDMを送信、患者さんの来院機会を逃しません。",
    results: ["定期検診来院率 43%向上", "受付業務工数 50%削減", "患者満足度スコア向上"],
  },
];

export default function UseCases() {
  return (
    <section id="usecases" className="py-24 px-6 bg-gray-50/60">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-3">活用事例</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            業種別の活用イメージ
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">業種に合わせた使い方で、多くの店舗オーナーが成果を実感しています。</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.type}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`bg-white rounded-2xl border ${c.border} p-6 card-shadow hover:shadow-lg transition-all duration-200 cursor-default`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl ${c.light} flex items-center justify-center shrink-0`}>
                  <c.icon className={`w-5 h-5 ${c.color}`} />
                </div>
                <span className="text-xs font-semibold text-gray-500">{c.type}</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{c.body}</p>
              <ul className="flex flex-col gap-1.5">
                {c.results.map((r) => (
                  <li key={r} className="flex items-center gap-2 text-xs text-gray-600">
                    <ArrowRight className={`w-3 h-3 ${c.color} shrink-0`} />
                    {r}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
