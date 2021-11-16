package com.village.rest;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class TaskDao {
    private DbConnection dbConnection = new DbConnection();

    public void createTask(Task task) throws SQLException {
        Connection connection = dbConnection.getConnection();
        String procedureCall = "CALL add_task(" +
            "?, " + // 1. username
            "?, " + // 2. day_avail
            "?, " + // 3.time_begin
            "?, " + // 4. time_end
            "?)";   // 5. service
        PreparedStatement statement = connection.prepareStatement(procedureCall);
        statement.setString(1, task.getUsername());
        statement.setString(2, task.getDay());
        statement.setTime(3, task.getTimeBegin());
        statement.setTime(4, task.getTimeEnd());
        statement.setString(5, task.getService().name());

        statement.execute();
        statement.close();
        connection.close();
    }

    public void removeTask(Task task) throws SQLException {
        Connection connection = dbConnection.getConnection();
        String procedureCall = "CALL remove_task(?)";
        PreparedStatement statement = connection.prepareStatement(procedureCall);
        statement.setInt(1, task.getId());
        statement.execute();
        statement.close();
        connection.close();
    }
}
