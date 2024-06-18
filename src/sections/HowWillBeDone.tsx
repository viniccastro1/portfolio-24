import ScrollAnimation from "react-animate-on-scroll";
import Image1 from "/src/assets/svgs/man_idea.svg";

interface IListElementProps {
  orderNumber: number;
  imagePosition?: "left" | "right";
  primaryText: string;
  secondaryText: string;
  imageImport: string; // accepts both images and svgs
  className?: string;
  scrollAnimationClass?: string;
}

const ListElement: React.FunctionComponent = (props: IListElementProps) => {
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
      animateIn={`animation-fade-in ${scrollAnimationClass}`}
      animateOnce
    >
      <div
        className={`flex gap-3 items-center justify-l animation-float-light ${className}`}
      >
        {imagePosition === "left" && (
          <img src={imageImport} className="h-full mr-2" />
        )}
        <div className="text-[96px] font-bold text-primarylight">
          {orderNumber}.
        </div>
        <div>
          <div className="fs-h5">{primaryText}</div>
          <div>{secondaryText}</div>
        </div>
        {imagePosition === "right" && (
          <img src={imageImport} className="h-full ml-2" />
        )}
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
      primaryText: "Lorem ipsum dolor sit.",
      secondaryText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      imageImport: Image1,
      scrollAnimationClass: "animation-fade-in-right",
    },
    {
      id: "2",
      orderNumber: 2,
      imagePosition: "left",
      primaryText: "Lorem ipsum dolor sit.",
      secondaryText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      imageImport: Image1,
      scrollAnimationClass: "animation-fade-in-left",
      className: "animation-delay-100",
    },
    {
      id: "3",
      orderNumber: 3,
      imagePosition: "right",
      primaryText: "Lorem ipsum dolor sit.",
      secondaryText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      imageImport: Image1,
      scrollAnimationClass: "animation-fade-in-right",
      className: "animation-delay-250",
    },
    {
      id: "4",
      orderNumber: 4,
      imagePosition: "left",
      primaryText: "Lorem ipsum dolor sit.",
      secondaryText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      imageImport: Image1,
      scrollAnimationClass: "animation-fade-in-left",
      className: "animation-delay-100",
    },
  ];

  return (
    <div className="min-h-screen p-3 pt-7 flex flex-col items-center">
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
