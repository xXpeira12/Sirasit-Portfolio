import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faFilePdf, faLink } from "@fortawesome/free-solid-svg-icons"
import portfolio_video from "../assets/Video_Portfolio.gif"
import Todoo_video from "../assets/Video_2Doo.gif"
import Detect_Herb from "../assets/Video_DetectHerb.gif"
import Track_Iris from "../assets/Video_TrackIris.gif"
import Signlanguage from "../assets/Video_DetectSignlanguage.gif"
import DemoDentistBooking from "../assets/DemoDentistBooking.gif"
import DemoSpaceDev from "../assets/DemoSpaceDev.gif"
import SpaceDevPDF from "../assets/SpaceDev_Document.pdf"
import TableTimePDF from "../assets/TableTime Presentation Product Backlog & Sprint.pdf"
import DemoRedRice from "../assets/DemoRedRice.gif"
import DemoScholarSuccess from "../assets/DemoScholarSuccess.gif"
import ScholarSuccessPDF from "../assets/DataSciProject.pdf"

export const data = [
    {
        date: "2024",
        picture: [DemoScholarSuccess],
        title: "Scholar Success Prediction",
        materials: [
            {type: faGithub, link: "https://github.com/MoosaTae/ScholarSuccess.git"},
            {type: faFilePdf, link: ScholarSuccessPDF},
            {type: faYoutube, link: "https://www.youtube.com/watch?v=7s2pV8_G2DI"}
        ],
        descriptions: [
            "· An End-to-End Pipeline for Conference Paper Acceptance Predictiong.",
            "· Collected Data by using provided API and multi-threaded browser scraped, and handled data by using Apache Kafka and Apache Spark.",
            "· Preprocessed data by using NLP techniques (Bert Transformer) and feature engineering.",
            "· Trained models by using AutoGluon and ONNX Runtime for complie.",
            "· Created a web application for users to interact with the model by Streamlit.",
        ],
        skills: [
            "Python",
            "Selenium",
            "Kafka",
            "Apache Spark",
            "Casandra",
            "AutoGluon",
            "ONNX Runtime",
            "FastAPI",
            "Streamlit",
            "Machine Learning",
        ]
    },
    {
        date: "2024",
        picture: [DemoRedRice],
        title: "Red Rice Web Application",
        link: "https://redrice-frontend.vercel.app/",
        materials: [
            {type: faGithub, link: "https://github.com/2110503TACEDT66/cedt-se-project-table-time.git"},
            {type: faFilePdf, link: TableTimePDF}
        ],
        descriptions: [
            "· The Restaurant Reservation System that enables users to book tables at restaurants efficiently.",
            "· Implemented user authentication, reservation management, chat support, and a review system.",
            "· Implemented test plans, test cases, and test reports to track test results, identify defects; conducted unit testing, manual testing and automated test.",
            "· Managed product backlogs, contributed to sprint planning, and tracked progress using burndown charts.",
        ],
        skills: [
            "React",
            "NextJS",
            "Go",
            "Gin",
            "NodeJS",
            "Socket.IO",
            "Prisma",
            "PostgreSQL",
            "Jest",
            "Cypress"
        ]
    },
    {
        date: "2024",
        picture: [DemoSpaceDev],
        title: "Space Dev Game",
        materials: [
            {type: faGithub, link: "https://github.com/xXpeira12/SpaceDev.git"},
            {type: faYoutube, link: "https://www.youtube.com/watch?v=74KAzyjKe34"},
            {type: faFilePdf, link: SpaceDevPDF}
        ],
        descriptions: [
            "· Space Dev is an arcade-style space shooter game where players control a rocket to evade and destroy incoming enemy bombs.",
            "· Developed by using Object-Oriented Programming (OOP) principles.",
            "· Implemented game mechanics like enemy AI, power-ups, collision handling, and progressive difficulty."
        ],
        skills: [
            "Java",
            "JavaFX",
            "OOP"
        ]
    },
    {
        date: "2024",
        picture: [DemoDentistBooking],
        title: "Dentist Booking Web Application",
        link: "https://backache-team-dentist-booking-frontend-ibub.vercel.app/",
        materials: [
            {type: faGithub, link: "https://github.com/xXpeira12/Backache-Team-Dentist-Booking-Frontend.git"},
            {type: faGithub, link: "https://github.com/xXpeira12/Backache-Team-Dentist-Booking.git"},
        ],
        descriptions: [
            "· The Dentist Booking System is a full-stack web application that enables users to schedule dental appointments seamlessly."
            , "· It includes user authentication, booking management, and an administrative dashboard for overseeing appointments."
        ],
        skills: [
            "React",
            "TailwindCSS",
            "NextJS",
            "NodeJS",
            "MongoDB"
        ]
    },
    {
        date: "2023",
        picture: [Todoo_video],
        title: "2Doo : To-do list web application",
        link: "https://xxpeira12.github.io/2Doo-To-Do-List-Web-Application/",
        materials: [
            {type: faGithub, link: "https://github.com/xXpeira12/2Doo-To-Do-List-Web-Application.git"},
        ],
        descriptions: [
            "· It is a calendar that can be moved to the next or previous month and It can return to the current month."
            , "· Add or Delete tasks for that day along with specifying details and time of the tasks."
        ],
        skills: [
            "HTML",
            "CSS",
            "Javascript",
            "NodeJS",
            "MongoDB"
        ]
    },
    {
        date: "2023",
        title: "Portfolio",
        link: "https://xxpeira12.github.io/Sirasit-Portfolio/",
        picture: [portfolio_video],
        materials: [
            {type: faGithub, link:"https://github.com/xXpeira12/Sirasit-Portfolio"}
        ],
        descriptions: [
            "· A simple and minimalist portfolio is built by React and TailwindCSS, designed to be clean and minimal."
        ],
        skills: [
            "React",
            "TailwindCSS"
        ]
    },
    {
        date: "2021-2022",
        title: "Development of gesture detection to translate sign language",
        picture: [Signlanguage],
        materials: [
            {type: faGithub, link:"https://github.com/xXpeira12/SignlanguageDetection"},
            {type: faLink, link:"https://www.canva.com/design/DAEn_jFK8m0/nl4t1OnbKd7rK2YRWDbAkQ/view?utm_content=DAEn_jFK8m0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"}
        ],
        descriptions:[
            "· Create a deep learning model for sign language translation.",
            "· Use the Mediapipe and OpenCV library for collect the data that is used for preparing  and processing in the deep learning model.",
            "· Use the Tensorflow to creating the deep learining model."
        ],
        skills:[
            "Python", "Tensorflow", "Deep Learning"
        ]
    },
    {
        date: "2021",
        title: "Controlling visual mouse using iris (Telehealth Project)",
        picture: [Track_Iris],
        materials: [
            {type: faGithub, link:"https://github.com/xXpeira12/Controlling-visual-mouse-using-iris"},
            {type: faLink, link:"https://drive.google.com/file/d/178VfdRoyv9GN-S3pmrrcso1xCW-aebQ7/view?usp=drive_link"}
        ],
        descriptions: [
            "· Development of computer vision for detection the iris which was detected movement to move the mouse cursor.",
            "· Use PyAutoGUI to program the commands for the mouse cursor whether to move according to the point on the iris or instruct the mouse cursor to click."
        ],
        skills:[
            "Python"
        ]
    },
    {
        date: "2021",
        title: "Development of Computer vision to detect Herbs",
        picture: [Detect_Herb],
        materials: [
            {type: faGithub, link:"https://github.com/xXpeira12/Herbs-Detection.git"},
            {type: faLink, link:"https://www.canva.com/design/DAEqKOzMoc4/xvzYHSGYCWjKQujqTteEoA/view?utm_content=DAEqKOzMoc4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"}
        ],
        descriptions:[
            "· Implement computer vision to detect and predict the Medicinal plants.",
            "· Use the Yolo architecture to build the deep learning models.",
            "· Use the Tkinter library for creating User Interface."
        ],
        skills: [
            "Python", "Deep Learning"
        ]
    }
]