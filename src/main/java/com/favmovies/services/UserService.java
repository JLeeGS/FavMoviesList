package com.favmovies.services;

import com.favmovies.models.User;

import java.util.List;

public interface UserService {
    public List<User> getListofUsers();
    public User getUser(long id);
    public User addUser(User user);
    public User updateUser(User user);
    public String deleteUser(long id);
}
