package com.favmovies.services;

import com.favmovies.models.Movie;

import java.util.List;

public interface MovieService {
    public List<Movie> getListofMovies();
    public Movie getMovie(long id);
    public Movie addMovie(Movie movie);
    public Movie updateMovie(Movie movie);
    public String deleteMovie(long id);
}
