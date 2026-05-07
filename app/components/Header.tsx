import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-agro-green-dark py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        {/* Left Side: Logo */}
        <Link
          href="/"
          className="relative h-12 w-32 bg-white rounded p-1.5 transition-transform hover:scale-105 active:scale-105 shadow-sm"
        >
          <Image
            src="/assets/logo.webp"
            alt="Liebigs Logo"
            fill
            sizes="(max-width: 768px) 100vw, 128px"
            className="object-contain p-1"
          />
        </Link>
      </div>
    </header>
  );
}
