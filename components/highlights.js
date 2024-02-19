export default function Highlights(props) {
  return (
    <div className="grid grid-cols-12 py-16 my-16 px-8 m-auto border-b border-slate-200 dark:border-slate-600">
      <div className="md:col-start-2 md:col-span-5 col-start-1 col-span-12">
        <h2 className="text-5xl font-serif dark:text-slate-300 text-slate-800 pb-16">
          Highlights
        </h2>
      </div>
      <div className="md:col-start-7 md:col-span-5 col-start-1 col-span-12 flex flex-col gap-8">
        <div className="flex flex-col gap-1 2xl:gap-2 pb-8">
          <h3 className="2xl:text-2xl font-serif dark:text-slate-400 text-slate-500">
            Next
          </h3>
          <p className="2xl:text-3xl text-xl dark:text-slate-300 text-slate-800 leading-relaxed">
            Saving over £2.5m per year for the UK’s leading retailer by
            redesigning the contact centre experience
          </p>
        </div>
        <div className="flex flex-col gap-1 2xl:gap-2 pb-8">
          <h3 className="2xl:text-2xl font-serif dark:text-slate-400 text-slate-500">
            The Independent
          </h3>
          <p className="2xl:text-3xl text-xl dark:text-slate-300 text-slate-800 leading-relaxed">
            Doubling subscribers within the first 6 months of launch for the
            UK’s first digital daily newspaper
          </p>
        </div>
        <div className="flex flex-col gap-1 2xl:gap-2 pb-8">
          <h3 className="2xl:text-2xl font-serif dark:text-slate-400 text-slate-500">
            London Evening Standard
          </h3>
          <p className="2xl:text-3xl text-xl dark:text-slate-300 text-slate-800 leading-relaxed">
            Rethinking a classic brand with seamless commercial placements and
            winning Newspaper of the Year
          </p>
        </div>
      </div>
    </div>
  );
}
