import ScrollAnimation from "react-animate-on-scroll";

interface IProjectCase {
  text: string;
  imageSrc: string;
  imageDescription: string;
  imageDirection: "left" | "right";
  animationDelay?: number;
}

const ProjectCase: React.FunctionComponent<IProjectCase> = (props) => {
  const { text, imageSrc, imageDescription, imageDirection, animationDelay } =
    props;
  return (
    <ScrollAnimation
      animateIn="animation-fade-in"
      animateOnce
      delay={animationDelay}
    >
      <div
        className={`flex gap-4 items-center justify-center w-full ${imageDirection === "right" ? "flex-row-reverse" : ""}`}
      >
        <p>{text}</p>
        <div className="flex flex-col items-center gap-1 relative">
          <img
            className="w-30 max-w-none h-full rounded-md"
            src={imageSrc}
            alt=""
          />
          <p className="fs-xsm absolute position bottom-[-24px]">
            {imageDescription}
          </p>
        </div>
      </div>
    </ScrollAnimation>
  );
};

const KnowTheDeveloper = () => {
  const projectCases: {
    id: string;
    text: string;
    imageSrc: string;
    imageDescription: string;
  }[] = [
    {
      id: "0",
      text: "My commitment to delivering high-quality results has been a driving force throughout my career.",
      imageSrc: "https://picsum.photos/360/210",
      imageDescription: "Lorem, ipsum dolor.",
    },
    {
      id: "1",
      text: "The transition from creating simple landing pages to managing intricate, large-scale projects has always been a source of immense satisfaction for me.",
      imageSrc: "https://picsum.photos/360/210",
      imageDescription: "Lorem, ipsum dolor.",
    },
    {
      id: "2",
      text: "I launched my career as a developer at Atavia Learning, a reputable Dutch company. Starting with basic tweaks on various web applications, I quickly advanced to leading more complex projects",
      imageSrc: "https://picsum.photos/360/210",
      imageDescription: "Lorem, ipsum dolor.",
    },
    {
      id: "3",
      text: "This progression honed my ability to conceptualize, design, build, and deploy sophisticated websites from the ground up.",
      imageSrc: "https://picsum.photos/360/210",
      imageDescription: "Lorem, ipsum dolor.",
    },
  ];

  return (
    <div
      id="know-the-dev-section"
      className="min-h-screen flex-col bg-secondary flex items-center py-4 px-2"
    >
      <ScrollAnimation animateIn="animation-fade-in" animateOnce>
        <p className="fs-h1 mb-8">
          Know The <span className="text-primarylight">Developer</span>
        </p>
      </ScrollAnimation>
      <div className="md:w-3/4 xl:w-1/2 flex flex-col gap-6">
        {projectCases.map((projectCase, i) => (
          <ProjectCase
            key={projectCase.id}
            text={projectCase.text}
            imageSrc={projectCase.imageSrc}
            imageDescription={projectCase.imageDescription}
            imageDirection={i % 2 == 0 ? "right" : "left"}
            animationDelay={i + 1 === projectCases.length ? 0 : 250 + i * 150} // Last case cant have delay
          />
        ))}
      </div>
    </div>
  );
};

export default KnowTheDeveloper;
