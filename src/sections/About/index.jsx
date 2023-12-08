import { useEffect } from 'react';
import {data} from '../../contents/about'

const About=({ 
    onInitial,
    title= ""
 })=>{

    const SECTION_ID = `${title}-section`;
    useEffect(()=>{
        onInitial(SECTION_ID);
    }, [])
    return(
        <div className='space-y-2 px-2 scroll-m-14' id={SECTION_ID}>
            <div className='text-primaryTitle text-xl font-normal'>{data.title}</div>
            <div className='flex flex-col sm:flex-row gap-5'>
                <div className='sm:flex-2 max-w-sm'>{data.description}</div>
                <div className='sm:flex-2 sm:flex items-center'>
                    <img src={data.image} alt="Sirasit_Profile" className='mx-auto h-auto w-4/6'/>
                </div>
            </div>
        </div>
    )
}
export default About;