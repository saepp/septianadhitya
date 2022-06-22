import "./App.css";
import { Card, Footer, Header, Modals, Projects, Skills } from "./containers";
import { Navbar } from "./components";
import ellips1 from "./assets/ellips7.png";
import ellips2 from "./assets/ellips4.png";
import ellips3 from "./assets/ellips6.png";

import ellips4 from "./assets/ellips5.png";

function App() {
  return (
    <div className="App">
      <div className="ellips1">
        <img src={ellips1} alt="ellips1" />
      </div>
      <Navbar />
      <Header />
      <div className="ellips2">
        <img src={ellips2} alt="ellips2" />
      </div>
      <Projects />
      <div className="ellips4">
        <img src={ellips4} alt="" />
      </div>
      <Card />
      <Modals />
      <div className="ellips3">
        <img src={ellips3} alt="ellips3" />
      </div>
      <Skills />
      <Footer />
      <div className="circle1" />
      <div className="circle2" />
      <div className="circle3" />
    </div>
  );
}

export default App;
