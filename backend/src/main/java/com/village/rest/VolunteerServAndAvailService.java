package com.village.rest;

import java.sql.SQLException;

public class VolunteerServAndAvailService {
    private VolunteerServAndAvailDao dao = new VolunteerServAndAvailDao();

    public VolunteerServAndAvail getVolunteerServAndAvailByUsername(String username) throws SQLException {
        return dao.getVolunteerServiceAndAvailabilityByUsername(username);
    }
}
