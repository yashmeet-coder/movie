import React from 'react'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import useFetch from './useFetch'
import MovieList from './MovieList'
import Search from './Search'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [query,setQuery] = useState('')
  const [toggleMenu, setToggleMenu] = useState(false)
  
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const search_url = "https://api.themoviedb.org/3/search/movie?api_key=7e8c1fbdace277ba311ad52b6bb25328&language=en-US&query="+query+"&page=1&include_adult=false"
  console.log(search_url);
  return (
    <nav className="navbar py-4">
        <div className="container-fluid">
          <a className="navbar-brand">IMDB</a>
          <div className='navbar_links'>
          <Link to="" style={{textDecoration: "none" , color:"white"}}>
            <a>Movies</a>
            </Link>
            <Link to="" style={{textDecoration: "none" , color:"white"}}>
            <a >TV Shows</a>
            </Link>
            <Link to="/wishlist" style={{textDecoration: "none" , color:"white"}}>
            <a >Wishlist</a>
            </Link>
            <div className='form-group'>
            <input className="search_bar" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
            <Link to={`/search/${query}`}>
            <i className="fa-solid fa-magnifying-glass search" type="submit" style={{color: "white"}}></i>
            </Link>
            </div>
    
          </div>
        </div>
        <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container">
            <div className="gpt3__navbar-menu_container-links scale-up-center">
              <p><a href="/">Movies</a></p>
              <p><a href="#wgpt3">TV Shows</a></p>
             <Link to="/wishlist">
              <p><a href="#possibility">Wishlist</a></p>
              </Link>
              <div className='form-group'>
            <input className="search_bar" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}/>
            <Link to={`/search/${query}`}>
            <i className="fa-solid fa-magnifying-glass search" type="submit" style={{color: "white"}}></i>
            </Link>
            </div>
              
            </div>
          </div>
        )}
      </div>
</nav>
  )
}

export default Navbar
