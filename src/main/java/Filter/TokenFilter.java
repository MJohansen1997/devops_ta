package Filter;

import Exceptions.NotAuthorizedException;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.annotation.Priority;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.Provider;
import service.authorization.JWTHandler;

import java.io.IOException;

@Provider
@Priority(1000)
public class TokenFilter  implements ContainerRequestFilter {
    @Override
    public void filter(ContainerRequestContext containerRequestContext) throws IOException {
        System.out.println(containerRequestContext.getUriInfo().getPath());
        if (!"login".equals(containerRequestContext.getUriInfo().getPath()))
        {
            String token = containerRequestContext.getHeaderString("Authorization");
            try {
                JWTHandler.validate(token);
            }catch (Exception ignore){
                containerRequestContext.abortWith(Response.status(Response.Status.FORBIDDEN).type(MediaType.TEXT_PLAIN).entity("").build());
            }
        }

    }
}
