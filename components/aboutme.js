export default function AboutMe(props) {
  return (
    <div className="grid grid-cols-12 py-16 my-16 px-8 max-w-screen-xl m-auto border-b border-slate-200">
      <div className="md:col-start-2 md:col-span-5 col-start-1 col-span-12">
        <h2 className="text-5xl font-serif text-slate-800 pb-16">About Me</h2>
      </div>
      <div className="md:col-start-7 md:col-span-5 col-start-1 col-span-12 flex flex-col gap-8">
        <div className="flex flex-col gap-8 text-xl text-slate-800">
          <p>
            My current focus is on designing services at 
            <a
              href="https://www.next.co.uk"
              className="text-indigo-600 hover:text-indigo-900"
              target="_blank"
            >
              Next
            </a>
            , having previously led the design team at 
            <a
              href="https://www.independent.co.uk"
              className="text-indigo-600 hover:text-indigo-900"
              target="_blank"
            >
              The Independent
            </a>
             &{" "}
            <a
              href="https://www.standard.co.uk"
              className="text-indigo-600 hover:text-indigo-900"
              target="_blank"
            >
              London Evening Standard
            </a>
            .
          </p>
          <p>
            I believe in testing over assuming, so I build prototypes with
            React. You can find some of my prototypes over on{" "}
            <a
              href="https://codesandbox.io/u/bydanielpape"
              className="text-indigo-600 hover:text-indigo-900"
              target="_blank"
            >
              CodeSandbox
            </a>
            .
          </p>
          <p>
            I code iOS & Android apps as a hobby, which you can find on the App
            Store & Play Store. In 2013 my first app Eve Alarm was featured by
            Apple & has been downloaded over 100,000 times.
          </p>
        </div>
      </div>
    </div>
  );
}
