import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import TPhO from "../assets/TPhO.png"
import AiHack2024 from "../assets/AIHack_2024.png"
import AiHack2023Cer from "../assets/AIHackCertificate_2023.jpg"
import AiHack2024Cer from "../assets/AIHackCertificate_2024.jpg"
import TESA2024Img from "../assets/TESA2024_Image.png"
import TESA2024Cer from "../assets/TESA2024_Cer.jpg"
import TESA2024Present from "../assets/TESA 2024 - Superposition Squad.pdf"

export const data = [
    {
        date: "2024",
        picture: [TESA2024Img, TESA2024Cer],
        title: "TESA Top Gun Rally #18 Acoustic and AI-Based Predictive Maintenance with Edge Computing",
        materials: [
            {type: faGithub, link:"https://github.com/MoosaTae/real_time_fraud_detection.git"},
            {type: faFilePdf, link: TESA2024Present}
        ],
        descriptions: [
            "· Achieved 5th place and gold medal in the competition.",
            "· Implemented signal processing to segment the critical event and extract the feature.",
            "· Implemented machine learning models to predict the fraud signal.",
            "· Deployed the model on the Raspberry Pi to predict the fraud signal in real-time.",
            "· Integrated Raspberry Pi with the server to store data and visualize dashboard for predicting and reporting."
        ],
        skills: ["Python", "Machine Learning", "Matlab", "Raspberry Pi", "MQTT Broker"]
    },
    {
        date: "2023-2024",
        picture: [AiHack2024, AiHack2023Cer, AiHack2024Cer],
        title: "Aihack Thailand 2023 & 2024",
        descriptions: [
            "· Achieved 4th place in 2023 and 8th place in 2024 in the Aihack Thailand competition.",
            "· Implemented model by using real data of the business to solve the problem."
        ],
        skills: ["Python", "AutoGlugon", "Deep Learning", "Data Analytic"]
    },
    {
        date: "2022",
        picture: [TPhO],
        title: "The 21th Thailand Physics Olmpiad",
        descriptions: [
            "· Received a Bronze medal in overall score."
            , "· Learned to practice logical thinking skills and problem-solving skills."
        ]
    }
]