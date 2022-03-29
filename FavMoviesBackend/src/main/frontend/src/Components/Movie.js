import React from 'react'
import { Paper } from '@mui/material'
import { Typography } from '@mui/material';

const divStyle = {
    padding: "10px",
    marginTop: "15px",
    marginBottom: "15px",
    backgroundColor: "black"
}

export default function Movie(props) {
    let movie = props.movie;
  return (
    <div>
        <Paper elevation={5} style={divStyle}>
            <div id="poster-and-title">
                <Typography color="white" variant="h6">{movie.title}</Typography><br></br>
                <img
                    src={movie.enclosures[0].url}
                    alt={movie.title}
                    loading="lazy"
                />
            </div>
            
        </Paper>
    </div>
  )
}
