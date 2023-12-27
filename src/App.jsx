import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Header from './components/layout/Header.jsx'
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Experience from "./components/experience/Experience.jsx";
import Projects from "./components/projects/Projects.jsx";
import Footer from "./components/layout/Footer.jsx";
import useSectionObserver from "./hooks/useSectionObserver.jsx";
import SocailIcons from "./components/SocialIcons.jsx";


export default function App() {
    const navigate = useNavigate();
    const activeSection = useSectionObserver(['hero', 'about', 'experience', 'projects']);

    useEffect(() => {
        if (activeSection) {
            navigate(`#${activeSection}`)
        }
    }, [activeSection]);

    return (
        <>
            <SocailIcons />
            <Header activeSection={activeSection}/>
            <main>
                <Hero/>
                <About/>
                <Experience/>
                <Projects/>
            </main>
            <Footer/>
        </>
    )
}
