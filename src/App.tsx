import "./App.css";
import BuildTogether from "./sections/BuildTogether";
import Footer from "./sections/Footer";
import HowWillBeDone from "./sections/HowWillBeDone";
import KnowTheDeveloper from "./sections/KnowTheDeveloper";
import ReadyToStart from "./sections/ReadyToStart";
import Welcome from "./sections/Welcome";

function App() {
  return (
    <>
      <Welcome />
      <KnowTheDeveloper />
      {/* <BuildTogether /> */}
      <HowWillBeDone />
      <ReadyToStart />
      <Footer />
    </>
  );
}

export default App;
