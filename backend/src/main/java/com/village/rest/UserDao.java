package com.village.rest;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserDao {
    private DbConnection dbConnection = new DbConnection();
    private UserRowMapper rowMapper = new UserRowMapper();

    public void createUser(User user) throws SQLException{
        String procedureCall = "CALL register_user(" +
                "?, " +     // 1. username
                "?, " +     // 2. password
                "?, " +     // 3. first_name
                "?, " +     // 4. last_name
                "?, " +     // 5. zipcode
                "?, " +     // 6. state
                "?, " +     // 7. city
                "?, " +     // 8. street
                "?, " +     // 9. cell
                "?, " +     //10. email
                "?)";       //11. user_type
        Connection connection = dbConnection.getConnection();
        PreparedStatement statement = connection.prepareStatement(procedureCall);
        statement.setString(1, user.getUsername());
        statement.setString(2, user.getPassword());
        statement.setString(3, user.getFirstName());
        statement.setString(4, user.getLastName());
        statement.setInt(5, user.getZipcode());
        statement.setString(6, user.getState());
        statement.setString(7, user.getCity());
        statement.setString(8, user.getStreet());
        statement.setString(9, user.getCell());
        statement.setString(10, user.getEmail());
        statement.setString(11, user.getUserType().name());

        statement.execute();
        statement.close();
        connection.close();
    }

    public void modifyUserBasicInfo(User user) throws SQLException{
        Connection connection = dbConnection.getConnection();  
        String procedureCall = 
        "CALL alter_info(" +
                "?, " +     // 1. id
                "?, " +     // 2. username
                "?, " +     // 3. password
                "?, " +     // 4. first_name
                "?, " +     // 5. last_name
                "?, " +     // 6. zipcode
                "?, " +     // 7. state
                "?, " +     // 8. city
                "?, " +     // 9. street
                "?, " +     //10. cell
                "?, " +     //11. email
                "?)";       //12. bio
        PreparedStatement statement = connection.prepareStatement(procedureCall);
        statement.setInt(1, user.getId());
        statement.setString(2, user.getUsername());
        statement.setString(3, user.getPassword());
        statement.setString(4, user.getFirstName());
        statement.setString(5, user.getLastName());
        statement.setInt(6, user.getZipcode());
        statement.setString(7, user.getState());
        statement.setString(8, user.getCity());
        statement.setString(9, user.getStreet());
        statement.setString(10, user.getCell());
        statement.setString(11, user.getEmail());
        statement.setString(12, user.getBio());

        statement.execute();
        statement.close();
        connection.close();
    }

    public User findUserByUsername(String username) throws SQLException {
        Connection connection = dbConnection.getConnection();
        String query = getGeneralUserQuery();
        query = query + "WHERE app_user.username = ?";
        PreparedStatement statement = connection.prepareStatement(query);
        statement.setString(1, username);
        ResultSet rs = statement.executeQuery();
        User user = rowMapper.mapRow(rs);
        statement.close();
        connection.close();
        return user;
    }

    public User findUserByID(int id) throws SQLException {
        Connection connection = dbConnection.getConnection();
        String query = getGeneralUserQuery();
        query = query + "WHERE app_user.id = ?";
        PreparedStatement statement = connection.prepareStatement(query);
        statement.setString(1, (id + ""));
        ResultSet rs = statement.executeQuery();
        User user = rowMapper.mapRow(rs);
        statement.close();
        connection.close();
        return user;
    }

    private String getGeneralUserQuery() {
        String query = 
            "SELECT id," +
            "       username, " +
            "       pass, " +
            "       first_name, " +
            "       last_name, " +
            "       zip, " +
            "       state, " +
            "       city, " +
            "       street, " +
            "       cell, " +
            "       email, " +
            "       bio," +
            "       user_type" +
            "  FROM app_user ";
        return query;
    }

    private String getGeneralConnectionQuery() {
        String query = 
            "SELECT curr_user," +
            "       connected" +
            "  FROM connections ";
        return query;
    }

    private String getGeneralRequestQuery() {
        String query = 
            "SELECT curr_user," +
            "       requester" +
            "  FROM requests ";
        return query;
    }

    public List<User> findConnectionsByID(int id) throws SQLException {
        Connection connection = dbConnection.getConnection();
        List<User> matchedConnections = new ArrayList<User>();
        String query = getGeneralConnectionQuery();
        query = query + "WHERE connections.curr_user = ?";
        PreparedStatement statement = connection.prepareStatement(query);
        statement.setString(1, (id + ""));   
        ResultSet rs = statement.executeQuery();

        while (rs.next()) {
            User user = findUserByID(rs.getInt("connected"));
            matchedConnections.add(user);
        }
        statement.close();
        connection.close();
        return matchedConnections;
    }

    public List<User> findRequestsByID(int id) throws SQLException {
        Connection connection = dbConnection.getConnection();
        List<User> matchedRequests = new ArrayList<User>();
        String query = getGeneralRequestQuery();
        query = query + "WHERE requests.curr_user = ?";
        PreparedStatement statement = connection.prepareStatement(query);
        statement.setString(1, (id + ""));   
        ResultSet rs = statement.executeQuery();

        while (rs.next()) {
            User user = findUserByID(rs.getInt("requester"));
            matchedRequests.add(user);
        }
        statement.close();
        connection.close();
        return matchedRequests;
    }

    public void deleteRequestByID(int id1, int id2) throws SQLException {
        Connection connection = dbConnection.getConnection();  
        String procedureCall = 
        "CALL remove_requester(" +
                "?, " +     // 1. id1
                "?)";       // 2. id2
        PreparedStatement statement = connection.prepareStatement(procedureCall);
        statement.setInt(1, id1);
        statement.setInt(2, id2);
        
        statement.execute();
        statement.close();
        connection.close();
    }

    public void addConnection(int id1, int id2) throws SQLException {
        Connection connection = dbConnection.getConnection();  
        String procedureCall = 
        "CALL add_connection(" +
                "?, " +     // 1. id1
                "?)";       // 2. id2
        PreparedStatement statement = connection.prepareStatement(procedureCall);
        statement.setInt(1, id1);
        statement.setInt(2, id2);
        
        statement.execute();
        statement.close();
        connection.close();
    }

    public void addRequest(int id1, int id2) throws SQLException {
        Connection connection = dbConnection.getConnection();  
        String procedureCall = 
        "CALL add_requester(" +
                "?, " +     // 1. id1
                "?)";       // 2. id2
        PreparedStatement statement = connection.prepareStatement(procedureCall);
        statement.setInt(1, id1);
        statement.setInt(2, id2);
        
        statement.execute();
        statement.close();
        connection.close();
    }
}