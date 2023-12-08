const Work_Image=({picture,title})=>{
    if(!picture){
        return null;
    }
    return(
        <div>
            <img src={picture} alt={title} className="w-3/6 rounded-md"></img>
        </div>
    )
}
export default Work_Image;