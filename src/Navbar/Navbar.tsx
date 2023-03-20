import {AiFillThunderbolt} from 'react-icons/ai'
const Navbar = () => {
    return ( 
        <ul className="flex h-[10vh] w-full items-center text-xl p-5">
            <a className="flex mx-1.5 ">Home</a>
            <a className="flex mx-1.5">Blog</a>
            <a className="flex mx-1.5 text-green-400">Donate</a>
            <div className="mx-[23.5vw]">
            <button className="flex items-center bg-yellow-400 rounded-xl px-3 text-black"><AiFillThunderbolt />Tip</button>
            </div>

        </ul>
     );
}
 
export default Navbar;