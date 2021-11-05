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
import javax.ws.rs.core.Response;
import com.google.gson.Gson;


// @Produces(MediaType.APPLICATION_JSON)
// @Consumes(MediaType.APPLICATION_JSON)
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
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/parent/{username}")
    public Response findParentByUsername(@PathParam("username") String username) throws SQLException {
        Gson g = new Gson();
        Response response = Response.status(200).
                entity(g.toJson(userService.findParentByUsername(username))).
                header("Access-Control-Allow-Origin", "*").build();

        return response;    
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/volunteer/{username}")
    public Response findVolunteerByUsername(@PathParam("username") String username) throws SQLException {
        Gson g = new Gson();
        Response response = Response.status(200).
                entity(g.toJson(userService.findVolunteerByUsername(username))).
                header("Access-Control-Allow-Origin", "*").build();

        return response;
    }

    @GET
    @Path("/testingJson")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getJson() throws SQLException {
        Gson g = new Gson();
        Response response = Response.status(200).
                entity(g.toJson(userService.findVolunteerByUsername("janedoe34"))).
                header("Access-Control-Allow-Origin", "*").build();

        return response;

    }

}
