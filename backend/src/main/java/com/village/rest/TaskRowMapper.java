package com.village.rest;

import java.sql.ResultSet;
import java.sql.SQLException;

public class TaskRowMapper {
    
    public Task mapRow(ResultSet rs) throws SQLException {
        Task task = new Task();
        if (rs.next()) {
            task.setId(rs.getInt("id"));
            task.setUsername(rs.getString("username"));
            task.setDay(rs.getString("day_avail"));
            task.setTimeBegin(rs.getTime("time_begin"));
            task.setTimeEnd(rs.getTime("time_end"));
            String service = rs.getString("service");
            switch(service) {
                case "tutor":
                    task.setService(ServiceType.TUTOR);
                case "babysit":
                    task.setService(ServiceType.BABYSIT);
                case "transportation":
                    task.setService(ServiceType.TRANSPORTATION);
                default:
                    task.setService(null);
            }
            return task;
        }
        return null;   
    }

}

