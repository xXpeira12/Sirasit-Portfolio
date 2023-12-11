import ContentContainer from "../../components/ContentContainer";
import About from "../About";
import Footer from "../Footer";
import { data as content1Data } from "../../contents/content1";
import { data as achievementData } from "../../contents/achievements"

const RightSection = ({ onInitial }) =>{
    return(
        <div className="grid gap-y-10 lg:gap-y-30 px-3 py-2">
            <About title="About" onInitial={onInitial} ></About>
            <ContentContainer onInitial={onInitial} title="Projects" data={content1Data}></ContentContainer>
            <ContentContainer onInitial={onInitial} title="Achievements" data={achievementData}></ContentContainer>
            <Footer></Footer>
        </div>
    )
}
export default RightSection;