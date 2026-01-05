import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"
import TPhO from "../assets/TPhO.png"
import AiHack2024 from "../assets/AIHack_2024.png"
import AiHack2025 from "../assets/AIHack_2025.png"
import AiHack2023Cer from "../assets/AIHackCertificate_2023.jpg"
import AiHack2024Cer from "../assets/AIHackCertificate_2024.jpg"
import AiHack2025Cer from "../assets/AIHackCertificate_2025.jpg"
import TESA2024Img from "../assets/TESA2024_Image.png"
import TESA2024Cer from "../assets/TESA2024_Cer.jpg"
import TESA2024Present from "../assets/TESA 2024 - Superposition Squad.pdf"
import HTTM from "../assets/HTTM.jpg"
import HTTMCer from "../assets/HTTMCertificate.png"
import AIAMSA from "../assets/AIAMSA.jpg"
import AIAMSACer from "../assets/AIAMSACertificate.jpg"

export const data = [
    {
        date: "2023-2025",
        picture: [AiHack2024, AiHack2025, AiHack2023Cer, AiHack2024Cer, AiHack2025Cer],
        title: "Aihack Thailand 2023 - 2025",
        descriptions: [
            "· Achieved 4th place in 2023, 8th place in 2024, and 4th place in 2025 in the Aihack Thailand competition.",
            "· Implemented model by using real data of the business to solve the problem."
        ],
        skills: ["Python", "AutoGlugon", "Deep Learning", "Data Analytic"]
    },
    {
        date: "2025",
        picture: [HTTM, HTTMCer],
        title: "Hack to the Max ss2 2025",
        descriptions: [
            "· Digital Infrastructure Modernization, conceptualized \"Thailand Deferred Payment\" to transform legacy B2B cheque processing into a fully digital ecosystem, replacing physical instruments with secure guarantees to eliminate fraud risks and administrative friction.",
        ],
    },
    {
        date: "2025",
        picture: [AIAMSA, AIAMSACer],
        title: "New Era of AI with AMSA Hackathon",
        descriptions: [
            "· Achieved 3rd place in the competition.",
            "· Conceptualized & Prototyped AI Pipeline: Developed a rapid Proof-of-Concept (PoC) demonstration utilizing MediaPipe and LLM to validate the feasibility of extracting biomechanical features and generating gait analysis reports from video input.",
            "· Proposed System Architecture: Designed a theoretical end-to-end framework combining Computer Vision and Deep Learning (LSTM/GRU) to solve elderly fall risk , focusing on the architectural logic and feasibility study for a scalable, low-cost screening solution."
        ]
    },
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
        date: "2022",
        picture: [TPhO],
        title: "The 21th Thailand Physics Olmpiad",
        descriptions: [
            "· Received a Bronze medal in overall score."
            , "· Learned to practice logical thinking skills and problem-solving skills."
        ]
    }
]