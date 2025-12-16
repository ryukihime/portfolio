import Image from 'next/image';

export default function Projects() {
    return (
        <section id="works" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">作成物紹介</h2>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Project Image */}
                    <div className="aspect-video bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 overflow-hidden group relative">
                        <Image
                            src="/portfolio/images/minizenn-screenshot.png"
                            alt="miniZenn Project Screenshot"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    {/* Project Details */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">miniZenn</h3>
                        <div className="space-y-4 mb-6">
                            <p className="text-slate-400 leading-relaxed">
                                Zennの構造を参考に、UI分析からDB設計までを再現したクローンアプリです。
                                Zustandによる型安全な状態管理、Prisma/PostgreSQLを用いたDB構築を実践しました。
                            </p>
                            <p className="text-slate-400 leading-relaxed">
                                現在はVercelへのデプロイにおけるインフラ設定に注力しています。
                                日々の開発経過やデプロイにおける試行錯誤のプロセスは、Zennのスクラップにて詳細に記録・公開し、
                                課題を言語化して解決へ繋げるサイクルを習慣化しています。
                            </p>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-sm font-semibold text-slate-300 mb-2 uppercase tracking-wider">使用技術</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Next.js', 'Prisma', 'PostgreSQL', 'Docker', 'Vercel', 'Neon'].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-slate-800 text-sm rounded-md text-accent border border-slate-700/50">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="#" className="text-accent hover:underline underline-offset-4">
                                ソースコード
                            </a>
                            <a href="#" className="text-accent hover:underline underline-offset-4">
                                デモサイト
                            </a>
                            <a href="https://zenn.dev/ryukihime/scraps/27303898fd56c7" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
                                開発ログ (Zenn)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
