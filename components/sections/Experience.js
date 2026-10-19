import { useState } from "react";
import NextCheckout from "./NextCheckout";

export default function Experience(props) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="experience">
      <h2 className="experience__title">Work</h2>
      <div className="experience__items">
        <article className="experience__card experience__card--project">
          <div className="experience__project-content">
            <h3 className="experience__project-title">SolveKit</h3>
            <p className="experience__project-meta">
              Contact Centre Platform, 2023-25
            </p>
            <p className="experience__project-description">
              During a two-year secondment to Next’s Contact Centre team, I
              shaped a new platform on Zendesk, saving over £2.75m per year. I
              identified user needs from user interviews and defined the UX
              roadmap. From React prototypes to a bespoke component library and
              design system documentation.
            </p>
          </div>
          <div
            className={`experience__project-media${isPaused ? " experience__project-media--paused" : ""}`}
          >
            <div className="experience__slide experience__slide--brand">
              <img
                className="experience__brand-image"
                src="/images/solvekit-brand-slide.svg"
                width="616"
                height="409"
                alt="SolveKit logo on a pale teal gradient."
              />
            </div>
            <div className="experience__slide experience__slide--design-system">
              <img
                className="experience__design-system-image"
                src="/images/solvekit-design-system.png"
                width="2885"
                height="1666"
                alt="SolveKit design system with an order table, stock status buttons, an order action menu and teal colour swatches."
              />
            </div>
            <div className="experience__slide experience__slide--icons">
              <img
                className="experience__project-image"
                src="/images/solvekit-icon-comparison.svg"
                width="515"
                height="217"
                alt="SolveKit icon comparisons in black and teal for Supplier, Store, Lorry, Parcel, Home, Desktop, Phone and Total Platform."
              />
            </div>
            <div className="experience__slide experience__slide--team">
              <img
                className="experience__team-image"
                src="/images/solvekit-team.png"
                width="512"
                height="341"
                alt="Six team members standing together at an event."
              />
            </div>
            <button
              className="experience__slideshow-toggle"
              type="button"
              aria-label={
                isPaused
                  ? "Play SolveKit slideshow"
                  : "Pause SolveKit slideshow"
              }
              onClick={() => setIsPaused(!isPaused)}
            >
              {isPaused ? "Play" : "Pause"}
            </button>
          </div>
        </article>
        <NextCheckout />
        <div className="experience__secondary">
          <div className="experience__card">
            <div className="experience__overline">2014 - 2018</div>
            <div className="experience__content">
              <div className="experience__company experience__company--secondary">
                The Independent & London Evening Standard
              </div>
              <div className="experience__group">
                <div className="experience__info">UX Designer</div>
              </div>
            </div>
          </div>
          <div className="experience__card">
            <div className="experience__overline">2011 - 2014</div>
            <div className="experience__content">
              <div className="experience__company experience__company--secondary">
                Creative roles & placements
              </div>
              <div className="experience__group">
                <div className="experience__info">BBH</div>
                <div className="experience__info">PhotoBox</div>
                <div className="experience__info">
                  Lean Mean Fighting Machine
                </div>
                <div className="experience__info">Skive Agency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
