import bishnu from "../../assets/members/bishnu-prasad-pathak.png";
import uday from "../../assets/members/uday-raj-khatiwada.png";
import jhalendra from "../../assets/members/jhalendra-bhattarai.png";
import pramod from "../../assets/members/pramod-kumar-ghimire.png";
import baburam from "../../assets/members/baburam-neupane.png";
import uma from "../../assets/members/uma-bohora-joshi.png";
import naresh from "../../assets/members/naresh-nepal.png";
import sunil from "../../assets/members/sunil-khanal.png";
import tejhari from "../../assets/members/tejhari-ghimire.png";

const committee = [
    [bishnu, "Bishnu Prasad Pathak", "Chairperson"],
    [uday, "Uday Raj Khatiwada", "Vice Chairperson"],
    [jhalendra, "Jhalendra Bhattarai", "Treasurer"],
    [pramod, "Pramod Kumar Ghimire", "General Secretary"],
    [baburam, "Baburam Neupane", "Member"],
    [naresh, "Naresh Nepal", "Member"],
    [sunil, "Sunil Khanal", "Member"],
    [tejhari, "Dr. Tejhari Ghimire", "Member"],
    [uma, "Uma Bohora Joshi", "Member"],
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