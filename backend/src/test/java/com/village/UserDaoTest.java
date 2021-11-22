// package com.village;

// import java.sql.SQLException;
// import java.sql.Time;

// import com.google.gson.Gson;
// import com.village.rest.Availability;
// import com.village.rest.User;
// import com.village.rest.UserDao;
// import com.village.rest.UserType;
// import com.village.rest.VolunteerServAndAvail;
// import com.village.rest.VolunteerServAndAvailDao;

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

//     @Test
//     public void testGetVolunteerServAndAvail() throws SQLException {
//         VolunteerServAndAvailDao dao = new VolunteerServAndAvailDao();
//         VolunteerServAndAvail servAndAvail = dao.getVolunteerServiceAndAvailabilityByUsername("bobwilson88");
//         Gson g = new Gson();
//         System.out.println(g.toJson(servAndAvail));
//     }

//     @Test
//     public void testAddAvailability() throws SQLException {
//         Availability availability = new Availability("Saturday", Time.valueOf("11:00:00"), Time.valueOf("12:00:00"));
//         VolunteerServAndAvailDao dao = new VolunteerServAndAvailDao();
//         dao.createVolunteerAvailability(availability, "annasmith20");
//     }

//     @Test
//     public void testRemoveAvailability() throws SQLException {
//         Availability availability = new Availability("Saturday", Time.valueOf("11:00:00"), Time.valueOf("12:00:00"));
//         VolunteerServAndAvailDao dao = new VolunteerServAndAvailDao();
//         dao.removeVolunteerAvailability(availability, "annasmith20");
//     }

//     @Test
//     public void testAlterVolunteerServices() throws SQLException {
//         VolunteerServAndAvail servAndAvail = new VolunteerServAndAvail();
//         servAndAvail.setUsername("bobwilson88");
//         servAndAvail.setTutor(true);
//         servAndAvail.setBabysit(false);
//         servAndAvail.setTransportation(false);
//         VolunteerServAndAvailDao dao = new VolunteerServAndAvailDao();
//         dao.alterVolunteerServices(servAndAvail);
//     }
// }
