package com.village.rest;

import java.sql.SQLException;

public class UserService {
    private UserDao userDao = new UserDao(new DbConnection(), new UserRowMapper());

    public void createUser(User user) throws SQLException {
        userDao.createUser(user);
    }

    public void modifyUser(User user) throws SQLException {
        userDao.modifyUser(user);
    }

    public User findParentByUsername(String username) throws SQLException {
        return userDao.findParentByUsername(username);
    }

    public User findVolunteerByUsername(String username) throws SQLException {
        return userDao.findVolunteerByUsername(username);
    }
}