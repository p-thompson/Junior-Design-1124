package com.village.rest;

import java.sql.SQLException;
import java.util.List;

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

@Path("/account")
public class WebService {
    public static UserService userService = new UserService();

    // @POST
    // @Path("/create")
    // @Consumes(MediaType.APPLICATION_JSON)
    // @Produces(MediaType.APPLICATION_JSON)
    // public void createUser(User user) throws SQLException{
    //     userService.createUser(user);
    // }

    @POST
    @Path("/create")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response testUser(String user) throws SQLException{
        Gson g = new Gson();
        User newUser = g.fromJson(user, User.class);
        userService.createUser(newUser);
        String username = newUser.getUsername();
        Response response = Response.status(200).entity(g.toJson(userService.findUserByUsername(username))).header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token").build();
        return response;
    }

    @PUT
    @Path("modify/{username}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response modifyUser(String user) throws SQLException {
        Gson g = new Gson();
        User newUser = g.fromJson(user, User.class);
        userService.modifyUserBasicInfo(newUser);
        String username = newUser.getUsername();
        Response response = Response.status(200).entity(g.toJson(userService.findUserByUsername(username))).header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "*").header("Access-Control-Allow-Headers", "*").build();
        return response;
    }

    @GET
    @Path("/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response findUserByUsername(@PathParam("username") String username) throws SQLException {
        Gson g = new Gson();
        Response response = Response.status(200).entity(g.toJson(userService.findUserByUsername(username))).header("Access-Control-Allow-Origin", "*").build();
        return response;
    }

    @GET
    @Path("search/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response automaticSearchForParent(@PathParam("username") String username) throws SQLException {
        Gson g = new Gson();
        SearchService searchService = new SearchService();
        List<User> volunteers = searchService.automaticSearchForParent(username);
        Response response = Response.status(200).entity(g.toJson(volunteers))
            .header("Access-Control-Allow-Origin", "*").build();
        return response;
    }
}
