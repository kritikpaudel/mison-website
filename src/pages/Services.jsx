import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faHandshake, faShieldHalved, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

function Services() {
    return (
        <main className="page">
            <section className="page-hero">
                <h1>Services</h1>
                <p>Activities and work areas of Microfinance Society of Nepal.</p>
            </section>

            <section className="section services-section">
                <div className="service-grid">
                    <ServiceCard icon={faBookOpen} title="Training & Education" text="Microfinance related training, seminars, workshops and educational programs." />
                    <ServiceCard icon={faHandshake} title="Coordination" text="Collaboration with national organizations, experts, service providers and regulators." />
                    <ServiceCard icon={faShieldHalved} title="Governance Support" text="Advisory support for internal control, management systems and good governance." />
                    <ServiceCard icon={faPeopleGroup} title="Member Network" text="Creating a professional network of people involved in the microfinance sector." />
                </div>
            </section>
        </main>
    );
}

function ServiceCard({ icon, title, text }) {
    return (
        <div className="service-card">
            <div className="icon-box">
                <FontAwesomeIcon icon={icon} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}

export default Services;