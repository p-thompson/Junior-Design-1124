package com.village.rest;

import java.sql.SQLException;

public class UserService {
    private UserDao userDao = new UserDao(new DbConnection(), new UserRowMapper());

    public void createUser(User user) throws SQLException {
        userDao.createUser(user);
    }

    public void modifyUserBasicInfo(User user) throws SQLException {
        userDao.modifyUserBasicInfo(user);
    }

    public void modifyBio(String username, String bio) throws SQLException {
        userDao.modifyBio(username, bio);
    }

    public User findUserByUsername(String username) throws SQLException {
        return userDao.findUserByUsername(username);
    }

    /*
    public User findParentByUsername(String username) throws SQLException {
        return userDao.findParentByUsername(username);
    }

    public User findVolunteerByUsername(String username) throws SQLException {
        return userDao.findParentByUsername(username);
    }
    */
}