import { useState } from "react"
import PhoneInput from "react-phone-number-input"
import { IoMdClose } from "react-icons/io"
import "react-phone-number-input/style.css"
import "./contactForm.css"
import { sendInquiry } from "../Util/emailHelper"

function ContactForm() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [projectType, setProjectType] = useState("Residential")
    const [location, setLocation] = useState("")
    const [message, setMessage] = useState("")
    const [showForm, setshowForm] = useState(false)
    const [toast, setToast] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await sendInquiry({
            name,
            phone,
            projectType,
            location,
            message
        });

        if (response.success){
            setToast({
                type: "success",
                message: "Inquiry submitted successfully!"
            })

            setTimeout(
                () => {
                    setToast(null)
                }, 4000
            )
        }

        else{
            setToast({
                type: "error",
                message: "Failed to submit inquiry, Please try again."
            });

            setTimeout(() => {
                setToast(null)
            }, 4000);
        }
    }
    return (
        <>
        <button 
        className="btn" 
        onClick={
            () => 
                setshowForm(true)
        }
        >
            Request a Quote
        </button>
        {showForm ? (
        <div className="contact-form">
         <div className="form-grid">
        <div className="form-group">
             <button 
                    type="button"
                    className="close-btn"
                    onClick={
                        () => setshowForm(false)
                    }>
                       <IoMdClose /> 
                    </button>
            <label>Name</label>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>

        <div className="form-group">
            <label>Phone Number</label>
            <PhoneInput 
            defaultCountry="IN"
            international={false}
            countryCallingCodeEditable={false}
            value={phone}
            onChange={setPhone}
            placeholder="Enter your phone number"
            required
            />
        </div>

        <div className="form-group">
            <label>Project Type</label>
            <select value={projectType} onChange={(e) => setProjectType(e.target.value)}>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Renovation</option>
                <option>Industrial</option>
            </select>
        </div>

        <div className="form-group">
            <label>Location</label>
            <input
                type="text"
                placeholder="Project Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
        </div>
    </div>

    <div className="form-group">
        <label>Project Details</label>
        <textarea
            rows="5"
            placeholder="Tell us about your project..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
    </div>

    <button className="submit-btn" type="button" onClick={handleSubmit}>
        Request Consultation
    </button>
    </div>

                ) : null}


    {
        toast && (
            <div className={`toast ${toast.type}`}>
                {toast.message}
            </div>
        )
    }


        </>
    )
}

export default ContactForm