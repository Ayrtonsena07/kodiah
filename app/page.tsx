export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
        Shape your ideas with <span className="text-yellow-400">Kodiah</span>
      </h1>
      <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl">
        Build intelligent, connected applications — fast, reliable, and beautifully designed.
      </p>
      <div className="flex gap-4">
        <a
          href="#"
          className="px-6 py-3 bg-yellow-400 text-black rounded-full font-medium hover:bg-yellow-300 transition"
        >
          Start Free
        </a>
        <a
          href="#"
          className="px-6 py-3 border border-yellow-400 text-yellow-400 rounded-full font-medium hover:bg-yellow-400 hover:text-black transition"
        >
          Explore Pricing
        </a>
      </div>
    </main>
  );
}
