import { useEffect, useState } from "react";
import FormattedDate from "../FormattedDate";
import Work_Image from "../Work_Image";
import TitleLink from "../TitleLink";
import Material from "../Material";
import Description from "../Description";
import Skill from "../Skill";

const ContentContainer = ({
    onInitial,
    title: sectioName = "",
    data = []
}) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});
    const SECTION_ID = `${sectioName}-section`;

    useEffect(()=>{
        onInitial(SECTION_ID);
    }, [])

    return (
        <div id={SECTION_ID} className="scroll-m-14">
            <div className="text-primaryTitle text-xl font-normal px-2">{sectioName}</div>
            {
                data.map(({date="",picture="",title="",link="",materials=[],descriptions=[],skills=[]}, index)=>(
                    <div
                        key={`${SECTION_ID}-${index}-${title.replaceAll(" ","")}`}
                        className={`grid grid-cols-[30%_70%] py-6 px-2 rounded-md transition-all ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-slate-800":""}`} 
                        onMouseEnter={() => setIsMouseEnter({[`${SECTION_ID}-${index}`] : true})} 
                        onMouseLeave={() => setIsMouseEnter({[`${SECTION_ID}-${index}`] : false})}
                    >
                        <div>
                            <FormattedDate date={date}></FormattedDate>
                            <Work_Image picture={picture} title={title}></Work_Image>
                        </div>
                        <div className="flex flex-col gap-4">
                            <TitleLink isHighLight={isMouseEnter[[`${SECTION_ID}-${index}`]]} Title={title} link={link}></TitleLink>
                            {
                                materials.length > 0 ?
                                    <div className="flex gap-4 text-xl items-center">
                                    {
                                        materials.map((e, i)=>(    
                                            <Material key={`${e}-material-${i}`} icon={e.type} link={e.link}></Material>
                                        ))
                                    }
                                    </div>
                                    : null
                            }
                            {
                                descriptions.map((e, i)=>(
                                    <Description key={`${e}-description-${i}`} description={e}></Description>
                                ))
                            }
                            <div>
                                <div className="flex gap-4 text-s">
                                    {
                                        skills.map((e, i)=>(
                                            <Skill key={`${e}-skill-${i}`} isHighLight={isMouseEnter[[`${SECTION_ID}-${index}`]]} tech={e}></Skill>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ContentContainer;