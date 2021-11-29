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

    public List<User> manualSearchForParent(Task task) throws SQLException {
        List<User> matchedVolunteers = new ArrayList<User>();
        String service = task.getService().name().toLowerCase();
        String serviceQuery = "AND volunteer_services_provided.";
        if (service.equals("babysit")) {
            serviceQuery += "babysit = true)";
        } else if (service.equals("tutor")) {
            serviceQuery += "tutor = true)";
        } else if (service.equals("transportation")) {
            serviceQuery += "transportation = true)";
        } else {
            serviceQuery = ")";
        }

        String query = "SELECT DISTINCT volunteer.username " +
        "FROM app_user as volunteer " +
        "JOIN volunteer_days_available ON volunteer.username = volunteer_days_available.username " +
        "JOIN volunteer_services_provided ON volunteer.username = volunteer_services_provided.username " +
        "WHERE (volunteer_days_available.time_begin <= ? " +
        "AND volunteer_days_available.time_end >= ? " +
        "AND volunteer_days_available.day_avail = ? " +
        serviceQuery;
        Connection connection = dbConnection.getConnection();
        PreparedStatement statement = connection.prepareStatement(query);
        statement.setTime(1, task.getTimeBegin());
        statement.setTime(2, task.getTimeEnd());
        statement.setString(3, task.getDay());
        

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