import ContentContainer from "../../components/ContentContainer";
import About from "../About";
import Footer from "../Footer";
import { data as projectsData } from "../../contents/projects";
import { data as achievementData } from "../../contents/achievements"
import { data as experienceData } from "../../contents/experiences"
import { data as activitiesData } from "../../contents/activities"
import ContentContainerNoImage from "../../components/ContentContainerNoImage";

const RightSection = ({ onInitial }) => {
    return (
        <div className="grid gap-y-10 lg:gap-y-30 px-3 py-2">
            <About title="About" onInitial={onInitial} ></About>
            <ContentContainerNoImage onInitial={onInitial} title="Experiences" data={experienceData}></ContentContainerNoImage>
            <ContentContainer onInitial={onInitial} title="Projects" data={projectsData}></ContentContainer>
            <ContentContainer onInitial={onInitial} title="Achievements" data={achievementData}></ContentContainer>
            <ContentContainerNoImage onInitial={onInitial} title="Activities" data={activitiesData}></ContentContainerNoImage>
            <Footer></Footer>
        </div>
    )
}
export default RightSection;