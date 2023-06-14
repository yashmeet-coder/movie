import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { logo } from '../logo.svg'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import useFetch from './useFetch';
import { useState } from 'react';


const Movie_Carousel = () => {
  const arr = []
  const [focus,setFocus] = useState(false)
  let i = 0;
  const movie_carousel = useFetch("https://api.themoviedb.org/3/trending/movie/week?api_key=7e8c1fbdace277ba311ad52b6bb25328");
  movie_carousel && movie_carousel.map((movie)=>{
    arr.push(movie.backdrop_path)
  })
  console.log(movie_carousel);
  return (
    <div className='hero'>
      <Carousel  showArrows={false} showIndicators={false} showStatus={false} stopOnHover="true" className='caro'autoPlay={true}> 
        {movie_carousel && movie_carousel.map((elem) => (
        <Link to={`/movies/${elem.id}`} style={{textDecoration: "none",color:"white"}}>
          <div className='backdrop' style={{ backgroundImage: `url(${"https://image.tmdb.org/t/p/original" + arr[i++]})` }}>
            <div className='overlay'>
              <div className='main_carousel_content'>
                <div className='carousel_movie_details'>
                  <h2 style={{fontFamily: "Montserrat",fontWeight: "600",fontSize: "80px",marginLeft:"0px"}} className='carousel_heading'>{elem.original_title}</h2>
                  <div className='tagline'>
                    <span style={{ display: "inline-flex", color: "grey" }}>{elem.tagline}</span>
                  </div>
                  <h5>Overview</h5>
                  <p style={{fontFamily:"Montserrat",fontSize:"16px"}}>{elem.overview}</p>
                </div>
                <div className='poster'>
              <img src={"https://image.tmdb.org/t/p/original" + elem.poster_path} style={{ borderRadius: "9px" }} />
              </div>
              </div>
            </div>
         </div>
          </Link>
        ))}

      </Carousel>
    </div>
  )
}

export default Movie_Carousel
