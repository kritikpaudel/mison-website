import agmCover from "../assets/events/agm-2026/cover.jpg";
import agmGallery02 from "../assets/events/agm-2026/gallery-02.jpg";
import agmGallery03 from "../assets/events/agm-2026/gallery-03.jpg";


const events = [
    {
        id: 1,

        title: "Annual General Meeting (AGM)",

        slug: "annual-general-meeting-2026",

        date: "September 26, 2026 (AD) • १० असोज २०८३ (BS)",

        location: "Alpha Beta, New Baneshwor, Kathmandu",

        description:
            "Microfinance Society of Nepal held its Annual General Meeting at Alpha Beta, New Baneshwor, Kathmandu, bringing together members and representatives for institutional discussions, review and future direction.",

        coverImage: agmCover,

        gallery: [
            {
                id: 1,

                image: agmCover,

                alt:
                    "Annual General Meeting of Microfinance Society of Nepal at Alpha Beta, New Baneshwor",

                caption:
                    "Annual General Meeting of Microfinance Society of Nepal at Alpha Beta, New Baneshwor, Kathmandu.",
            },

            {
                id: 2,

                image: agmGallery02,

                alt:
                    "Members attending the MISON Annual General Meeting",

                caption:
                    "Members and representatives participating in the Annual General Meeting.",
            },

            {
                id: 3,

                image: agmGallery03,

                alt:
                    "MISON Annual General Meeting in Kathmandu",

                caption:
                    "A moment from the Annual General Meeting held in New Baneshwor, Kathmandu.",
            },
        ],
    },


    {
        id: 2,

        title: "Microfinance Leadership Forum",

        slug: "microfinance-leadership-forum",

        date: "August 04, 2026 (AD) • १९ साउन २०८३ (BS)",

        location: "Lalitpur, Nepal",

        description:
            "A professional forum focused on leadership, innovation and emerging priorities within Nepal's microfinance community.",

        coverImage:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",

        gallery: [
            {
                id: 1,

                image:
                    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",

                alt: "Microfinance Leadership Forum",

                caption:
                    "Leadership discussions during the forum.",
            },

            {
                id: 2,

                image:
                    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=85",

                alt: "Leadership forum gathering",

                caption:
                    "Representatives gathering for the leadership forum.",
            },

            {
                id: 3,

                image:
                    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=85",

                alt: "Forum participants",

                caption:
                    "Participants exchanging ideas and perspectives.",
            },
        ],
    },


    {
        id: 3,

        title: "Financial Literacy Outreach Program",

        slug: "financial-literacy-outreach-program",

        date: "July 21, 2026 (AD) • ५ साउन २०८३ (BS)",

        location: "Bhaktapur, Nepal",

        description:
            "An outreach initiative designed to promote practical financial awareness, responsible borrowing and stronger community participation.",

        coverImage:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=85",

        gallery: [
            {
                id: 1,

                image:
                    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=85",

                alt: "Financial literacy outreach participants",

                caption:
                    "Participants taking part in the financial literacy program.",
            },

            {
                id: 2,

                image:
                    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=85",

                alt: "Community outreach gathering",

                caption:
                    "Community members attending the outreach session.",
            },

            {
                id: 3,

                image:
                    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",

                alt: "Financial awareness session",

                caption:
                    "A practical discussion focused on financial awareness.",
            },
        ],
    },
];


export default events;