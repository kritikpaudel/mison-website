import {
    useEffect,
    useRef,
    useState,
} from "react";

import {
    Link,
    useParams,
} from "react-router-dom";

import events from "../../data/events";


function EventDetail() {
    const { slug } = useParams();

    const event = events.find(
        (item) => item.slug === slug
    );


    /* =======================================================
       LIGHTBOX STATE
    ======================================================= */

    const [activeImageIndex, setActiveImageIndex] = useState(null);

    const closeButtonRef = useRef(null);

    const touchStartX = useRef(null);


    const lightboxOpen = activeImageIndex !== null;


    /* =======================================================
       OPEN LIGHTBOX
    ======================================================= */

    const openLightbox = (index) => {
        setActiveImageIndex(index);
    };


    /* =======================================================
       CLOSE LIGHTBOX
    ======================================================= */

    const closeLightbox = () => {
        setActiveImageIndex(null);
    };


    /* =======================================================
       PREVIOUS IMAGE
    ======================================================= */

    const showPreviousImage = () => {
        if (!event || activeImageIndex === null) {
            return;
        }

        setActiveImageIndex((currentIndex) => {
            if (currentIndex === 0) {
                return event.gallery.length - 1;
            }

            return currentIndex - 1;
        });
    };


    /* =======================================================
       NEXT IMAGE
    ======================================================= */

    const showNextImage = () => {
        if (!event || activeImageIndex === null) {
            return;
        }

        setActiveImageIndex((currentIndex) => {
            if (currentIndex === event.gallery.length - 1) {
                return 0;
            }

            return currentIndex + 1;
        });
    };


    /* =======================================================
       KEYBOARD CONTROLS
    ======================================================= */

    useEffect(() => {
        if (!lightboxOpen) {
            return undefined;
        }


        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowLeft") {
                showPreviousImage();
            }

            if (event.key === "ArrowRight") {
                showNextImage();
            }
        };


        document.addEventListener(
            "keydown",
            handleKeyDown
        );


        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [
        lightboxOpen,
        activeImageIndex,
        event,
    ]);


    /* =======================================================
       PREVENT PAGE SCROLL WHILE GALLERY IS OPEN
    ======================================================= */

    useEffect(() => {
        if (!lightboxOpen) {
            return undefined;
        }


        const originalOverflow =
            document.body.style.overflow;


        document.body.style.overflow = "hidden";


        requestAnimationFrame(() => {
            closeButtonRef.current?.focus();
        });


        return () => {
            document.body.style.overflow =
                originalOverflow;
        };
    }, [lightboxOpen]);


    /* =======================================================
       TOUCH / SWIPE
    ======================================================= */

    const handleTouchStart = (event) => {
        touchStartX.current =
            event.touches[0].clientX;
    };


    const handleTouchEnd = (event) => {
        if (touchStartX.current === null) {
            return;
        }


        const touchEndX =
            event.changedTouches[0].clientX;

        const distance =
            touchStartX.current - touchEndX;


        /*
          Ignore small finger movement.
    
          This prevents normal taps from being interpreted
          as gallery navigation.
        */
        const swipeThreshold = 50;


        if (distance > swipeThreshold) {
            showNextImage();
        }


        if (distance < -swipeThreshold) {
            showPreviousImage();
        }


        touchStartX.current = null;
    };


    /* =======================================================
       EVENT DOES NOT EXIST
    ======================================================= */

    if (!event) {
        return (
            <main className="page">
                <section className="page-hero">
                    <h1>
                        Event Not Found
                    </h1>

                    <p>
                        The event you are looking for does not exist or
                        may no longer be available.
                    </p>
                </section>


                <section className="section">
                    <Link
                        to="/events"
                        className="event-view-link"
                    >
                        Back to Events
                    </Link>
                </section>
            </main>
        );
    }


    const activeImage =
        activeImageIndex !== null
            ? event.gallery[activeImageIndex]
            : null;


    return (
        <main className="page">
            {/* ===================================================
          PAGE HERO
      =================================================== */}

            <section className="page-hero">
                <h1>
                    {event.title}
                </h1>

                <p>
                    {event.date} · {event.location}
                </p>
            </section>


            {/* ===================================================
          EVENT CONTENT
      =================================================== */}

            <section className="section event-detail-section">
                <div className="event-detail-intro">
                    <div className="event-detail-image">
                        <img
                            src={event.coverImage}
                            alt={event.title}
                        />
                    </div>


                    <div className="event-detail-copy">
                        <span>
                            About the Event
                        </span>

                        <h2>
                            {event.title}
                        </h2>

                        <p>
                            {event.description}
                        </p>


                        <div className="event-detail-meta">
                            <div>
                                <strong>
                                    Date
                                </strong>

                                <span>
                                    {event.date}
                                </span>
                            </div>


                            <div>
                                <strong>
                                    Location
                                </strong>

                                <span>
                                    {event.location}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                {/* =================================================
            EVENT GALLERY
        ================================================= */}

                <div className="event-gallery-section">
                    <div className="section-heading">
                        <span>
                            Gallery
                        </span>

                        <h2>
                            Event moments
                        </h2>

                        <p>
                            A selection of photographs from this event.
                        </p>
                    </div>


                    <div className="event-gallery-grid">
                        {event.gallery.map((item, index) => (
                            <button
                                type="button"
                                className="event-gallery-item"
                                key={item.id}
                                onClick={() => openLightbox(index)}
                                aria-label={`Open image ${index + 1} of ${event.gallery.length}`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    loading="lazy"
                                />

                                <span className="event-gallery-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>


                <div className="event-back">
                    <Link
                        to="/events"
                        className="event-view-link"
                    >
                        Back to Events
                    </Link>
                </div>
            </section>


            {/* ===================================================
    FULLSCREEN LIGHTBOX
=================================================== */}

            {lightboxOpen && activeImage && (
                <div
                    className="event-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${event.title} image gallery`}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* BACKDROP */}

                    <button
                        type="button"
                        className="event-lightbox-backdrop"
                        onClick={closeLightbox}
                        aria-label="Close gallery"
                        tabIndex="-1"
                    />


                    {/* TOP BAR */}

                    <div className="event-lightbox-top">
                        <div className="event-lightbox-counter">
                            <strong>
                                {String(activeImageIndex + 1).padStart(2, "0")}
                            </strong>

                            <span>/</span>

                            <span>
                                {String(event.gallery.length).padStart(2, "0")}
                            </span>
                        </div>


                        <button
                            ref={closeButtonRef}
                            type="button"
                            className="event-lightbox-close"
                            onClick={closeLightbox}
                            aria-label="Close gallery"
                        >
                            <span />
                            <span />
                        </button>
                    </div>


                    {/* IMAGE AREA */}

                    <div className="event-lightbox-stage">

                        {event.gallery.length > 1 && (
                            <button
                                type="button"
                                className="event-lightbox-control event-lightbox-prev"
                                onClick={showPreviousImage}
                                aria-label="Previous image"
                            >
                                <span className="lightbox-chevron" />
                            </button>
                        )}


                        <div
                            className="event-lightbox-image-wrap"
                            key={activeImageIndex}
                        >
                            <img
                                src={activeImage.image}
                                alt={activeImage.alt}
                            />
                        </div>


                        {event.gallery.length > 1 && (
                            <button
                                type="button"
                                className="event-lightbox-control event-lightbox-next"
                                onClick={showNextImage}
                                aria-label="Next image"
                            >
                                <span className="lightbox-chevron" />
                            </button>
                        )}

                    </div>


                    {/* BOTTOM INFORMATION */}

                    <div className="event-lightbox-bottom">
                        <div className="event-lightbox-caption">
                            <span>
                                {event.title}
                            </span>

                            <p>
                                {activeImage.caption}
                            </p>
                        </div>


                        <div className="event-lightbox-mobile-navigation">
                            <button
                                type="button"
                                onClick={showPreviousImage}
                            >
                                Previous
                            </button>

                            <span>
                                {activeImageIndex + 1} / {event.gallery.length}
                            </span>

                            <button
                                type="button"
                                onClick={showNextImage}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}


export default EventDetail;