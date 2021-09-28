package com.village.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.village.entity.User;

@RepositoryRestResource(path = "/users")
public interface UserRepo extends JpaRepository<User, String> {
    
}
