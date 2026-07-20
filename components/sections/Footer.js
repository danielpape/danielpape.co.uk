import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__layout">
        <div className="site-footer__copyright">
          <p className="site-footer__meta">© {currentYear} by Daniel Pape.</p>
        </div>

        <div className="site-footer__identity">
          <h3 className="site-footer__heading">Who I Am</h3>
          <p className="site-footer__description">
            A Lead Product Designer crafting simple, accessible digital
            services.
          </p>
        </div>

        <div className="site-footer__socials">
          <h3 className="site-footer__heading">Socials</h3>
          <a href="mailto:hello@bydanielpape.com" className="site-footer__link">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/bydanielpape"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__link"
          >
            LinkedIn
          </a>

          <a
            href="https://mastodon.social/@danielpape"
            target="_blank"
            rel="me noopener noreferrer"
            className="site-footer__link"
          >
            Mastodon
          </a>
        </div>
      </div>
    </footer>
  );
}
