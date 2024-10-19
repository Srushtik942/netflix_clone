import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies);
  return (
    movies && (
    <div className='text-white font-medium scroll -mt-72 bg-black'>
      <MovieList  title ={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending Movies"} movies={movies.trendingMovies}/>
      <MovieList title={"Toprated Movies"} movies={movies.topratedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies}/>
    </div>
    )
  )
}

export default SecondaryContainer
