import {EDUCATION} from "../../data.js";

export default function EducationList() {
    return (
        <div className='space-y-6'>
            {EDUCATION.map((education, index) => (
                <div key={index}>
                    <p className='text-sm font-bold text-light'>{education.school}</p>
                    <span className='text-xs font-light'>{education.degree}</span> - <span
                    className='text-xs font-light text-primary'>{education.grade}</span>
                </div>
            ))}
        </div>
    )
}