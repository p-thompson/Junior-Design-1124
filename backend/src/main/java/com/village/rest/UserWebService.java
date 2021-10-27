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

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/account")
public class UserWebService {
    public static UserService userService = new UserService();
    //public static ObjectMapper mapper = new ObjectMapper();

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
    @Path("/parent/{username}")
    public User findParentByUsername(@PathParam("username") String username) throws SQLException, JsonProcessingException {
        return userService.findParentByUsername(username);
        
        
        
    }

    @GET
    @Path("/volunteer/{username}")
    public User findVolunteerByUsername(@PathParam("username") String username) throws SQLException, JsonProcessingException {
        return userService.findVolunteerByUsername(username);
    }

}
