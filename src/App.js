import "./App.css";
import { Card, Footer, Header, Modals, Projects, Skills } from "./containers";
import { Navbar } from "./components";
import ellips1 from "./assets/ellips7.png";
import ellips2 from "./assets/ellips4.png";

function App() {
  return (
    <div className="App">
      <div className="ellips1">
        <img src={ellips1} alt="ellips1" />
      </div>
      <Navbar />
      <Header />
      <Projects />
      <Card />
      <div className="ellips2">
        <img src={ellips2} alt="ellips2" />
      </div>
      <Modals />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
