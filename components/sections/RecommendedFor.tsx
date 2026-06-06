"use client";

import { motion } from "framer-motion";
import { Scissors, UtensilsCrossed, Heart, Stethoscope } from "lucide-react";

const mainShops = [
  {
    icon: Scissors,
    type: "美容室・サロン",
    color: "text-pink-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
    hover: "hover:border-pink-200 hover:shadow-pink-100",
    items: [
      { label: "予約管理", desc: "指名スタイリスト・メニュー別に管理" },
      { label: "顧客管理", desc: "施術履歴・カルテを自動保存" },
      { label: "リピート促進", desc: "来店から60日後に自動DMを送信" },
    ],
  },
  {
    icon: UtensilsCrossed,
    type: "飲食店・カフェ",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    hover: "hover:border-amber-200 hover:shadow-amber-100",
    items: [
      { label: "予約管理", desc: "席・コース・人数をまとめて管理" },
      { label: "顧客管理", desc: "アレルギー情報・常連フラグを記録" },
      { label: "リピート促進", desc: "誕生日クーポンを自動送信" },
    ],
  },
  {
    icon: Heart,
    type: "整体院・接骨院",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    hover: "hover:border-emerald-200 hover:shadow-emerald-100",
    items: [
      { label: "予約管理", desc: "施術者別・ベッド別にスケジュール管理" },
      { label: "顧客管理", desc: "症状・施術記録をデジタルカルテで管理" },
      { label: "リピート促進", desc: "次回予約のリマインド通知を自動送信" },
    ],
  },
];

export default function RecommendedFor() {
  return (
    <section className="py-20 px-6 bg-gray-50/60">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-3">こんなお店におすすめ</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            あなたのお店に、ぴったり合った使い方があります。
          </h2>
        </motion.div>

        {/* メイン3業種 */}
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {mainShops.map((shop, i) => (
            <motion.div
              key={shop.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
              className={`bg-white rounded-2xl border ${shop.border} p-5 card-shadow transition-all duration-200 ${shop.hover} hover:shadow-lg cursor-default`}
            >
              <div className={`w-10 h-10 rounded-xl ${shop.bg} flex items-center justify-center mb-4`}>
                <shop.icon className={`w-5 h-5 ${shop.color}`} />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-3">{shop.type}</h3>
              <ul className="flex flex-col gap-2.5">
                {shop.items.map((item) => (
                  <li key={item.label}>
                    <p className="text-xs font-semibold text-gray-700">{item.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* サブ業種 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-5 py-3.5 card-shadow"
        >
          <Stethoscope className="w-4 h-4 text-blue-400 shrink-0" />
          <p className="text-xs text-gray-500">
            <span className="font-semibold text-gray-700">クリニック・歯科医院</span>
            にも対応しています。予約枠管理・定期検診リマインドなど、
            医療業種向けの活用イメージは「<a href="#usecases" className="text-orange-500 hover:underline">活用事例</a>」をご覧ください。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
