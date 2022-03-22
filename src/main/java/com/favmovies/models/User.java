package com.favmovies.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="USER")
public class User {
    @Id
    @Column(name="userId", unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="fname")
    private String fname;
    @Column(name="lname")
    private String lname;
    @Column(name="email")
    private String email;
    @OneToMany(mappedBy = "user")
    private List<Movie> movies;

    public long getId() {
        return id;
    }
    public void setId(long userId) {
        this.id = userId;
    }
    public String getFname() {
        return fname;
    }
    public void setFname(String fname) {
        this.fname = fname;
    }
    public String getLname() {
        return lname;
    }
    public void setLname(String lname) {
        this.lname = lname;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public List<Movie> getMovies() {
        return movies;
    }
    public void setMovies(List<Movie> movies) {
        this.movies = movies;
    }

    public User(){
        super();
    }
    public User(long userId, String fname, String lname, String email, List<Movie> movies) {
        this.id = userId;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.movies = movies;
    }
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                ", email='" + email + '\'' +
                ", movies='" + movies + '\'' +
                '}';
    }
}
