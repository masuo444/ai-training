import React, { useMemo, useState } from "react";

// FOMUS 公式 LP（中小企業経営者向け）
// 仕様:
// - Tailwind CSS ベース（インポート不要）
// - 1ファイル構成 / デフォルトエクスポート
// - セクション: ヒーロー, 差別化, プラン, カリキュラム, 助成金, 講師, FAQ, CTA
// - 価格計算: 中小企業/リスキリング支援コース（助成率 75%・上限 30万円/人）
// - 文言は本スレッドの決定事項に基づく

const currency = (n) => n.toLocaleString("ja-JP");

const PLANS = [
  {
    key: "starter",
    name: "AI活用プラン（初心者向け）",
    price: 200000,
    hours: 10,
    features: [
      "ChatGPTで文章要約・翻訳・企画作成",
      "Geminiで画像読み取り・比較活用",
      "MidJourneyで画像生成（Discord）",
      "SUNOで音楽生成（プロンプト思考の体得）",
      "Day5は自社の希望テーマにカスタマイズ",
    ],
    highlight: "まずは"AIって楽しい！"を体験 → 業務に定着",
  },
  {
    key: "coding",
    name: "AIコーディングプラン（Vibe Coding）",
    price: 400000,
    hours: 10,
    features: [
      "OpenAI / Gemini API 基礎",
      "ノーコード/ローコード連携（Zapier・GAS）",
      "簡易AIエージェント設計",
      "業務自動化ワークフロー構築",
      "自社データの安全な扱い方",
    ],
    highlight: "補助金30万円を満額活用 → 実質負担を最小に",
  },
];

const DAYS = [
  { title: "Day1｜ChatGPT", body: "基本操作と業務活用。要約・翻訳・メール下書き・議事録。" },
  { title: "Day2｜MidJourney", body: "画像生成でプロンプト設計を体感。資料・SNSのビジュアル強化。" },
  { title: "Day3｜ChatGPT・Gemini", body: "同一課題で出力比較→得意分野の見極め。業務への当てはめ。" },
  { title: "Day4｜SUNO", body: "音楽生成で"言語→非言語"の指示を学ぶ。ブランディング/BGM応用。" },
  { title: "Day5｜希望に沿った内容", body: "各社の要望に合わせてカスタム。導入ロードマップと発表。" },
];

function SubsidyBreakdown({ price, rate = 0.75, cap = 300000 }) {
  const subsidy = useMemo(() => Math.min(Math.round(price * rate), cap), [price, rate, cap]);
  const net = price - subsidy;
  return (
    <div className="grid gap-2 text-sm">
      <div className="flex items-center justify-between">
        <span>定価（税抜）</span>
        <span className="font-semibold">¥{currency(price)}</span>
      </div>
      <div className="flex items-center justify-between">
        <span>助成金（中小企業 75%／上限30万円）</span>
        <span className="font-semibold text-emerald-600">▲¥{currency(subsidy)}</span>
      </div>
      <div className="border-t my-1" />
      <div className="flex items-center justify-between text-base">
        <span>実質負担目安（税抜）</span>
        <span className="font-bold">¥{currency(net)}</span>
      </div>
      <p className="text-xs text-slate-500 mt-1">
        ※ 人材開発支援助成金〈事業展開等リスキリング支援コース〉の想定。実際の支給額は要件・審査により異なります。申請は企業側、FOMUSは必要資料を提供します。
      </p>
    </div>
  );
}

