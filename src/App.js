import "./App.css";
import FeatureCard from "./components/FeatureCard/FeatureCard";
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
      <Intro />
      <FeatureCard
        featured
        heading={"98% Success Rate"}
        description={
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
        }
      />
    </div>
  );
}

export default App;
