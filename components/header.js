import DPLogo from "./decoration/logos/DPLogo";

export default function Header(props) {
  return (
    <header className="grid grid-cols-12 pt-8 sm:py-8 lg:mb-16 px-8 text-l m-auto z-30 relative max-w-screen-lg">
      <div className="lg:col-start-2 lg:col-span-5 md:col-start-2 md:col-span-5 col-start-1 col-span-5 flex flex-col justify-center md:justify-end">
        <DPLogo />
      </div>
      <div className="col-start-7 col-span-5 justify-end lg:col-start-10 lg:col-span-3 md:col-start-9 md:col-span-4 flex flex-row sm:flex-col gap-8 sm:gap-1 leading-tight">
        <div className="flex">
          <a
            href="mailto:hello@bydanielpape.com"
            className="underline decoration-purple-400 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              focusable="false"
              role="presentation"
            >
              <path
                className="dark:fill-slate-200 fill-slate-800"
                d="M15 2H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM4.94 9.94l-3 3c-.12.12-.28.18-.44.18s-.32-.06-.44-.18a.628.628 0 010-.88l3-3c.24-.24.64-.24.88 0 .25.24.25.64 0 .88zm10 3c-.12.12-.28.18-.44.18s-.32-.06-.44-.18l-3-3a.628.628 0 010-.88c.24-.24.64-.24.88 0l3 3c.25.24.25.64 0 .88zm0-9L8.8 10.09c-.22.22-.51.33-.8.33s-.58-.11-.8-.33L1.06 3.94c-.24-.24-.24-.64 0-.88s.64-.24.88 0L8 9.12l6.06-6.06c.24-.24.64-.24.88 0 .25.24.25.64 0 .88z"
              ></path>
            </svg>
            <span className="sm:block hidden dark:text-gray-100 text-gray-800">
              hello
              <span className="dark:text-gray-400 text-gray-500">
                @bydanielpape.com
              </span>
            </span>
          </a>
        </div>
        <div className="flex">
          <a
            href="https://linkedin.com/in/bydanielpape"
            target="_blank"
            className="underline decoration-purple-400 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              focusable="false"
              role="presentation"
              class
            >
              <path
                className="dark:fill-slate-200 fill-slate-800"
                d="M14.815 0a1.17 1.17 0 011.176 1.026l.009.127v13.692a1.171 1.171 0 01-1.058 1.15l-.127.005H1.18a1.169 1.169 0 01-1.173-1.028L0 14.845V1.155A1.168 1.168 0 011.053.006L1.181 0h13.634zM11 5.812l-.213-.004A2.494 2.494 0 008.64 6.887l-.098.154h-.031V5.998H6.235v7.635h2.37V9.856c0-.996.19-1.96 1.424-1.96 1.006 0 1.191.777 1.225 1.547l.008.477v3.713h2.37l.002-4.188c0-1.994-.417-3.54-2.633-3.633zm-6.256.186H2.372v7.635h2.373V5.998zM3.56 2.203a1.376 1.376 0 100 2.751 1.376 1.376 0 000-2.751z"
              ></path>
            </svg>
            <span className="sm:block hidden dark:text-gray-100 text-gray-800">
              <span className="dark:text-gray-400 text-gray-500">@</span>
              bydanielpape
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
