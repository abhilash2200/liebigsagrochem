import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-agro-green-dark py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <Link
          href="/"
          className="relative h-12 w-32 bg-white rounded p-1.5 transition-transform hover:scale-105 active:scale-105 shadow-sm"
        >
          <Image
            src="/assets/logo.webp"
            alt="Liebigs Logo"
            fill
            className="object-contain p-1"
          />
        </Link>

        {/* Right Side: Info Link */}
        <nav>
          <Link 
            href="/info" 
            className="text-white font-poppins font-bold text-xs uppercase tracking-widest hover:border-agro-green-light transition-colors border border-white/20 px-4 py-2"
            style={{ borderRadius: '2px' }}
          >
            Info
          </Link>
        </nav>
      </div>
    </header>
  );
}
