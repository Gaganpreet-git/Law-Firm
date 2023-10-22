import "./App.css";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Section from "./components/Section/Section";

function App() {
  const featureCardsData = [
    {
      heading: "98% Success Rate",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
      Featured: false,
    },
    {
      heading: "100% Success Rate",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
      Featured: true,
    },
    {
      heading: "100% Success Rate",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
      Featured: false,
    },
  ];
  return (
    <div className="App">
      <div className="hero-wrapper">
        <Header />
        <Hero />
      </div>
      <Intro />
      <Section heading={"Why Choose us?"}>
        {featureCardsData.map((card) => {
          return (
            <FeatureCard
              heading={card.heading}
              description={card.description}
              featured={card.featured}
            />
          );
        })}
      </Section>
    </div>
  );
}

export default App;
