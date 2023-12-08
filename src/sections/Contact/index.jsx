import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () =>{
    return(
        <div className='flex items-end text-2xl'>
            <FontAwesomeIcon className='transition-all hover:scale-125 hover:text-primaryTitle' icon={faGithub}></FontAwesomeIcon>  
        </div>
    )
}

export default Contact;