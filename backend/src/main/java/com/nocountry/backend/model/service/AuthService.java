package com.nocountry.backend.model.service;

import com.nocountry.backend.model.dto.Request.LoginRequest;
import com.nocountry.backend.model.dto.Request.RegisterRequest;
import com.nocountry.backend.model.dto.Response.AuthResponse;

public interface AuthService {
    AuthResponse login(LoginRequest request);
    AuthResponse register(RegisterRequest request);
}
