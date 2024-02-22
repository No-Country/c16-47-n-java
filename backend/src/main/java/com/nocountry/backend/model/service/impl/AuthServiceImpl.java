package com.nocountry.backend.model.service.impl;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.nocountry.backend.model.entity.UserEntity;
import com.nocountry.backend.model.dto.Request.AuthResponse;
import com.nocountry.backend.model.dto.Request.LoginDTO;
import com.nocountry.backend.model.dto.Request.RegisterDTO;
import com.nocountry.backend.model.enums.ERole;
import com.nocountry.backend.model.repository.UserRepository;
import com.nocountry.backend.model.service.AuthService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{
    
    private final UserRepository UR;
    private final JwtServiceImpl JWTS;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authManager;

    public AuthResponse login(LoginDTO request) {
        authManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        UserDetails user = UR.findByUsername(request.getUsername());
        String token = JWTS.getToken(user);
        return AuthResponse.builder()
                .token(token)
                .build();
    }

    public AuthResponse register(RegisterDTO request) {
        UserEntity usuario = UserEntity.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .cellphone(request.getCellphone())
                .address(request.getAddress())
                .role(ERole.USER)
                .build();
        UR.save(usuario);

        return AuthResponse.builder()
                .token(JWTS.getToken(usuario))
                .build();
    }

}
