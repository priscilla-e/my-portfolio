import PropTypes from 'prop-types';

export default function ExperienceDetail({experience}) {
    return (
        <div className="flex-1 mt-6 md:mt-0 md:ml-10 md:min-h-96">
            <p className="font-bold space-x-2 md:text-2xl">
                <span className="">{experience.position}</span>
                <span>@</span>
                <span className="text-primary">{experience.company}</span>
            </p>
            <p className="mt-2 font-thin uppercase text-sm md:mt-4">
                <span>{experience.startDate}</span>
                <span className="mx-2">-</span>
                <span>{experience.endDate}</span>
            </p>
            <ul className='w-full mt-10 text-sm space-y-6 md:max-w-2xl'>
                {experience.description.map((desc, index) => (
                    <li key={index}
                        className='styled-li'
                        data-aos="fade-up"
                        data-aos-duration={`${1200 + (index * 100)}`}
                        data-aos-easing="ease-in-out"
                    >
                        {desc}
                    </li>
                ))}
            </ul>
        </div>
    )
}

ExperienceDetail.propTypes = {
    experience: PropTypes.object.isRequired
}