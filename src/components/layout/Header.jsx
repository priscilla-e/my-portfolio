import PropTypes from "prop-types";
export default function Header({activeSection}) {

    const menuItems = [
        {name: 'Home', 'link': '#'},
        {name: 'About Me', 'link': '#about'},
        {name: 'Experience', 'link': '#experience'},
        {name: 'Projects', 'link': '#projects'},
    ]

    const isActive = (link, name) => {
        const section = '#'+activeSection;
        if (link === section) {
            return 'active'
        }
        else if (name === 'Home' && section === '#hero') {
            return 'active'
        }
    }

    return (
        <header id="#header"
                className="hidden sticky top-0 !z-10 items-center py-4 px-10 shadow-lg bg-dark bg-opacity-90 md:flex"
                data-aos="fade-down">
            <div className="space-x-5 text-3xl tracking-tighter md:flex-1">
                <span className="font-extrabold text-light">Priscilla Emasoga</span>
                {/*<span>Emasoga</span>*/}
            </div>

            <nav>
                {/* Desktop navigation menu */}
                <ul className="flex space-x-10 text-sm font-bold">
                    {menuItems.map((item, index) => (
                        <li key={index}
                            className={`hover:text-light ${isActive(item.link, item.name)}`}>
                            <a href={`${item.link}`}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
    activeSection: PropTypes.string.isRequired,
}