import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPeopleGroup, faBookOpen, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

const sliderImages = [
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=80",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80",
];

function Home() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % sliderImages.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % sliderImages.length);
    };

    const previousSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
    };

    return (
        <main>
            <section className="hero">
                <div className="slider">
                    {sliderImages.map((image, index) => (
                        <div
                            key={image}
                            className={index === activeSlide ? "slide active" : "slide"}
                            style={{ backgroundImage: `url(${image})` }}
                        ></div>
                    ))}
                    <div className="slider-overlay"></div>
                    <button className="edge-click edge-left" onClick={previousSlide}></button>
                    <button className="edge-click edge-right" onClick={nextSlide}></button>
                </div>

                <div className="hero-inner">
                    <div className="hero-content">
                        <div className="hero-badge">Established 2080 BS</div>
                        <h1>लघुवित्त समाज नेपाल</h1>
                        <h2>Microfinance Society of Nepal</h2>

                        <p>
                            A professional social organization connecting microfinance experts,
                            practitioners and institutions for knowledge, governance and sustainable development.
                        </p>

                        <div className="hero-actions">
                            <Link to="/about" className="btn primary">
                                Explore Website <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                            <Link to="/contact" className="btn secondary">Contact Us</Link>
                        </div>
                    </div>

                    <div className="hero-card">
                        <img src={logo} alt="MISON Logo" />
                        <h3>Microfinance Society of Nepal</h3>
                        <p>लघुवित्त समाज नेपाल</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="section-heading">
                    <span>What We Do</span>
                    <h2>Connecting people, knowledge and institutions</h2>
                    <p>A clean overview of the organization’s main work areas.</p>
                </div>

                <div className="home-preview-grid">
                    <PreviewCard icon={faPeopleGroup} title="Professional Network" text="Uniting microfinance professionals and institutions." />
                    <PreviewCard icon={faBookOpen} title="Training & Research" text="Supporting learning, studies, publications and policy dialogue." />
                    <PreviewCard icon={faShieldHalved} title="Good Governance" text="Promoting responsible systems and institutional practices." />
                </div>
            </section>
        </main>
    );
}

function PreviewCard({ icon, title, text }) {
    return (
        <div className="about-card">
            <FontAwesomeIcon icon={icon} className="page-icon" />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}

export default Home;