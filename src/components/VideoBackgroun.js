
import {  useSelector } from 'react-redux';
import useFetchTrailerVideo from '../hooks/useFetchTrailerVideo';

//fetching trailer video

const VideoBackgroun = (movieId) => {

  //fetcing trailer of particular movie dynamically
    // const [trailerId, settrailerId] = useState(null);

    const trailerVideo = useSelector((store)=>store.movies?.trailerVideo);

     // settrailerId(trailer.key);

     useFetchTrailerVideo(movieId);


  return (
    <div className='w-screen'>

    <iframe className='w-screen aspect-video'
    src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?&autoplay=1&mute=1" }
     title="YouTube video player"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     referrerPolicy="strict-origin-when-cross-origin"
     ></iframe>

    </div>
  )
}

export default VideoBackgroun
