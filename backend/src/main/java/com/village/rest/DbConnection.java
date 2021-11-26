package com.village.rest;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;;

public class DbConnection {

    private static final String url = "jdbc:mysql://localhost:3306/demo_app";
    private static final String username = "root";
    private static final String password = "alyssa";
    
    public DbConnection() {

    }
    public static void main(String[] args) {
    }
    public Connection getConnection() throws SQLException {
        return DriverManager.getConnection(url, username, password);
    } 

    public void callProcedure(String procedureCall) throws SQLException{
        Connection connection = DriverManager.getConnection(url, username, password);
        Statement statement = connection.createStatement();
        statement.executeQuery(procedureCall);
    }
}