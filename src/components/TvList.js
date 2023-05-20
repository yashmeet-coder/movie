import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const TvList = ({tv}) => {

console.log(tv);

  return (
      <div className='movie-list'>
       {tv.map((blog)=>(
        <div className='movie-card' key={blog.id}>
            <Link to={`/tv/${blog.id}`} style={{textDecoration: "none"}}>
                <img src={"https://image.tmdb.org/t/p/original"+blog.poster_path} style={{borderRadius:"9px"}}/>
                <div className='content'>
                <p style={{color:"yellow", marginBottom:"0.75rem"}}><i class="fa-solid fa-star" style={{marginRight:"0.75rem"}}></i><span>{(blog.vote_average).toFixed(1)}</span>
                <i className="fa-solid fa-circle-info info" style={{marginLeft:"4rem"}}></i>
                </p>
                <h6 className='card-title'><a>{blog.original_name}</a></h6>
                </div>
              </Link>
        </div>
        ))}
    </div>
  )
}

export default TvList
