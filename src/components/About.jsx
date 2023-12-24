import AboutImage from '../assets/about-image.jpg';

export default function About() {
    return (
        <section id="about">
            <div className='container flex flex-col mx-auto my-32 md:flex-row md:space-x-10'>
                <img src={AboutImage} className={'hidden w-96 md:block'}/>

                <div>
                    <h2 className='text-3xl font-bold active'>About Me</h2>
                    <div className='max-w-2xl'>
                        A second-year Computer Science student at the University of Sheffield, driven by a passion for technology and its potential to solve complex real-world problems. I'm interested in software development specifically software systems design and full-stack development.
                    </div>
                </div>
            </div>
        </section>
    );
}