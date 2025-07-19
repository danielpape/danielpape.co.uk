import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-indigo-950 text-white py-8 px-4 mt-12">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm">
        <div className="flex flex-col gap-2">
          <p className="text-left">© {currentYear} by Daniel Pape.</p>
          <p className="text-left">
            This website is hosted on GitHub Pages and coded with 🫖 in 🇬🇧.
          </p>
        </div>

        <div className="flex flex-col gap-1 md:flex-row items-start md:gap-6 text-left">
          <a
            href="mailto:hello@bydanielpape.com"
            className="underline decoration-indigo-300 hover:text-indigo-200 hover:decoration-indigo-400"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/bydanielpape"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-indigo-300 hover:text-indigo-200 hover:decoration-indigo-400"
          >
            LinkedIn
          </a>

          <a
            href="https://mastodon.social/@danielpape"
            target="_blank"
            rel="me noopener noreferrer"
            className="underline decoration-indigo-300 hover:text-indigo-200 hover:decoration-indigo-400"
          >
            Mastodon
          </a>
        </div>
      </div>
    </footer>
  );
}
