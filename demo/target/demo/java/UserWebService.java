package demo.src.main.webapp.java;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.json.Json;


public class UserWebService {
    
    public UserService userService;

    @GET
    @Path("account")
    public String tryingThingsOut() {
        return userService.toJson("hello, there");
    }
}
