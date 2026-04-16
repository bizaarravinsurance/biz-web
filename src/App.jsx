const services = [
  {
    title: 'Life Insurance',
    description: 'Protect your family’s financial future with dependable coverage and thoughtful planning.',
  },
  {
    title: 'Health Insurance',
    description: 'Choose plans that help manage medical expenses and give peace of mind in emergencies.',
  },
  {
    title: 'Vehicle Insurance',
    description: 'Stay protected on the road with practical cover for cars, bikes, and other vehicles.',
  },
]

const reasons = [
  'Trusted Local Service',
  'Fast Claim Support',
  'Affordable Plans',
]

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/yourpage' },
  { name: 'Facebook', href: 'https://facebook.com/yourpage' },
  { name: 'Twitter', href: 'https://twitter.com/yourpage' },
  { name: 'YouTube', href: 'https://youtube.com/yourchannel' },
  { name: 'WhatsApp', href: 'https://wa.me/91XXXXXXXXXX' },
]

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="Aarrav Insurance Services home">
            <img src="/logo.svg" alt="Aarrav Insurance Services logo" className="brand-logo" />
            <div>
              <div className="brand-title">Aarrav Insurance Services</div>
              <div className="brand-subtitle">Biswan, Sitapur, Uttar Pradesh</div>
            </div>
          </a>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#story">Our Story</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">Trusted local insurance guidance</span>
              <h1>Secure Your Future Today</h1>
              <p className="hero-text">
                A modern, friendly insurance service for families and individuals in Biswan who want clear advice,
                dependable support, and practical solutions.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer">
                  Get Free Consultation
                </a>
                <a className="btn btn-secondary" href="#services">
                  Explore Services
                </a>
              </div>
            </div>

            <div className="hero-card">
              <h2>Why people choose us</h2>
              <ul>
                <li>Simple guidance without confusion</li>
                <li>Support when updates or claims feel stressful</li>
                <li>Local understanding with a customer-first approach</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Our Services</span>
              <h2>Insurance support built around real needs</h2>
              <p>
                We focus on the policies people need most and explain them in a simple, practical way.
              </p>
            </div>

            <div className="cards-grid">
              {services.map((service) => (
                <article className="card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Why Choose Us</span>
              <h2>Support that feels personal and professional</h2>
            </div>
            <div className="cards-grid cards-grid-small">
              {reasons.map((reason) => (
                <div className="card card-compact" key={reason}>
                  <h3>{reason}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="section">
          <div className="container story-layout">
            <div className="section-heading section-heading-left">
              <span className="eyebrow">Our Story</span>
              <h2>Why Aarrav Insurance Services was started</h2>
            </div>

            <div className="story-copy">
              <p>
                This business began from a real personal experience. After the arrival of my baby, I wanted to add my
                child to an existing health insurance policy. Even after sharing the required documents and following up
                multiple times through different channels, the process remained unclear and frustrating.
              </p>
              <p>
                When I directly connected with the insurer, the addition was completed smoothly. That moment made one
                thing very clear: many people do not struggle because insurance is impossible to understand, they
                struggle because proper guidance and genuine support are often missing.
              </p>
              <p>
                Aarrav Insurance Services was created to close that gap — with honest advice, local accessibility, and
                support that stays with customers when they need help the most.
              </p>
              <blockquote>
                “We do not just help people choose policies. We help them feel supported through the process.”
              </blockquote>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-alt">
          <div className="container contact-grid">
            <div>
              <div className="section-heading section-heading-left">
                <span className="eyebrow">Contact Us</span>
                <h2>Let’s help you choose the right cover</h2>
              </div>
              <div className="contact-list">
                <p><strong>Phone:</strong> +91XXXXXXXXXX</p>
                <p><strong>Location:</strong> Biswan, Sitapur, Uttar Pradesh, India</p>
                <p><strong>Website:</strong> aarrav.in</p>
              </div>
              <div className="hero-actions">
                <a className="btn btn-primary" href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="social-panel">
              <h3>Connect with us</h3>
              <div className="social-links">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} target="_blank" rel="noreferrer">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section map-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Our Location</span>
              <h2>Find us in Biswan</h2>
            </div>
            <div className="map-frame">
              <iframe
                title="Map showing Biswan, Sitapur, Uttar Pradesh"
                src="https://maps.google.com/maps?q=Biswan%20Sitapur%20Uttar%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 Aarrav Insurance Services. All rights reserved.</p>
          <p>Trusted insurance guidance in Biswan, Sitapur.</p>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        WA
      </a>
    </div>
  )
}
