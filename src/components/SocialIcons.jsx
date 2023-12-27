import {MdEmail} from "react-icons/md";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";

export default function SocialIcons(){
    return(
        <div className="fixed right-0 bottom-0 left-0 bg-darkLine !z-40 md:left-auto md:bottom-auto md:top-1/2 md:-translate-y-1/2">
            <div className="flex items-center justify-center p-4 space-x-4 text-3xl md:inline-flex md:flex-col md:space-x-0 md:space-y-4">
                <a href="mailto:priscillaemasoga[at]gmail[dot]com">
                    <MdEmail/>
                </a>
                <a href='https://github.com/priscilla-e' target='_blank' rel='noreferrer'>
                    <FaGithub/>
                </a>
                <a href='https://www.linkedin.com/in/priscillaemasoga/' target='_blank' rel='noreferrer'>
                    <FaLinkedin/>
                </a>
                <a href='https://www.instagram.com/cilla.dev/' target='_blank' rel='noreferrer'>
                    <RiInstagramFill/>
                </a>

            </div>
        </div>
    )
}