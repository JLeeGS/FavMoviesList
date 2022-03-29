import React from 'react'
import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import axios from 'axios'
import rsstojson from "rss-to-json"
import Movie from './Movie'

const apiKey = "3deb54e8"
const newMovieString = "https://www.fandango.com/rss/newmovies.rss"

export default function MovieList() {
  const [movies, setMovies] = useState([])
  console.log("smog")
  useEffect(() => {
      const getNewMovies = async () => {
          const result = await rsstojson(newMovieString)
          console.log(result)
          const fetchedMovies = result.items;
          setMovies(fetchedMovies)
      }
      getNewMovies();
  }, [])  
  console.log("ui")
  console.log(movies)
  return (
    <div>
        {movies.map((movie) => {
            return(
                <Movie key={movie.title} movie={movie} /> 
            )
        })}
    </div>
  )
}
