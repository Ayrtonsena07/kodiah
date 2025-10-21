'use client';

type T = {
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  ctaQuote: string;
  ctaServices: string;
  whatWeDo: string;
  cards: {
    title: string;
    body: string;
  }[];
  letsTalk: string;
  emailUs: string;
};

export default function HomeContent({ t }: { t: T }) {
  return (
    <main style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 20px' }}>
      {/* HERO */}
      <section style={{ padding: '48px 0' }}>
        <h1 style={{ fontSize: 40, lineHeight: 1.15, marginBottom: 16 }}>{t.heroTitle}</h1>
        <p style={{ fontSize: 18, color: '#777', maxWidth: 720 }}>{t.heroSubtitle}</p>

        <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
          <a
            href="#contact"
            style={{
              background: '#111',
              color: '#fff',
              padding: '12px 18px',
              borderRadius: 8,
              textDecoration: 'none',
            }}
          >
            {t.ctaQuote}
          </a>
          <a
            href="#services"
            style={{
              border: '1px solid #ddd',
              padding: '12px 18px',
              borderRadius: 8,
              color: '#111',
              textDecoration: 'none',
              background: '#fff',
            }}
          >
            {t.ctaServices}
          </a>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="services" style={{ padding: '8px 0' }}>
        <h2 style={{ fontSize: 28, marginBottom: 16 }}>{t.whatWeDo}</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {t.cards.map((c, i) => (
            <div
              key={i}
              style={{
                border: '1px solid #333',
                borderRadius: 12,
                padding: 16,
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))',
              }}
            >
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>{c.title}</h3>
              <p style={{ color: '#999' }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '48px 0 0' }}>
        <h2 style={{ fontSize: 28, marginBottom: 16 }}>{t.letsTalk}</h2>
        <p style={{ color: '#999', marginBottom: 12 }}>
          {/** coloque aqui um texto curto se quiser, igual ao EN **/}
        </p>
        <a
          href="mailto:hello@kodiah.com"
          style={{
            background: '#111',
            color: '#fff',
            padding: '12px 16px',
            borderRadius: 8,
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          {t.emailUs}
        </a>
      </section>
    </main>
  );
}
