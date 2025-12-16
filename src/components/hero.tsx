export default function Hero() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-16">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    こんにちは、<span className="text-accent">Ryuki</span>です
                </h1>
                <p className="text-2xl md:text-3xl font-bold mb-6">
                    目的のために技術を選び、形にする。
                </p>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Next.jsを用いたフルスタック開発に注力しています。<br className="hidden md:block" />
                    8月の学習開始より、HTML/CSSからモダンなWebスタックまでを集中的に習得。<br className="hidden md:block" />
                    ライブラリを柔軟に組み合わせ、短期間でプロダクトを形にする実践的な学びを継続しています。
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="#works"
                        className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-opacity-90 transition-all"
                    >
                        作成物を見る
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-slate-700 rounded-full font-medium hover:bg-slate-800 transition-all"
                    >
                        お問い合わせ
                    </a>
                </div>
            </div>
        </section>
    );
}
