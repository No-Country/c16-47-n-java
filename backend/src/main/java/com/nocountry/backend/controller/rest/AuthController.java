package com.nocountry.backend.controller.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.nocountry.backend.model.dto.request.LoginRequest;
import com.nocountry.backend.model.dto.request.RegisterRequest;
import com.nocountry.backend.model.dto.response.AuthResponse;
import com.nocountry.backend.model.service.impl.AuthServiceImpl;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    
    private final AuthServiceImpl AS;
    
    // inicia sesion al usuario desde el AuthService
    @PostMapping(value = "login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(AS.login(request));
    }

    // guarda-crea el usuario desde el AuthService
    @PostMapping(value = "register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(AS.register(request));
    }

    // crear usuario ADMIN
    @PostMapping(value = "admin")
    public ResponseEntity<AuthResponse> adminRegister(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(AS.adminRegister(request));
    }

}
