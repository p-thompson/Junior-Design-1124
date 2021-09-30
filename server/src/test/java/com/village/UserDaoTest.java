package server.src.test.java.com.village;

import java.sql.SQLException;

import org.junit.BeforeClass;
import org.junit.Test;

import server.src.main.java.com.village.DbConnection;
import server.src.main.java.com.village.User;
import server.src.main.java.com.village.UserDao;
import server.src.main.java.com.village.UserType;

public class UserDaoTest {
    public static UserDao userDao;

    @BeforeClass
    public static void testSetup() {
        userDao = new UserDao(new DbConnection());
    }

    @Test
    public void testCreateUser() throws SQLException {
        User testUser = new User("ab24","pass", "Andrew", "Burns",
                            30318, "GA", "Atlanta", "389 Place Place", "493-546-4902", "imab@gmail.com", UserType.PARENT);
        userDao.createUser(testUser);
    }

}