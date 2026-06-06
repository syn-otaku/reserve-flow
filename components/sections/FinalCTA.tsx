"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section className="py-24 px-6 bg-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 hero-dots opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-300/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-200">
            <CalendarCheck className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            まずは14日間、<span className="text-orange-500">無料でお試しください。</span>
          </h2>
          <p className="text-gray-500 text-base mb-8 max-w-lg mx-auto leading-relaxed">
            クレジットカード不要。設定は最短30分。<br />
            今日から無断キャンセルを減らし、リピートを増やすことができます。
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-emerald-600 font-semibold text-base">
              <CheckCircle2 className="w-5 h-5" />
              ご登録ありがとうございます！担当者よりご連絡いたします。
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto">
              <input
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="メールアドレスを入力" required
                className="flex-1 h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all"
              />
              <Button type="submit" size="lg" className="group bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 h-12 rounded-xl shadow-md hover:shadow-lg hover:shadow-orange-200 transition-all shrink-0">
                無料で始める <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </form>
          )}

          <div className="flex flex-wrap items-center justify-center gap-5 mt-6 text-xs text-gray-400">
            {["クレジットカード不要", "14日間無料", "いつでも解約OK", "初期費用ゼロ"].map((t) => (
              <span key={t} className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-400" />{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
