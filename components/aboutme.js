export default function AboutMe(props) {
  return (
    <div className="grid grid-cols-12 py-16  px-8 m-auto border-b border-slate-200 dark:border-slate-600  max-w-screen-xl">
      <div className="md:col-start-2 md:col-span-4 col-start-1 col-span-12">
        <h2 className="text-2xl dark:text-slate-200 text-slate-800 pb-16">
          About Me
        </h2>
      </div>
      <div className="md:col-start-6 md:col-span-7 col-start-1 col-span-12 flex flex-col gap-8">
        <div className="flex flex-col gap-8 text-xl dark:text-slate-300 text-slate-800">
          <p className="leading-relaxed">
            My current focus is on designing services at 
            <a
              href="https://www.next.co.uk"
              className="dark:text-indigo-300 text-indigo-800 underline decoration-purple-400 hover:text-indigo-900"
              target="_blank"
            >
              Next
            </a>
            , having previously led the design team at 
            <a
              href="https://www.independent.co.uk"
              className="dark:text-indigo-300 text-indigo-800 underline decoration-purple-400 hover:text-indigo-900"
              target="_blank"
            >
              The Independent
            </a>
             &{" "}
            <a
              href="https://www.standard.co.uk"
              className="dark:text-indigo-300 text-indigo-800 underline decoration-purple-400 hover:text-indigo-900"
              target="_blank"
            >
              London Evening Standard
            </a>
            .
          </p>
          <p className="leading-relaxed">
            I believe in testing over assuming, so I build prototypes with
            React. You can find some of my prototypes over on{" "}
            <a
              href="https://codesandbox.io/u/bydanielpape"
              className="dark:text-indigo-300 text-indigo-800 underline decoration-purple-400 hover:text-indigo-900"
              target="_blank"
            >
              CodeSandbox
            </a>
            .
          </p>
          <p className="leading-relaxed">
            I code iOS & Android apps as a hobby, which you can find on the App
            Store & Play Store. In 2013 my first app Eve Alarm was featured by
            Apple & has been downloaded over 100,000 times.
          </p>
        </div>
      </div>
    </div>
  );
}
