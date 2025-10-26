import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Kodiah — Build intelligent apps effortlessly",
  description: "AI-powered platform for creating smart, modern applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white">
        <header className="w-full flex justify-between items-center px-8 py-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Kodiah Logo" width={40} height={40} />
            <h1 className="text-xl font-semibold text-white">kodiah</h1>
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="#" className="hover:text-yellow-400 transition">Features</a>
            <a href="#" className="hover:text-yellow-400 transition">Pricing</a>
            <a href="#" className="hover:text-yellow-400 transition">About</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
