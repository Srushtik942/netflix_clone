import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/useUpcomingMovies';
import useTopratedMovies from '../hooks/TopratedMovies';
import useUpcomingMovies from '../hooks/TopratedMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () =>{

const showGptSearch = useSelector(store=>store.gpt.showGptSearch);


  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();
  useTrendingMovies();

  return (
    <div>
  <Header/>
  {
     showGptSearch?(
       <GPTSearch/>
      ) : (
       <>
    <MainContainer/>
    <SecondaryContainer/>
    </>
  )}

    </div>
  )
}

export default Browse;
