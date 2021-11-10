package com.village.rest;

import java.sql.SQLException;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/account")
public class UserWebService {
    public static UserService userService = new UserService();

    @POST
    @Path("/create")
    public void createUser(User user) throws SQLException{
        userService.createUser(user);
    }

    @PUT
    @Path("/{username}")
    public void modifyUser(User user) throws SQLException {
        userService.modifyUserBasicInfo(user);
    }

    @GET
    @Path("/{username}")
    public User findUserByUsername(@PathParam("username") String username) throws SQLException {
        return userService.findUserByUsername(username);
    }
}
