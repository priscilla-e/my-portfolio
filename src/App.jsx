import {BrowserRouter } from "react-router-dom";
import Header from './components/layout/Header.jsx'
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Experience from "./components/experience/Experience.jsx";
import Projects from "./components/projects/Projects.jsx";
import Footer from "./components/layout/Footer.jsx";

export default function App() {

  return (
    <BrowserRouter>
        <Header />
        <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
        </main>
        <Footer />
    </BrowserRouter>
  )
}
