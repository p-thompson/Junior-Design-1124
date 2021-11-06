package com.village;

import java.sql.SQLException;

import com.village.rest.DbConnection;
import com.village.rest.User;
import com.village.rest.UserDao;
import com.village.rest.UserRowMapper;
import com.village.rest.UserType;

import org.junit.BeforeClass;
import org.junit.Test;


public class UserDaoTest {
    public static UserDao userDao;
    private static User testParent;
    private static User testVolunteer;

    @BeforeClass
    public static void testSetup() {
      userDao = new UserDao(new DbConnection(), new UserRowMapper());
      testParent = new User(5, "ab24","pass", "Andrew", "Burns",
        30318, "GA", "Atlanta", "389 Place Place", "493-546-4902", "imab@gmail.com", " ", UserType.PARENT);
      testVolunteer = new User(6, "ff8", "pass","francis", "frog", 
        35754, "GA", "Atl", "545 the pond", "454-545-3433", "froog@gmail.com", "I am not a frog.", UserType.VOLUNTEER);
    }

    @Test
    public void testCreateUser() throws SQLException {
      userDao.createUser(testParent);
      userDao.createUser(testVolunteer);
    }

    @Test
    public void testModifyUserBasicInfo() throws SQLException {
        testVolunteer.setEmail("frog@gmail.com");
        userDao.modifyUserBasicInfo(testVolunteer);
    }

    @Test 
    public void testModifyBio() throws SQLException {
      testParent.setBio("I am a cool guy.");
      userDao.modifyBio(testParent.getUsername(), testParent.getBio());
    }

    @Test
    public void testFindUserByUsername() throws SQLException {
        User user = userDao.findUserByUsername("ab24");
        System.out.println("found " + user.getFirstName() + " " + user.getLastName());
    }

    /*
    @Test
    public void testFindParentByUsername() throws SQLException {
      User user = userDao.findParentByUsername("ab24");
      System.out.println(user.getBio());
    }

    @Test
    public void testFindVolunteerByUsername() throws SQLException {
      // userDao.createUser(testVolunteer);
      User user = userDao.findVolunteerByUsername("ff8");
      System.out.println(user.getStreet());
    }
    */
}
