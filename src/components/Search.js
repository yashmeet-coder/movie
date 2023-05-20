import React, { useImperativeHandle } from 'react'
import { useParams } from 'react-router-dom'
import MovieDetails from './MovieDetails';
import MovieList from './MovieList';
import useFetch from './useFetch';

const Search = () => {
    const {query} = useParams();
    const search_url = "https://api.themoviedb.org/3/search/multi?api_key=7e8c1fbdace277ba311ad52b6bb25328&language=en-US&query="+query+"&page=1&include_adult=false"
    const movie = useFetch(search_url)
    console.log(movie);
  return (
    <div>
      {movie && <MovieList movies={movie}></MovieList>}
    </div>
  )
}

export default Search
