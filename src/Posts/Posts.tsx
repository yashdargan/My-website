import {HiArrowLongRight} from 'react-icons/hi2';
import Bar from '../Bar/Bar';
const Posts = () => {
    return ( <div className="flex h-[50vh] flex-col">
        <div className="flex text-4xl font-bold h-[15vh] pt-[9vh]">Latest Posts</div>
        <ul className="flex flex-col m-[1rem] text-xl text-[#71717a]">
            <li className="flex flex-row m-[1rem]">01<p className="w-[30vw] px-4 mx-4 text-white">IOT Security based framework</p>19/04/23</li><Bar />
            <li className="flex flex-row m-[1rem]">02<p className="w-[30vw] px-4 mx-4 text-white">Google clone</p>19/04/23</li><Bar/>
            <li className="flex flex-row m-[1rem]">03<p className="w-[30vw] px-4 mx-4 text-white">Superkart</p>1/04/23</li><Bar/>
            <li className="flex flex-row m-[1rem]">04<p className="w-[30vw] px-4 mx-4 text-white">Simple Login Page</p>17/04/23</li><Bar/>
            <li className="flex items-center m-[1rem] px-4">All Posts <HiArrowLongRight /></li>
        </ul>
    </div> );
}
 
export default Posts;