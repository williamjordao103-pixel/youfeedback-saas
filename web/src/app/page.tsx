export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold">YouFeedback</h1>
        <p className="mt-3 opacity-80">
          MVP SaaS — feedback via QR Code (Next.js + Supabase + n8n).
        </p>
        <a
          href="#"
          className="mt-6 inline-block rounded-xl border px-6 py-3 hover:bg-black hover:text-white transition"
        >
          Começar
        </a>
      </div>
    </main>
  );
}
