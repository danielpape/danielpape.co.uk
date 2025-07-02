import BackgroundGradient from "../components/decoration/BackgroundGradient";

export default function Intro() {
  return (
    <section className="text-xl m-auto max-w-screen-lg">
      <div className="absolute top-0 right-0 z-10">
        <BackgroundGradient />
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
