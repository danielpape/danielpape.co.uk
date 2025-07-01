export default function Grid(props) {
  return (
    <div className="grid grid-cols-12 pt-8 pb-32 z-30 relative">
      <div className="col-start-2 col-span-10 md:col-start-3 md:col-span-8 shadow-lg rounded-xl overflow-hidden p-3 flex flex-col md:flex-row bg-white gap-4">
        <div className="flex flex-row gap-4 md:flex-col">
          <img
            src="/images/nextpay.png"
            className="rounded-md overflow-hidden"
            alt="A person's hands holding a phone displaying the Next Pay credit overlay"
          />
          <img
            src="/images/standard.png"
            className="rounded-md overflow-hidden"
            alt="A person's hands holding a phone displaying the Evening Standard mobile website"
          />
        </div>
        <div className="col-start-5 col-span-5 flex gap-4">
          <img
            src="/images/medori.png"
            className="rounded-md overflow-hidden"
            alt="A person's hands holding a phone displaying the Medori app which lists medications and which have been taken"
          />
        </div>
      </div>
    </div>
  );
}
