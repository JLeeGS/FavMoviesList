import React from 'react'
import MovieList from './MovieList'
import Navbar from './Navbar'
import { Paper } from '@mui/material'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <MovieList/>
    </div>
  )
}
