import {IoSearchOutline} from 'react-icons/io5';
import profilePic from '../../assets/images/anime.webp';

const Navbar = () => {
    return (
        <nav className="bg-[#fafafa] flex justify-between items-center h-[3.4rem] w-full pr-24 pl-18 fixed z-10">
            <div className="flex items-center gap-14">
                <div className="font-medium text-[1.4rem] ubuntu-medium text-[#3e11aa]">ProjectPulse</div>
                <div className="border-[1px] border-[#b8bec5] py-1.5 rounded-full w-[20rem] flex items-center gap-1 px-2">
                    <IoSearchOutline size="1.2rem" color='#66686a' />
                    <div className='ubuntu-light text-[.9rem] text-[#66686a]'>Search here</div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div>
                    <img src={profilePic} className='h-[2.2rem] w-[2.2rem] rounded-full object-cover border-[#b8bec5]' />
                </div>
                <div className='flex-col items-center'>
                    <div className='ubuntu-regular text-[1rem]'>Karan Agarwal</div>
                    <div className='ubuntu-light text-[.8rem] text-[#66686a]'>Admin</div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;