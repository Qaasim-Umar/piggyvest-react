import Navbar from "./sections/Navbar/Navbar";
import "./App.css";
import Landing from "./sections/Landing/Landing";
import Security from "./sections/Security/Security";
import Savings from "./sections/Savings/Savings";
import Investment from "./sections/Investment/Investment";
import Topsaver from "./sections/Topsaver/Topsaver";
import Customer from "./sections/Customer/Customer";
import Featured from "./sections/Featured/Featured";
import Footer from "./sections/Footer/Footer";
import { useState, useEffect } from "react";
function App() {
  const [scrollstate, Setscrollstate] = useState(false);

  const run = () => {
    if (window.scrollY > 0) {
      Setscrollstate(true);
    } else {
      Setscrollstate(false);
    }
  };
  useEffect(
    () => {
      window.addEventListener("scroll", run);
    },
    () => {
      window.removeEventListener("scroll", run);
    },
    [window.scrollY]
  );
  return (
    <div className="App">
      <Navbar scrollstate={scrollstate} />
      <Landing />
      <Security />
      <Savings />
      <Investment />
      <Topsaver />
      <Customer />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
