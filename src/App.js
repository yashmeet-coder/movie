import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import TvDetails from './components/TvDetails'
import Search from './components/Search';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
// import Modal from './components/Modal';
import React from 'react';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
      <Navbar />
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
    </Switch>
    </div>
    </Router>
  );
}

export default App;
