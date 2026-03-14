import "./CTASection.css";

export default function CTASection() {
  return (
    <section className="cta-section">
      {/* ── Top: centered text + buttons ── */}
      <div className="cta-section__top">
        <h2 className="cta-section__title">Ready to make better decisions</h2>
        <p className="cta-section__subtitle">
          See how CredAxis transforms your credit decisioning process today.
        </p>
        <div className="cta-section__buttons">
          <button className="cta-section__btn-primary">Get started</button>
          <button className="cta-section__btn-outline">Schedule demo</button>
        </div>
      </div>

      {/* ── Bottom: full-width photo ── */}
      <div className="cta-section__photo-wrap">
        {/*
          Replace src with your actual image.
          This is the photo of two women on a couch with a colorful laptop.
          Import it: import ctaPhoto from './assets/cta-photo.jpg'
          Then use: <img src={ctaPhoto} ... />
        */}
        <img
          src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=1200&q=80"
          alt="Two people reviewing information on a laptop"
          className="cta-section__photo"
        />
      </div>
    </section>
  );
}
