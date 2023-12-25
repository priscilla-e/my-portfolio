import { useState } from 'react'
import SectionHeader from "../SectionHeader.jsx";
import {EXPERIENCES} from '../../data.js'

export default function Experience() {
    const [activeTab, setActiveTab] = useState(0)

    const tabStyle = (tab) => {
        if (tab === activeTab) {
            return 'inline-flex items-center  w-full h-12 p-4 uppercase border-r-2 text-sm text-primary border-r-primary active:text-primary active:bg-primary active:bg-opacity-5'
        } else {
            return 'inline-flex items-center w-full h-12 p-4 uppercase border-r-2  text-sm border-r-darkLine active:text-primary active:bg-primary active:bg-opacity-5'
        }
    }

    return (
        <section id='experience'>
            <div className='container mx-auto my-24'>
                <SectionHeader title='Experience'/>

                <div className="flex flex-col md:flex-row">

                    {/*tabs*/}
                    <div className="max-w-xs">
                        {EXPERIENCES.map((experience, index) => (
                            <button key={index} type='button' className={tabStyle(index)} onClick={() => {setActiveTab(index)}}>
                                {experience.company}
                            </button>
                        ))}
                    </div>

                    {/*tab content*/}
                    <div className="flex-1 mt-6 md:mt-0 md:ml-10">
                        <p className="font-bold space-x-2 md:text-2xl">
                            <span className="">Technology Placement @</span>
                            <span className="text-primary">Nomura</span>
                        </p>
                        <p className="mt-2 font-thin uppercase text-sm md:mt-4">
                            <span>jul 2023</span>
                            <span className="mx-2">-</span>
                            <span>present</span>
                        </p>
                        <ul className='w-full mt-10 text-sm space-y-6 md:max-w-2xl'>
                            {EXPERIENCES[activeTab].description.map((desc, index) => (
                                <li key={index} className='styled-li'>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
