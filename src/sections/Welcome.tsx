import React from "react";

const Welcome: React.FunctionComponent = () => {
  const handleClick = () => {
    const element = document.getElementById("know-the-dev-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

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
        <p className="fs-h3 text animation-fade-in-left text-shadow-md">
          Hi, I'm <span className="text-secondary">Vini</span>.
        </p>
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
