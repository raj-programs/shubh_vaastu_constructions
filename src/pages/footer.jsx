import Logo from "../assets/logo.jpeg"
import { IoLocationOutline } from "react-icons/io5"
import { FaInstagram } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { IoCallOutline } from "react-icons/io5"
import { MdOutlineEmail } from "react-icons/md"
import "./footer.css"

function Footer() {
    return (
        <>
            <footer data-aos="fade-up">
                <div className="img">
                    <img src={Logo} alt="Shubh Vaastu Constructions" className="logo" />
                    <h4>Building Spaces. Creating Experiences.</h4>
                </div>

                <div className="links">
                    <h5>Quick Links</h5>
                    <a href="/#about">About</a>
                    <a href="/#services">Services</a>
                    <a href="/#projects">Projects</a>
                    <a href="/#contact">Contact</a>
                </div>

                <div className="links">
                    <h5>Contact Details</h5>

                    <div className="contact-row">
                        <span className="contact-icon"><IoCallOutline /></span>
                        <span>+91 74474 38987</span>
                    </div>

                    <div className="contact-row">
                        <span className="contact-icon"><MdOutlineEmail /></span>
                        <span>shubhvaastu</span>
                    </div>

                    <div className="contact-row">
                        <IoLocationOutline className="contact-icon" />
                        <address>
                            'MITHIRAJ BUNGLOW', SHIRKE PLOTS,<br />
                            GAJARAJ COLONY, GOVT COLONY,<br />
                            VISHRAMBAG, SANGLI.
                        </address>
                    </div>
                </div>

                <div className="links1">
                    <h5>Follow Us</h5>
                    <a 
                    href="https://www.instagram.com/shubhvaastu_construction?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                    target="_blank" 
                    rel="noreferrer"
                    >
                        <FaInstagram /> Instagram
                    </a>
                    <a href="">
                        <FaFacebookSquare /> Facebook
                    </a>
                    <a href="">
                        <FaWhatsapp /> WhatsApp
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Footer