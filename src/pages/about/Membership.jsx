function Membership() {
    return (
        <main className="page">
            <section className="page-hero">
                <h1>Membership</h1>
                <p>Member categories and membership information.</p>
            </section>

            <section className="section">
                <div className="home-preview-grid">
                    <div className="about-card">
                        <h3>General Member</h3>
                        <p>Eligible Nepali citizens can apply as general members.</p>
                    </div>

                    <div className="about-card">
                        <h3>Lifetime Member</h3>
                        <p>Qualified members may apply for lifetime membership.</p>
                    </div>

                    <div className="about-card">
                        <h3>Founding Member</h3>
                        <p>
                            Office bearers at the time of registration are founding members.
                        </p>
                    </div>

                    <div className="about-card">
                        <h3>Honorary Member</h3>
                        <p>
                            Given to respected contributors in the microfinance field.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Membership;