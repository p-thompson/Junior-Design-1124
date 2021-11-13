package com.village.rest;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class SearchDao {
    private DbConnection dbConnection = new DbConnection();
    private UserDao userDao = new UserDao();


    public List<User> automaticSearchForParent(String username) throws SQLException {
        List<User> matchedVolunteers = new ArrayList<User>();
        String procedureCall = "CALL parent_automatic_matching(?)";
        Connection connection = dbConnection.getConnection();
        PreparedStatement statement = connection.prepareStatement(procedureCall);
        statement.setString(1, username);
        
        ResultSet rs = statement.executeQuery();

        while (rs.next()) {
            User user = userDao.findUserByUsername(rs.getString("username"));
            matchedVolunteers.add(user);
        }
        statement.close();
        connection.close();
        return matchedVolunteers;
    }
}