package com.village;

import java.sql.SQLException;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;

@Path("/account")
public class UserWebService {
    public static UserService userService = new UserService();

    @POST
    @Path("/create")
    public void createUser(User user) throws SQLException{
        userService.createUser(user);
    }

    @PUT
    public void modifyUser(User user) throws SQLException {
        userService.modifyUser(user);
    }

    @GET
    @Path("/parent")
    public User findParentByUsername(String username) throws SQLException {
        return userService.findParentByUsername(username);
    }

    @GET
    @Path("/volunteer")
    public User findVolunteerByUsername(String username) throws SQLException {
        return userService.findVolunteerByUsername(username);
    }
}
