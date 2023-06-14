import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import TvList from './TvList'
import axios from 'axios'
import useFetch from './useFetch'

const MovieDetails = () => {
  const { id } = useParams();
  const url = "https://api.themoviedb.org/3/tv/" + id + "?api_key=7e8c1fbdace277ba311ad52b6bb25328"
  const similar_url = "https://api.themoviedb.org/3/tv/"+ id + "/similar?language=en-US&page=1&api_key=7e8c1fbdace277ba311ad52b6bb25328";
  const similar_movies = useFetch(similar_url);
  const [movie, setMovie] = useState([])
  const [genres,setGenre] = useState([])
  const [clas,setClass] = useState("fa-regular fa-heart");
  const [click,setClicked] = useState(false);
  const [display,setDisplay] = useState(0);
const clicked = () => {
  if(!click){
  setClass("fa-regular fa-heart fa-solid clicked")
  setDisplay(1)
  setTimeout(() => {
    setDisplay(0)
  },1000)
  setClicked(true);
  try{
  axios.post("http://localhost:3000/wishlist",{
    id: id,
    movie: movie
  })
  .then((res)=>{
    console.log(res);
  })}
  catch(error){
    console.log(error.response);
  }
  }
  else{
  setClass("fa-regular fa-heart")
  setClicked(false)
  }
}

  fetch(url)
    .then(res => {
      if (!res.ok)
        console.log("no");
      return res.json();
    })
    .then(data => {
      setMovie(data)
      setGenre(data.genres)
    })
  const backdrop = "https://image.tmdb.org/t/p/original" + movie.backdrop_path
  return (
    <div>
      <div className='backdrop' style={{ backgroundImage: `url(${backdrop})` }}>
        <div className='overlay'>
          <div className='main_content'>
            <div className='poster'>
              <img src={"https://image.tmdb.org/t/p/original" + movie.poster_path} style={{ borderRadius: "9px" }} />
              <i className={clas} onClick={clicked}></i>
            </div>
            <div className='movie_details'>
            <div className='added' style={{opacity: display}}>Added to wishlist!</div>
                <h2>{movie.name}</h2>
              <div className='heading'>
                <span>{movie.release_date}</span>
                {movie && genres.map((element => (
                    <span>{element.name}</span>
                  )))}
                  <span><span style={{marginRight :"0.3rem"}}>{movie.number_of_seasons} season</span><span>{movie.number_of_episodes} episodes</span></span>
              </div>
              <div className='score'>
                <span>{Math.ceil(10*movie.vote_average)}<i class="fa-solid fa-percent"></i></span>
              </div>
              <div className='tagline'>
                <span style={{display: "inline-flex",color: "grey"}}>{movie.tagline}</span>
              </div>
              <h5>Overview</h5>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <h2 id="similar">Similar TV Shows</h2>
      {similar_movies && <TvList tv={similar_movies}></TvList>}
      </div>
  )
}

export default MovieDetails
