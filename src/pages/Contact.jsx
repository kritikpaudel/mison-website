import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
    return (
        <main className="page">
            <section className="page-hero">
                <h1>Contact</h1>
                <p>Get in touch with Microfinance Society of Nepal.</p>
            </section>

            <section className="section contact-section">
                <div className="contact-info">
                    <span>Contact Details</span>
                    <h2>Get in touch with MISON</h2>
                    <p>Contact details can be updated after confirmation from the organization.</p>

                    <div className="contact-row">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p>Soltimode, Kathmandu-13, Nepal</p>
                    </div>
                    <div className="contact-row">
                        <FontAwesomeIcon icon={faPhone} />
                        <p>+977-9851218708<br />+977-9851060413</p>
                    </div>
                    <div className="contact-row">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>mison2080@gmail.com</p>
                    </div>
                </div>

                <form className="contact-form">
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message"></textarea>
                    <button type="button">Send Message</button>
                </form>
            </section>
        </main>
    );
}

export default Contact;