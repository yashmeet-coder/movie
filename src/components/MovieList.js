import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const MovieList = ({movies}) => {


  return (
      <div className='movie-list'>

       {movies.map((blog)=>(
        <div className='movie-card' key={blog.id}>
           
                <img src={"https://image.tmdb.org/t/p/original"+blog.poster_path} style={{borderRadius:"9px"}}/>
                
                <div className='content'>
                <p style={{color:"yellow", marginBottom:"0.75rem"}}><i class="fa-solid fa-star" style={{marginRight:"0.75rem"}}></i><span>{(blog.vote_average)?(blog.vote_average).toFixed(1):(blog.vote_average)}</span>
                <Link to={`/movies/${blog.id}`} style={{textDecoration: "none"}}>
                <i className="fa-solid fa-circle-info info" style={{marginLeft:"4rem",color:"yellow"}}></i>
                </Link>
                </p>
                <h6 className='card-title'><a>{blog.original_title}</a></h6>
               
               
                </div>
            
        </div>
        ))}
    </div>
              )
            }
            
            export default MovieList
              
        
    
