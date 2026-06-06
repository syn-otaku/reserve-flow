"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "スタンダード", monthly: 4980, annual: 3980,
    desc: "1〜2名のスタッフで運営する小規模店舗に最適です。",
    cta: "14日間無料で試す", ctaVariant: "outline" as const, popular: false, badge: null,
    features: [
      { text: "スタッフ2名まで",              included: true },
      { text: "月間予約 200件まで",           included: true },
      { text: "ネット予約ページ",             included: true },
      { text: "顧客カルテ管理",               included: true },
      { text: "SMS・メールリマインド",        included: true },
      { text: "LINE公式アカウント連携",       included: false },
      { text: "売上・稼働率レポート",         included: false },
      { text: "複数店舗管理",                 included: false },
    ],
  },
  {
    name: "プロ", monthly: 9800, annual: 7800,
    desc: "リピート促進・LINE連携・分析まで使いたい店舗向けです。",
    cta: "14日間無料で試す", ctaVariant: "default" as const, popular: true, badge: "人気No.1",
    features: [
      { text: "スタッフ10名まで",             included: true },
      { text: "月間予約 無制限",              included: true },
      { text: "ネット予約ページ（カスタム）", included: true },
      { text: "顧客カルテ管理",               included: true },
      { text: "SMS・メールリマインド",        included: true },
      { text: "LINE公式アカウント連携",       included: true },
      { text: "売上・稼働率レポート",         included: true },
      { text: "複数店舗管理（3店舗まで）",   included: false },
    ],
  },
  {
    name: "ビジネス", monthly: null, annual: null,
    desc: "複数店舗運営・フランチャイズ・法人向けプランです。",
    cta: "お問い合わせ", ctaVariant: "outline" as const, popular: false, badge: null,
    features: [
      { text: "スタッフ無制限",               included: true },
      { text: "月間予約 無制限",              included: true },
      { text: "ネット予約ページ（完全カスタム）", included: true },
      { text: "顧客カルテ管理",               included: true },
      { text: "SMS・メールリマインド",        included: true },
      { text: "LINE公式アカウント連携",       included: true },
      { text: "売上・稼働率レポート（高度版）", included: true },
      { text: "複数店舗管理（無制限）",       included: true },
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  return (
    <section id="pricing" className="py-24 px-6 bg-gray-50/60">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-3">料金プラン</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">シンプルな料金体系</h2>
          <p className="text-gray-500 mb-6">すべてのプランに14日間の無料トライアルが含まれています。</p>
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-1">
            <button onClick={() => setAnnual(false)} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${!annual ? "bg-orange-500 text-white shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>月払い</button>
            <button onClick={() => setAnnual(true)}  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${annual  ? "bg-orange-500 text-white shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>年払い <span className="text-[10px] font-semibold ml-1 text-emerald-500">2ヶ月分お得</span></button>
          </div>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`relative bg-white rounded-2xl border p-7 flex flex-col transition-all duration-200 ${plan.popular ? "border-orange-300 shadow-lg shadow-orange-100 scale-[1.02]" : "border-gray-100 card-shadow hover:shadow-lg"}`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">{plan.badge}</div>
              )}
              <div className="mb-5">
                <p className="text-sm font-semibold text-gray-500 mb-1">{plan.name}</p>
                {plan.monthly ? (
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-4xl font-bold text-gray-900">¥{(annual ? plan.annual! : plan.monthly).toLocaleString()}</span>
                    <span className="text-sm text-gray-400 mb-1">/ 月</span>
                  </div>
                ) : (
                  <p className="text-2xl font-bold text-gray-900 mb-2">要お問い合わせ</p>
                )}
                <p className="text-xs text-gray-400 leading-relaxed">{plan.desc}</p>
              </div>
              <Button variant={plan.ctaVariant} className={`w-full rounded-xl h-11 font-semibold mb-6 ${plan.popular ? "bg-orange-500 hover:bg-orange-600 text-white border-0" : ""}`}>
                {plan.cta}
              </Button>
              <ul className="flex flex-col gap-2.5">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-2.5">
                    {f.included
                      ? <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      : <Minus className="w-4 h-4 text-gray-200 mt-0.5 shrink-0" />}
                    <span className={`text-sm ${f.included ? "text-gray-700" : "text-gray-300"}`}>{f.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">表示価格はすべて税別です。消費税が別途かかります。</p>
      </div>
    </section>
  );
}
