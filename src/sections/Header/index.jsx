import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { data } from '../../contents/header'

const Header = () => {
    return(
        <div className='flex flex-col gap-3'>
        <div className='text-3xl text-primaryTitle font-semibold'>{data.name}</div>
        {/* <div className='text-lg text-primaryAccent font-semibold'>{data.title}</div> */}
        <div className='text-sm w-5/6'>{data.caption}</div>
        {/* <div>
          <a href={data.link} target='blank'>
            <span className='rounded-md bg-primarySubcontent text-gray-200 py-2 px-3 brightness-95'>
              {data.btnText}
              <FontAwesomeIcon className='animate-bounce ml-2 text-sm' icon={faArrowDown}></FontAwesomeIcon>
            </span>
          </a>
        </div> */}
      </div>
    )
}

export default Header;