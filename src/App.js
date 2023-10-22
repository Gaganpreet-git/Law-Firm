import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";

function App() {
  return (
    <div className="App">
      <div className="hero-wrapper">
        <Header />
        <Hero />
      </div>
      <Card>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.Amet minim
        mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
        officia consequatduis enim velit mollit Exer. Amet minim mollit non
        deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequatduis enim velit mollit Exer.Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis
        enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit
        Exer.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
        mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
        officia consequatduis enim velit mollit Exer.Amet minim mollit non
        deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
        consequatduis enim velit mollit Exer. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis
        enim velit mollit Exer.Amet minim mollit non deserunt ullamco est sit
        aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit
        Exer.
      </Card>
      <Intro />
    </div>
  );
}

export default App;
