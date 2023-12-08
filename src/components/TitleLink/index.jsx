import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TitleLink=({isHighLight,Title,link})=>{
    if(!link){
        return <div>{Title}</div>
    }
    return(
        <div className={`${isHighLight ? "text-primaryTitle":"text-primaryContent"}`}>
            <a href={link} target="_blank">
                {Title}
                <FontAwesomeIcon icon={faArrowRight} className={`text-xs -rotate-45 transition-all ease-out ${isHighLight ? "translate-x-1 -translate-y-1":""}`}></FontAwesomeIcon>
            </a>
    </div>
    )
}
export default TitleLink;