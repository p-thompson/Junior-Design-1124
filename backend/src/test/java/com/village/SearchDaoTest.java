// package com.village;

// import java.sql.SQLException;

// import com.google.gson.Gson;
// import com.village.rest.SearchDao;
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
// }
