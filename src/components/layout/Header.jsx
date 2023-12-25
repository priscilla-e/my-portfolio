export default function Header() {
    return (
        <header id="#header" className="hidden sticky top-0 !z-10 items-center py-4 px-10 shadow-lg md:flex" data-aos="fade-down">
            <div className="space-x-5 text-3xl tracking-tighter md:flex-1">
                <span className="font-extrabold text-light">Priscilla Emasoga</span>
                {/*<span>Emasoga</span>*/}
            </div>

            <nav>
                {/* Desktop navigation menu */}
                <ul className="flex space-x-10 text-sm font-bold">
                    <li className="active hover:text-light"><a href='#'>Home</a></li>
                    <li className="hover:text-light"><a href="#about">About Me</a></li>
                    <li className="hover:text-light"><a href="#experience">Experience</a></li>
                    <li className="hover:text-light"><a href="#projects">Projects</a></li>
                    <li className="hover:text-light"><a href="#">My Blog</a></li>
                </ul>
            </nav>
        </header>
    )
}