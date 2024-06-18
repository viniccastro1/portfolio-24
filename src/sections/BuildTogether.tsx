import ScrollAnimation from "react-animate-on-scroll";

const BuildTogether: React.FunctionComponent = () => {
  return (
    <div
      id="build-together-section"
      className="flex items-center flex-col p-2 pt-7 min-h-screen bg-secondary"
    >
      <ScrollAnimation animateIn="animation-fade-in-right" animateOnce>
        <p className="fs-h2 mb-3 text-center">
          What can we <span className="text-primary ">build</span> together
        </p>
      </ScrollAnimation>
      <div className="max-w-96 flex items-center flex-col">
        <ScrollAnimation animateIn="animation-fade-in-left" animateOnce>
          <div className="bg-red-500 w-70 h-45 mb-2"> Gallery here</div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animation-fade-in" animateOnce>
          <div className="mb-4">Gallery controls</div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animation-fade-in" animateOnce>
          <div className="text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default BuildTogether;
