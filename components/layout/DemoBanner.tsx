export default function DemoBanner() {
  return (
    <div className="w-full bg-amber-50 border-b border-amber-200 px-4 py-2 text-center text-xs text-amber-700 font-medium leading-snug">
      <span className="hidden sm:inline">⚠️ これはポートフォリオ用のデモLPです。実在するサービスではありません。数値・事例はすべて架空のサンプルデータです。</span>
      <span className="sm:hidden">⚠️ ポートフォリオ用デモLP。実在しないサービスです。</span>
    </div>
  );
}
