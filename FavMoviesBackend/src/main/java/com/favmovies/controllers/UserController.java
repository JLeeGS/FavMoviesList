package com.favmovies.controllers;

import com.favmovies.models.User;
import com.favmovies.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getUsersList(){
        return userService.getListofUsers();
    }

    @GetMapping("/users/{id}")
    public User getUserFromId(@PathVariable String id){
        return this.userService.getUser(Long.parseLong(id));
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user){
        return this.userService.addUser(user);
    }

    @PutMapping("/users")
    public User updateUser(@RequestBody User user){return this.userService.addUser(user);}

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable String id){return this.userService.deleteUser(Long.parseLong(id));}
}
