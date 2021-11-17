package com.village.rest;

import java.sql.SQLException;
import java.util.List;

public class TaskService {
    private TaskDao taskDao = new TaskDao();

    public void createTask(Task task) throws SQLException {
        taskDao.createTask(task);
    }

    public void removeTask(Task task) throws SQLException {
        taskDao.removeTask(task);
    }

    public Task getById(int id) throws SQLException {
        return taskDao.getById(id);
    }

    public List<Task> getTasksByUsername(String username) throws SQLException {
        return taskDao.getTasksByUsername(username);
    }
}
