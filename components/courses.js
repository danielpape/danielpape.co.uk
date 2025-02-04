export default function Courses(props) {
  return (
    <div className="grid grid-cols-12 py-16  px-8 m-auto border-b border-slate-200 dark:border-slate-600  max-w-screen-xl">
      <div className="md:col-start-2 md:col-span-4 col-start-1 col-span-12">
        <h2 className="text-2xl dark:text-slate-200 text-slate-800 pb-16">
          Courses
        </h2>
      </div>
      <div className="md:col-start-6 md:col-span-7 col-start-1 col-span-12 flex flex-col gap-8 pb-8">
        <div className="border-b pb-8 grid grid-cols-1 gap-2 md:grid-cols-3">
          <div className="font-mono text-sm  dark:text-slate-300 text-slate-700">
            2024
          </div>
          <div className="col-span-2 flex justify-between">
            <div>
              <div className="text-lg font-medium dark:text-slate-200 text-slate-800 mb-2">
                IDEO U
              </div>
              <div className="font-mono text-sm dark:text-slate-400 text-slate-600">
                Leading Complex Projects
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-start-6 md:col-span-7 col-start-1 col-span-12 flex flex-col gap-8 pb-8">
        <div className="border-b pb-8 grid grid-cols-1 gap-2 md:grid-cols-3">
          <div className="font-mono text-sm dark:text-slate-300 text-slate-700">
            2023
          </div>
          <div className="col-span-2 flex justify-between">
            <div>
              <div className="text-lg font-medium dark:text-slate-200 text-slate-800 mb-2">
                Adam Silver
              </div>
              <div className="font-mono text-sm dark:text-slate-400 text-slate-600 mb-8">
                Form Design Mastery
              </div>
              <div className="text-lg font-medium dark:text-slate-200 text-slate-800 mb-2">
                IDEO U
              </div>
              <div className="font-mono text-sm dark:text-slate-400 text-slate-600">
                Storytelling For Influence
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-start-6 md:col-span-7 col-start-1 col-span-12 flex flex-col gap-8 pb-8">
        <div className="border-b pb-8 grid grid-cols-1 gap-2 md:grid-cols-3">
          <div className="text-sm font-mono dark:text-slate-300 text-slate-700">
            2022
          </div>
          <div className="col-span-2 flex justify-between">
            <div>
              <div className="text-lg font-medium dark:text-slate-200 text-slate-800 mb-2">
                IDEO U
              </div>
              <div className="font-mono text-sm dark:text-slate-400 text-slate-600">
                Human-Centred Service Design
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-start-6 md:col-span-7 col-start-1 col-span-12 flex flex-col gap-8 pb-8">
        <div className="border-b pb-8 grid grid-cols-1 gap-2 md:grid-cols-3">
          <div className="font-mono text-sm font-medium dark:text-slate-300 text-slate-700">
            2021
          </div>
          <div className="col-span-2 flex justify-between">
            <div>
              <div className="text-lg font-medium dark:text-slate-400 text-slate-600 mb-2">
                Memorisely
              </div>
              <div className="font-mono text-sm dark:text-slate-400 text-slate-600">
                Accessible Design Bootcamp
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-start-6 md:col-span-7 col-start-1 col-span-12 flex flex-col gap-8 pb-8">
        <div className="border-b pb-8 grid grid-cols-1 gap-2 md:grid-cols-3">
          <div className="font-mono text-sm font-medium dark:text-slate-300 text-slate-700">
            2019
          </div>
          <div className="col-span-2 flex justify-between">
            <div>
              <div className="text-lg font-medium dark:text-slate-400 text-slate-600 mb-2">
                Scrimba
              </div>
              <div className="font-mono text-sm dark:text-slate-400 text-slate-600">
                Advanced React
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-start-6 md:col-span-7 col-start-1 col-span-12 flex flex-col gap-8 pb-8">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          <div className="font-mono text-sm font-medium dark:text-slate-300 text-slate-700">
            2017
          </div>
          <div className="col-span-2 flex justify-between">
            <div>
              <div className="text-lg font-medium dark:text-slate-400 text-slate-600 mb-2">
                General Assembly
              </div>
              <div className="font-mono text-sm dark:text-slate-400 text-slate-600">
                UX Design Immersive Bootcamp
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
