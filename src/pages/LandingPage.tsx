import React from "react";

const LandingPage: React.FunctionComponent = () => {
  return (
    <div className="h-screen bg-purple-600 flex flex-col text-white p-4">
      <div className="p-3 px-2 text-yellow-400 absolute">Header</div>
      <div className="flex items-center justify-center grow flex-col text-center lg:w-1/2 auto m-auto">
        <div className="shadow-2xl rounded-full">
          <img
            className="w-full h-full"
            src="/images/castro_circle.png"
            alt="picture of the professional"
          />
        </div>
        <p className="fs-h3 text">
          Hi, I'm <strong>Vin Castro</strong>
        </p>
        <div className="flex flex-col gap-2">
          <p className="fs-h5">
            <strong>Web developer</strong> who has been building unique
            solutions for <strong>2+ years</strong>.
          </p>
          <div className="flex flex-col items-center gap-5">
            <p>
              I have always valued delivering high-quality results, transforming
              the ideas of my internal and external clients into reality.
            </p>
            <button className="uppercase font-bold rounded-md py-1 px-2 border-4 gap-2 flex">
              <p>Learn More</p>
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
