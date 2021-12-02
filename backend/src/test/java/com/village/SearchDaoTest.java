// package com.village;

// import java.sql.SQLException;
// import java.sql.Time;

// import com.google.gson.Gson;
// import com.village.rest.SearchDao;
// import com.village.rest.SearchService;
// import com.village.rest.ServiceType;
// import com.village.rest.Task;
// import com.village.rest.TaskDao;
// import com.village.rest.TaskService;
// import com.village.rest.User;
// import com.village.rest.WebService;

// import org.junit.Test;

// import java.util.List;

// import javax.ws.rs.core.Response;

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
//         List<User> volunteers = searchDao.manualSearchForParent();
//         Gson g = new Gson();
//         String volJson = g.toJson(volunteers);
//         System.out.println(volJson);
        
//     }

//     @Test
//     public void testManSearchService() throws SQLException {
//         SearchService searchService = new SearchService();
//         List<User> vols = searchService.manualSearchForParent();
//         Gson g = new Gson();
//         String volJson = g.toJson(vols);
//         System.out.println(volJson);
//     }

//     @Test 
//     public void testManSearchWeb() throws SQLException {
//         WebService webService = new WebService();
//         Response response = webService.manualSearchForParent();
//         System.out.println(response);
//     }

//     @Test
//     public void testGetLatestTask() throws SQLException {
//         TaskDao taskDao = new TaskDao();
//         int taskId = taskDao.getLatestTaskId();
//         System.out.println(taskId);
//     }
// }
