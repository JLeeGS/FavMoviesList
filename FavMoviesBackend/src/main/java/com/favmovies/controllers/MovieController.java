package com.favmovies.controllers;

import com.favmovies.models.Movie;
import com.favmovies.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MovieController {

    @Autowired
    MovieService movieService;

    @GetMapping("/movies")
    public List<Movie> getUsersList(){
        return movieService.getListofMovies();
    }
}
