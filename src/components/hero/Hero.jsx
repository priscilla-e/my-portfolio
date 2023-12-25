import HeroImage from '../../assets/hero-image.png';
import {MdEmail} from "react-icons/md";
import {TypeAnimation} from "react-type-animation";

export default function Hero() {
    return (
        <section id="hero">
            <div
                className='container mx-auto flex flex-col items-center h-screen mt-10 md:h-[90vh] md:flex-row-reverse md:justify-between'>
                {/*image*/}
                <img src={HeroImage} alt="Priscilla Emasoga" className="shadow-filter w-1/2 min-w-60 md:min-w-80 max-w-lg"
                     data-aos="fade-left"/>

                {/*hero text*/}
                <div className='mt-10 space-y-6 text-center md:text-left md:m-0'>
                    <div className='flex items-center justify-center space-x-4 md:justify-start mb-6'
                         data-aos="fade-up"
                    >
                        <span
                            className='inline-block bg-primary text-xs text-dark px-4 py-2 rounded font-semibold focus:outline-none'>Full-Stack Developer</span>
                        <span
                            className='inline-block bg-primary text-xs text-dark px-4 py-2 rounded font-semibold focus:outline-none'>UX/UI Designer</span>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="1200">
                        <TypeAnimation
                            sequence={[
                                'Hi, I\'m Priscilla',
                            ]}
                            speed={20}
                            className='text-2xl font-bold md:text-3xl xl:text-5xl'
                        />
                    </div>
                    <p className='max-w-md' data-aos="fade-up" data-aos-duration="1400">
                        A Software Engineer and 2nd-year computer science student
                        at the University of Sheffield.
                    </p>
                    <a href='#'
                       className='inline-block text-primary border border-primary px-4 py-2 rounded font-semibold shadow shadow-primary duration-150 hover:scale-105 focus:outline-none'
                       data-aos="fade-up"
                       data-aos-duration="1600"
                    >
                        <MdEmail size='20' className='inline mr-2'/>
                        Let's Chat
                    </a>
                </div>
            </div>
        </section>
    );
}