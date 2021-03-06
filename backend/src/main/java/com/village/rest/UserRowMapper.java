package com.village.rest;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserRowMapper {
    public User mapRow(ResultSet rs) throws SQLException {
        int id;
        String username;
        String password;
        String firstName;
        String lastName;
        Integer zipcode;
        String state;
        String city;
        String street;
        String cell;
        String email;
        String bio;
        UserType userType;

        if (rs.next()) {
            id = rs.getInt("id");
            username = rs.getString("username");
            password = rs.getString("pass");
            firstName = rs.getString("first_name");
            lastName = rs.getString("last_name");
            zipcode = rs.getInt("zip");
            state = rs.getString("state");
            city = rs.getString("city");
            street = rs.getString("street");
            cell = rs.getString("cell");
            email = rs.getString("email");
            bio = rs.getString("bio");
            String userTypeString = rs.getString("user_type");
            if (userTypeString.equals("parent")) {
                userType = UserType.PARENT;
            } else {
                userType = UserType.VOLUNTEER;
            }
            return new User(id, username, password, firstName, lastName, zipcode, state, city, street, cell, email, bio, userType);
        }
      return null;
    } 
}
