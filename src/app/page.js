import Header from "./components/Header";
import "./globals.css";
import Career from "./home/Career";
import About from "./home/About";
import Services from "./home/Service";
import Contact from "./home/Contact";
import Banner from "./home/Banner";
import Client from "./home/Client";
import Project from "./home/Project";



export default function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <About />
      <Services />
      <Client/>
      <Project/>
      <Career />
      <Contact />
    </>
  );
}
