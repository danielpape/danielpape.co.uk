export default function Experience(props) {
  return (
    <section className="experience">
      <h2 className="experience__title">Experience</h2>
      <div className="experience__items">
        <div className="experience__card">
          <div className="experience__primary">
            <div className="experience__section">
              <div className="experience__overline">2018 - Present</div>
              <div className="experience__company">Next</div>
              <div className="experience__group">
                <div className="experience__info">
                  Lead UX Designer{" "}
                  <span className="experience__pill">2024 - present</span>
                </div>
                <div className="experience__info">
                  Senior UX Designer{" "}
                  <span className="experience__pill">2022 - 2024</span>
                </div>
                <div className="experience__info">
                  UX Designer{" "}
                  <span className="experience__pill">2018 - 2022</span>
                </div>
              </div>
            </div>
            <div className="experience__section">
              <p className="experience__summary">
                At Next, I lead user-centred design across key initiatives,
                including replatforming the Customer Service platform, which
                delivers £2.5m in annual savings, and major Checkout and My
                Account projects such as Single Page Checkout.
              </p>
            </div>
          </div>
        </div>
        <div className="experience__secondary">
          <div className="experience__card">
            <div className="experience__overline">2014 - 2018</div>
            <div className="experience__content">
              <div className="experience__company experience__company--secondary">
                The Independent & London Evening Standard
              </div>
              <div className="experience__group">
                <div className="experience__info">UX Designer</div>
              </div>
            </div>
          </div>
          <div className="experience__card">
            <div className="experience__overline">2011 - 2014</div>
            <div className="experience__content">
              <div className="experience__company experience__company--secondary">
                Creative roles & placements
              </div>
              <div className="experience__group">
                <div className="experience__info">PhotoBox</div>
                <div className="experience__info">Skive Agency</div>
                <div className="experience__info">BBH</div>
                <div className="experience__info">
                  Lean Mean Fighting Machine
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
