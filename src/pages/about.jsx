import "./about.css"
import founder from "../assets/founder_image.webp"
function About() {
    return(
        <>
        <h2 data-aos="fade-right">Who Are We?</h2>
        <p data-aos="fade-right">
At Shubh Vaastu Construction, we are committed to
delivering high-quality residential and commercial
construction solutions with precision, reliability,
and craftsmanship.
</p>
<p data-aos="fade-right">
SHUBH VAASTU CONSTRUCTION was established in 2018 as a consulting, contracting, and project management firm. We founded the company with a simple goal: to make quality construction and well-designed homes affordable for everyone.
</p>
<p data-aos="fade-right">
Over the years, we have successfully delivered a diverse range of residential, commercial, and industrial projects, from renovations and extensions to complete new constructions. Our services include architectural planning, structural design, technical supervision, and construction contracting, ensuring end-to-end support for every project.
        </p>
<div className="grid" data-aos="fade-right">
    <div className="card">
<h3>
    Goal
</h3>
<p>
    To provide affordable construction solutions through attractive designs, advanced engineering practices, and timely project execution, creating lasting value for our clients.
</p>
</div>
<div className="card"> 
<h3>Our Vision</h3>
<p>
    To deliver high-quality projects, build a skilled and dedicated team, and maintain a strong commitment to excellence, reliability, and on-time delivery.
</p>
</div>
</div><br />
<span className="section-eyebrow">The Founder's Corner</span>
<h2 className="section-title">Meet Our Founder</h2>

<div class="founder-container">

    <div class="founder-content" data-aos="fade-right">
        <p>
            Nishikant Patil is a highly qualified Chartered Engineer (C.Eng.),
            Member of the Institution of Engineers (MIE), and Civil Engineering
            graduate with extensive experience in structural design,
            architectural consulting, and turnkey construction management.
            As the Founder and Principal Consultant of Shubh Vaastu Construction,
            he has built a strong reputation for delivering high-quality
            residential, commercial, and industrial projects across Maharashtra
            through technical excellence, innovative design, and a commitment
            to quality.
        </p>
    </div>

    <div class="founder-profile" data-aos="fade-left">
        <img
            src={founder}
            alt="Nishikant Patil"
            className="Founder-img"
        />

        <h3 className="founder-name">
            Nishikant Patil
        </h3>

        <p className="founder-role">
            Founder & Principal Consultant
        </p>

        <div className="founder-qualifications">
            C.Eng. (Chartered Engineer) <br />
            MIE – Institution of Engineers <br />
            B.E. Civil Engineering
        </div>
    </div>

</div>

        </>
    )
}

export default About