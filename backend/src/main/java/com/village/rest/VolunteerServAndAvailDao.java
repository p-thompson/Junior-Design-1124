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
}
