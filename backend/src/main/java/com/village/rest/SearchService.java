package com.village.rest;

import java.sql.SQLException;
import java.util.List;

public class SearchService {
    private SearchDao searchDao = new SearchDao();

    public List<User> automaticSearchForParent(String username) throws SQLException {
        return searchDao.automaticSearchForParent(username);
    }
}
