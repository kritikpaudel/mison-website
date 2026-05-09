import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        ["Home", "/"],
        ["About", "/about"],
        ["Services", "/services"],
        ["News", "/news"],
        ["Notice", "/notice"],
        ["Contact", "/contact"],
    ];

    return (
        <header className="navbar">
            <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
                <img src={logo} alt="MISON Logo" />
                <div>
                    <strong>MISON</strong>
                    <span>Microfinance Society of Nepal</span>
                </div>
            </NavLink>

            <nav className={menuOpen ? "nav-links open" : "nav-links"}>
                {navItems.map(([label, path]) => (
                    <NavLink
                        key={path}
                        to={path}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) => (isActive ? "active-link" : "")}
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>

            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>
        </header>
    );
}

export default Navbar;