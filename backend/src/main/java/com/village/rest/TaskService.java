package com.village.rest;

import java.sql.SQLException;

public class TaskService {
    private TaskDao taskDao = new TaskDao();

    public void createTask(Task task) throws SQLException {
        taskDao.createTask(task);
    }

    public void removeTask(Task task) throws SQLException {
        taskDao.removeTask(task);
    }
}
