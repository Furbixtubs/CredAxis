import "./HeroSection.css";
import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section className="hero-wrapper">
      <div className="hero-wrapper__container">
        {/* ── Centered Logo ── */}
        <div className="hero-logo">
          {/* CredAxis icon: green + yellow curved swooshes forming the "3" */}
          <svg
            className="hero-logo__icon"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Yellow/gold upper-right arc — top curve of the "3" */}
            <path
              d="M26 8 C36 8, 44 14, 44 22 C44 28, 39 32, 33 33"
              stroke="#f5c518"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            {/* Green lower arc — bottom curve + tail of the "3" */}
            <path
              d="M33 33 C39 34, 44 38, 44 44 C44 50, 36 54, 26 50 C20 48, 15 44, 13 40"
              stroke="#22c55e"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            {/* Small green hook / serif at top-left of the 3 */}
            <path
              d="M18 10 L26 8"
              stroke="#22c55e"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          <span className="hero-logo__text">CredAxis</span>
        </div>

        {/* ── Hero Card ── */}
        <div className="hero-card">
          {/* LEFT — dark panel with copy */}
          <div className="hero-card__left">
            <h1 className="hero-card__headline">
              Know your borrowers
              <br />
              before they ask
            </h1>
            <p className="hero-card__body">
              CredAxis uses alternative data to evaluate creditworthiness with
              precision. Make faster decisions backed by real financial
              behavior.
            </p>
            <div className="hero-card__buttons">
              <Link to="/login" className="hero-card__btn-primary">
                Get Started
              </Link>
              <button className="hero-card__btn-outline">Watch demo</button>
            </div>
          </div>

          {/* RIGHT — lifestyle photo */}
          <div className="hero-card__right">
            {/*
            IMPORTANT: Replace the src below with your actual image.
            The image should be the overhead lifestyle photo of a person
            working on a laptop at a round table with pine cones and candles.
            Suggested: place your image in src/assets/hero-photo.jpg
            Then change src to: import heroPhoto from './assets/hero-photo.jpg'
            and use <img src={heroPhoto} ... />
          */}
            <img
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*NXW5wemG4J7VyGNKqB0Jcg@2x.jpeg" // Placeholder image; replace with actual hero photo
              alt="Person working on laptop"
              className="hero-card__photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
