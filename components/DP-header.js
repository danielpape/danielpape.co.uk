import React from "react";

export default function DPHeader() {
  return (
    <header>
      <div className="wrapper">
        <div className="leading VStack">
          <h1 className="wordmark">
            <span>Daniel Pape</span>
          </h1>
          <h2 className="wordmark">Product Designer</h2>
        </div>
        <div>
          <a href="mailto:hello@bydanielpape.com" className="cta">
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
}
