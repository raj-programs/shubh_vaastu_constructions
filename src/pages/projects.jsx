import { useEffect, useState } from "react"
import Navbar from "../components/nav-bar"
import Footer from "../pages/footer"
import "./projects.css"
import { client } from "../sanity-setup/sanity"
import { urlFor } from "../Util/imgURL"
import AOS from "aos"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
import ProjectSkeleton from "../components/skeleton-loading"

function Projects() {
    const [active, setActive] = useState("all")
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        client
            .fetch('*[_type == "project"]')
            .then((data) => {
                setProjects(data)
                AOS.refresh()
                setLoading(false)
            })
    }, [])

    const filteredProjects = active === "all" ? projects : projects.filter(project => project.type === active)

    return (
        <>
            <Navbar />
            <nav className="nav">
                <a
                    href="#"
                    className={`nav-l ${active === "all" ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        setActive("all")
                    }}
                >
                    ALL
                </a>

                <a
                    href="#"
                    className={`nav-l ${active === "residential" ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        setActive("residential")
                    }}
                >
                    RESIDENTIAL
                </a>
                <a
                    href="#"
                    className={`nav-l ${active === "commercial" ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        setActive("commercial")
                    }}
                >
                    COMMERCIAL
                </a>

                <a
                    href="#"
                    className={`nav-l ${active === "interior" ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        setActive("interior")
                    }}
                >
                    INTERIOR
                </a>
                <a
                    href="#"
                    className={`nav-l ${active === "remodel" ? "active" : ""}`}
                    onClick={(e) => {
                        e.preventDefault();
                        setActive("remodel")
                    }}
                >
                    RENOVATION & REMODELING
                </a>

            </nav>
            <h2>Masterpiece Projects</h2>

            <section>
                <div className="project-grid">
                    {loading ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <ProjectSkeleton key={index} />
                        ))
                    ) : (
                        filteredProjects.map((project, index) => (
                            <div
                                className="project-card"
                                key={project._id}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <img
                                    src={urlFor(project.mainImage).url()}
                                    alt={project.name}
                                    loading="lazy"
                                    decoding="async"
                                />

                                {/* Corner type badge — visible on desktop hover */}
                                {project.type && (
                                    <span className="project-type-tag">{project.type}</span>
                                )}

                                <div className="project-info">
                                    <h3>{project.name}</h3>
                                    <p>{project.location}</p>
                                    <Link
                                        to={`/projects/${project.slug.current}`}
                                    >
                                        View Project
                                        <FaArrowRight />
                                    </Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
            <Footer />

        </>
    )
}

export default Projects