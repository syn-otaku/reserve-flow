"use client";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const links: Record<string, { label: string; href: string }[]> = {
  サービス: [
    { label: "機能一覧",   href: "#features" },
    { label: "料金プラン", href: "#pricing" },
    { label: "活用事例",   href: "#usecases" },
    { label: "導入の流れ", href: "#faq" },
  ],
  サポート: [
    { label: "よくある質問",   href: "#faq" },
    { label: "操作マニュアル", href: "#" },
    { label: "お問い合わせ",   href: "#" },
    { label: "導入サポート",   href: "#" },
  ],
  会社情報: [
    { label: "会社概要", href: "#" },
    { label: "ブログ",   href: "#" },
    { label: "採用情報", href: "#" },
    { label: "プレス",   href: "#" },
  ],
  法的情報: [
    { label: "プライバシーポリシー", href: "#" },
    { label: "利用規約",           href: "#" },
    { label: "特定商取引法に基づく表記", href: "#" },
    { label: "セキュリティ",       href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 pt-14 pb-10 px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-orange-500 flex items-center justify-center">
                <CalendarCheck className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-gray-900 tracking-tight">ReserveFlow</span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed max-w-[180px]">
              店舗オーナーのための予約・顧客管理システム
            </p>
          </div>
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-xs font-semibold text-gray-700 uppercase tracking-widest mb-4">{group}</p>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-gray-800 transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="bg-gray-100 mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} ReserveFlow Inc. All rights reserved.</p>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            すべてのシステムは正常稼働中
          </div>
        </div>
      </div>
    </footer>
  );
}
