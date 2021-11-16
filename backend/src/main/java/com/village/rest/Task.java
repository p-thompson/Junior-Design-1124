package com.village.rest;

import java.time.DayOfWeek;

public class Task {
    private int id;
    private String username;
    private DayOfWeek day;
    private String timeBegin;
    private String timeEnd;
    private ServiceType service;

    public Task() {

    }

    public Task(
        int id,
        String username,
        DayOfWeek day,
        String timeBegin,
        String timeEnd,
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

    public DayOfWeek getDay() {
        return this.day;
    }

    public String getTimeBegin() {
        return this.timeBegin;
    }

    public String getTimeEnd() {
        return this.timeEnd;
    }

    public ServiceType getServiceType() {
        return this.service;
    }
}
