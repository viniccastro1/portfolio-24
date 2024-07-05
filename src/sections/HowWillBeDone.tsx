import ScrollAnimation from "react-animate-on-scroll";
import Image1 from "/src/assets/svgs/man_idea.svg";
import Image2 from "/src/assets/svgs/man_image.svg";
import Image3 from "/src/assets/svgs/woman_planning.svg";
import Image4 from "/src/assets/svgs/man_done.svg";

interface IListElementProps {
  orderNumber: number;
  imagePosition?: "left" | "right";
  primaryText: string;
  secondaryText: string;
  imageImport: string; // accepts both images and svgs
  className?: string;
  scrollAnimationClass?: string;
}

const ListElement: React.FunctionComponent<IListElementProps> = (props) => {
  const {
    orderNumber,
    imagePosition = "left",
    primaryText,
    secondaryText,
    imageImport,
    className,
    scrollAnimationClass,
  } = props;

  return (
    <ScrollAnimation
      animateIn={`animation-fade-in ${scrollAnimationClass} w-full md:w-auto`}
      animateOnce
    >
      <div
        className={`flex-col md:flex-row flex gap-3 items-center justify-l animation-float-light ${className} w-full md:w-auto`}
      >
        {imagePosition === "left" && (
          <img src={imageImport} className="h-full mr-2" />
        )}
        {imagePosition === "right" && (
          <img src={imageImport} className="h-full ml-2 flex md:hidden" />
        )}
        <div className="flex items-center w-full md:w-auto">
          <div className="mr-3 md:mr-0 text-[60px] md:text-[96px] font-bold text-primarylight">
            {orderNumber}.
          </div>
          <div>
            <div className="fs-h6 md:fs-h5 break-all">{primaryText}</div>
            <p>{secondaryText}</p>
          </div>
          {imagePosition === "right" && (
            <img src={imageImport} className="h-full ml-2 hidden md:flex" />
          )}
        </div>
      </div>
    </ScrollAnimation>
  );
};

interface IListElementObject extends IListElementProps {
  id: string;
}

const HowWillBeDone: React.FunctionComponent = () => {
  const listElements: IListElementObject[] = [
    {
      id: "1",
      orderNumber: 1,
      imagePosition: "right",
      primaryText: "You bring your idea",
      secondaryText: "And we discuss the requirements",
      imageImport: Image1,
      scrollAnimationClass: "animation-fade-in-right",
    },
    {
      id: "2",
      orderNumber: 2,
      imagePosition: "left",
      primaryText: "You get a wireframe",
      secondaryText: "And suggest changes",
      imageImport: Image2,
      scrollAnimationClass: "animation-fade-in-left",
      className: "animation-delay-100",
    },
    {
      id: "3",
      orderNumber: 3,
      imagePosition: "right",
      primaryText: "You get a mockup",
      secondaryText: "And suggest changes",
      imageImport: Image3,
      scrollAnimationClass: "animation-fade-in-right",
      className: "animation-delay-250",
    },
    {
      id: "4",
      orderNumber: 4,
      imagePosition: "left",
      primaryText: "Your website is done!",
      secondaryText: "Signed sealed and deliverd",
      imageImport: Image4,
      scrollAnimationClass: "animation-fade-in-left",
      className: "animation-delay-100",
    },
  ];

  return (
    <div className="min-h-screen p-1 pt-4 md:p-3 flex flex-col items-center">
      <ScrollAnimation animateIn="animation-fade-in" animateOnce>
        <p className="fs-h2 mb-3 text-center text-primarylight">
          How will your website be done?
        </p>
      </ScrollAnimation>
      <div className="md:w-3/4 lg:4/6 flex flex-col items-center gap-4">
        {listElements.map((element) => (
          <ListElement key={element?.id} {...element} />
        ))}
      </div>
    </div>
  );
};

export default HowWillBeDone;
