package com.village;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.json.Json;


public class UserWebService {
    public static UserService userService = new UserService();

    @GET
    @Path("account")
    public static String tryingThingsOut() {
        return userService.toJson("Hello, there!");
    }
}
