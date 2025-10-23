import { useRef } from "react";
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  //store refs for each section
  const sectionsRef = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  return (
    <div className="container mx-auto max-w-7xl">
      <NavBar sectionsRef={sectionsRef} />
      <section ref={sectionsRef.home}>
        <Hero />
      </section>
      <section ref={sectionsRef.about}>
        <About />
      </section>
      {/* <section ref={sectionsRef.projects}>
        <Projects />
      </section> */}
      <Experiences />

      {/* <Testimonial /> */}
      <section ref={sectionsRef.contact}>
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
