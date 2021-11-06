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
    public void modifyUser(User user) throws SQLException {
        userService.modifyUserBasicInfo(user);
    }

    @PUT
    @Path("/bio")
    public void modifyBio(String username, String bio) throws SQLException {
        userService.modifyBio(username, bio);
    }

    @GET
    @Path("/{username}")
    public User findUserByUsername(@PathParam("username") String username) throws SQLException {
        return userService.findUserByUsername(username);
    }

    /*
    @GET
    @Path("/parent/{username}")
    public User findParentByUsername(@PathParam("username") String username) throws SQLException {
        return userService.findParentByUsername(username);
    }

    @GET
    @Path("/volunteer/{username}")
    public User findVolunteerByUsername(@PathParam("username") String username) throws SQLException {
        return userService.findVolunteerByUsername(username);
    }
    */
}
