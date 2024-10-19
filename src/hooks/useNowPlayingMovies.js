
  //fetch data from tmdb api and updating the store

  import { useDispatch } from "react-redux";
  import { addNowPlayingMovies } from "../utils/moviesSlice";
  import { useEffect } from "react";
  import { API_OPTIONS } from '../utils/constants';


  const useNowPlayingMovies = () =>{

  const dispatch = useDispatch();
  const getNowPlaying = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    //adding movies into store
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(()=>{
  getNowPlaying();
  },[]);
  };

  export default useNowPlayingMovies;