export default function FomusAiTrainingLanding() {
  const [selectedPlan, setSelectedPlan] = useState(PLANS[0].key);
  const plan = useMemo(() => PLANS.find((p) => p.key === selectedPlan), [selectedPlan]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-xl bg-slate-900 text-white inline-grid place-items-center font-bold">F</span>
            <span className="font-semibold">FOMUS｜AI研修</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#hero" className="hover:opacity-70">トップ</a>
            <a href="#diff" className="hover:opacity-70">他社との違い</a>
            <a href="#plans" className="hover:opacity-70">プラン</a>
            <a href="#curriculum" className="hover:opacity-70">カリキュラム</a>
            <a href="#subsidy" className="hover:opacity-70">助成金</a>
            <a href="#instructor" className="hover:opacity-70">講師</a>
            <a href="#contact" className="hover:opacity-70">お問い合わせ</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              AIで経営改善。
              <br className="hidden md:block" />
              <span className="text-slate-600">10時間で、社員がAIを武器に。</span>
            </h1>
            <p className="mt-4 text-slate-700 text-lg">
              中小企業向け・実践7割の短期集中。ChatGPT・Gemini・画像/音楽生成まで幅広く体験し、翌日から業務に使える状態へ。
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#plans" className="px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold shadow hover:shadow-md transition">プランを見る</a>
              <a href="#subsidy" className="px-5 py-3 rounded-xl border font-semibold hover:bg-white">助成金について</a>
            </div>
            <p className="mt-3 text-xs text-slate-500">講義3割 / 実践7割・2h×5回（合計10時間）</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-1 shadow-lg">
              <div className="h-full w-full rounded-2xl bg-white grid grid-cols-2 gap-3 p-4">
                <div className="rounded-xl bg-slate-100 p-4">
                  <div className="text-xs font-semibold text-slate-500">TEXT</div>
                  <div className="mt-1 text-sm font-bold">ChatGPT / Gemini</div>
                  <p className="mt-2 text-xs">要約・企画・翻訳・議事録… 明日から使える業務ユース。</p>
                </div>
                <div className="rounded-xl bg-slate-100 p-4">
                  <div className="text-xs font-semibold text-slate-500">IMAGE</div>
                  <div className="mt-1 text-sm font-bold">MidJourney</div>
                  <p className="mt-2 text-xs">資料やSNSのビジュアルを高速生成。プロンプトで表現力を鍛える。</p>
                </div>
                <div className="rounded-xl bg-slate-100 p-4">
                  <div className="text-xs font-semibold text-slate-500">AUDIO</div>
                  <div className="mt-1 text-sm font-bold">SUNO</div>
                  <p className="mt-2 text-xs">音楽生成で"言語→非言語"の指示力を体得。BGM活用も。</p>
                </div>
                <div className="rounded-xl bg-slate-100 p-4">
                  <div className="text-xs font-semibold text-slate-500">CUSTOM</div>
                  <div className="mt-1 text-sm font-bold">Day5 カスタム</div>
                  <p className="mt-2 text-xs">希望テーマに合わせて最適化。社内導入の道筋を作る。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Difference */}
      <section id="diff" className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">他社のGPT研修と、FOMUSの違い</h2>
            <p className="mt-3 text-slate-700">
              GPTの"使い方講義"で終わらない。FOMUSは、文章・画像・音楽まで横断し「楽しい」から始めて「経営改善」に結びつけます。
            </p>
          </div>
          <div className="grid gap-3">
            <div className="rounded-xl border bg-white p-4">
              <div className="text-xs text-slate-500">幅広さ</div>
              <div className="font-semibold">ChatGPT / Gemini / MidJourney / SUNO を一気通貫で体験</div>
            </div>
            <div className="rounded-xl border bg-white p-4">
              <div className="text-xs text-slate-500">楽しさ×定着</div>
              <div className="font-semibold">遊び感覚→関心→自走。現場に浸透する設計</div>
            </div>
            <div className="rounded-xl border bg-white p-4">
              <div className="text-xs text-slate-500">初心者目線</div>
              <div className="font-semibold">講師まっすーは元エンジニアではない実践者。難しい言葉を使わない</div>
            </div>
            <div className="rounded-xl border bg-white p-4">
              <div className="text-xs text-slate-500">経営への接続</div>
              <div className="font-semibold">見積書/提案/集客/顧客対応など"経営KPI"に直結</div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">料金プラン（単発・10時間）</h2>
        <p className="mt-2 text-slate-700">講義3割 / 実践7割。2時間×5回の短期集中プログラム。</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {PLANS.map((p) => (
            <div key={p.key} className={`rounded-2xl border bg-white p-6 shadow-sm ${p.key === "coding" ? "ring-2 ring-slate-900" : ""}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="text-sm text-slate-600 mt-1">{p.highlight}</p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-500">定価（税抜）</div>
                  <div className="text-2xl font-extrabold">¥{currency(p.price)}</div>
                </div>
              </div>
              <ul className="mt-4 grid gap-2 text-sm list-disc pl-5">
                {p.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <div className="mt-5">
                <SubsidyBreakdown price={p.price} />
              </div>
              <div className="mt-5 flex gap-3">
                <a href="#contact" className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-semibold">相談する</a>
                <button onClick={() => setSelectedPlan(p.key)} className={`px-4 py-2 rounded-xl border text-sm font-semibold ${selectedPlan === p.key ? "bg-slate-100" : "hover:bg-white"}`}>比較に追加</button>
              </div>
            </div>
          ))}
        </div>

        {/* Simple comparator */}
        <div className="mt-8 rounded-2xl border bg-white p-6">
          <h4 className="font-semibold">選択中のプランでシミュレーション</h4>
          <p className="text-sm text-slate-600">助成率75% / 上限30万円（中小企業想定）</p>
          <div className="mt-4">
            <SubsidyBreakdown price={plan.price} />
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold">カリキュラム（幅広くAIを触るプラン）</h2>
        <p className="mt-2 text-slate-700">2h×5回 / 10時間。各回: 講義30–40分 + 実践60–90分。</p>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {DAYS.map((d, i) => (
            <div key={i} className="rounded-xl border bg-white p-5">
              <div className="text-xs text-slate-500">{d.title}</div>
              <div className="mt-1 font-semibold">{d.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Subsidy info */}
      <section id="subsidy" className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">人材開発支援助成金（リスキリング支援コース）について</h2>
            <ul className="mt-3 grid gap-2 list-disc pl-5 text-slate-800">
              <li>中小企業は <b>経費の75%</b> を助成（<b>上限30万円/人</b>）。</li>
              <li>10時間研修でも対象。賃金助成が加算される場合あり。</li>
              <li>申請は企業側。FOMUSは <b>カリキュラム・講師プロフィール・実施記録</b> など必要資料を提供。</li>
              <li>1名から申請可。複数人同時受講も可能。</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">※ 制度内容は変更になる場合があります。最新情報は公式要領をご確認ください。</p>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <h4 className="font-semibold">よくある質問</h4>
            <div className="mt-3 grid gap-3 text-sm">
              <div>
                <div className="font-semibold">Q. 代表者が受講してもよい？</div>
                <div className="text-slate-700">A. 受講は可能ですが、助成対象外となる場合があります（例: 代表取締役）。対象可否は雇用区分等に依存します。</div>
              </div>
              <div>
                <div className="font-semibold">Q. FOMUSが申請する？</div>
                <div className="text-slate-700">A. 申請は企業側。FOMUSは書類・記録の準備に協力します。</div>
              </div>
              <div>
                <div className="font-semibold">Q. マンツーマンと複数人どちらも可能？</div>
                <div className="text-slate-700">A. どちらも可能。少人数（2–6人）での実施が最も効果的です。</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section id="instructor" className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">講師：増尾 圭亮（まっすー）／FOMUS代表</h2>
            <ul className="mt-4 grid gap-2 list-disc pl-5 text-slate-800">
              <li>日本とドバイに法人を持ち、アイルランドの城に住みながらAI活用を発信・研修を提供。</li>
              <li>日本の伝統工芸「枡」を世界へ。文化×テクノロジー×ビジネスを実践。</li>
              <li>2022年に画像生成AIを独学で学び没入。元AIエンジニアではないからこそ初心者に寄り添える。</li>
              <li>難しい言葉を使わず、現場に浸透する研修設計。高度なクリエイティブ対応も可。</li>
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <div className="text-sm font-semibold">メッセージ</div>
            <p className="mt-2 text-slate-700 text-sm leading-7">
              AIは"専門家のもの"ではありません。まずは「楽しい！」から始め、明日からの仕事に直結させる。それがFOMUSの研修です。10時間後、AIがあなたの会社の当たり前の道具になっているはずです。
            </p>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center shadow-xl">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">まずはご相談ください（1名からOK）</h3>
            <p className="mt-2 text-slate-300">受講人数・ご希望日程・オンライン/対面のご希望をお知らせください。助成金の活用についてもご案内します。</p>
            <ul className="mt-4 text-sm text-slate-200 list-disc pl-5">
              <li>対象: 中小企業・各業界の非IT人材〜管理職</li>
              <li>所要: 2h×5回 / 合計10時間（講義3割・実践7割）</li>
              <li>場所: 対面 / オンライン（ハイブリッド可）</li>
            </ul>
          </div>
          <form className="grid gap-3">
            <input className="px-4 py-3 rounded-xl text-slate-900" placeholder="御社名" />
            <input className="px-4 py-3 rounded-xl text-slate-900" placeholder="ご担当者名" />
            <input className="px-4 py-3 rounded-xl text-slate-900" placeholder="メールアドレス" />
            <textarea className="px-4 py-3 rounded-xl text-slate-900" placeholder="ご相談内容（受講人数/希望時期/オンライン有無 など）" rows={4} />
            <button type="button" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:opacity-90">送信（ダミー）</button>
            <p className="text-xs text-slate-300">※ 本デモは送信されません。正式なお問い合わせ方法は貴社の運用に合わせて実装します。</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-500 grid md:grid-cols-2 gap-4">
          <div>© {new Date().getFullYear()} FOMUS. All rights reserved.</div>
          <div className="md:text-right">人材開発支援助成金の制度は変更される場合があります。最新情報は公式要領をご確認ください。</div>
        </div>
      </footer>
    </main>
  );
}