import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-wrap justify-between p-5 mb-5">
      <Link
        href="/"
        className="text-xl md:mb-auto mb-5 font-bold text-blue-500"
      >
        zkBenchmarks
      </Link>
      <Link href="/about" className="text-blue-500 hover:text-blue-400">About</Link>
    </header>
  );
}
