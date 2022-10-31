package service;

import DTO.User;
import Exceptions.NoImplementationException;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.QueryParam;

import java.util.List;

@Path("users")
public class UserService {

    @GET
    @Path("query")
    public List<User> queryUsers(@QueryParam("name") String name) throws NoImplementationException {
        //No implementation yet
        throw new NoImplementationException("user-queries not implemented, yet");
    }
}
