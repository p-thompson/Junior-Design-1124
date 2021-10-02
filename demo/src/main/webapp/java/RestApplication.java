import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@SpringBootApplication
public class RestApplication extends Application {
    public static void main(String[] args) {
        SpringApplication.run(RestApplication.class, args);
    }
}