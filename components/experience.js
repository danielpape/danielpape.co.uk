export default function Experience(props) {
  return (
    <div className="grid grid-cols-12 py-16  px-8 m-auto border-b border-slate-200 dark:border-slate-600  max-w-screen-lg">
      <div className="md:col-start-2 md:col-span-4 col-start-1 col-span-12">
        <h2 className="text-2xl dark:text-slate-200 text-slate-800 pb-16">
          Experience
        </h2>
      </div>
      <div className="md:col-start-6 md:col-span-7 col-start-1 col-span-12 flex flex-col gap-8 pb-8">
        <div className="border-b pb-8 grid grid-cols-1 gap-2 md:grid-cols-3">
          <div className="font-mono text-sm  dark:text-slate-300 text-slate-700">
            2018 - Present
          </div>
          <div className="col-span-2 flex justify-between">
            <div>
              <div className="text-lg font-medium dark:text-slate-200 text-slate-800 mb-2">
                Next
              </div>
              <div className="font-mono text-sm dark:text-slate-400 text-slate-600">
                2024 - Lead UX Designer
              </div>
              <div className="font-mono text-sm dark:text-slate-400 text-slate-600">
                2022 - Senior UX Designer
              </div>
              <div className="font-mono text-sm dark:text-slate-400 text-slate-600">
                2018 - UX Designer
              </div>
            </div>
            <div className="font-mono text-sm text-right dark:text-slate-300 text-slate-700 hidden lg:block">
              Hybrid - Leicester
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-start-6 md:col-span-7 col-start-1 col-span-12 flex flex-col gap-8 pb-8">
        <div className="border-b pb-8 grid grid-cols-1 gap-2 md:grid-cols-3">
          <div className="font-mono text-sm dark:text-slate-300 text-slate-700">
            2014 - 2018
          </div>
          <div className="col-span-2 flex justify-between">
            <div>
              <div className="text-lg font-medium dark:text-slate-200 text-slate-800 mb-2">
                The Independent & London Evening Standard
              </div>
              <div className="font-mono text-sm dark:text-slate-400 text-slate-600">
                UX Designer
              </div>
            </div>
            <div className="font-mono text-sm text-right dark:text-slate-300 text-slate-700 hidden lg:block">
              London
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-start-6 md:col-span-7 col-start-1 col-span-12 flex flex-col gap-8 pb-8">
        <div className="border-b pb-8 grid grid-cols-1 gap-2 md:grid-cols-3">
          <div className="text-sm font-mono dark:text-slate-300 text-slate-700">
            2012 - 2014
          </div>
          <div className="col-span-2 flex justify-between">
            <div>
              <div className="text-lg font-medium dark:text-slate-200 text-slate-800 mb-2">
                PhotoBox
              </div>
              <div className="font-mono text-sm dark:text-slate-400 text-slate-600">
                Product Manager
              </div>
            </div>
            <div className="font-mono text-sm text-right dark:text-slate-300 text-slate-700 hidden lg:block">
              London
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-start-6 md:col-span-7 col-start-1 col-span-12 flex flex-col gap-8 pb-8">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          <div className="font-mono text-sm font-medium dark:text-slate-300 text-slate-700">
            2011 - 2012
          </div>
          <div className="col-span-2 flex justify-between">
            <div>
              <div className="text-lg font-medium dark:text-slate-400 text-slate-600 mb-2">
                Skive
              </div>
              <div className="font-mono text-sm dark:text-slate-400 text-slate-600">
                Advertising Creative
              </div>
            </div>
            <div className="font-mono text-sm text-right dark:text-slate-300 text-slate-700 hidden lg:block">
              London
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
