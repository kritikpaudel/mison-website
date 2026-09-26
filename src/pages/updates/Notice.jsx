import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

function Notice() {
    return (
        <main className="page">
            <section className="page-hero">
                <h1>Notices & Vacancies</h1>
                <p>Public notices, vacancy announcements and important documents.</p>
            </section>

            <section className="section notice-section">
                <div className="notice-list">
                    <NoticeItem title="General notices will be published here" />
                    <NoticeItem title="Vacancy announcements will be published here" />
                </div>
            </section>
        </main>
    );
}

function NoticeItem({ title }) {
    return (
        <div className="notice-item">
            <div>
                <FontAwesomeIcon icon={faBullhorn} />
                <strong>{title}</strong>
            </div>
            <button>View Details</button>
        </div>
    );
}

export default Notice;