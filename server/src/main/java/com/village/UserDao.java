package com.village;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class UserDao {
    private DbConnection dbConnection;

    public UserDao(DbConnection dbConnection) {
        this.dbConnection = dbConnection;
    }

    public void createUser(User user) throws SQLException{
        String procedureCall;
        if (user.getUserType() == UserType.PARENT) {
            procedureCall = "CALL register_parent(";
        } else {
            procedureCall = "CALL register_volunteer(";
        }
        procedureCall = procedureCall +
                "?, " +     // 1. username
                "?, " +     // 2. password
                "?, " +     // 3. first_name
                "?, " +     // 4. last_name
                "?, " +     // 5. zipcode
                "?, " +     // 6. state
                "?, " +     // 7. city
                "?, " +     // 8. street
                "?, " +     // 9. cell
                "?) ";      //10. email
        Connection connection = dbConnection.getConnection();
        PreparedStatement statement = connection.prepareStatement(procedureCall);
        statement.setString(1, user.getUsername());
        statement.setString(2, user.getPassword());
        statement.setString(3, user.getFirstName());
        statement.setString(4, user.getLastName());
        statement.setInt(5, user.getZipcode());
        statement.setString(6, user.getState());
        statement.setString(7, user.getCity());
        statement.setString(8, user.getStreet());
        statement.setString(9, user.getCell());
        statement.setString(10, user.getEmail());

        statement.execute();
        statement.close();
        connection.close();
    }
}