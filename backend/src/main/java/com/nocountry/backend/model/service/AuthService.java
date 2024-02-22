package com.nocountry.backend.model.service;

import com.nocountry.backend.model.dto.Request.AuthResponse;
import com.nocountry.backend.model.dto.Request.LoginDTO;
import com.nocountry.backend.model.dto.Request.RegisterDTO;

public interface AuthService {
    AuthResponse login(LoginDTO request);
    AuthResponse register(RegisterDTO request);
}
