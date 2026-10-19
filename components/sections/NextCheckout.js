import { useState } from "react";

export default function NextCheckout() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <article className="experience__card experience__card--project">
      <div className="experience__project-content">
        <h3 className="experience__project-title">Next Checkout</h3>
        <p className="experience__project-meta">Lead UX Designer, 2025</p>
        <p className="experience__project-description">
          Leading UX on Checkout and My Account for £1bn annual profit ecommerce
          leader. Running UX workshops with stakeholders to define roadmap.
          Leading a team of 4 designers delivering constant improvements.
          Personally owned initiatives including Single Page Checkout and Order
          Complete optimisations, leading to{" "}
          <span className="experience__project-result">+16%</span> downstream
          transactions.
        </p>
      </div>
      <div
        className={`experience__project-media experience__project-media--checkout${isPaused ? " experience__project-media--paused" : ""}`}
      >
        <div className="experience__slide experience__slide--checkout">
          <img
            className="experience__checkout-image"
            src="/images/next-checkout-phone.png"
            width="874"
            height="1768"
            alt="Next single-page checkout on a phone, showing delivery and payment options."
          />
        </div>
        <div className="experience__slide experience__slide--order-complete">
          <img
            className="experience__checkout-image experience__checkout-image--order-complete"
            src="/images/next-order-complete-phone.png"
            width="874"
            height="1768"
            alt="Next order-complete screen on a phone, showing confirmation and product recommendations."
          />
        </div>
        <div className="experience__slide experience__slide--checkout-workshop">
          <img
            className="experience__team-image"
            src="/images/next-checkout-workshop.jpg"
            width="5712"
            height="4284"
            alt="Five team members at a UX workshop, standing beside walls covered with sticky notes."
          />
        </div>
        <button
          className="experience__slideshow-toggle"
          type="button"
          aria-label={
            isPaused
              ? "Play Next Checkout slideshow"
              : "Pause Next Checkout slideshow"
          }
          onClick={() => setIsPaused(!isPaused)}
        >
          {isPaused ? "Play" : "Pause"}
        </button>
      </div>
    </article>
  );
}
