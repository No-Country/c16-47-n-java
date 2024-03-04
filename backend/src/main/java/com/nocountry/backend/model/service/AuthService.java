package com.nocountry.backend.model.service;

import com.nocountry.backend.model.dto.Request.LoginRequest;
import com.nocountry.backend.model.dto.Request.RegisterRequest;
import com.nocountry.backend.model.dto.response.AuthResponse;

public interface AuthService {
    AuthResponse login(LoginRequest request);
    AuthResponse register(RegisterRequest request);
    AuthResponse adminRegister(RegisterRequest request);
}
