import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="navbar">
            <NavLink to="/" className="brand" onClick={closeMenu}>
                <img src={logo} alt="MISON Logo" />
                <div>
                    <strong>Microfinance Society of Nepal</strong>
                    <span>लघुवित्त समाज नेपाल</span>
                </div>
            </NavLink>

            <nav className={menuOpen ? "nav-links open" : "nav-links"}>
                <NavLink to="/" onClick={closeMenu}>
                    Home
                </NavLink>

                <div className="dropdown">
                    <NavLink
                        to="/about"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? "dropdown-main active-link" : "dropdown-main"
                        }
                    >
                        About
                        <FontAwesomeIcon icon={faChevronDown} />
                    </NavLink>

                    <div className="dropdown-menu">
                        <NavLink to="/about/mission-vision-goals" onClick={closeMenu}>
                            Mission, Vision and Goals
                        </NavLink>
                        <NavLink to="/about/chairperson-message" onClick={closeMenu}>
                            Chairperson Message
                        </NavLink>
                        <NavLink to="/about/executive-committee" onClick={closeMenu}>
                            Executive Committee
                        </NavLink>
                        <NavLink to="/about/membership" onClick={closeMenu}>
                            Membership
                        </NavLink>
                    </div>
                </div>

                <NavLink to="/services" onClick={closeMenu}>
                    Services
                </NavLink>
                <NavLink to="/news" onClick={closeMenu}>
                    News
                </NavLink>
                <NavLink to="/notice" onClick={closeMenu}>
                    Notice
                </NavLink>
                <NavLink to="/contact" onClick={closeMenu}>
                    Contact
                </NavLink>
            </nav>

            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>
        </header>
    );
}

export default Navbar;