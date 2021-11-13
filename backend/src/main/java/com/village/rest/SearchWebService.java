package com.village.rest;

import java.sql.SQLException;
import java.util.List;

import javax.websocket.server.PathParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/search")
public class SearchWebService {
    public static SearchService searchService = new SearchService();

    @GET
    @Path("/{username}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response automaticSearchForParent(@PathParam("username") String username) throws SQLException {
        Gson g = new Gson();
        List<User> volunteers = searchService.automaticSearchForParent(username);
        Response response = Response.status(200).entity(g.toJson(volunteers))
            .header("Access-Control-Allow-Origin", "*").build();
        return response;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response test() {
        Gson g = new Gson();
        return Response.status(200).entity(g.toJson("volunteers"))
            .header("Access-Control-Allow-Origin", "*").build();
    }
}
