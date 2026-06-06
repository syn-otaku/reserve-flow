"use client";
import { motion } from "framer-motion";

const metrics = [
  { value: "68%", label: "無断キャンセル削減", sub: "導入店舗の平均実績" },
  { value: "2.3×", label: "リピート来店率向上", sub: "自動リマインド効果" },
  { value: "1,200+", label: "導入店舗数", sub: "全国の美容・飲食・医療" },
  { value: "4.9", label: "オーナー満足度", sub: "182件のレビュー平均" },
];

export default function Metrics() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
              className="bg-white px-8 py-10 flex flex-col gap-1 group hover:bg-orange-50/40 transition-colors"
            >
              <span className="text-4xl font-bold text-orange-500">{m.value}</span>
              <span className="text-gray-900 font-semibold text-sm mt-1">{m.label}</span>
              <span className="text-gray-400 text-xs">{m.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
