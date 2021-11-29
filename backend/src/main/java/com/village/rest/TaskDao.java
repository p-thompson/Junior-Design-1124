package com.village.rest;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class TaskDao {
    private DbConnection dbConnection = new DbConnection();
    private TaskRowMapper rowMapper = new TaskRowMapper();

    public void createTask(Task task) throws SQLException {
        Connection connection = dbConnection.getConnection();
        String procedureCall = "CALL add_task(" +
            "?, " + // 1. username
            "?, " + // 2. day_avail
            "?, " + // 3. time_begin
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

    public Task getById(int id) throws SQLException {
        Connection connection = dbConnection.getConnection();
        String query = "SELECT * FROM task WHERE task.id = ?";
        PreparedStatement statement = connection.prepareStatement(query);
        statement.setInt(1, id);
        ResultSet rs = statement.executeQuery();
        Task task = rowMapper.mapRow(rs);
        statement.close();
        connection.close();
        return task;
    }

    public List<Task> getTasksByUsername(String username) throws SQLException {
        List<Task> tasks = new ArrayList<Task>();
        Connection connection = dbConnection.getConnection();
        String query = "SELECT id FROM task WHERE username = ?";
        PreparedStatement statement = connection.prepareStatement(query);
        statement.setString(1, username);
        ResultSet rs = statement.executeQuery();
        while (rs.next()) {
            Task task = getById(rs.getInt("id"));
            tasks.add(task);
        }
        statement.close();
        connection.close();
        return tasks;
    }
}
