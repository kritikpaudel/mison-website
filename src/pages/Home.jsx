import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faBullseye,
    faUserTie,
    faUsers,
    faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import bg1 from "../assets/bg/1.jpg";
import bg2 from "../assets/bg/2.jpg";
import bg3 from "../assets/bg/3.jpg";

const sliderImages = [bg1, bg2, bg3];

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

                    <button
                        className="edge-click edge-left"
                        onClick={previousSlide}
                        aria-label="Previous slide"
                    ></button>

                    <button
                        className="edge-click edge-right"
                        onClick={nextSlide}
                        aria-label="Next slide"
                    ></button>
                </div>

                <div className="hero-inner">
                    <div className="hero-content">
                        <div className="hero-badge">Established 2080 BS</div>

                        <h2>Microfinance Society of Nepal</h2>

                        <p>
                            A professional social organization connecting microfinance experts,
                            practitioners and institutions for knowledge, governance and
                            sustainable development.
                        </p>

                        <div className="hero-actions">
                            <Link to="/about/mission-vision-goals" className="btn primary">
                                Explore MISON <FontAwesomeIcon icon={faArrowRight} />
                            </Link>

                            <Link to="/contact" className="btn secondary">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section home-about-section">
                <div className="section-heading">
                    <span>About MISON</span>
                    <h2>Learn more about the organization</h2>
                    <p>
                        Explore MISON’s purpose, leadership, executive committee and
                        membership structure through dedicated pages.
                    </p>
                </div>

                <div className="home-about-grid">
                    <HomeAboutCard
                        icon={faBullseye}
                        title="Mission, Vision and Goals"
                        text="Discover the purpose, strategic direction and 4-P framework that guide MISON."
                        link="/about/mission-vision-goals"
                    />

                    <HomeAboutCard
                        icon={faUserTie}
                        title="Chairperson Message"
                        text="Read the official message from the Chairperson of Microfinance Society Nepal."
                        link="/about/chairperson-message"
                    />

                    <HomeAboutCard
                        icon={faUsers}
                        title="Executive Committee"
                        text="Meet the leadership team working for the professional growth of the sector."
                        link="/about/executive-committee"
                    />

                    <HomeAboutCard
                        icon={faIdCard}
                        title="Membership"
                        text="View member categories and membership-related information of the society."
                        link="/about/membership"
                    />
                </div>
            </section>
        </main>
    );
}

function HomeAboutCard({ icon, title, text, link }) {
    return (
        <div className="home-about-card">
            <div className="home-about-icon">
                <FontAwesomeIcon icon={icon} />
            </div>

            <h3>{title}</h3>
            <p>{text}</p>

            <Link to={link} className="see-more-btn">
                See More <FontAwesomeIcon icon={faArrowRight} />
            </Link>
        </div>
    );
}

export default Home;