package com.nocountry.backend.controller.rest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.model.dto.Request.LoginRequest;
import com.nocountry.backend.model.dto.Request.RegisterRequest;
import com.nocountry.backend.model.dto.Response.AuthResponse;
import com.nocountry.backend.model.service.AuthService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    
    private final AuthService AS;
    
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

}
