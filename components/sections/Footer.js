import React from "react";
import BackgroundGradient from "../decoration/BackgroundGradient";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-10 px-4 mt-12 max-w-screen-lg m-auto">
      <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-6 text-sm items-start">
        {/* © Column — starts at col 2 */}
        <div className="col-span-12 md:col-start-2 md:col-span-4">
          <p className="dark:text-neutral-200 text-neutral-600">
            © {new Date().getFullYear()} by Daniel Pape.
          </p>
        </div>

        {/* Who I Am Column — centered around col 6 (main half) */}
        <div className="col-span-12 md:col-start-6 md:col-span-5 flex flex-col gap-2">
          <h3 className="text-xs uppercase text-neutral-800 dark:text-neutral-300 tracking-wide">
            Who I Am
          </h3>
          <p className="text-lg dark:text-neutral-200 text-neutral-600 leading-snug max-w-md">
            A UX Designer crafting simple, accessible digital services.
          </p>
        </div>

        {/* Socials Column — aligned to column 12 (far right) */}
        <div className="col-span-12 md:col-start-12 md:col-span-1 flex flex-col gap-2 text-neutral-800">
          <h3 className="text-xs uppercase text-neutral-800 dark:text-neutral-200 tracking-wide">
            Socials
          </h3>
          <a
            href="mailto:hello@bydanielpape.com"
            className="underline dark:text-neutral-100 decoration-main-300 hover:text-main-600 dark:hover:text-main-100 hover:decoration-main-400"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/bydanielpape"
            target="_blank"
            rel="noopener noreferrer"
            className="underline dark:text-neutral-100 decoration-main-300  hover:text-main-600 dark:hover:text-main-100 hover:decoration-main-400"
          >
            LinkedIn
          </a>

          <a
            href="https://mastodon.social/@danielpape"
            target="_blank"
            rel="me noopener noreferrer"
            className="underline dark:text-neutral-100 decoration-main-300 hover:text-main-600 dark:hover:text-main-100 hover:decoration-main-400"
          >
            Mastodon
          </a>
        </div>
      </div>
    </footer>
  );
}
