import React from 'react'
import { useState } from 'react'
import useFetch from './useFetch'
import MovieList from './MovieList'
import Search from './Search'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [query,setQuery] = useState('')

  
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const search_url = "https://api.themoviedb.org/3/search/movie?api_key=7e8c1fbdace277ba311ad52b6bb25328&language=en-US&query="+query+"&page=1&include_adult=false"
  console.log(search_url);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-movie">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">IMDB</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-links">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Movies</a>
            </li>
            <li className="nav-item">
            <a className="nav-link active" href="/">TV Shows</a>
            </li>
            <li className="nav-item">
            <a className="nav-link active" href="/">More</a>
            </li>
        </ul>
          <div className='form-group'>
            <input className="search_bar" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
            <Link to={`/search/${query}`}>
            <i className="fa-solid fa-magnifying-glass search" type="submit" style={{color: "white"}}></i>
            </Link>
            </div>
        </div>
    </div>
</nav>
  )
}

export default Navbar
