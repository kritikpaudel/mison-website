import bishnu from "../../assets/members/bishnu-prasad-pathak.png";
import uday from "../../assets/members/uday-raj-khatiwada.jpg";
import jhalendra from "../../assets/members/jhalendra-bhattarai.jpeg";
import pramod from "../../assets/members/pramod-kumar-ghimire.jpg";
import baburam from "../../assets/members/baburam-neupane.jpg";
import debendra from "../../assets/members/debendra-bahadur-raut.png";
import naresh from "../../assets/members/naresh-nepal.jpg";
import sunil from "../../assets/members/sunil-khanal.jpg";
import tejhari from "../../assets/members/tejhari-ghimire.png";

const committee = [
    [bishnu, "Bishnu Prasad Pathak", "Chairperson"],
    [uday, "Uday Raj Khatiwada", "Vice Chairperson"],
    [jhalendra, "Jhalendra Bhattarai", "Treasurer"],
    [pramod, "Pramod Kumar Ghimire", "General Secretary"],
    [baburam, "Baburam Neupane", "Member"],
    [debendra, "Debendra Bahadur Raut", "Member"],
    [naresh, "Naresh Nepal", "Member"],
    [sunil, "Sunil Khanal", "Member"],
    [tejhari, "Dr. Tejhari Ghimire", "Member"],
];

function ExecutiveCommittee() {
    return (
        <main className="page">
            <section className="page-hero">
                <h1>Executive Committee</h1>
                <p>Leadership team of Microfinance Society of Nepal.</p>
            </section>

            <section className="section">
                <div className="committee-grid">
                    {committee.map(([image, name, role]) => (
                        <div className="member-card" key={name}>
                            <img src={image} alt={name} />
                            <h3>{name}</h3>
                            <p>{role}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default ExecutiveCommittee;