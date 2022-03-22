package com.favmovies.models;

import javax.persistence.*;

@Entity
@Table(name="MOVIES")
public class Movie {

    @Id
    @Column(name="movieId", unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="imdbId")
    private String imdbId;
    @Column(name="title")
    private String title;
    @Column(name="year")
    private String year;
    @Column(name="type")
    private String type;
    @Column(name="poster")
    private String poster;
    @ManyToOne
    @JoinColumn(name="userId", nullable = false)
    private User user;

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getYear() {
        return year;
    }
    public void setYear(String year) {
        this.year = year;
    }
    public String getImdbId() {
        return imdbId;
    }
    public void setImdbId(String imdbId) {
        this.imdbId = imdbId;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getPoster() {
        return poster;
    }
    public void setPoster(String poster) {
        this.poster = poster;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    public Movie(String title, String year, String imdbId, String type, String poster) {
        this.title = title;
        this.year = year;
        this.imdbId = imdbId;
        this.type = type;
        this.poster = poster;
    }
    public Movie(String title, String year, String imdbId, String type, String poster, User user) {
        this.title = title;
        this.year = year;
        this.imdbId = imdbId;
        this.type = type;
        this.poster = poster;
        this.user = user;
    }
}
