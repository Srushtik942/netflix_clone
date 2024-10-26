
import { useDispatch, } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideo } from '../utils/moviesSlice';

//fetcing trailer
const useFetchTrailerVideo = (movieId)=>{

    const dispatch = useDispatch();

    const getMovieVideos = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/1114513/videos?language=en-US',API_OPTIONS );
        const json = await data.json();
        console.log(json);

        const filtertrailer = json.results.filter((video)=> video.type === "Trailer");

       const trailer = filtertrailer.length? filtertrailer[2] : json.results[0];
        console.log(trailer);

        dispatch(addTrailerVideo(trailer));
    };

    useEffect(()=>{

        getMovieVideos();

    });
}

export default useFetchTrailerVideo;