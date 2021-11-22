package com.village.rest;

import java.sql.SQLException;

public class VolunteerServAndAvailService {
    private VolunteerServAndAvailDao dao = new VolunteerServAndAvailDao();

    public VolunteerServAndAvail getVolunteerServAndAvailByUsername(String username) throws SQLException {
        return dao.getVolunteerServiceAndAvailabilityByUsername(username);
    }

    public void createVolunteerAvailability(Availability availability, String username) throws SQLException {
        dao.createVolunteerAvailability(availability, username);
    }

    public void removeVolunteerAvailability(Availability availability, String username) throws SQLException {
        dao.removeVolunteerAvailability(availability, username);
    }

    public void alterVolunteerServices(VolunteerServAndAvail servAndAvail) throws SQLException {
        dao.alterVolunteerServices(servAndAvail);
    }
}
