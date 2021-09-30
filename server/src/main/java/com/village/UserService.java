package server.src.main.java.com.village;

import java.sql.SQLException;

public class UserService {
    private UserDao userDao;

    public void createUser(User user) throws SQLException {
        userDao.createUser(user);
    }
}