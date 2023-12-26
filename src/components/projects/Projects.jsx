import SectionHeader from "../SectionHeader.jsx";
import ProjectCard from "./ProjectCard.jsx";
import {PROJECTS} from "../../data.js";


export default function Projects() {
    return (
        <section id='experience' data-aos="fade-up">
            <div className='container mx-auto my-24'>
                <SectionHeader title='Projects'/>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}