import "./TestimonialSection.css";
import { useState } from "react";

function StarIcon() {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 0.5L13.7 7.8H21.5L15.4 12.4L17.6 19.8L11 15.4L4.4 19.8L6.6 12.4L0.5 7.8H8.3L11 0.5Z"
        fill="#111111"
      />
    </svg>
  );
}

function WebflowLogo() {
  return (
    <div className="webflow-logo">
      {/* Webflow "W" mark */}
      <svg
        width="28"
        height="20"
        viewBox="0 0 28 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.5 0L15.8 13.2L12.6 4H8.2L5 13.2L2.5 0H0L3.8 20H8.4L11.4 11.2L14.4 20H19L23.5 0H20.5Z"
          fill="#111111"
        />
        <path
          d="M28 3.5C28 5.4 26.4 7 24.5 7C22.6 7 21 5.4 21 3.5C21 1.6 22.6 0 24.5 0C26.4 0 28 1.6 28 3.5Z"
          fill="#111111"
        />
      </svg>
      <span className="webflow-logo__text">Webflow</span>
    </div>
  );
}

export default function TestimonialSection() {
  const [playing, setPlaying] = useState(false);
  // default thumbnail from YouTube (can be replaced)
  const thumb = "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg";

  return (
    <section className="testimonial-section">
      <div className="testimonial-section__inner">
        {/* ── LEFT: video block ── */}
        <div className="testimonial-section__left">
          <div
            className="testimonial-section__video"
            onClick={() => setPlaying(true)}
            style={!playing ? { backgroundImage: `url(${thumb})` } : undefined}
          >
            {playing ? (
              <iframe
                className="testimonial-section__iframe"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              /* play button */
              <button
                className="testimonial-section__play"
                aria-label="Play video"
              >
                <svg
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 2L22 14L2 26V2Z" fill="white" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* ── RIGHT: quote content ── */}
        <div className="testimonial-section__right">
          {/* 5 stars */}
          <div className="testimonial-section__stars">
            {[1, 2, 3, 4, 5].map((i) => (
              <StarIcon key={i} />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="testimonial-section__quote">
            "CredAxis changed how we evaluate borrowers. We went from three days
            to three hours. The alternative data insights caught risks we would
            have missed entirely."
          </blockquote>

          {/* Author row */}
          <div className="testimonial-section__author-row">
            <div className="testimonial-section__author-info">
              <span className="testimonial-section__author-name">
                Sarah Chen
              </span>
              <span className="testimonial-section__author-role">
                Credit director, Midwest Financial
              </span>
            </div>
            <div className="testimonial-section__divider" />
            <WebflowLogo />
          </div>
        </div>
      </div>
    </section>
  );
}
