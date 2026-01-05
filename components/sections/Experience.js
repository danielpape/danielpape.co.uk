export default function Experience(props) {
  return (
    <div className="grid grid-cols-12 py-16  px-8 m-auto border-b border-slate-200 dark:border-slate-600  max-w-screen-lg">
      <div className="md:col-start-2 md:col-span-4 col-start-1 col-span-12">
        <h2 className="text-2xl dark:text-slate-200 text-slate-800 pb-16">
          Experience
        </h2>
      </div>
      <div className="md:col-start-6 md:col-span-7 col-start-1 col-span-12 flex flex-col gap-8 pb-8">
        <div className="experience-item">
          <div className="experience-overline">2018 - Present</div>
          <div className="experience-content">
            <div className="experience-title">Next</div>
            <div className="experience-group">
              <div className="experience-secondary">
                Lead UX Designer <span>2024 - present</span>
              </div>
              <div className="experience-secondary">
                Senior UX Designer <span>2022 - 2024</span>
              </div>
              <div className="experience-secondary">
                UX Designer <span>2018 - 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-start-6 md:col-span-7 col-start-1 col-span-12 flex flex-col gap-8 pb-8">
        <div className="experience-item">
          <div className="experience-overline">2014 - 2018</div>
          <div className="experience-content">
            <div className="experience-title">
              The Independent & London Evening Standard
            </div>
            <div className="experience-group">
              <div className="experience-secondary">UX Designer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-start-6 md:col-span-7 col-start-1 col-span-12 flex flex-col gap-8 pb-8">
        <div className="experience-item">
          <div className="experience-overline">2011 - 2014</div>
          <div className="experience-content">
            <div className="experience-title">Creative roles & placements</div>
            <div className="experience-group">
              <div className="experience-secondary">PhotoBox</div>
              <div className="experience-secondary">Skive Agency</div>
              <div className="experience-secondary">BBH</div>
              <div className="experience-secondary">
                Lean Mean Fighting Machine
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
