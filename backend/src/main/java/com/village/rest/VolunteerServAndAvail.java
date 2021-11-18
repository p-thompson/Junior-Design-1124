package com.village.rest;

import java.util.List;

public class VolunteerServAndAvail {
    private String username;
    private List<Availability> availability;
    private boolean tutor;
    private boolean babysit;
    private boolean transportation;


    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<Availability> getAvailability() {
        return this.availability;
    }

    public void setAvailability(List<Availability> availability) {
        this.availability = availability;
    }

    public boolean isTutor() {
        return this.tutor;
    }

    public boolean getTutor() {
        return this.tutor;
    }

    public void setTutor(boolean tutor) {
        this.tutor = tutor;
    }

    public boolean isBabysit() {
        return this.babysit;
    }

    public boolean getBabysit() {
        return this.babysit;
    }

    public void setBabysit(boolean babysit) {
        this.babysit = babysit;
    }

    public boolean isTransportation() {
        return this.transportation;
    }

    public boolean getTransportation() {
        return this.transportation;
    }

    public void setTransportation(boolean transportation) {
        this.transportation = transportation;
    }

}
