import Navbar from "../components/nav-bar"
import About from "./about"
import Services from "./services"
import ProjectsMini from "./projects-mini"
import Contact from "./contact"
import Footer from "./footer"
import Testinomial from "../components/testinomials"
import "./home-page.css"
import { useEffect } from "react"
import { openWhatsApp } from "../Util/whatsAppHelper"

function Home() {
    useEffect(() => {
        const hash = window.location.hash;

        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);

                if (element) {
                    const navbarHeight = 80;

                    const top =
                        element.getBoundingClientRect().top +
                        window.pageYOffset -
                        navbarHeight;

                    window.scrollTo({
                        top,
                        behavior: "smooth"
                    });
                }
            }, 300);
        }
    }, []);

    const consultationMessage =
        `Hello SHUBH VAASTU CONSTRUCTIONS, I would like to book a consultation.

Name:
Project Type:
Location:`;

    return (
        <>
            <Navbar />
            <section id="hero">
                <div className="hero-overlay">
                    <div className="hero-section">
                        <h1 data-aos="fade-up" data-aos-delay="300">BUILDING DREAMS INTO REALITY</h1>

                        <p data-aos="fade-up" data-aos-delay="400">
                            Building more than structures—we build trust, value, and lasting
                            relationships. From residential homes to commercial developments,
                            our commitment to excellence turns your vision into reality with
                            precision and care.
                        </p>

                        <div className="act-btn" data-aos="fade-up">
                            <button className="btn"
                                onClick={() =>
                                    window.location.href = "/#projects"
                                }>
                                View Projects
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={() => openWhatsApp(
                                    consultationMessage
                                )}>
                                Book a Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about">
                <About />
            </section>

            <section id="services">
                <Services />
            </section>

            <section id="projects">
                <ProjectsMini />
            </section>

            <Testinomial />

            <section id="contact">
                <Contact />
            </section>
            <Footer />
        </>
    )
}

export default Home