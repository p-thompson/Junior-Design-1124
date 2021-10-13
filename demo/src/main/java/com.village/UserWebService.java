package demo.src.main.java;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.json.Json;

@CrossOrigin(origins = { "http://localhost:8080"})
@RestController
public class UserWebService {
    
    @Autowired
    public UserService userService;

    @GetMapping("/hello")
    public String tryingThingsOut() {
        return userService.toJson("hello, there");
    }
}
