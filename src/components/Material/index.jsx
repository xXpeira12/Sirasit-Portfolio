import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material=({icon, link})=>{
    return(
        <a href={link} target="blank" className="hover:scale-125 transition-all">
                <FontAwesomeIcon className="hover:text-primaryTitle hover:rounded-full" icon={icon}></FontAwesomeIcon>
        </a>
    )
}
export default Material;