"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { quote: "無断キャンセルが月10件以上あったのが、導入後は月1〜2件になりました。リマインドの効果は本当にすごいです。", name: "佐藤 明美", title: "オーナー", biz: "美容室 soleil（東京・恵比寿）", avatar: "佐", color: "from-pink-400 to-rose-500" },
  { quote: "LINE予約が使えるようになってから、電話対応が格段に減りました。スタッフもお客様対応に集中できて、店の雰囲気が変わりました。", name: "田中 雄一", title: "店長", biz: "和食処 翠（大阪・梅田）", avatar: "田", color: "from-amber-400 to-orange-500" },
  { quote: "施術カルテをデジタル管理できるのが助かっています。どのスタッフが対応しても同じ情報が見られるので、接客品質が上がりました。", name: "山本 恵子", title: "院長", biz: "癒しの手 整体院（名古屋）", avatar: "山", color: "from-emerald-400 to-teal-500" },
  { quote: "複数店舗を運営していますが、全店舗の予約状況をスマホひとつで確認できるのは想像以上に便利でした。", name: "小林 健太", title: "代表", biz: "ヘアサロン BRANCH（福岡 3店舗）", avatar: "小", color: "from-blue-400 to-indigo-500" },
  { quote: "定期検診のリマインドを自動化したところ、来院率が40%以上改善しました。患者さんにも喜ばれています。", name: "鈴木 医師", title: "院長", biz: "鈴木歯科クリニック（横浜）", avatar: "鈴", color: "from-violet-400 to-purple-500" },
  { quote: "操作が直感的でスタッフへの説明がほぼ不要でした。ITが苦手な私でも2日で使いこなせました。", name: "中村 さゆり", title: "オーナー", biz: "ネイルサロン HANA（神戸）", avatar: "中", color: "from-cyan-400 to-blue-500" },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-3">オーナーの声</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            1,200店舗のオーナーに選ばれています
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">実際にReserveFlowを導入したオーナーの方々からいただいた声をご紹介します。</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-white rounded-2xl border border-gray-100 p-6 card-shadow hover:shadow-lg hover:border-orange-100 transition-all duration-200 cursor-default flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <blockquote className="text-sm text-gray-700 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold text-white shrink-0`}>{t.avatar}</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name} <span className="text-gray-400 font-normal">· {t.title}</span></p>
                  <p className="text-xs text-gray-400">{t.biz}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
