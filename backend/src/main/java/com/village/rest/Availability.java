package com.village.rest;

import java.sql.Time;

public class Availability {
    private String day;
    private Time timeBegin;
    private Time timeEnd;


    public Availability() {
    }

    public Availability(String day, Time timeBegin, Time timeEnd) {
        this.day = day;
        this.timeBegin = timeBegin;
        this.timeEnd = timeEnd;
    }

    public String getDay() {
        return this.day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public Time getTimeBegin() {
        return this.timeBegin;
    }

    public void setTimeBegin(Time timeBegin) {
        this.timeBegin = timeBegin;
    }

    public Time getTimeEnd() {
        return this.timeEnd;
    }

    public void setTimeEnd(Time timeEnd) {
        this.timeEnd = timeEnd;
    }

}
