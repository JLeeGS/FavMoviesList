package com.favmovies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@SpringBootApplication
@ComponentScan({"com.genspark.springbootPractice.services","com.genspark.springbootPractice.repositories"})
public class Main {
	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}
}
