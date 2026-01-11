import React, { useState } from "react";
import {
  CheckCircle,
  ArrowRight,
  Users,
  Menu,
  X,
  Target,
  BrainCircuit,
  Lightbulb,
  Briefcase,
  HelpCircle,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  XCircle,
  Zap,
  MessageSquare,
  User,
  MapPin,
  Globe,
} from "lucide-react";

const FomusLP = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // ティファニー風カラーパレット
  // Main: #0ABAB5 (Tiffany Blue)
  // Dark: #008F8A (Text, Darker Accent)
  // Light: #F0FCFC (Background)
  // Slate: #334155 (Main Text)

  return (
    <div className="min-h-screen bg-[#F0FCFC] font-sans text-slate-700">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#0ABAB5]/20 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
            <span className="text-[#0ABAB5]">FOMUS</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("problem")}
              className="text-sm font-medium text-slate-600 hover:text-[#0ABAB5] transition"
            >
              課題
            </button>
            <button
              onClick={() => scrollToSection("solution")}
              className="text-sm font-medium text-slate-600 hover:text-[#0ABAB5] transition"
            >
              解決策
            </button>
            <button
              onClick={() => scrollToSection("instructor")}
              className="text-sm font-medium text-slate-600 hover:text-[#0ABAB5] transition"
            >
              講師紹介
            </button>
            <button
              onClick={() => scrollToSection("steps")}
              className="text-sm font-medium text-slate-600 hover:text-[#0ABAB5] transition"
            >
              進め方
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#0ABAB5] hover:bg-[#009A95] text-white px-6 py-2.5 rounded-none text-sm font-medium transition shadow-md shadow-[#0ABAB5]/20 flex items-center gap-2 tracking-wide"
            >
              無料相談する <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="flex flex-col p-4 gap-4">
              <button onClick={() => scrollToSection("problem")} className="text-left font-medium p-2 text-slate-600">
                課題
              </button>
              <button onClick={() => scrollToSection("solution")} className="text-left font-medium p-2 text-slate-600">
                解決策
              </button>
              <button onClick={() => scrollToSection("instructor")} className="text-left font-medium p-2 text-slate-600">
                講師紹介
              </button>
              <button onClick={() => scrollToSection("steps")} className="text-left font-medium p-2 text-slate-600">
                進め方
              </button>
              <button onClick={() => scrollToSection("contact")} className="bg-[#0ABAB5] text-white p-3 font-bold text-center">
                無料相談する
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-[#E0F8F7] to-transparent opacity-50" />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#F0FCFC] to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#F0FCFC] border border-[#0ABAB5]/30 px-5 py-2 rounded-full text-[#008F8A] font-medium text-xs md:text-sm mb-10 tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0ABAB5]"></span>
              </span>
              中小企業向け｜業務活用特化型AI研修
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-slate-800 leading-[1.3] mb-8">
              AIは知っている。<br />
              でも、<span className="text-[#0ABAB5]">業務にどう使えばいいか</span>が<br className="md:hidden" />分からない。
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-loose font-light">
              FOMUS AI研修は、<br className="md:hidden" />
              「AIを業務に活かしたいが、社内で進め方が分からない中小企業向け」の<br className="hidden md:block" />
              <strong className="text-[#008F8A] font-bold">業務活用特化型AI研修</strong>です。<br />
              <br />
              ツールの使い方を学ぶ研修ではありません。<br />
              あなたの会社の業務を、AIでどう効率化できるかを<br className="hidden md:block" />
              一緒に整理し、実務に落とし込みます。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto bg-[#0ABAB5] hover:bg-[#009A95] text-white px-10 py-4 rounded-none text-lg font-medium transition shadow-xl shadow-[#0ABAB5]/20 flex items-center justify-center gap-2 transform hover:-translate-y-1 tracking-wide"
              >
                まずは無料で相談する
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto bg-white hover:bg-[#F0FCFC] text-slate-600 border border-slate-300 px-10 py-4 rounded-none text-lg font-medium transition flex items-center justify-center gap-2 tracking-wide"
              >
                資料をダウンロードする
              </button>
            </div>

            <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#0ABAB5]" /> 法人向けサービス
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle size={14} className="text-[#0ABAB5]" /> 助成金活用のご相談も可能です
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ① こんなお悩みはありませんか？ */}
      <section id="problem" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-[#0ABAB5] font-bold tracking-widest text-xs uppercase border-b border-[#0ABAB5] pb-1">ISSUES</span>
            <h2 className="text-3xl font-serif text-slate-900 mt-6">こんなお悩みはありませんか？</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "AIツールの必要性は感じているが、\n何から始めればいいのか分からない",
              "自社の業務に、\nAIをどう当てはめればいいのか分からない",
              "AIを導入したいが、\n情報管理や社内ルールが不安",
            ].map((issue, i) => (
              <div
                key={i}
                className="bg-white border border-slate-100 p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-15px_rgba(10,186,181,0.2)] transition duration-300 flex flex-col items-center text-center gap-4 group"
              >
                <div className="bg-[#F0FCFC] p-4 rounded-full text-[#0ABAB5] shrink-0 group-hover:bg-[#0ABAB5] group-hover:text-white transition">
                  <HelpCircle size={32} strokeWidth={1.5} />
                </div>
                <p className="font-medium text-slate-700 leading-relaxed whitespace-pre-line">{issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ② 解決宣言ブロック & ③ 対応AIツール */}
      <section id="solution" className="py-24 bg-[#F8FDFD]">
        <div className="container mx-auto px-4 md:px-6">
          {/* 解決宣言 */}
          <div className="max-w-4xl mx-auto text-center mb-20 bg-white p-10 md:p-14 border border-[#0ABAB5]/20 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#0ABAB5]"></div>
            <h3 className="text-2xl font-serif text-[#008F8A] mb-6 leading-relaxed">
              FOMUS AI研修なら、<br />
              これらをすべて「業務視点」で整理できます
            </h3>
            <p className="text-slate-600 text-lg leading-loose font-light">
              FOMUS AI研修は、中小企業向けに特化した業務活用型AI研修として、<br />
              <span className="font-medium text-slate-800">「AIの基礎理解」「業務への当てはめ」「社内での使い方の整理」</span>
              <br />
              を ワンストップで進めます。<br />
              <br />
              ツールありきではなく、<br />
              <strong className="text-[#0ABAB5] font-bold text-xl">「この会社では、AIをどこに使うか」</strong>を
              <br />
              一緒に決めることが目的です。
            </p>
          </div>

          {/* 対応AIツール */}
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-medium text-slate-800 mb-4">主要な生成AIツールに対応</h3>
            <p className="text-slate-500 mb-8 font-light">特定のツールに依存せず、自社の業務に合ったAI活用を前提に研修を行います。</p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
              <div className="bg-white px-8 py-4 border border-slate-200 shadow-sm flex items-center gap-3">
                <Zap size={20} className="text-[#0ABAB5]" />
                <span className="font-bold text-slate-700">ChatGPT</span>
              </div>
              <div className="bg-white px-8 py-4 border border-slate-200 shadow-sm flex items-center gap-3">
                <MessageSquare size={20} className="text-[#0ABAB5]" />
                <span className="font-bold text-slate-700">Microsoft Copilot</span>
              </div>
              <div className="bg-white px-8 py-4 border border-slate-200 shadow-sm flex items-center gap-3">
                <BrainCircuit size={20} className="text-[#0ABAB5]" />
                <span className="font-bold text-slate-700">Google Gemini</span>
              </div>
            </div>

            <div className="text-xs text-slate-400 space-y-1">
              <p>※ ツール選定も含めてご相談いただけます</p>
              <p>※ 特定ツールの販売・代理契約は行っていません</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section (Updated Strength) */}
      <section id="instructor" className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-[#0ABAB5] font-bold tracking-widest text-xs uppercase border-b border-[#0ABAB5] pb-1">INSTRUCTOR</span>
            <h2 className="text-3xl font-serif text-slate-900 mt-6">講師・代表紹介</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Profile Image Area */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[3/4] md:aspect-square bg-slate-50 border border-slate-100 relative overflow-hidden flex flex-col items-center justify-end group">
                {/* Placeholder for Image - In production, replace with actual photo */}
                <div className="absolute inset-0 bg-[#F0FCFC] flex items-center justify-center text-[#0ABAB5]/20">
                  <User size={120} strokeWidth={0.5} />
                </div>

                {/* Overlay details */}
                <div className="bg-white/95 backdrop-blur-sm p-6 w-full absolute bottom-0 border-t border-[#0ABAB5]/10">
                  <div className="flex items-center gap-2 text-[#008F8A] font-medium text-sm mb-2">
                    <MapPin size={16} /> アイルランド在住
                  </div>
                  <div className="flex items-center gap-2 text-[#008F8A] font-medium text-sm">
                    <Globe size={16} /> 日本・ドバイ・世界各地で事業展開
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#0ABAB5]/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#0ABAB5]/20 rounded-full -z-10"></div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-serif text-slate-800 mb-2">
                増尾 圭亮 <span className="text-lg text-[#0ABAB5] font-sans font-medium ml-2">Massu</span>
              </h3>
              <p className="text-[#008F8A] font-medium mb-8">FOMUS 代表 / AI実践家</p>

              <div className="space-y-6 text-slate-600 leading-relaxed font-light">
                <p className="text-lg font-medium text-slate-700">
                  「AI評論家」ではなく、<br />
                  自らの事業を回すためにAIを使い倒す<strong>「実務家」</strong>です。
                </p>
                <p>
                  日本とドバイに法人を持ち、伝統工芸「枡」のブランド運営やWEB制作事業など、複数の事業を少人数で展開。<br />
                  アイルランドを拠点にフルリモートで経営を行う中で、
                  <strong className="text-[#0ABAB5] font-medium border-b border-[#0ABAB5]/30 mx-1">
                    「限られたリソースで成果を出すためのAI活用」
                  </strong>
                  を体系化しました。
                </p>

                <div className="bg-[#F8FDFD] p-6 border-l-4 border-[#0ABAB5] mt-6">
                  <p className="font-medium text-slate-700 mb-3 text-sm">FOMUSの指導スタンス</p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#0ABAB5] shrink-0 mt-0.5" />
                      <span>「機能」の解説ではなく、「使い所」の判断を教える</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-[#0ABAB5] shrink-0 mt-0.5" />
                      <span>中小企業の現場で「本当に回るオペレーション」を作る</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-slate-400 mt-4">
                  AIの最新トレンドを追うだけでなく、「御社の利益にどう繋げるか」という経営視点での伴走を得意としています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 進め方（3ステップ） */}
      <section id="steps" className="py-24 bg-[#F8FDFD] border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="text-[#0ABAB5] font-bold tracking-widest text-xs uppercase border-b border-[#0ABAB5] pb-1">PROCESS</span>
            <h2 className="text-3xl font-serif text-slate-900 mt-6">進め方</h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-stretch bg-white border-l-4 border-[#0ABAB5] overflow-hidden shadow-sm">
              <div className="bg-[#0ABAB5]/5 p-6 flex flex-col justify-center items-center md:w-48 text-center shrink-0">
                <span className="text-[#008F8A] font-bold text-sm tracking-widest mb-1">STEP 1</span>
                <span className="text-2xl font-serif text-[#008F8A]">
                  業務整理<br />AI理解
                </span>
              </div>
              <div className="p-8 md:p-10 flex-1 bg-white">
                <p className="text-slate-600 leading-relaxed">
                  自社の業務を棚卸ししながら、<br />
                  AIを使えそうな業務・使う必要のない業務を整理します。
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-stretch bg-white border-l-4 border-[#0ABAB5] overflow-hidden shadow-sm">
              <div className="bg-[#0ABAB5]/5 p-6 flex flex-col justify-center items-center md:w-48 text-center shrink-0">
                <span className="text-[#008F8A] font-bold text-sm tracking-widest mb-1">STEP 2</span>
                <span className="text-2xl font-serif text-[#008F8A]">
                  業務活用<br />ワーク
                </span>
              </div>
              <div className="p-8 md:p-10 flex-1 bg-white">
                <div className="inline-block bg-[#0ABAB5] text-white text-xs font-bold px-2 py-0.5 mb-3">10時間研修</div>
                <p className="text-slate-600 leading-relaxed">
                  実際の業務を題材に、AIを使った文書作成・企画・管理業務などを体験。<br />
                  学んで終わりではなく、業務で使える形に落とし込みます。
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-stretch bg-white border-l-4 border-[#0ABAB5] overflow-hidden shadow-sm">
              <div className="bg-[#0ABAB5]/5 p-6 flex flex-col justify-center items-center md:w-48 text-center shrink-0">
                <span className="text-[#008F8A] font-bold text-sm tracking-widest mb-1">STEP 3</span>
                <span className="text-2xl font-serif text-[#008F8A]">
                  活用定着<br />サポート
                </span>
              </div>
              <div className="p-8 md:p-10 flex-1 bg-white">
                <p className="text-slate-600 leading-relaxed mb-2">
                  研修で整理した内容をもとに、<br />
                  AI活用を継続したい企業向けのフォロー体制をご用意しています。
                </p>
                <p className="text-xs text-slate-400">※ 詳細は無料相談時にご案内しています</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10時間研修のゴール & やらないこと */}
      <section id="goal" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* ゴール */}
            <div className="bg-[#F8FDFD] p-10 border border-[#0ABAB5]/20 shadow-sm relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#0ABAB5]"></div>
              <Target className="text-[#0ABAB5] mb-6" size={40} strokeWidth={1} />
              <h3 className="text-xl font-serif text-slate-900 mb-6">この研修で目指すゴール</h3>
              <p className="text-slate-600 leading-loose font-light">
                この研修のゴールは、<br />
                AIを完璧に使いこなすことではありません。<br />
                <br />
                <strong className="text-[#008F8A] font-medium text-lg border-b border-[#0ABAB5]/30">「この会社では、AIをここに使う」</strong>
                <br />
                と判断できる状態を作ること。<br />
                <br />
                まずは、<br />
                業務でAIを使い始めるための一歩を踏み出します。
              </p>
            </div>

            {/* やらないこと */}
            <div className="bg-slate-50 p-10 border border-slate-200 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-slate-300"></div>
              <XCircle className="text-slate-400 mb-6" size={40} strokeWidth={1} />
              <h3 className="text-xl font-serif text-slate-700 mb-6">FOMUS AI研修でやらないこと</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <X size={18} className="text-slate-400" /> AIツールの売り込み
                </li>
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <X size={18} className="text-slate-400" /> システム開発・導入代行
                </li>
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <X size={18} className="text-slate-400" /> 難しいプログラミング
                </li>
                <li className="flex items-center gap-3 text-slate-600 font-medium">
                  <X size={18} className="text-slate-400" /> 全社員への一斉教育
                </li>
              </ul>
              <p className="text-slate-500 text-sm">
                中小企業にとって、<br />
                今すぐ必要のないことは行いません。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 経営者向けメリット */}
      <section id="benefits" className="py-24 bg-[#F8FDFD]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#0ABAB5] font-bold tracking-widest text-xs uppercase border-b border-[#0ABAB5] pb-1">BENEFITS</span>
            <h2 className="text-3xl font-serif text-slate-900 mt-6 mb-10">経営者・管理職の方へ</h2>

            <p className="text-lg text-slate-600 leading-loose mb-12 font-light">
              FOMUS AI研修は、<br />
              「AIを導入した感」を作る研修ではありません。<br />
              <br />
              <span className="inline-block bg-white border border-[#0ABAB5]/20 px-4 py-2 text-[#008F8A] font-medium m-1">属人化している業務の整理</span>
              <span className="inline-block bg-white border border-[#0ABAB5]/20 px-4 py-2 text-[#008F8A] font-medium m-1">外注・手作業の見直し</span>
              <span className="inline-block bg-white border border-[#0ABAB5]/20 px-4 py-2 text-[#008F8A] font-medium m-1">業務判断のスピード向上</span>
              <br />
              <br />
              経営・管理の視点で<br />
              AIをどう使うかを一緒に考えます。
            </p>
          </div>
        </div>
      </section>

      {/* 助成金（安心） */}
      <section id="subsidy" className="py-20 bg-[#F0FCFC] border-y border-[#0ABAB5]/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-xl md:text-2xl font-medium text-slate-800 mb-4 flex items-center justify-center gap-3">
            <ShieldCheck className="text-[#0ABAB5]" strokeWidth={1.5} size={28} />
            助成金を活用し、<br className="md:hidden" />
            無理のない負担で導入できる場合があります
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed font-light mb-6">
            人材開発支援助成金（リスキリング支援）を活用することで、<br />
            AI研修を 中小企業でも導入しやすい形で進められる場合があります。
          </p>
          <div className="text-xs text-slate-400 space-y-1">
            <p>※ 助成率・支給額・適用可否は企業ごとの審査により異なります</p>
            <p>※ 詳細は無料相談・資料請求にてご案内しています</p>
          </div>
        </div>
      </section>

      {/* 研修後の伴走（匂わせ） */}
      <section id="followup" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto border border-slate-200 p-10 md:p-16 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
              <Briefcase className="text-slate-400" size={32} strokeWidth={1} />
            </div>
            <h2 className="text-2xl font-serif text-slate-800 mb-8 mt-2">研修で終わらせません</h2>
            <p className="text-slate-600 leading-loose mb-4 font-light">
              FOMUSでは、<br />
              研修後もAI活用を継続したい企業向けに、<br />
              <strong className="text-[#008F8A] font-medium">業務改善を伴走するサポート体制</strong>をご用意しています。<br />
              <br />
              研修で整理した内容をもとに、<br />
              実務への定着を支援します。
            </p>
            <p className="text-xs text-slate-400">※ 詳細は無料相談時にご案内しています</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-28 bg-gradient-to-br from-[#008F8A] to-[#006F6B] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-serif mb-10 leading-tight">
              AI導入の第一歩を、<br />
              無料相談で整理しませんか？
            </h2>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button className="bg-white hover:bg-slate-100 text-[#008F8A] px-10 py-4 rounded-none text-lg font-bold transition shadow-2xl flex items-center justify-center gap-2 tracking-wide">
                <Users size={20} />
                まずは無料で相談する
              </button>
              <button className="bg-transparent border border-white/50 hover:bg-white/10 text-white px-10 py-4 rounded-none text-lg font-medium transition flex items-center justify-center gap-2 tracking-wide">
                資料をダウンロードする
              </button>
            </div>

            <div className="mt-20 pt-10 border-t border-white/10">
              <p className="text-xl md:text-2xl font-serif text-[#E0F8F7]">
                FOMUS AI研修は、AIを学ばせる研修ではありません。<br />
                <span className="text-white">AIを「業務で使い始める」ための研修です。</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-bold text-white tracking-tighter mb-6 block">FOMUS</span>
              <p className="text-sm leading-loose mb-4 font-light text-slate-300">
                中小企業のための、業務活用特化型AI研修。<br />
                「使う判断」と「定着」を支援します。
              </p>
            </div>
            <div>
              <h4 className="font-medium text-white mb-6 tracking-widest text-xs uppercase">Menu</h4>
              <ul className="space-y-3 text-sm font-light">
                <li>
                  <button onClick={() => scrollToSection("problem")} className="hover:text-[#0ABAB5] transition">
                    課題
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("solution")} className="hover:text-[#0ABAB5] transition">
                    解決策
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("instructor")} className="hover:text-[#0ABAB5] transition">
                    講師紹介
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("steps")} className="hover:text-[#0ABAB5] transition">
                    進め方
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-white mb-6 tracking-widest text-xs uppercase">Contact</h4>
              <ul className="space-y-3 text-sm font-light">
                <li>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-[#0ABAB5] transition">
                    無料相談
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-[#0ABAB5] transition">
                    資料請求
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-[#0ABAB5] transition">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#0ABAB5] transition">
                    特定商取引法に基づく表記
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-10 text-center text-xs font-light tracking-wider">© 2026 FOMUS LLC. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

export default FomusLP;
