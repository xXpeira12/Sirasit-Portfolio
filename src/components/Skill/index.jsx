const Skill=({isHighLight,tech})=>{
    return(
        <div>
            <div className={`px-2 py-1 bg-primarySubcontent rounded-md ${isHighLight ? "text-primaryTitle":"text-primaryAccent"}`}>
                {tech}
            </div>
        </div>
    )
}
export default Skill;