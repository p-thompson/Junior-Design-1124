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

    public List<User> manualSearchForParent() throws SQLException {
        List<User> matchedVolunteers = new ArrayList<User>();
        String query = 
            "SELECT volunteer.username " +
            "from app_user as volunteer " +
            "join volunteer_days_available on volunteer.username = volunteer_days_available.username " +
            "join task on volunteer_days_available.day_avail = task.day_avail " + 
            "join volunteer_services_provided on volunteer.username = volunteer_services_provided.username " +
            "where (volunteer_days_available.time_begin <= task.time_begin " +
            "and volunteer_days_available.time_end >= task.time_end " +
            "and ((task.service = 'babysit' and volunteer_services_provided.babysit = true) " +
                    "or (task.service = 'tutor' and volunteer_services_provided.tutor = true) " +
                    "or (task.service = 'transportation' and volunteer_services_provided.transportation = true)) " +
            "and task.id = ?)";
        
        Connection connection = dbConnection.getConnection();
        PreparedStatement statement = connection.prepareStatement(query);
        TaskDao taskDao = new TaskDao();
        statement.setInt(1, taskDao.getLatestTaskId());
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