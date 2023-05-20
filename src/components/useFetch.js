import React from 'react'
import {useState,useEffect} from 'react'

const useFetch = (url) => {
    const [movies, setMovies] = useState(null)
    
    useEffect(() => {
        fetch(url)
          .then(res => {
            if(!res.ok)
            console.log("no");
            return res.json();
          })
          .then(data => {
            setMovies(data.results)

   })
      }, [url])

      return movies
}

export default useFetch
