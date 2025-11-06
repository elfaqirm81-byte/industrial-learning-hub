import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">Industrial Learning Hub</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/courses" className="hover:opacity-70">Cours</Link>
          <Link href="/freebies" className="hover:opacity-70">Ressources</Link>
          <Link href="/blog" className="hover:opacity-70">Articles</Link>
          <Link href="/about" className="hover:opacity-70">À propos</Link>
          <Link href="/contact" className="hover:opacity-70">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
