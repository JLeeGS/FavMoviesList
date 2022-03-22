package com.favmovies.services;

import com.favmovies.models.Movie;
import com.favmovies.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieServiceImpl implements MovieService {

    @Autowired
    public MovieRepository movieRepository;

    @Override
    public List<Movie> getListofMovies() {
        return this.movieRepository.findAll();
    }

    @Override
    public Movie getMovie(long id) {
        Optional<Movie> movieSelected = this.movieRepository.findById(id);
        Movie movie = null;
        if(movieSelected.isPresent()){
            movie = movieSelected.get();
        }
        else{
            throw new RuntimeException("Movie not found "+ id);
        }
        return movie;
    }

    @Override
    public Movie addMovie(Movie movie) {
        return this.movieRepository.save(movie);
    }

    @Override
    public Movie updateMovie(Movie movie) {
        return this.movieRepository.save(movie);
    }

    @Override
    public String deleteMovie(long id) {
        this.movieRepository.deleteById(id);
        return "Deleted movie: "+getMovie(id).getTitle();
    }
}
