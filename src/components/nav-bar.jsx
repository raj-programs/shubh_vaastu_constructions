import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import logo from "../assets/logo.jpeg";
import "./nav-bar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="Shubh Vaastu Constructions" />
            </div>

            <h2 className="title">SHUBH VAASTU CONSTRUCTIONS</h2>

            <div className={`nav-links ${menuOpen ? "active" : ""}`}>

                <a
                    className="nav-link"
                    href="/#hero"
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </a>

                <a
                    className="nav-link"
                    href="/#about"
                    onClick={() => setMenuOpen(false)}
                >
                    About Us
                </a>

                <a
                    className="nav-link"
                    href="/#services"
                    onClick={() => setMenuOpen(false)}
                >
                    Our Services
                </a>

                <a
                    className="nav-link"
                    href="/#projects"
                    onClick={() => setMenuOpen(false)}
                >
                    Projects
                </a>

                <a
                    className="nav-link"
                    href="/#contact"
                    onClick={() => setMenuOpen(false)}
                >
                    Contact Us
                </a>

                <a
                    className="nav-link"
                    href="/#contact"
                    onClick={() => setMenuOpen(false)}
                >
                    Book a Consultation
                </a>

            </div>

            <button
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <RiCloseLargeFill /> : <RxHamburgerMenu />}
            </button>
        </nav>
    );
}

export default Navbar