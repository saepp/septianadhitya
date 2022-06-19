import "./App.css";
import { Card, Footer, Header, Modal, Projects, Skills } from "./containers";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Card />
      <Modal />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
