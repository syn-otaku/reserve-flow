# Helix — SaaS Landing Page

AI コードレビュープラットフォーム「Helix」のランディングページ。ポートフォリオ作品です。

## 概要

Vercel / Linear 水準のプレミアムダーク UI で構築した SaaS LP。
Hero のモック Dashboard UI・Pricing のトグル・FAQアコーディオンなど、実際の SaaS 製品に求められる全セクションを実装。

## 実装セクション

| セクション | 内容 |
|-----------|------|
| Navbar | スクロール連動背景・モバイルハンバーガーメニュー |
| Hero | MockDashboard UI・グロウオーブ・グリッドBG |
| LogoBanner | CSS マーキーアニメーション |
| Metrics | 4 KPI グリッド |
| Problem | Before / After 比較レイアウト |
| Features | 6 機能カード・ホバーグロウ |
| FeatureSpotlight | 詳細モック UI 2 パネル |
| Testimonials | 6 件・スター付きカード |
| Pricing | 月額 / 年額トグル・3 プラン比較 |
| FAQ | Accordion コンポーネント |
| FinalCTA | メールアドレス入力フォーム・送信後フィードバック |
| Footer | 4 カラムリンクグリッド |

## 技術スタック

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **UI**: shadcn/ui (Button / Badge / Accordion / Separator)
- **Icons**: Lucide React

## 起動方法

```bash
npm install
npm run dev
```

`http://localhost:3000` で確認できます。
