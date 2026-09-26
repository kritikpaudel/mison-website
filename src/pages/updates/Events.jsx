import { Link } from "react-router-dom";
import events from "../../data/events";


function Events() {
    return (
        <main className="page">
            <section className="page-hero">
                <h1>Events & Gallery</h1>

                <p>
                    Explore meetings, programs, workshops and important moments
                    from the Microfinance Society of Nepal.
                </p>
            </section>


            <section className="section events-section">
                <div className="section-heading">
                    <span>Recent Events</span>

                    <h2>Moments that bring our community together</h2>

                    <p>
                        Browse recent events, activities and programs organized by
                        the society and its members.
                    </p>
                </div>


                <div className="events-grid">
                    {events.map((event) => (
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
                                    <span>{event.date}</span>

                                    <span>{event.location}</span>
                                </div>


                                <h3>
                                    <Link to={`/events/${event.slug}`}>
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
            </section>
        </main>
    );
}


export default Events;