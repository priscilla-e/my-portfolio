import PropTypes from "prop-types";
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";

export default function ProjectCard({project}) {
    return (
        <div className="relative w-full h-80 group shadow-lg md:h-96" data-aos='zoom-in' data-aos-duration="1500">
            {/*project image*/}
            <div className="absolute bottom-0 left-0 w-full h-full">
                <img src={project.thumbnail} alt='test' className='w-full h-full rounded-lg'/>
            </div>
            {/*image-overlay*/}
            <div className="absolute bg-gray-700 opacity-30 w-full h-full rounded-lg"></div>

            {/*project tech stack badges*/}
            <div className="absolute right-2 top-2 flex flex-wrap justify-end gap-2 p-2">
                {project.techStack.map((tech, index) => (
                    <span key={index} className="p-1 bg-light bg-opacity-70 rounded text-xs text-dark">{tech}</span>
                ))}
            </div>

            {/*project name*/}
            <p className='absolute left-0 bottom-0 w-full bg-primary flex items-center justify-center text-center text-sm text-gray-900 h-16 tracking-tight leading-6 p-4 font-bold rounded-lg md:text-base'>
                {project.name}
            </p>

            {/*project description overlay*/}
            <div
                className="absolute left-0 bottom-0 right-0 opacity-0 w-full h-full p-6 flex items-center justify-center bg-primary text-dark rounded-lg group-hover:animate-fill-up">
                <div>
                    <p className="text-center text-sm text-gray-900 h-16 tracking-tight leading-6 p-4 font-bold rounded-lg md:text-base">
                        {project.name}
                    </p>
                    <div className="text-sm text-center">
                        {project.description}
                    </div>
                    <div className="mt-6 flex items-center justify-center space-x-4">
                        {/* demoLink */}
                        {project.webLink &&
                            <a href={project.webLink} target='_blank' rel='noreferrer'>
                                <button
                                    type='button'
                                    className='p-2 text-2xl bg-yellow-900 rounded bg-opacity-30 shadow-md hover:bg-yellow-200 focus:outline-none transition duration-500'
                                >
                                    <FaExternalLinkAlt/>
                                </button>
                            </a>
                        }

                        {/* githubLink */}
                        {project.githubLink &&
                            <a href={project.githubLink} target='_blank' rel='noreferrer'>
                                <button
                                    type='button'
                                    className='p-2 text-2xl bg-yellow-900 rounded bg-opacity-30 shadow-md hover:bg-yellow-200 focus:outline-none transition duration-500'
                                >
                                    <FaGithub/>
                                </button>
                            </a>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired
}

