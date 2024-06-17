import "./App.css";
import BuildTogether from "./sections/BuildTogether";
import Footer from "./sections/Footer";
import HowWillBeDone from "./sections/HowWillBeDone";
import ReadyToStart from "./sections/ReadyToStart";
import Welcome from "./sections/Welcome";

function App() {
  return (
    <>
      <Welcome />
      <BuildTogether />
      <HowWillBeDone />
      <ReadyToStart />
      <Footer />
    </>
  );
}

export default App;
