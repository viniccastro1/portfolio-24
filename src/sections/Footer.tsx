const Footer: React.FunctionComponent = () => {
  return (
    <footer className="flex flex-col pt-6 pb-5 gap-6 p-3 text-center">
      <div className="flex justify-between md:justify-center gap-2 md:gap-12 flex-wrap text-left">
        <div>
          <strong>Contact</strong>
          <p>viniccastro1@gmail.com</p>
          <p>linkedin.com/example</p>
        </div>
        <div>
          <strong>Navigation</strong>
          <p>Section 1</p>
          <p>Section 2</p>
          <p>Section 3</p>
        </div>
        <div>
          <strong>Language</strong>
          <p>Portuguese</p>
          <p>English</p>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <p>"Lorem ipsum dolor sit amet consectetur."</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className="font-bold mt-3">© Lorem ipsum dolor.</p>
      </div>
    </footer>
  );
};

export default Footer;
