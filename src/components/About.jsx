import AboutImage from '../assets/about-image.jpg';
import { IoSchoolSharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";

export default function About() {
    return (
        <section id="about">
            <div className='container flex flex-col mx-auto md:my-24 md:flex-row md:space-x-10'>
                <img src={AboutImage} className={'hidden w-96 md:block'} />

                <div>
                    <div className='flex'>
                        <h2 className='text-2xl font-bold active md:text-3xl'> About Me </h2>
                        <span className='flex-1 hidden border-b border-b-darkLine md:inline-block '></span>
                    </div>
                    <div className='mt-6 leading-6 text-sm  md:max-w-2xl'>
                        A second-year Computer Science student at the University of Sheffield, driven by a passion for technology and its potential to solve complex real-world problems. I'm interested in software development specifically software systems design and full-stack development.
                    </div>


                    <div>
                        <ul className="flex flex-wrap mt-4 text-sm font-bold text-center text-gray-500">
                            <li className="me-2">
                                <a href="#about"
                                   className="inline-flex items-center justify-center p-4 text-primary border-b-2 border-primary rounded-t-lg group"
                                   aria-current="page">
                                    <FaLaptopCode size='20' className='mr-2'/>
                                    Skills
                                </a>
                            </li>
                            <li className="me-2 group">
                                <a href="#about"
                                   className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg group-hover:text-light group-hover:border-light group">
                                    <IoSchoolSharp size='20' className='mr-2'/>
                                    Education
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div className='mt-96'></div>
                </div>
            </div>
        </section>
    );
}