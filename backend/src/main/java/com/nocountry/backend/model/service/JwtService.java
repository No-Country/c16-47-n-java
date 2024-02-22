package com.nocountry.backend.model.service;

import java.security.Key;
import java.util.Date;
import java.util.Map;
import java.util.function.Function;
import org.springframework.security.core.userdetails.UserDetails;
import io.jsonwebtoken.Claims;

public interface JwtService {
    
    String getToken(UserDetails usuario);
    String getToken(Map<String, Object> extraClaims, UserDetails usuario);
    Key getKey();
    String getUsernameFromToken(String token);
    boolean isTokenValid(String token, UserDetails userDetails);
    Claims getAllClaims(String token);
    <T> T getClaim(String toke, Function<Claims, T> claimsResolver);
    Date getExporation(String token);
    boolean isTokenExpired(String token);
    UserDetails getCurrentUser();

}
