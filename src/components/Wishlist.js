import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import useFetch from './useFetch';
import { RiCloseLine } from 'react-icons/ri';

const Wishlist = () => {
  const[movies,setMovies] = useState([]); 
  axios.get("https://imdb-at2a.onrender.com/wishlist")
  .then((res)=>{
    setMovies(res.data)
    console.log(res.data);
  })


  return (
    <div className='movies'>
      <h1>Your Watchlist</h1>
      {movies.length>0 ? movies.map((movie)=>(
        <div className='liked_list' key={movie.id}>
        <Link to={`/movies/${movie.id}`} style={{textDecoration: "none"}}>
                <i className="fa-solid fa-circle-info info" style={{marginTop:"2rem",color:"yellow"}}></i>
        </Link>
        <h1>{movie.name}</h1>
    
        
        </div>
      )): 
      <h1>Loading...</h1>
      }
    </div>
  )
}

export default Wishlist
