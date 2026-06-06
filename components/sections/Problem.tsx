"use client";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

const pains = [
  "無断キャンセルで売上が飛ぶ",
  "電話対応に追われてスタッフが疲弊",
  "手書き・エクセル管理でミスが絶えない",
  "リピーターが増えず新規集客コストが高い",
];
const fixes = [
  "前日・当日にLINEで自動リマインド送信",
  "24時間ネット予約で電話対応を大幅削減",
  "予約・顧客情報をクラウドで一元管理",
  "来店履歴をもとに自動フォローDM送信",
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-3">こんなお悩みありませんか？</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 max-w-2xl mx-auto">
            予約管理の「面倒くさい」を、まとめて解決します
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-[1fr_48px_1fr] gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">導入前</p>
            {pains.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100"
              >
                <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-700">{p}</span>
              </motion.div>
            ))}
          </motion.div>
          <div className="hidden md:flex justify-center">
            <div className="w-10 h-10 rounded-full bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-500 font-bold text-lg">→</div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-1">ReserveFlow導入後</p>
            {fixes.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100 hover:border-emerald-200 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-800">{f}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
