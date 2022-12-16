import { Fragment } from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import Journey from "./Journey";
import Successes from "./Successes";
import Support from "./Support";

function App() {
  return (
    <Fragment>
      <Header />
      <h1>Company website</h1>
      <Carousel />
      <Journey />
      <Successes />
      <Support />
      <Footer />
    </Fragment>
  );
}

export default App;
