"use client";
import { motion } from "framer-motion";
import { CalendarDays, Users, Bell, MessageCircle, BarChart2, Store } from "lucide-react";

const features = [
  { icon: CalendarDays, title: "24時間ネット予約",      desc: "お客様がスマホから24時間いつでも予約可能。空き状況がリアルタイムで反映されます。",          color: "text-orange-500", bg: "bg-orange-50", border: "hover:border-orange-200" },
  { icon: Users,        title: "顧客カルテ管理",         desc: "来店履歴・施術内容・アレルギー情報をデジタルで管理。スタッフ全員がどの端末からでも確認できます。", color: "text-blue-500",   bg: "bg-blue-50",   border: "hover:border-blue-200" },
  { icon: Bell,         title: "自動リマインド通知",      desc: "予約前日・当日にSMS・メールで自動通知。無断キャンセルの削減を想定したUIデモです。",            color: "text-emerald-500",bg: "bg-emerald-50", border: "hover:border-emerald-200" },
  { icon: MessageCircle,title: "LINE連携（UIデモ）",      desc: "LINE公式アカウントと連携した予約確認・リマインド・クーポン配信のUIイメージです。実API連携は別途開発が必要です。", color: "text-green-500",  bg: "bg-green-50",  border: "hover:border-green-200" },
  { icon: BarChart2,    title: "売上・稼働率レポート",    desc: "予約数・キャンセル率・売上をグラフで可視化。忙しい時間帯や人気メニューがひと目でわかります。",   color: "text-violet-500", bg: "bg-violet-50", border: "hover:border-violet-200" },
  { icon: Store,        title: "複数店舗対応",           desc: "複数の店舗を一括管理。オーナーはどの店舗の状況もスマホひとつで確認できます。",                  color: "text-amber-500",  bg: "bg-amber-50",  border: "hover:border-amber-200" },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gray-50/60">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-3">主な機能</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            店舗運営に必要な機能が、<br className="hidden sm:block" />ひとつにまとまっています
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">複数のツールをバラバラに使う必要はもうありません。予約・顧客・分析・LINE連携がすべてReserveFlowで完結します。</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className={`bg-white rounded-2xl border border-gray-100 p-6 card-shadow transition-all duration-200 ${f.border} hover:shadow-lg cursor-default`}
            >
              <div className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                <f.icon className={`w-5 h-5 ${f.color}`} />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
