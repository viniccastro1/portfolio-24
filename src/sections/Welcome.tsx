import React, { useEffect, useState } from "react";
const NAME = {
  NICKNAME: "Vini",
  FULLNAME: "Vinicius de Castro",
};

const Welcome: React.FunctionComponent = () => {
  const [displayedName, setDisplayedName] = useState<string>(NAME.NICKNAME);
  const [isNameHovered, setIsNameHovered] = useState<boolean>(false);
  const [textAnimation, setTextAnimation] = useState<
    null | "toFullName" | "toNickname"
  >("toNickname");

  const handleClick = () => {
    const element = document.getElementById("know-the-dev-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const onNameHover = (mouseEventType: "leave" | "enter") => {
    if (mouseEventType === "leave") {
      setTextAnimation("toNickname");
      setIsNameHovered(false);
    } else if (mouseEventType === "enter") {
      setTextAnimation("toFullName");
      setIsNameHovered(true);
    }
    return;
  };

  // Animation to change my name when hovering
  // TODO: By the way, this crap is probably not very performance optmized. Improve it in the future.
  useEffect(() => {
    if (textAnimation === null) return;

    const intervalId = setInterval(() => {
      if (textAnimation === "toFullName") {
        // in case the full name is already written, stops it.
        if (
          displayedName === NAME.FULLNAME ||
          displayedName.length >= NAME.FULLNAME.length
        ) {
          setDisplayedName(NAME.FULLNAME);
          setTextAnimation(null);
          return;
        }
        setDisplayedName((prev) => {
          const characterToAdd: string = NAME.FULLNAME.replace(prev, "")[0];
          return prev + characterToAdd;
        });
        // in case the NAME.NICKNAME is already written, stops it.
      } else if (textAnimation === "toNickname") {
        if (
          displayedName === NAME.NICKNAME ||
          displayedName.length <= NAME.NICKNAME.length
        ) {
          setDisplayedName(NAME.NICKNAME);
          setTextAnimation(null);
          return;
        }
        setDisplayedName((prev) => {
          return prev.slice(0, prev.length - 2);
        });
      }
    }, 50);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [displayedName, textAnimation]);

  return (
    <div className="min-h-screen bg-primary flex flex-col text-white p-4 background-landing">
      <div className="p-3 px-2 text-yellow-400 absolute">Header</div>
      <div className="flex items-center justify-center grow flex-col text-center max-w-96 auto m-auto">
        <div className="shadow-2xl rounded-full mb-4 animation-fade-in animation-fade-in-right">
          <img
            className="w-full h-full shadow-2xl rounded-full"
            src="/src/assets/images/castro_circle.png"
            alt="picture of the professional"
          />
        </div>
        <div
          className="relative"
          onMouseEnter={() => onNameHover("enter")}
          onMouseLeave={() => onNameHover("leave")}
        >
          <p className="fs-h3 text animation-fade-in-left text-shadow-md">
            Hi, I'm <span className="text-secondary">{displayedName}</span>.
          </p>
          {!isNameHovered && !textAnimation && (
            <span className="absolute top-1 right-0 animation-fade-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="fs-h5 animation-fade-in-right text-shadow-md">
            <strong className="text-secondary">Web developer</strong> who has
            been building unique solutions for <strong>2+ years</strong>.
          </p>
          <div className="flex flex-col items-center gap-5 max-w-69">
            <p className="animation-fade-in-left  text-shadow-md">
              I have always valued delivering high-quality results, transforming
              the ideas of my internal and external clients into reality.
            </p>
            <button
              onClick={handleClick}
              className="shadow-2xl hover:text-secondary hover:border-secondary animation-fade-in-right-float transition-all uppercase font-bold rounded-md py-1 px-2 border-4 gap-2 flex items-center "
            >
              <p>Learn More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
