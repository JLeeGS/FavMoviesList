package com.favmovies.services;

import com.favmovies.models.User;
import com.favmovies.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    public UserRepository userRepository;

    @Override
    public List<User> getListofUsers() {
        return this.userRepository.findAll();
    }

    @Override
    public User getUser(long id) {
        Optional<User> userSelected= this.userRepository.findById(id);
        User user =null;
        if(userSelected.isPresent()){
            user = userSelected.get();
        }
        else{
            throw new RuntimeException("User Not Found "+id);
        }
        return user;
    }

    @Override
    public User addUser(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public User updateUser(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public String deleteUser(long id) {
        userRepository.deleteById(id);
        return "Deleted User: "+id;
    }
}