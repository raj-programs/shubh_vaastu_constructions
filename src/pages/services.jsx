import "./services.css"
import { RiHome2Line } from "react-icons/ri"
import { FaRegBuilding } from "react-icons/fa"
import { LuDraftingCompass } from "react-icons/lu"
import { LuRotate3D } from "react-icons/lu"
import { MdManageAccounts } from "react-icons/md"
import { FaKey } from "react-icons/fa6"
import { MdOutlineDesignServices } from "react-icons/md"
import { MdOutlineAutorenew } from "react-icons/md"

function Services(){
    return(
        <>
        
            <h2 data-aos="fade-in">Why Choose Us?</h2>
            <p data-aos="fade-in">
                Rooted in the principles of Vaastu and engineered for the modern era, our services define the pinnacle of high-end construction. 
            </p>
            <div className="services-grid">
            <div className="service-card" data-aos="zoom-in" data-aos-delay="100">
                <h3>
                    <RiHome2Line /><br />
                    Residential Construction
                    </h3>
                <p>
                    Building homes that combine quality craftsmanship, modern design with traditional principles of Vaastu and lasting value.
                </p>
            </div>

            <div className="service-card" data-aos="zoom-in" data-aos-delay="200">
                <h3>
                    <FaRegBuilding /><br />
                    Commercial Construction
                    </h3>
                <p>
                    Developing functional, modern commercial spaces for growth and tailored to business requirements.
                </p>
            </div>

            <div className="service-card" data-aos="zoom-in" data-aos-delay="300">
                <h3>
                    <LuDraftingCompass /><br />
                    Architecturial Planning
                    </h3>
                <p>
                    Detailed planning and designing of solutions that transform ideas into reality.
                </p>
            </div>
            <div className="service-card" data-aos="zoom-in" data-aos-delay="400">
                <h3>
                    <MdOutlineDesignServices /> <br />
                    Interior Designing
                </h3>
                <p>
                    Creating functional and elegant interiors that combine aesthetics, comfort, and practicality to bring your vision to life.
                </p>
            </div>
            <div className="service-card" data-aos="zoom-in" data-aos-delay="500">
                <h3>
                    <MdOutlineAutorenew /><br />
                    Renovation and Remodeling
                </h3>
                <p>
                    Transforming existing spaces through modern renovations, structural upgrades, and thoughtful redesigns that enhance functionality and long-term value.
                </p>

            </div>
            <div className="service-card" data-aos="zoom-in" data-aos-delay="600">
                <h3>
                    <LuRotate3D /><br />
                    3D Design & Visualization
                    </h3>
                <p>
                    Interactive 3D views and realistic visualizations that help the clients experience their ideas before even they become reality.
                </p>
            </div>

            <div className="service-card" data-aos="zoom-in" data-aos-delay="700">
                <h3>
                    <MdManageAccounts /><br />
                    Consultation & Project Guidance
                    </h3>
                <p>
                   Expert consultation on design, budgeting, materials, and construction planning to ensure informed decisions.
                </p>
            </div>
            
             <div className="service-card" data-aos="zoom-in" data-aos-delay="800">
                <h3>
                    <FaKey /><br />
                    Complete Construction Solutions
                    </h3>
                <p>
                   End-to-end project execution, from planning and approvals to construction and final handover.
                </p>
            </div>
        </div>
        </>
    )
}

export default Services