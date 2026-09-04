import Hero from "./section/Hero";
import ShowcaseSection from "./section/showcaseSection";
import NavBar from "./component/NavBar";
import LogoSection from "./component/LogoSection";
import FeatureCards from "./section/FeatureCards";
import ExperienceSection from "./section/ExperienceSection";
import Techstack from "./section/Techstack";
import Achievements from "./section/Achievements";
import Contact from "./section/Contact.jsx";
import Footer from "./section/Footer.jsx";
import About from "./section/About";

function App() {
  return (
    <>
      <NavBar />

      <Hero />
      <ShowcaseSection />
       <LogoSection /> 
      <FeatureCards />
      <ExperienceSection />
      <Techstack />
      <Achievements />
      <Contact />
      <Footer />
      <About />
    </>
  );
}

export default App;