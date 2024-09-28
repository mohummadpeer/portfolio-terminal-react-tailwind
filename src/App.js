import "./App.css";

import Header from "./components/Header";
import Training from "./components/Training/Training";
import Works from "./components/Works/Works";
import Fullstack from "./components/Fullstack/Fullstack";
import Devops from "./components/Devops/Devops";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="relative border-2 shadow-white shadow-md max-w-6xl my-12 mx-auto overflow-hidden text-white">
        <Header />
        <Training />
        <Works />
        <Fullstack />
        <Devops />
        <Projects />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
