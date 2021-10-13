package com.village;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDao {
    private DbConnection dbConnection;
    private UserRowMapper rowMapper;

    public UserDao(DbConnection dbConnection, UserRowMapper rowMapper) {
        this.dbConnection = dbConnection;
        this.rowMapper = rowMapper;
    }

    public void createUser(User user) throws SQLException{
        String procedureCall;
        if (user.getUserType() == UserType.PARENT) {
            procedureCall = "CALL register_parent(";
        } else {
            procedureCall = "CALL register_volunteer(";
        }
        procedureCall = procedureCall +
                "?, " +     // 1. username
                "?, " +     // 2. password
                "?, " +     // 3. first_name
                "?, " +     // 4. last_name
                "?, " +     // 5. zipcode
                "?, " +     // 6. state
                "?, " +     // 7. city
                "?, " +     // 8. street
                "?, " +     // 9. cell
                "?) ";      //10. email
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

        statement.execute();
        statement.close();
        connection.close();
    }

    public void modifyUser(User user) throws SQLException{
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
                "?) ";      //11. email
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

        statement.execute();
        statement.close();

        if (user.getUserType() == UserType.PARENT) {
            String parentCall = 
            "CALL alter_info_parent(" +
            "?, " + //1.username
            "?)";   //2.bio
            PreparedStatement parentStatement = connection.prepareStatement(parentCall);
            parentStatement.setString(1, user.getUsername());
            parentStatement.setString(2, user.getBio());
            parentStatement.execute();
            parentStatement.close();
        } else if (user.getUserType() == UserType.VOLUNTEER) {
            String volunteerCall = 
            "CALL alter_info_volunteer(" +
            "?, " + //1.username
            "?)";   //2.bio

            PreparedStatement volunteerStatement = connection.prepareStatement(volunteerCall);
            volunteerStatement.setString(1, user.getUsername());
            volunteerStatement.setString(2, user.getBio());
            volunteerStatement.execute();
            volunteerStatement.close();
        }
        connection.close();
    }

    public User findParentByUsername(String username) throws SQLException {
        Connection connection = dbConnection.getConnection();
        String query = getGeneralUserQuery();
        query = query +
            " JOIN parent" +
            "   ON app_user.username = parent.username "+
            "WHERE app_user.username = ?";
        PreparedStatement statement = connection.prepareStatement(query);
        
        statement.setString(1, username);
        ResultSet rs = statement.executeQuery();
        User user = rowMapper.mapRow(rs, UserType.PARENT);
        statement.close();
        connection.close();
        return user;
    }

    public User findVolunteerByUsername(String username) throws SQLException {
        Connection connection = dbConnection.getConnection();
        String query = getGeneralUserQuery();
        query = query +
            " JOIN volunteer" +
            "   ON app_user.username = volunteer.username "+
            "WHERE app_user.username = ?";
        PreparedStatement statement = connection.prepareStatement(query);
        
        statement.setString(1, username);
        ResultSet rs = statement.executeQuery();
        User user = rowMapper.mapRow(rs, UserType.VOLUNTEER);
        statement.close();
        connection.close();
        return user;
    }

    private String getGeneralUserQuery() {
        String query = 
            "SELECT id," +
            "       app_user.username, " +
            "       pass, " +
            "       first_name, " +
            "       last_name, " +
            "       zip, " +
            "       state, " +
            "       city, " +
            "       street, " +
            "       cell, " +
            "       email, " +
            "       bio" +
            "  FROM app_user ";
        return query;
    }
}