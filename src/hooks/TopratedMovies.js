
  //fetch data from tmdb api and updating the store

  import { useDispatch } from "react-redux";
  import {   addTopratedMovies} from "../utils/moviesSlice";
  import { useEffect } from "react";
  import { API_OPTIONS } from '../utils/constants';


  const useTopratedMovies= () =>{

  const dispatch = useDispatch();
  const getTopratedMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    //adding movies into store
    dispatch(addTopratedMovies(json.results));
  };

  useEffect(()=>{
    getTopratedMovies();
  });
  };

  export default useTopratedMovies;