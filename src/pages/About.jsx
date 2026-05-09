import logo from "../assets/logo.png";

const committee = [
    ["Bishnu Prasad Pathak", "Chairperson"],
    ["Uday Raj Khatiwada", "Vice Chairperson"],
    ["Jhalendra Bhattarai", "Treasurer"],
    ["Pramod Kumar Ghimire", "General Secretary"],
    ["Baburam Neupane", "Member"],
    ["Debendra Bahadur Raut", "Member"],
    ["Naresh Nepal", "Member"],
    ["Sunil Khanal", "Member"],
    ["Dr. Tejhari Ghimire", "Member"],
];

function About() {
    return (
        <main className="page">
            <PageHero title="About Us" subtitle="लघुवित्त समाज नेपाल - Microfinance Society of Nepal" />

            <section className="section about-section">
                <div className="about-grid">
                    <div className="about-card large">
                        <h3>Organization Name</h3>
                        <p>
                            Microfinance Society of Nepal
                            <p>लघुवित्त समाज नेपाल</p>
                            <p>MISON</p>
                        </p>
                    </div>

                    <div className="about-card">
                        <h3>Mission</h3>
                        <p>Connect professionals and institutions involved in microfinance.</p>
                    </div>

                    <div className="about-card">
                        <h3>Vision</h3>
                        <p>A sustainable, responsible and well-governed microfinance ecosystem.</p>
                    </div>
                </div>
            </section>

            <section className="section soft-section">
                <div className="section-heading">
                    <span>Chairperson Message</span>
                    <h2>Message from Chairperson</h2>
                    <p>This content will be updated after receiving the official message.</p>
                </div>
            </section>

            <section className="section">
                <div className="section-heading">
                    <span>Executive Committee</span>
                    <h2>Leadership Team</h2>
                </div>

                <div className="committee-grid">
                    {committee.map(([name, role]) => (
                        <div className="member-card" key={name}>
                            <img src={logo} alt="MISON" />
                            <h3>{name}</h3>
                            <p>{role}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section soft-section">
                <div className="section-heading">
                    <span>Membership</span>
                    <h2>Member Categories</h2>
                    <p>General Member, Lifetime Member, Founding Member and Honorary Member.</p>
                </div>
            </section>
        </main>
    );
}

function PageHero({ title, subtitle }) {
    return (
        <section className="page-hero">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </section>
    );
}

export default About;