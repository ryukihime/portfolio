export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">スキル & 資格</h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                        <h3 className="text-xl font-semibold mb-6 text-accent">Frontend</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Next.js / React', desc: 'アプリ開発のメインフレームワーク' },
                                { name: 'TypeScript', desc: '型安全な開発のために導入' },
                                { name: 'Zustand', desc: 'シンプルで軽量な状態管理' },
                                { name: 'Tailwind CSS', desc: '効率的なスタイリング' }
                            ].map((item) => (
                                <li key={item.name} className="flex flex-col">
                                    <span className="flex items-center gap-2 font-medium text-slate-200">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                        {item.name}
                                    </span>
                                    <span className="text-sm text-slate-500 ml-3.5">{item.desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                        <h3 className="text-xl font-semibold mb-6 text-accent">Backend & Tools</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'PostgreSQL / Prisma', desc: 'DB設計と操作に使用' },
                                { name: 'Docker', desc: '開発環境の共通化に使用' },
                                { name: 'Git / VS Code', desc: '標準的な開発環境' }
                            ].map((item) => (
                                <li key={item.name} className="flex flex-col">
                                    <span className="flex items-center gap-2 font-medium text-slate-200">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                        {item.name}
                                    </span>
                                    <span className="text-sm text-slate-500 ml-3.5">{item.desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto text-center bg-slate-900/30 p-8 rounded-2xl border border-slate-800">
                    <h3 className="text-xl font-bold mb-2">資格</h3>
                    <p className="text-lg text-slate-300">
                        基本情報技術者試験
                    </p>
                    <p className="text-sm text-slate-500 mt-1">Fundamental Information Technology Engineer Examination</p>
                </div>
            </div>
        </section>
    );
}
