import "./App.css";
import { Card, Footer, Header, Modals, Projects, Skills } from "./containers";
import { Navbar } from "./components";
import ellips1 from "./assets/ellips7.png";
import ellips2 from "./assets/ellips4.png";
import ellips3 from "./assets/ellips6.png";

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
      <Card />
      <Modals />
      <div className="ellips3">
        <img src={ellips3} alt="ellips3" />
      </div>
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
