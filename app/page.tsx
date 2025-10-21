export default function Home() {
  return (
    <main style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 20px' }}>
      {/* HERO */}
      <section style={{ padding: '48px 0' }}>
        <h1 style={{ fontSize: 40, lineHeight: 1.15, marginBottom: 16 }}>
          Build intelligent digital experiences with <span style={{ color: '#6b7bff' }}>Kodiah</span>
        </h1>
        <p style={{ fontSize: 18, color: '#777', maxWidth: 720 }}>
          We deliver modern websites, automations, and AI-driven solutions to help your business grow.
        </p>

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
            Get a quote
          </a>
          <a
            href="#services"
            style={{
              border: '1px solid #ddd',
              padding: '12px 18px',
              borderRadius: 8,
              textDecoration: 'none',
              color: '#111',
              background: '#fff',
            }}
          >
            See services
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: '32px 0' }}>
        <h2 style={{ fontSize: 28, marginBottom: 12 }}>What we do</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 16,
          }}
        >
          <article style={{ border: '1px solid #eee', borderRadius: 12, padding: 16 }}>
            <h3>Websites & Landing Pages</h3>
            <p style={{ color: '#666' }}>
              Fast, secure sites with Next.js and Vercel — optimized for SEO and conversion.
            </p>
          </article>
          <article style={{ border: '1px solid #eee', borderRadius: 12, padding: 16 }}>
            <h3>Process Automation</h3>
            <p style={{ color: '#666' }}>
              Reduce manual work with integrations and custom automations.
            </p>
          </article>
          <article style={{ border: '1px solid #eee', borderRadius: 12, padding: 16 }}>
            <h3>AI & Chatbots</h3>
            <p style={{ color: '#666' }}>
              Bring AI to support, content and operations. Private, safe and tailored.
            </p>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '40px 0' }}>
        <h2 style={{ fontSize: 28, marginBottom: 12 }}>Let’s talk</h2>
        <p style={{ color: '#666', marginBottom: 16 }}>
          Tell us briefly what you need and we’ll get back with a proposal.
        </p>

        {/* Você pode trocar esse form por Formspree/EmailJS depois. Por enquanto, abre email. */}
        <a
          href="mailto:hello@kodiah.com?subject=Project%20inquiry&body=Hi%20Kodiah,%20I’d%20like%20to%20discuss%20a%20project..."
          style={{
            display: 'inline-block',
            background: '#111',
            color: '#fff',
            padding: '12px 18px',
            borderRadius: 8,
            textDecoration: 'none',
          }}
        >
          Email us
        </a>
      </section>

      <footer style={{ marginTop: 40, padding: '20px 0', color: '#999', fontSize: 14 }}>
        © {new Date().getFullYear()} Kodiah — All rights reserved.
      </footer>
    </main>
  );
}
