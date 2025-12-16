import Link from 'next/link';

export default function Header() {
  const navItems = [
    { name: '自己紹介', href: '#about' },
    { name: '作成物', href: '#works' },
    { name: 'スキル', href: '#skills' },
    { name: '連絡先', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-accent transition-colors">
          Portfolio
        </Link>

        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-slate-400 hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
