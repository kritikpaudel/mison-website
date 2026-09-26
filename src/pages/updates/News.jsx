import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

function News() {
    return (
        <main className="page">
            <section className="page-hero">
                <h1>News & Events</h1>
                <p>Latest activities, events, programs and updates.</p>
            </section>

            <section className="section">
                <div className="news-grid">
                    <NewsCard icon={faNewspaper} title="Organization updates will appear here" text="This space is ready for official news and events after content approval." />
                    <NewsCard icon={faPeopleGroup} title="Workshop and seminar updates" text="Program highlights, gallery and reports can be added later." />
                </div>
            </section>
        </main>
    );
}

function NewsCard({ icon, title, text }) {
    return (
        <div className="news-card">
            <FontAwesomeIcon icon={icon} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
}

export default News;