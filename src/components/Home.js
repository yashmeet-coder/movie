import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import MovieList from './MovieList'
import useFetch from './useFetch';
import Navbar from './Navbar';
import Movie_Carousel from './Carousel';
// import Modal from './Modal';
import TvList from './TvList'

const Home = () => {
    const movie_url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=7e8c1fbdace277ba311ad52b6bb25328'
    const movies = useFetch(movie_url)
    const tv_url = 'https://api.themoviedb.org/3/trending/tv/week?api_key=7e8c1fbdace277ba311ad52b6bb25328'
    const tv = useFetch(tv_url)
    const [modal,setModal] = useState(false);
  return (
    <div className='home'>
      <h2>Trending Movies</h2>
      
        {movies && <MovieList movies={movies} setModal={setModal} modal={modal}></MovieList>}
      
      <h2>Trending TV Shows</h2>
        {tv && <TvList tv={tv} setModal={setModal} modal={modal}></TvList>}
        
        {/* {movies && <Movie_Carousel movies={movies}></Movie_Carousel>} */}
    </div>
  )
}

export default Home
