import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import TvDetails from './components/TvDetails'
import Search from './components/Search';
// import Movie_Carousel from './components/Carousel';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
// import Modal from './components/Modal';
import React from 'react';
import Wishlist from './components/Wishlist';
import { Carousel } from 'react-responsive-carousel';
import Movie_Carousel from './components/Carousel';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Movie_Carousel />
      <Home />
      </Route>
      <Route path="/movies/:id">
        <Navbar />
        <MovieDetails />
      </Route>
      <Route path="/tv/:id">
        <Navbar />
        <TvDetails />
      </Route>
      <Route path="/search/:query">
        <Navbar />
        <Search />
      </Route>
      <Route path="/wishlist">
        <Navbar></Navbar>
        <Wishlist/>
      </Route>
      <Route path="/carousel">
        <Movie_Carousel />
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
