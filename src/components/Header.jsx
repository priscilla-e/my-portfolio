export default function Header() {
    return (
        <header id="#header" className="flex items-center justify-center py-6 px-10 shadow-lg">
            <div className="space-x-5 text-3xl tracking-tighter md:flex-1">
                <span className="font-extrabold text-light">Priscilla</span>
                <span>Emasoga</span>
            </div>

            <nav>
                {/* Desktop navigation menu */}
                <ul className="hidden space-x-10 text-sm font-bold md:flex">
                    <li className="active hover:text-light"><a href="#">About Me</a></li>
                    <li className="hover:text-light"><a href="#">Experience</a></li>
                    <li className="hover:text-light"><a href="#">Projects</a></li>
                    <li className="hover:text-light"><a href="#">My Blog</a></li>
                </ul>
            </nav>
        </header>
    )
}