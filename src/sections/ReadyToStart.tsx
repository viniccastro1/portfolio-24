import ScrollAnimation from "react-animate-on-scroll";

const ReadyToStart: React.FunctionComponent = () => {
  return (
    <div className="flex min-h-screen w-full text-white">
      <div className="bg-blue-400 w-2/5 hidden lg:flex overflow-hidden">
        <img
          className="animation-expand-light w-full h-full shadow-2xl object-cover"
          src="/src/assets/images/castro.jpg"
          alt="picture of the professional"
        />
      </div>
      <div className="flex flex-col bg-primarylight w-full lg:w-3/5 lg:pl-10 sm:p-6 sm:pt-12 ">
        <ScrollAnimation animateIn="animation-fade-in" animateOnce>
          <p className="fs-h2 mb-6">
            Ready to start your{" "}
            <ScrollAnimation
              animateIn="animation-fade-in"
              animateOnce
              delay={500}
            >
              <span className="text-tertiary">new project</span>?
            </ScrollAnimation>
          </p>
          <ScrollAnimation
            animateIn="animation-fade-in"
            animateOnce
            delay={850}
          >
            <p className="mb-1">
              Then, lets get in touch and we can schedule a call:
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animation-fade-in"
            animateOnce
            delay={1050}
          >
            <div className="flex items-center gap-1 text-tertiary hover:opacity-75 cursor-pointer transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <p className="underline">viniccastro1@gmail.com</p>
            </div>
            <div className="flex items-center gap-1  text-tertiary hover:opacity-75 cursor-pointer transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-linkedin big size-[28px] ml-[2px] mr-[2px]"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              <p className="underline">linkedin.com/in/vcastrodev</p>
            </div>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default ReadyToStart;
