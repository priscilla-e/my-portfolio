import HeroImage from '../assets/hero-image.png';
import {MdEmail} from "react-icons/md";

export default function Hero() {
    return (
        <section id="hero">
            <div className='container mx-auto my-10 flex flex-col items-center justify-center h-screen md:h-[90vh] md:flex-row-reverse md:justify-between md:my-0 md:space-x-24"'>
                {/*image*/}
                <img src={HeroImage} alt="Priscilla Emasoga" className="h-1/2 md:h-auto"/>

                {/*hero text*/}
                <div className='mt-10 space-y-6 text-center md:text-left md:m-0'>
                    <div className='flex items-center justify-center space-x-4 md:justify-start'>
                        <span
                            className='inline-block bg-primary text-xs text-dark px-4 py-2 rounded font-semibold focus:outline-none'>Full-Stack Developer</span>
                        <span
                            className='inline-block bg-primary text-xs text-dark px-4 py-2 rounded font-semibold focus:outline-none'>UX/UI Designer</span>
                    </div>
                    <h2 className='text-2xl font-bold'>Hi, I'm Priscilla</h2>
                    <p className='max-w-md'>
                        A Software Engineer and 2nd-year computer science student
                        at the University of Sheffield.
                    </p>
                    <a href='#'
                       className='inline-block text-primary border border-primary px-4 py-2 rounded font-semibold shadow shadow-primary duration-150 hover:scale-105 focus:outline-none'>
                        <MdEmail size='20' className='inline mr-2'/>
                        Let's Chat
                    </a>
                </div>
            </div>
        </section>
    );
}