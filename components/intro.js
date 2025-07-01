export default function Intro() {
  return (
    <section className="text-xl m-auto max-w-screen-lg">
      <div className="absolute top-0 right-0 z-10">
        <svg
          width={1280}
          height={895}
          viewBox="0 0 1280 895"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            style={{ mixBlendMode: "multiply" }}
            filter="url(#filter0_f_1391_70)"
          >
            <ellipse
              cx={461}
              cy="376.5"
              rx={304}
              ry="256.5"
              fill="#001AFF"
              fillOpacity="0.12"
            />
          </g>
          <g
            style={{ mixBlendMode: "multiply" }}
            filter="url(#filter1_f_1391_70)"
          >
            <ellipse
              cx={414}
              cy="493.5"
              rx={304}
              ry="256.5"
              fill="#FF7A00"
              fillOpacity="0.12"
            />
          </g>
          <g
            style={{ mixBlendMode: "multiply" }}
            filter="url(#filter2_f_1391_70)"
          >
            <ellipse
              cx={888}
              cy="389.5"
              rx={304}
              ry="256.5"
              fill="#FF7A00"
              fillOpacity="0.12"
            />
          </g>
          <g
            style={{ mixBlendMode: "multiply" }}
            filter="url(#filter3_f_1391_70)"
          >
            <ellipse
              cx={976}
              cy="518.5"
              rx={304}
              ry="256.5"
              fill="#001AFF"
              fillOpacity="0.12"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1391_70"
              x={37}
              y={0}
              width={848}
              height={753}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={60}
                result="effect1_foregroundBlur_1391_70"
              />
            </filter>
            <filter
              id="filter1_f_1391_70"
              x={-10}
              y={117}
              width={848}
              height={753}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={60}
                result="effect1_foregroundBlur_1391_70"
              />
            </filter>
            <filter
              id="filter2_f_1391_70"
              x={464}
              y={13}
              width={848}
              height={753}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={60}
                result="effect1_foregroundBlur_1391_70"
              />
            </filter>
            <filter
              id="filter3_f_1391_70"
              x={552}
              y={142}
              width={848}
              height={753}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={60}
                result="effect1_foregroundBlur_1391_70"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="grid grid-cols-12 py-2 mt-16 px-8 z-20 relative gap-4">
        <div className="col-start-1 col-span-12 md:col-start-2 md:col-span-5 flex flex-col">
          <h1 className="dark:text-gray-300 text-gray-600 md:mb-16 mb-4 text-md">
            <span className="font-semibold dark:text-gray-100 text-gray-900">
              Daniel Pape
            </span>{" "}
            is a <i className="dark:text-gray-100 text-gray-900">UX Designer</i>{" "}
            <br />
            crafting <i>simple</i>, <i>accessible</i> digital services.
          </h1>
        </div>
        <h2 className="col-start-1 col-span-12 md:col-start-7 md:col-span-5 dark:text-gray-300 text-gray-700">
          My mission is to keep user experience at the heart at everything I
          produce, so you’ll usually find me talking and presenting to users.
        </h2>
      </div>
    </section>
  );
}
