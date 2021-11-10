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

    public User findUserByUsername(String username) throws SQLException {
        return userDao.findUserByUsername(username);
    }
}