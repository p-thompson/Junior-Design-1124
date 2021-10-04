package demo.src.main.java;

import java.sql.SQLException;

import javax.json.bind.JsonbBuilder;

public class UserService {
    private UserDao userDao;

    public void createUser(User user) throws SQLException {
        userDao.createUser(user);
    }

    public String toJson(String message) {
        return message;
    }
}