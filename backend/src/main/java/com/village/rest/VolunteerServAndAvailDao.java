package com.village.rest;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class VolunteerServAndAvailDao {
    DbConnection dbConnection = new DbConnection();

    public VolunteerServAndAvail getVolunteerServiceAndAvailabilityByUsername(String username) throws SQLException {
        Connection connection = dbConnection.getConnection();
        VolunteerServAndAvail volunteerServAndAvail = new VolunteerServAndAvail();
        volunteerServAndAvail.setUsername(username);
        List<Availability> availabilityList = new ArrayList<Availability>();

        String availQuery = "SELECT * FROM volunteer_days_available WHERE username = ?";
        PreparedStatement availStatement = connection.prepareStatement(availQuery);
        availStatement.setString(1, username);
        ResultSet rs = availStatement.executeQuery();

        while (rs.next()) {
            Availability availability = new Availability();
            availability.setDay(rs.getString("day_avail"));
            availability.setTimeBegin(rs.getTime("time_begin"));
            availability.setTimeEnd(rs.getTime("time_end"));
            availabilityList.add(availability);
        }
        volunteerServAndAvail.setAvailability(availabilityList);

        String servQuery = "SELECT * FROM volunteer_services_provided WHERE username = ?";
        PreparedStatement servStatement = connection.prepareStatement(servQuery);
        servStatement.setString(1, username);
        ResultSet rSet = servStatement.executeQuery();
        if (rSet.next()) {
            volunteerServAndAvail.setTutor(rSet.getBoolean("tutor"));
            volunteerServAndAvail.setBabysit(rSet.getBoolean("babysit"));
            volunteerServAndAvail.setTransportation(rSet.getBoolean("transportation"));
        }
        availStatement.close();
        servStatement.close();
        connection.close();
        return volunteerServAndAvail;
    }

    public void createVolunteerAvailability(Availability availability, String username) throws SQLException {
        Connection connection = dbConnection.getConnection();
        String procedureCall = "CALL add_volunteer_availability(" +
            "?, " + //1. username
            "?, " + //2. day_avail
            "?, " + //3. time_begin
            "?)";   //4. time_end
        PreparedStatement statement = connection.prepareStatement(procedureCall);
        statement.setString(1, username);
        statement.setString(2, availability.getDay());
        statement.setTime(3, availability.getTimeBegin());
        statement.setTime(4, availability.getTimeEnd());

        statement.execute();
        statement.close();
        connection.close();
    }

    public void removeVolunteerAvailability(Availability availability, String username) throws SQLException {
        Connection connection = dbConnection.getConnection();
        String procedureCall = "CALL remove_volunteer_availability(" +
        "?, " + //1. username
        "?, " + //2. day_avail
        "?, " + //3. time_begin
        "?)";   //4. time_end
        PreparedStatement statement = connection.prepareStatement(procedureCall);
        statement.setString(1, username);
        statement.setString(2, availability.getDay());
        statement.setTime(3, availability.getTimeBegin());
        statement.setTime(4, availability.getTimeEnd());

        statement.execute();
        statement.close();
        connection.close();   
    }

    public void alterVolunteerServices(VolunteerServAndAvail servAndAvail) throws SQLException {
        Connection connection = dbConnection.getConnection();
        String procedureCall = "CALL alter_volunteer_services(" +
            "?, " + //1. username
            "?, " + //2. tutor
            "?, " + //3. babysit
            "?)";   //4. transportation
        PreparedStatement statement = connection.prepareStatement(procedureCall);
        statement.setString(1, servAndAvail.getUsername());
        statement.setBoolean(2, servAndAvail.getTutor());
        statement.setBoolean(3, servAndAvail.getBabysit());
        statement.setBoolean(4, servAndAvail.getTransportation());

        statement.execute();
        statement.close();
        connection.close();
        
    }
}
