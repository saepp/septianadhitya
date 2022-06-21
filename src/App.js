import "./App.css";
import { Card, Footer, Header, Modals, Projects, Skills } from "./containers";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Card />
      <Modals />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
