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
import GalleryItem from "./components/GalleryItem/GalleryItem";

import businessLawImage from "./assets/business-law.png";
import partnershipLawImage from "./assets/partnership-law.png";
import realEstateLawImage from "./assets/real-estate-law.png";
import businessLaw2Image from "./assets/business-law-2.png";
import landlordDisputesImage from "./assets/landlord-disputes.png";
import elderAbuseImage from "./assets/elder-abuse.png";

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
  const galleryData = [
    { image: businessLawImage, text: "business law" },
    { image: partnershipLawImage, text: "partnership law" },
    { image: realEstateLawImage, text: "partnership law" },
    { image: businessLaw2Image, text: "business law" },
    { image: landlordDisputesImage, text: "landlord disputes" },
    { image: elderAbuseImage, text: "elder abuse" },
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
        <img src="logo-512.png" alt="" />1
        {galleryData.map((item) => {
          return <GalleryItem image={item.image} text={item.text} />;
        })}
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
