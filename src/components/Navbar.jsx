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

    const [updatesOpen, setUpdatesOpen] = useState(false);


    const navbarRef = useRef(null);

    const location = useLocation();


    /* =====================================================
       CLOSE NAVIGATION
    ===================================================== */

    const closeEverything = () => {
        setMenuOpen(false);

        setAboutOpen(false);

        setUpdatesOpen(false);
    };


    /*
      Whenever the user moves to another page,
      automatically close mobile menu/dropdowns.
    */

    useEffect(() => {
        closeEverything();
    }, [location.pathname]);


    /*
      Close dropdowns when clicking outside navbar.
    */

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target)
            ) {
                setAboutOpen(false);

                setUpdatesOpen(false);
            }
        };


        document.addEventListener(
            "mousedown",
            handleOutsideClick
        );

        document.addEventListener(
            "touchstart",
            handleOutsideClick
        );


        return () => {
            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );

            document.removeEventListener(
                "touchstart",
                handleOutsideClick
            );
        };
    }, []);


    /* =====================================================
       ACTIVE DROPDOWN STATES
    ===================================================== */

    const aboutIsActive =
        location.pathname.startsWith("/about/");


    const updatesIsActive =
        location.pathname.startsWith("/news") ||
        location.pathname.startsWith("/notice") ||
        location.pathname.startsWith("/events");


    return (
        <header
            className="navbar"
            ref={navbarRef}
        >
            {/* =================================================
                BRAND
            ================================================= */}

            <NavLink
                to="/"
                className="brand"
                onClick={closeEverything}
            >
                <img
                    src={logo}
                    alt="MiSoN Logo"
                />


                <div className="brand-text">
                    <strong>
                        Microfinance Society of Nepal
                    </strong>

                    <span>
                        लघुवित्त समाज नेपाल
                    </span>
                </div>
            </NavLink>


            {/* =================================================
                NAVIGATION
            ================================================= */}

            <nav
                className={
                    menuOpen
                        ? "nav-links open"
                        : "nav-links"
                }
            >
                {/* HOME */}

                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive
                            ? "active-link"
                            : ""
                    }
                >
                    Home
                </NavLink>


                {/* =================================================
                    ABOUT DROPDOWN
                ================================================= */}

                <div
                    className={`dropdown ${aboutOpen
                        ? "open"
                        : ""
                        }`}
                >
                    <button
                        type="button"
                        className={
                            aboutIsActive
                                ? "dropdown-main active-link"
                                : "dropdown-main"
                        }
                        onClick={() => {
                            setAboutOpen(
                                (prev) => !prev
                            );

                            setUpdatesOpen(false);
                        }}
                        aria-expanded={aboutOpen}
                        aria-haspopup="true"
                    >
                        <span>
                            About
                        </span>

                        <FontAwesomeIcon
                            icon={faChevronDown}
                        />
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


                {/* SERVICES */}

                <NavLink
                    to="/services"
                    className={({ isActive }) =>
                        isActive
                            ? "active-link"
                            : ""
                    }
                >
                    Services
                </NavLink>


                {/* =================================================
                    UPDATES DROPDOWN
                ================================================= */}

                <div
                    className={`dropdown ${updatesOpen
                        ? "open"
                        : ""
                        }`}
                >
                    <button
                        type="button"
                        className={
                            updatesIsActive
                                ? "dropdown-main active-link"
                                : "dropdown-main"
                        }
                        onClick={() => {
                            setUpdatesOpen(
                                (prev) => !prev
                            );

                            setAboutOpen(false);
                        }}
                        aria-expanded={updatesOpen}
                        aria-haspopup="true"
                    >
                        <span>
                            Updates
                        </span>

                        <FontAwesomeIcon
                            icon={faChevronDown}
                        />
                    </button>


                    <div className="dropdown-menu">
                        <NavLink to="/news">
                            News
                        </NavLink>

                        <NavLink to="/notice">
                            Notices
                        </NavLink>

                        <NavLink to="/events">
                            Events & Gallery
                        </NavLink>
                    </div>
                </div>


                {/* CONTACT */}

                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive
                            ? "active-link"
                            : ""
                    }
                >
                    Contact
                </NavLink>
            </nav>


            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
                type="button"
                className="menu-btn"
                onClick={() => {
                    setMenuOpen(
                        (prev) => !prev
                    );

                    if (menuOpen) {
                        setAboutOpen(false);

                        setUpdatesOpen(false);
                    }
                }}
                aria-label={
                    menuOpen
                        ? "Close navigation"
                        : "Open navigation"
                }
                aria-expanded={menuOpen}
            >
                <FontAwesomeIcon
                    icon={
                        menuOpen
                            ? faXmark
                            : faBars
                    }
                />
            </button>
        </header>
    );
}


export default Navbar;