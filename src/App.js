import "./App.css";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Newsletter from "./components/Newsletter/Newsletter";
import PersonCard from "./components/PersonCard/PersonCard";
import Section from "./components/Section/Section";

import danielDefImage from "./assets/daniel-def.png";
import sanfoleImage from "./assets/sanfole.png";
import cesforilaImage from "./assets/sanfole.png";
import colleenImage from "./assets/colleen.png";
import haldoneImage from "./assets/haldone.png";
import nikJeoImage from "./assets/nik-jeo.png";
import Gallery from "./components/Gallery/Gallery";

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
  const teamData = [
    {
      image: danielDefImage,
      name: "Danial Def",
      detail: "301 Cases",
      featured: false,
    },
    {
      image: sanfoleImage,
      name: "Sanfole",
      detail: "850 Cases",
      featured: true,
    },
    {
      image: cesforilaImage,
      name: "Cesforila",
      detail: "470 Cases",
      featured: false,
    },
    {
      image: colleenImage,
      name: "Colleen",
      detail: "180 Cases",
      featured: false,
    },
    {
      image: haldoneImage,
      name: "Haldone",
      detail: "212 Cases",
      featured: false,
    },
    {
      image: nikJeoImage,
      name: "Nik Jeo",
      detail: "350 Cases",
      featured: false,
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

      <Section heading={"Area of Practices"}>
        <Gallery />
      </Section>
      <Section heading={"Our Team"}>
        {teamData.map((person) => {
          return (
            <PersonCard
              image={person.image}
              name={person.name}
              detail={person.detail}
              featured={person.featured}
            />
          );
        })}
      </Section>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
