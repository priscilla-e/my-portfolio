import {useState} from 'react'
import SectionHeader from "../SectionHeader.jsx";
import {EXPERIENCES} from '../../data.js'
import ExperienceDetail from "./ExperienceDetail.jsx";
import PropTypes from "prop-types";

const Tab = ({id, label, isActive, onChange}) => {
    return (
        <button
            id={id}
            type='button'
            className={`inline-flex items-center w-full h-12 p-4 uppercase border-r-2  text-sm  ${isActive ? 'text-primary border-r-primary' : 'border-r-darkLine active:text-primary active:bg-primary active:bg-opacity-5'}`}
            onClick={() => onChange(id)}>
            {label}
        </button>
    )
}

Tab.propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}


export default function Experience() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <section id='experience' data-aos="fade-up">
            <div className='container mx-auto my-24'>
                <SectionHeader title='Experience'/>

                <div className="flex flex-col md:flex-row">
                    {/* vertical tabs for company names */}
                    <div className="max-w-xs">
                        {EXPERIENCES.map((experience, index) => (
                            <Tab
                                key={index}
                                id={index}
                                label={experience.company}
                                isActive={index === activeTab}
                                onChange={(id) => setActiveTab(id)}
                            />
                        ))}
                    </div>

                    {/* tab content */}
                    <ExperienceDetail experience={EXPERIENCES[activeTab]}/>
                </div>
            </div>
        </section>
    )
}










