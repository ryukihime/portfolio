export default function Contact() {
    return (
        <footer id="contact" className="bg-slate-900 border-t border-slate-800 pt-20 pb-10">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
                <p className="text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
                    GitHubで制作物のコードを、Zennで日々の学習の軌跡を公開しています。<br />
                    技術的なフィードバックや関わりを持てる機会がありましたら幸いです。
                </p>

                <a
                    href="mailto:contact@example.com"
                    className="inline-block px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-opacity-90 transition-all mb-20"
                >
                    メッセージを送る
                </a>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Ryuki. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
                        <a href="https://zenn.dev/ryukihime" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Zenn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
