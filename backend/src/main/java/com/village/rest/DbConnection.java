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
        try {
            Class.forName("com.example.jdbc.Driver");
        }  catch (Exception e) {
            System.out.println("Error");
            e.printStackTrace();
        }
        
        /*
        try {
            Connection connection = DriverManager.getConnection(url, username, password);
            System.out.println("Connected successfully");
            String sql = "Call register_parent(?, 'pass1234567890', 'Alyssa', 'Behrend', '30308','GA','Atlanta','77 Ferst Drive', '594-438-8495', 'email@email.com')";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setString(1, "sbehrend");
            statement.execute();
            ResultSet rs2 = statement.executeQuery("Select username from app_user");
            while ( rs2.next() ) {
                String firstName = rs2.getString("username");
                System.out.println(firstName);
            }
        } catch (Exception e) {
            System.out.println("Error");
            e.printStackTrace();
        }
        */
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