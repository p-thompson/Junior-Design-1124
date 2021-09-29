package server;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbConnection{
     
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/demo_app";
        String username = "root";
        String password = "alyssa";

        try {
            Connection connection = DriverManager.getConnection(url, username, password);
            System.out.println("Connected successfully");
        } catch (Exception e) {
            System.out.println("Error");
            e.printStackTrace();
        }
    }
}