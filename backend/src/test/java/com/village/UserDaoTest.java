// package com.village;

// import java.sql.SQLException;

// import com.google.gson.Gson;
// import com.village.rest.User;
// import com.village.rest.UserDao;
// import com.village.rest.UserType;

// import org.junit.BeforeClass;
// import org.junit.Test;


// public class UserDaoTest {
//     public static UserDao userDao;
//     private static User testParent;
//     private static User testVolunteer;

//     @BeforeClass
//     public static void testSetup() {
//       userDao = new UserDao();
//       testParent = new User(5, "ab24","pass", "Andrew", "Burns",
//         30318, "GA", "Atlanta", "389 Place Place", "493-546-4902", "imab@gmail.com", " ", UserType.PARENT);
//       testVolunteer = new User(6, "ff8", "pass","francis", "frog", 
//         35754, "GA", "Atl", "545 the pond", "454-545-3433", "froog@gmail.com", "I am not a frog.", UserType.VOLUNTEER);
//     }

//     @Test
//     public void testCreateUser() throws SQLException {
//       userDao.createUser(testParent);
//       userDao.createUser(testVolunteer);
//     }

//     @Test
//     public void testModifyUserBasicInfo() throws SQLException {
//         testVolunteer.setEmail("frog@gmail.com");
//         userDao.modifyUserBasicInfo(testVolunteer);
//     }

//     @Test 
//     public void testModifyBio() throws SQLException {
//       testParent.setBio("I am a cool guy.");
//       userDao.modifyUserBasicInfo(testParent);
//     }

//     @Test
//     public void testFindUserByUsername() throws SQLException {
//         User user = userDao.findUserByUsername("janedoe34");
//         System.out.println("found " + user.getFirstName() + " " + user.getLastName());
//         Gson g = new Gson();
//         System.out.println(g.toJson(user));
//     }
//  }
