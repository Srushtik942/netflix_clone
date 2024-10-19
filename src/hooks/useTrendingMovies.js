
  //fetch data from tmdb api and updating the store

  import { useDispatch } from "react-redux";
  import { useEffect } from "react";
  import { API_OPTIONS } from '../utils/constants';
  import { addTrendingMovies } from "../utils/moviesSlice";

  const useTrendingMovies = () =>{

  const dispatch = useDispatch();
  const getTrendingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    //adding movies into store
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(()=>{
    getTrendingMovies();
  },[]);
  };

  export default useTrendingMovies;