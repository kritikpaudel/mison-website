import chairperson from "../../assets/members/bishnu-prasad-pathak.png";

function ChairpersonMessage() {
    return (
        <main className="page">
            <section className="page-hero">
                <h1>Chairperson Message</h1>
                <p>Message from the Chairperson of Microfinance Society of Nepal.</p>
            </section>

            <section className="section chairperson-section">
                <div className="chairperson-card">
                    <div className="chairperson-photo-wrap">
                        <img
                            src={chairperson}
                            alt="Bishnu Prasad Pathak"
                            className="chairperson-photo"
                        />
                        <div className="chairperson-info">
                            <h3>Bishnu Prasad Pathak</h3>
                            <p>Chairperson</p>
                        </div>
                    </div>

                    <div className="chairperson-message">
                        <span>Chairman’s Message</span>
                        <h2>Dear Members/Partners/Stakeholders,</h2>

                        <p>
                            Welcome to the Microfinance Society Nepal, a premier platform
                            dedicated to the professional excellence and sustainable growth of
                            the microfinance sector in Nepal.
                        </p>

                        <p>
                            Microfinance has long been the backbone of financial inclusion in
                            our nation, reaching the unreached and empowering the grassroots
                            economy. However, as the financial landscape evolves, so do the
                            challenges. Today’s environment demands higher standards of
                            institutional governance, digital integration, and evidence-based
                            policy advocacy.
                        </p>

                        <p>
                            The Microfinance Society Nepal was established with a singular
                            conviction: that the strength of our sector lies in the unity and
                            expertise of its people. We serve as a bridge connecting
                            practitioners, researchers, and regulators to foster a culture of
                            shared knowledge and professional integrity.
                        </p>

                        <div className="message-focus">
                            <h3>Our focus is clear:</h3>

                            <div className="focus-item">
                                <strong>Professionalization</strong>
                                <p>
                                    Through rigorous training and academic collaboration, we are
                                    preparing the next generation of microfinance leaders.
                                </p>
                            </div>

                            <div className="focus-item">
                                <strong>Research & Innovation</strong>
                                <p>
                                    We prioritize data-driven insights to mitigate risks and
                                    enhance the qualitative impact of microfinance services.
                                </p>
                            </div>

                            <div className="focus-item">
                                <strong>Advocacy</strong>
                                <p>
                                    We act as a collective voice to ensure that the regulatory
                                    environment supports both the sustainability of institutions
                                    and the protection of our clients.
                                </p>
                            </div>
                        </div>

                        <p>
                            As we align our efforts with the Sustainable Development Goals
                            (SDGs), our commitment remains to transform microfinance from a
                            mere credit tool into a dignified profession that drives national
                            prosperity.
                        </p>

                        <p>
                            I invite all professionals, experts, and organizations to join us
                            on this journey. Together, let us redefine the future of inclusive
                            finance in Nepal.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ChairpersonMessage;