import SectionHeader from "../SectionHeader.jsx";
import PortfolioProjectImage from "../../assets/portfolio-project.png";
import {FaExternalLinkAlt} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Projects() {
    return (
        <section id='experience'>
            <div className='container mx-auto my-24'>
                <SectionHeader title='Projects'/>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-10">

                    {/* project card */}
                    <div className="relative w-full h-80 group md:h-96 bg">
                        <div className="absolute bottom-0 left-0 w-full h-full">
                            <img src={PortfolioProjectImage} alt='test' className='w-full h-full rounded-lg'/>
                        </div>
                        {/*image-overlay*/}
                        <div className="absolute bg-gray-700 opacity-50 w-full h-full rounded-lg"></div>

                        {/*project tech stack*/}
                        <div className="absolute right-2 top-2 flex flex-wrap justify-end gap-2 p-2">
                            <span className="p-1 bg-light bg-opacity-20 rounded text-xs text-dark">HTML</span>
                            <span className="p-1 bg-light bg-opacity-20 rounded text-xs text-dark">TailwindCSS</span>
                            <span className="p-1 bg-light bg-opacity-20 rounded text-xs text-dark">React</span>
                            <span className="p-1 bg-light bg-opacity-20 rounded text-xs text-dark">Python(Flask)</span>
                        </div>

                        <p className='absolute left-0 bottom-0 w-full bg-primary flex items-center justify-center text-gray-900 text-xs h-14 p-2 font-bold rounded-lg'>
                            Portfolio Website
                        </p>

                        {/*project description overlay*/}
                        <div
                            className="absolute left-0 bottom-0 right-0 opacity-0 w-full h-full p-6 flex items-center justify-center bg-primary text-dark rounded-lg group-hover:opacity-100 group-hover:animate-fill-up">
                            <div className='text-center'>
                                <div className="text-sm">
                                    A personal portfolio website showcasing my skills and projects. Build with React.
                                </div>
                                <div className="mt-4 flex items-center justify-center space-x-4">
                                    {/*demoLink*/}
                                    <button type='button' className='p-2 text-2xl bg-yellow-900 rounded bg-opacity-30 shadow-md hover:bg-yellow-200 focus:outline-none transition duration-500'>
                                        <FaExternalLinkAlt/>
                                    </button>
                                    {/*githubLink*/}
                                    <button type='button' className='p-2 text-2xl bg-yellow-900 rounded bg-opacity-30 shadow-md hover:bg-yellow-200 focus:outline-none transition duration-500'>
                                        <FaGithub/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}