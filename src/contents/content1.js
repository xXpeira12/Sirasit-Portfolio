import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import portfolio_video from "../assets/Video_Portfolio.gif"
import Todoo_video from "../assets/Video_2Doo.gif"
import Detect_Herb from "../assets/Video_DetectHerb.gif"
import Track_Iris from "../assets/Video_TrackIris.gif"
import Signlanguage from "../assets/Video_DetectSignlanguage.gif"

export const data = [
    {
        date: "2023",
        picture: Todoo_video,
        title: "2Doo : To-do list web application",
        link: "https://xxpeira12.github.io/2Doo-To-Do-List-Web-Application/",
        materials: [
            {type: faGithub, link: "https://github.com/xXpeira12/2Doo-To-Do-List-Web-Application.git"},
            {type: faLink, link: "https://www.canva.com/design/DAFwfCMJbDU/6zDzh-Qzg5YssMCJ7EEFpw/view?utm_content=DAFwfCMJbDU&utm_campaign=designshare&utm_medium=link&utm_source=viewer"}
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
        picture: portfolio_video,
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
        picture: Signlanguage,
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
            "Python"
        ]
    },
    {
        date: "2021",
        title: "Controlling visual mouse using iris (Telehealth Project)",
        picture: Track_Iris,
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
        picture: Detect_Herb,
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
            "Python"
        ]
    }
]