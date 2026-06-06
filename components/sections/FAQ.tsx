"use client";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "ITに不慣れでも使えますか？", a: "はい、問題ありません。操作は直感的に設計されており、スマホから全機能を利用できます。導入時は専任スタッフによる初期設定サポートと、動画マニュアルをご用意しています。多くのオーナーが2〜3日で使いこなしています。" },
  { q: "既存の予約台帳から移行できますか？", a: "既存の顧客データ（CSVやExcel形式）を一括インポートできます。移行サポートも無料で対応しています。紙の予約台帳からの移行実績も多数あります。" },
  { q: "LINE公式アカウントを持っていなくても使えますか？", a: "はい、LINE連携なしでもネット予約・顧客管理・SMS/メールリマインドの機能はすべてご利用いただけます。LINE公式アカウントは後から連携することも可能です。" },
  { q: "複数のスタッフで使えますか？", a: "プランによりスタッフ数が異なります。スタンダードプランは2名、プロプランは10名まで対応。ビジネスプランは無制限です。スタッフごとに予約管理画面を分けることもできます。" },
  { q: "セキュリティは大丈夫ですか？", a: "顧客データはすべて暗号化して保管し、第三者への提供は一切行いません。サーバーは国内データセンターを使用しており、定期的なセキュリティ監査も実施しています。" },
  { q: "解約はいつでもできますか？", a: "はい、いつでも解約可能です。違約金・解約手数料は一切かかりません。データは解約後30日間保持され、希望があればCSV形式でエクスポートできます。" },
  { q: "無料トライアル期間中に全機能を使えますか？", a: "はい、14日間のトライアル期間中はプロプランの全機能を制限なくお試しいただけます。クレジットカードの登録も不要です。" },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-3">よくある質問</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">導入前によく聞かれること</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-gray-100 rounded-xl px-5 card-shadow overflow-hidden not-last:border-b-0">
                <AccordionTrigger className="text-sm font-semibold text-gray-900 hover:text-orange-500 transition-colors py-4 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-500 leading-relaxed pb-4">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
