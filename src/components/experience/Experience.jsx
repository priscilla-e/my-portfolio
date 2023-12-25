import { useState } from 'react'

export default function Experience() {
    const [activeTab, setActiveTab] = useState('nomura')

    const tabStyle = (tab) => {
        if (tab === activeTab) {
            return 'inline-flex items-center w-full h-12 p-4 uppercase border-r-2 text-primary border-r-primary active:text-primary active:bg-primary active:bg-opacity-5'
        } else {
            return 'inline-flex items-center w-full h-12 p-4 uppercase border-r-2 border-r-darkLine active:text-primary active:bg-primary active:bg-opacity-5'
        }
    }

    return (
        <section id='experience'>
            <div className='container mx-auto my-24'>
                {/*section header*/}
                <div className='flex mb-14'>
                    <h2 className='text-2xl font-bold active md:text-3xl'> Experience </h2>
                    <span className='flex-1 hidden border-b border-b-darkLine md:inline-block'></span>
                </div>

                <div className="max-w-xs">
                    <div className={tabStyle('nomura')} onClick={() => {setActiveTab('nomura')}}>
                        Nomura
                    </div>
                    <div className={tabStyle('sheffield')} onClick={() => {setActiveTab('sheffield')}}>
                        The University of Sheffield
                    </div>
                    <div className={tabStyle('macroware')} onClick={() => {setActiveTab('macroware')}}>
                        Macroware Inc.
                    </div>
                </div>


            </div>
        </section>
    )
}
