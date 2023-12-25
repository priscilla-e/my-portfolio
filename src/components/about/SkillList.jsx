import {SKILLS} from '../../data.js'

export default function SkillList() {
    return (
        <ul className={'grid grid-cols-2 gap-y-4 max-w-md text-xs'}>
            {SKILLS.map((skill, index) => (
                <li className='styled-li' key={index}
                    data-aos="fade-up"
                    data-aos-duration={`${1200 + (index * 100)}`}
                    data-aos-easing="ease-in-out"
                >
                    {skill}
                </li>
            ))}
        </ul>
    )
}