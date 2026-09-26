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

import events from "../data/events";


const sliderImages = [bg1, bg2, bg3];


function Home() {
    const [activeSlide, setActiveSlide] = useState(0);


    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide(
                (prev) =>
                    (prev + 1) % sliderImages.length
            );
        }, 5000);


        return () => clearInterval(timer);
    }, []);


    const nextSlide = () => {
        setActiveSlide(
            (prev) =>
                (prev + 1) % sliderImages.length
        );
    };


    const previousSlide = () => {
        setActiveSlide(
            (prev) =>
                prev === 0
                    ? sliderImages.length - 1
                    : prev - 1
        );
    };


    /*
      Only show the latest three events
      on the homepage.
    */

    const recentEvents = events.slice(0, 3);


    return (
        <main>

            {/* =================================================
                HERO
            ================================================= */}

            <section className="hero">
                <div className="slider">

                    {sliderImages.map((image, index) => (
                        <div
                            key={image}
                            className={
                                index === activeSlide
                                    ? "slide active"
                                    : "slide"
                            }
                            style={{
                                backgroundImage: `url(${image})`,
                            }}
                        />
                    ))}


                    <div className="slider-overlay" />


                    <button
                        type="button"
                        className="edge-click edge-left"
                        onClick={previousSlide}
                        aria-label="Previous slide"
                    />


                    <button
                        type="button"
                        className="edge-click edge-right"
                        onClick={nextSlide}
                        aria-label="Next slide"
                    />

                </div>


                <div className="hero-inner">

                    <div className="hero-content">

                        <div className="hero-badge">
                            Established 2080 BS
                        </div>


                        <h2>
                            Microfinance Society of Nepal
                        </h2>


                        <p>
                            A professional social organization connecting
                            microfinance experts, practitioners and institutions
                            for knowledge, governance and sustainable development.
                        </p>


                        <div className="hero-actions">

                            <Link to="/about/mission-vision-goals" className="btn primary">
                                Explore MISON
                            </Link>


                            <Link
                                to="/contact"
                                className="btn secondary"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                ABOUT MISON
            ================================================= */}

            <section className="section home-about-section">

                <div className="section-heading">

                    <span>
                        About MISON
                    </span>


                    <h2>
                        Learn more about the organization
                    </h2>


                    <p>
                        Explore MISON’s purpose, leadership, executive committee
                        and membership structure through dedicated pages.
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


            {/* =================================================
                RECENT EVENTS
            ================================================= */}

            <section className="section events-section home-events-section">

                <div className="section-heading">

                    <span>
                        Recent Events
                    </span>


                    <h2>
                        Activities, programs and gatherings
                    </h2>


                    <p>
                        Explore recent programs, professional gatherings and
                        activities organized by the Microfinance Society of Nepal.
                    </p>

                </div>


                <div className="events-grid">

                    {recentEvents.map((event) => (

                        <article
                            className="event-card"
                            key={event.id}
                        >

                            <Link
                                to={`/events/${event.slug}`}
                                className="event-card-image"
                            >

                                <img
                                    src={event.coverImage}
                                    alt={event.title}
                                    loading="lazy"
                                />

                            </Link>


                            <div className="event-card-content">

                                <div className="event-meta">

                                    <span>
                                        {event.date}
                                    </span>


                                    <span>
                                        {event.location}
                                    </span>

                                </div>


                                <h3>

                                    <Link
                                        to={`/events/${event.slug}`}
                                    >
                                        {event.title}
                                    </Link>

                                </h3>


                                <p>
                                    {event.description}
                                </p>


                                <Link
                                    to={`/events/${event.slug}`}
                                    className="event-view-link"
                                >
                                    View Event
                                </Link>

                            </div>

                        </article>

                    ))}

                </div>


                <div className="home-events-footer">

                    <Link
                        to="/events"
                        className="btn primary"
                    >
                        View All Events
                    </Link>

                </div>

            </section>

        </main>
    );
}


function HomeAboutCard({
    icon,
    title,
    text,
    link,
}) {
    return (
        <div className="home-about-card">

            <div className="home-about-icon">

                <FontAwesomeIcon
                    icon={icon}
                />

            </div>


            <h3>
                {title}
            </h3>


            <p>
                {text}
            </p>


            <Link
                to={link}
                className="see-more-btn"
            >
                See More

            </Link>

        </div>
    );
}


export default Home;