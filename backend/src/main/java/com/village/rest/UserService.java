package com.village.rest;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserService {
    private UserDao userDao = new UserDao();

    public void createUser(User user) throws SQLException {
        userDao.createUser(user);
    }

    public void modifyUserBasicInfo(User user) throws SQLException {
        userDao.modifyUserBasicInfo(user);
    }

    public User findUserByUsername(String username) throws SQLException {
        return userDao.findUserByUsername(username);
    }

    public List<User> findConnectionsByID(int id) throws SQLException {
        return userDao.findConnectionsByID(id);
    }

    public List<User> findRequestsByID(int id) throws SQLException {
        return userDao.findRequestsByID(id);
    }

    public void deleteRequestByID(int id1, int id2) throws SQLException {
        userDao.deleteRequestByID(id1, id2);
    }

    public void addConnection(int id1, int id2) throws SQLException {
        userDao.addConnection(id1, id2);
    }

    public void addRequest(int id1, int id2) throws SQLException {
        userDao.addRequest(id1, id2);
    }
}