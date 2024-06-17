import Image1 from "/src/assets/svgs/man_idea.svg";

interface IListElementProps {
  orderNumber: number;
  imagePosition?: "left" | "right";
  primaryText: string;
  secondaryText: string;
  imageUrl: string;
}

const ListElement: React.FunctionComponent = (props: IListElementProps) => {
  const {
    orderNumber,
    imagePosition = "left",
    primaryText,
    secondaryText,
    imageUrl,
  } = props;

  return (
    <>
      <div className="flex gap-3 items-center justify-l">
        {imagePosition === "left" && <img src={Image1} className="h-full mr-2"/>}
        <div className="text-[96px] font-bold text-primarylight">{orderNumber}.</div>
        <div>
          <div className="fs-h5">{primaryText}</div>
          <div>{secondaryText}</div>
        </div>
        {imagePosition === "right" && <img src={Image1} className="h-full ml-2"/>}
      </div>
    </>
  );
};

interface IListElementObject extends IListElementProps {
  key: string;
}

const HowWillBeDone: React.FunctionComponent = () => {
  const listElements: IListElementObject[] = [
    {
      key: "1",
      orderNumber: 1,
      imagePosition: "right",
      primaryText: "Lorem ipsum dolor sit.",
      secondaryText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      imageUrl: "",
    },
    {
      key: "2",
      orderNumber: 2,
      imagePosition: "left",
      primaryText: "Lorem ipsum dolor sit.",
      secondaryText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      imageUrl: "",
    },
    {
      key: "3",
      orderNumber: 3,
      imagePosition: "right",
      primaryText: "Lorem ipsum dolor sit.",
      secondaryText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      imageUrl: "",
    },
    {
      key: "4",
      orderNumber: 4,
      imagePosition: "left",
      primaryText: "Lorem ipsum dolor sit.",
      secondaryText:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      imageUrl: "",
    },
  ];

  return (
    <div className="min-h-screen p-3 pt-2 flex flex-col items-center">
      <p className="fs-h2 mb-3 text-center text-primarylight">How will your website be done?</p>
      <div className="md:w-3/4 lg:4/6">
        {listElements.map((element) => (
          <ListElement {...element} />
        ))}
      </div>
    </div>
  );
};

export default HowWillBeDone;
