import Header from './components/Header.jsx'
import Hero from "./components/Hero.jsx";
import About from "./components/about/About.jsx";
import Experience from "./components/Experience.jsx";

export default function App() {

  return (
    <>
        <Header />
        <main>
            <Hero />
            <About />
            <Experience />
        </main>
    </>
  )
}
