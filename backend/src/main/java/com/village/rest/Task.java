package com.village.rest;

import java.sql.Time;
import java.time.DayOfWeek;

public class Task {
    private int id;
    private String username;
    private String day;
    private Time timeBegin;
    private Time timeEnd;
    private ServiceType service;

    public Task() {

    }

    public Task(
        int id,
        String username,
        String day,
        Time timeBegin,
        Time timeEnd,
        ServiceType service
    ) {
        this.id = id;
        this.username = username;
        this.day = day;
        this.timeBegin = timeBegin;
        this.timeEnd = timeEnd;
        this.service = service;
    }

    public int getId() {
        return this.id;
    }

    public String getUsername() {
        return this.username;
    }

    public String getDay() {
        return this.day;
    }

    public Time getTimeBegin() {
        return this.timeBegin;
    }

    public Time getTimeEnd() {
        return this.timeEnd;
    }

    public ServiceType getService() {
        return this.service;
    }

    public void setId(int id) {
        this.id = id;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public void setDay(String day) {
        this.day = day;
    }
    public void setTimeBegin(Time timeBegin) {
        this.timeBegin = timeBegin;
    }
    public void setTimeEnd(Time timeEnd) {
        this.timeEnd = timeEnd;
    }
    public void setService(ServiceType service) {
        this.service = service;
    }
}
