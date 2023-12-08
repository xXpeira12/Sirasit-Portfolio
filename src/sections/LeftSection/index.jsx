import Contact from "../Contact";
import Header from "../Header";
import Navbar from "../Navbar";

const LeftSection = ({ navBarItems, currentSection }) =>{
    return(
        <div className="px-3 mb-10 lg:mb-0">
            <div className='px-2 sticky top-14 grid gap-y-5 lg:grid-rows-[1fr_2fr_20%] lg:h-[81vh]'>
            <Header></Header>
            <Navbar navBarItems={navBarItems} currentSection={currentSection}></Navbar>
            <Contact></Contact>
            </div>
        </div>
    )
}
export default LeftSection;