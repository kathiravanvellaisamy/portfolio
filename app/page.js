

import About from "./components/About";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import MyLatestWork from "./components/MyLatestWork";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";


export default function Home() {
  return (
   
   <>
    <NavBar />
    <HeroSection />
    <About />
    <MyLatestWork />
    <Skills />
    <Contact />
   </>
  );
}
