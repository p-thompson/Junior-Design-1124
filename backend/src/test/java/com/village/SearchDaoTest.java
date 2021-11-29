// package com.village;

// import java.sql.SQLException;
// import java.sql.Time;

// import com.google.gson.Gson;
// import com.village.rest.SearchDao;
// import com.village.rest.ServiceType;
// import com.village.rest.Task;
// import com.village.rest.TaskDao;
// import com.village.rest.User;
// import org.junit.Test;

// import java.util.List;

// public class SearchDaoTest {
//     public static SearchDao searchDao = new SearchDao();
    
//     @Test
//     public void testAutomaticSearchForParent() throws SQLException {
//         List<User> volunteers = searchDao.automaticSearchForParent("janedoe34");
//         for (User user : volunteers) {
//             System.out.println(user.getFirstName());
//         }
//         Gson gson = new Gson();
//         String jsonList = gson.toJson(volunteers);
//         System.out.println(jsonList);
//     }

//     @Test
//     public void testGetTaskById() throws SQLException {
//         TaskDao taskDao = new TaskDao();
//         Task task = taskDao.getById(3);
//         Gson g = new Gson();
//         String taskJson = g.toJson(task);
//         System.out.println(taskJson);
//         //System.out.println(ServiceType.BABYSIT.name());
//     }

//     @Test
//     public void testGetTasksByUsername() throws SQLException {
//         TaskDao taskDao = new TaskDao();
//         List<Task> tasks = taskDao.getTasksByUsername("janedoe34");
//         Gson g = new Gson();
//         String taskJson = g.toJson(tasks);
//         System.out.println(taskJson);
//         System.out.println(ServiceType.BABYSIT.name().toLowerCase());
//     }

//     @Test
//     public void testManualSearchForParent() throws SQLException {
//         Task task = new Task();
//         task.setDay("Friday");
//         task.setTimeBegin(Time.valueOf("11:30:00"));
//         task.setTimeEnd(Time.valueOf("15:00:00"));
//         task.setService(ServiceType.TRANSPORTATION);
//         List<User> volunteers = searchDao.manualSearchForParent(task);
//         Gson g = new Gson();
//         String volJson = g.toJson(volunteers);
//         System.out.println(volJson);
        
//     }
// }
