import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-200 py-8 px-4 mt-12">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between gap-6 text-sm">
        <p className="text-left">
          © {currentYear} Daniel Pape. All rights reserved.
        </p>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6 text-left">
          <a
            href="mailto:hello@bydanielpape.com"
            className="hover:text-indigo-200 hover:underline hover:decoration-indigo-400"
          >
            hello@bydanielpape.com
          </a>

          <a
            href="https://www.linkedin.com/in/bydanielpape"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-200 hover:underline hover:decoration-indigo-400"
          >
            LinkedIn
          </a>

          <a
            href="https://mastodon.social/@bydanielpape"
            target="_blank"
            rel="me noopener noreferrer"
            className="hover:text-indigo-200 hover:underline hover:decoration-indigo-400"
          >
            Mastodon @bydanielpape
          </a>
        </div>
      </div>
    </footer>
  );
}
