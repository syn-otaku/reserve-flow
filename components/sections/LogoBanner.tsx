"use client";
import { motion } from "framer-motion";

const shops = ["美容室 SOLEIL", "カフェ結", "整体院 癒しの手", "歯科クリニック青山", "ネイルサロン HANA", "和食処 翠", "リラクゼーション凛", "皮膚科やまもとクリニック", "ヘアサロン BRANCH", "カイロ整体 東洋堂"];

export default function LogoBanner() {
  const doubled = [...shops, ...shops];
  return (
    <section className="py-12 border-y border-gray-100 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center text-xs text-gray-400 uppercase tracking-widest mb-6 font-medium"
      >
        全国1,200店舗以上に導入いただいています
      </motion.p>
      <div className="overflow-hidden">
        <div className="flex gap-10 w-max marquee-track">
          {doubled.map((name, i) => (
            <div key={`${name}-${i}`} className="flex items-center justify-center h-8 shrink-0">
              <span className="text-gray-400 font-medium text-sm tracking-wide hover:text-gray-700 transition-colors cursor-default select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
