import Header from './components/Header.jsx'
import Hero from "./components/Hero.jsx";
import About from "./components/about/About.jsx";

export default function App() {

  return (
    <>
        <Header />
        <main>
            <Hero />
            <About />
        </main>
    </>
  )
}
