import {SKILLS} from '../../data.js'

export default function SkillsList() {
    return (
        <ul className={'grid grid-cols-2 gap-y-4 max-w-md text-xs mt-4'}>
            {SKILLS.map((skill, index) => (
                <li className='styled-li' key={index}>{skill}</li>
            ))}
        </ul>
    )
}