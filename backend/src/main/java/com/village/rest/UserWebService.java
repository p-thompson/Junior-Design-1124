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
