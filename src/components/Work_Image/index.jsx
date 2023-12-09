const Work_Image=({picture,title})=>{
    if(!picture){
        return null;
    }
    return(
        <div className="w-5/6 bg-primaryAccent p-0.5 rounded-md">
            <img src={picture} alt={title} className="object-scale-down rounded-md"></img>
        </div>
    )
}
export default Work_Image;