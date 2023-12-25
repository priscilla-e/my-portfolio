import {useState} from "react";
import AboutImage from '../../assets/about-image.jpg';
import {IoSchoolSharp} from "react-icons/io5";
import {FaLaptopCode} from "react-icons/fa6";
import SkillList from "./SkillList.jsx";
import EducationList from "./EducationList.jsx";
import SectionHeader from "../SectionHeader.jsx";

export default function About() {
    const [activeTab, setActiveTab] = useState('skills');

    const tabStyle = (tab) => {
        // return different styles depending on active tab
        if (tab === activeTab) {
            return 'inline-flex items-center justify-center p-4 text-primary border-b-2 border-primary rounded-t-lg'
        } else {
            return 'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg group-hover:text-light group-hover:border-light group'
        }
    }

    return (
        <section id="about" data-aos="fade-up">
            <div className='container flex flex-col mx-auto md:my-24 md:flex-row md:space-x-10'>
                <img src={AboutImage} className={'hidden w-96 h-96 xl:w-[28rem] xl:h-[32rem] rounded-xl shadow-xl md:block'}/>

                <div className='flex-1'>
                    <SectionHeader title='About Me'/>

                    {/* about-me description*/}
                    <div className='-mt-8 leading-8 text-sm md:-mt-6 md:max-w-2xl'>
                        A second-year Computer Science student at the University of Sheffield, driven by a passion for
                        technology and its potential to solve complex real-world problems. I'm interested in software
                        development specifically software systems design and full-stack development.
                    </div>

                    <div>
                        {/*tab navigation*/}
                        <ul className="flex flex-wrap mt-4 text-sm font-bold text-center text-gray-500">
                            <li className="me-2 group">
                                <button type="button"
                                   className={tabStyle('skills')}
                                   aria-current="page"
                                   onClick={() => setActiveTab('skills')}
                                >
                                    <FaLaptopCode size='20' className='mr-2'/>
                                    Skills
                                </button>
                            </li>
                            <li className="me-2 group">
                                <button type="button"
                                   className={tabStyle('education')}
                                   onClick={() => setActiveTab('education')}
                                >
                                    <IoSchoolSharp size='20' className='mr-2'/>
                                    Education
                                </button>
                            </li>
                        </ul>

                        {/*tab content*/}
                        <div className="mt-6">
                            {activeTab === 'skills' && <SkillList />}
                            {activeTab === 'education' && <EducationList />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}