export default function AboutMe(props) {
  return (
    <section className="about">
      <h2 className="about__title">About Me</h2>
      <div class="about__content">
        <p className="about__body">
          I am currently Lead UX Designer in the Checkout & My Account Team at{" "}
          <a
            href="https://www.next.co.uk"
            className="about__link"
            target="_blank"
          >
            Next
          </a>
          , having previously led the design team at{" "}
          <a
            href="https://www.independent.co.uk"
            className="about__link"
            target="_blank"
          >
            The Independent
          </a>{" "}
          &{" "}
          <a
            href="https://www.standard.co.uk"
            className="about__link"
            target="_blank"
          >
            London Evening Standard
          </a>
          .
        </p>
        <p className="about__body">
          I believe in testing over assuming, so I build prototypes with React.
          You can find some of my prototypes over on{" "}
          <a
            href="https://codesandbox.io/u/bydanielpape"
            className="about__link"
            target="_blank"
          >
            CodeSandbox
          </a>
          .
        </p>
        <p className="about__body">
          I code iOS & Android apps as a hobby, which you can find on the App
          Store & Play Store. In 2013 my first app Eve Alarm was featured by
          Apple & has been downloaded over 100,000 times.
        </p>
      </div>
    </section>
  );
}
