import Bar from '../Bar/Bar';
import ReactPlayer from 'react-player';
const Video = () => {
    return ( 
        <div className="flex h-[60vh] flex-col">
        <div className="flex text-4xl font-bold h-[10vh] pt-[5vh]">Latest Video</div>
        <div className="flex m-[1rem] p-4">
        <ReactPlayer url={'https://youtu.be/mqUN4N2q4qY'} controls={true} />
        </div>
        <Bar/>
    </div>



     );
}
 
export default Video;