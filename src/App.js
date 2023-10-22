import "./App.css";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Section from "./components/Section/Section";
import Social from "./components/Social/Social";

function App() {
  const featureCardsData = [
    {
      heading: "98% Success Rate",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
      featured: false,
    },
    {
      heading: "100% Success Rate",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
      featured: true,
    },
    {
      heading: "100% Success Rate",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.",
      featured: false,
    },
  ];

  // const galleryData = [
  //   "../src/components/assets/business-law.png",
  //   "./src/components/assets/partnership-law.png",
  //   "./src/components/assets/real-estate-law.png",
  // ];
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

      {/* <Section heading={"Area of Practices"}>
        <img src="logo-512.png" alt="" />1
        {galleryData.map((item) => {
          return <img src={item} alt={item} />;
        })}
      </Section> */}
      <Footer />
    </div>
  );
}

export default App;
