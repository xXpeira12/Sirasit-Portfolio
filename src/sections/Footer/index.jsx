import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () =>{
    return(
        <div className="mb-10">
            <div className="flex justify-end">
                <span>
                    Powered by React.js and Tailwind
                    <a href="https://github.com/xXpeira12/Sirasit-Portfolio" target="_blank">
                        <FontAwesomeIcon className="ml-2" icon={faGithub}></FontAwesomeIcon>
                    </a>
                </span>
            </div>
        </div>
    )
}

export default Footer;