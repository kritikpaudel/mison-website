import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faXmark,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    const navbarRef = useRef(null);
    const location = useLocation();

    const closeEverything = () => {
        setMenuOpen(false);
        setAboutOpen(false);
    };

    /*
      Whenever user moves to another page,
      automatically close mobile menu/dropdowns.
    */
    useEffect(() => {
        closeEverything();
    }, [location.pathname]);

    /*
      Close dropdown if user clicks outside navbar.
    */
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target)
            ) {
                setAboutOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        document.addEventListener("touchstart", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("touchstart", handleOutsideClick);
        };
    }, []);

    const aboutIsActive = location.pathname.startsWith("/about/");

    return (
        <header className="navbar" ref={navbarRef}>
            <NavLink
                to="/"
                className="brand"
                onClick={closeEverything}
            >
                <img src={logo} alt="MISON Logo" />

                <div className="brand-text">
                    <strong>Microfinance Society of Nepal</strong>
                    <span>लघुवित्त समाज नेपाल</span>
                </div>
            </NavLink>

            <nav className={menuOpen ? "nav-links open" : "nav-links"}>
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Home
                </NavLink>

                <div
                    className={`dropdown ${aboutOpen ? "open" : ""}`}
                >
                    <button
                        type="button"
                        className={
                            aboutIsActive
                                ? "dropdown-main active-link"
                                : "dropdown-main"
                        }
                        onClick={() => setAboutOpen((prev) => !prev)}
                        aria-expanded={aboutOpen}
                        aria-haspopup="true"
                    >
                        <span>About</span>

                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>

                    <div className="dropdown-menu">
                        <NavLink to="/about/mission-vision-goals">
                            Mission, Vision and Goals
                        </NavLink>

                        <NavLink to="/about/chairperson-message">
                            Chairperson Message
                        </NavLink>

                        <NavLink to="/about/executive-committee">
                            Executive Committee
                        </NavLink>

                        <NavLink to="/about/membership">
                            Membership
                        </NavLink>
                    </div>
                </div>

                <NavLink
                    to="/services"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Services
                </NavLink>

                <NavLink
                    to="/news"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    News
                </NavLink>

                <NavLink
                    to="/notice"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Notice
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }
                >
                    Contact
                </NavLink>
            </nav>

            <button
                type="button"
                className="menu-btn"
                onClick={() => {
                    setMenuOpen((prev) => !prev);

                    if (menuOpen) {
                        setAboutOpen(false);
                    }
                }}
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={menuOpen}
            >
                <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>
        </header>
    );
}

export default Navbar;