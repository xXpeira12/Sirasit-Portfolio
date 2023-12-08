import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons"
import picCon1 from "../assets/118918.jpg"

export const data = [
    {
        date: "2021-2022",
        picture: picCon1,
        title: "Title 1",
        link: "http://google.com",
        materials: [
            {type: faGithub, link: "http://google.com"},
            {type: faYoutube, link: "http://google.com"}
        ],
        descriptions: [
            "bullet1",
            "bullet2"
        ],
        skills: [
            "React",
            "TailWind"
        ]
    },
    {
        date: "2020-2021",
        title: "Title 2",
        picture: "",
        materials: [
            {type: faGithub, link:"http://google.com"}
        ],
        descriptions: [
            "bullte1",
            "bullet2"
        ],
        skills: [
            "HTML",
            "CSS",
            "Javascripts"
        ]
    }
]