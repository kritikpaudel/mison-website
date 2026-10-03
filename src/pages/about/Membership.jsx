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
                        <p>Any Nepali citizen who meets the eligibility criteria prescribed under Clause 7 of the MiSoN bylaws may become a General Member by applying in accordance with the prescribed procedure.</p>
                    </div>

                    <div className="about-card">
                        <h3>Lifetime Member</h3>
                        <p>Any person who is eligible to become a General Member may apply for Life Membership of the Organization in the prescribed manner. The Executive Committee may grant Life Membership to a Nepali citizen who fulfills the conditions and requirements prescribed by the Organization. A person granted Life Membership shall not be required to pay the annual membership fee thereafter.</p>
                    </div>

                    <div className="about-card">
                        <h3>Founding Member</h3>
                        <p>
                            The office bearers of the Organization at the time of its registration shall be regarded as Founder Members. Founder Members shall obtain either General Membership or Life Membership and shall pay the applicable membership fee as prescribed under the bylaws.
                        </p>
                    </div>

                    <div className="about-card">
                        <h3>Honorary Member</h3>
                        <p>
                            The Organization may confer Honorary Membership on social workers and distinguished or eminent Nepali citizens who have made significant contributions to, or are associated with, the microfinance sector, as deemed appropriate by the Organization. However, Honorary Members shall not have voting rights.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Membership;