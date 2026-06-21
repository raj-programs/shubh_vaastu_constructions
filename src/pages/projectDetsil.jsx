import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../sanity-setup/sanity";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { urlFor } from "../Util/imgURL";
import Navbar from "../components/nav-bar";
import Footer from "./footer";
import { FaArrowLeft } from "react-icons/fa";
import "./projectdetails.css";

function ProjectDetails() {
    const { slug } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        client
            .fetch('*[_type == "project" && slug.current == $slug][0]', { slug })
            .then((data) => setProject(data));
    }, [slug]);

    if (!project)
        return (
            <div className="pd-loading">
                <div className="pd-loading__spinner" />
                <span className="pd-loading__text">Loading project&hellip;</span>
            </div>
        );

    return (
        <div className="project-details-page">
            <Navbar />
            
            <div className="pd-container">
                <div className="pd-header" data-aos="fade-up">
                    <Link to="/projects-gallery" className="pd-back-link">
                        <FaArrowLeft /> Back to Projects
                    </Link>
                    <h1 className="pd-title">{project.name}</h1>
                    {project.location && (
                        <p className="pd-location">◈ {project.location}</p>
                    )}
                </div>

                <div className="pd-gallery" data-aos="fade-up" data-aos-delay="200">
                    <Swiper
                        className="pd-swiper"
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {project.gallery?.map((image, index) => (
                            <SwiperSlide key={index} className="pd-slide">
                                <img
                                    src={urlFor(image).url()}
                                    alt={`${project.name} — view ${index + 1}`}
                                    className="pd-hero__img"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="pd-content" data-aos="fade-up" data-aos-delay="400">
                    <div className="pd-description">
                        <span className="pd-label">About the Project</span>
                        {project.description ? (
                            <p>{project.description}</p>
                        ) : (
                            <p>No description available for this project.</p>
                        )}
                    </div>

                    <div className="pd-meta">
                        {project.type && (
                            <div className="pd-meta-item">
                                <span className="pd-label">Project Type</span>
                                <span className="pd-value">{project.type}</span>
                            </div>
                        )}
                        {project.location && (
                            <div className="pd-meta-item">
                                <span className="pd-label">Location</span>
                                <span className="pd-value">{project.location}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default ProjectDetails;