import ContactForm from "../components/contactForm"
import "./contact.css"

function Contact(){
    return(
        <>
        <div data-aos="fade-in" className="contact">
            <span className="section-eyebrow">contact</span>
        <h2 className="section-title">Turn Dream Into Reality</h2>
        <p>From foundational work to complete work, we build dreams with the blend of modern architectural and constructional techniques with traditional principles of vaastu.</p>
             <p>Get in Touch Now!!</p>
             </div>
             <div data-aos="fade-in">
                <p>Discuss your project requirements with our expers.</p>
        <button className="btn">
            Book A Consutation
        </button>
        <ContactForm />
        </div>
        </>
    )
}

export default Contact