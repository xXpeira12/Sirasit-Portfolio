import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () =>{
    return(
        <div className='flex items-end text-2xl'>
            <a href="https://github.com/xXpeira12" target="_blank">
                <FontAwesomeIcon className='transition-all hover:scale-125 hover:text-primaryTitle' icon={faGithub}></FontAwesomeIcon>
            </a>  
        </div>
    )
}

export default Contact;