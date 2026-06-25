import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
import "./projects.css"
import { urlFor } from "../Util/imgURL"
import { useEffect, useState } from "react"
import { client } from "../sanity-setup/sanity"
import AOS from "aos"
import ProjectSkeleton from "../components/skeleton-loading"

function ProjectsMini() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client
      .fetch('*[_type == "project"][0...6]')
      .then((data) => {
        const formattedimg = data.map(project => ({
          ...project,
          imgUrl: urlFor(project.mainImage)
                  .width(600)
                  .height(400)
                  .quality(80)
                  .url()
        }));
        setProjects(formattedimg)
        setLoading(false)
        AOS.refresh()
      })
  }, [])

  return (
    <>
      {/* ── Section header ── */}
      <div className="projects-mini-header">
        <div data-aos="fade-up" data-aos-delay="200">
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-title">Signature Projects</h2>
        </div>

        <div className="navigate" data-aos="fade-up" data-aos-delay="300">
          <Link to="/projects-gallery">
            Explore Our Work
            <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="project-grid" data-aos="fade-up" data-aos-delay="400">
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <ProjectSkeleton key={index} />
          ))
        ) : (
          projects.map((project, index) => (
            <div
              className="project-card"
              key={project._id}
              data-aos="fade-up"
              data-aos-delay={index * 75}
            >
              <img
                src={project.imgUrl}
                alt={project.name}
                loading="lazy"
                decoding="async"
              />

              {project.type && (
                <span className="project-type-tag">{project.type}</span>
              )}

              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.location}</p>
                <Link to={`/projects/${project.slug.current}`}>
                  View Project
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default ProjectsMini