package com.nocountry.backend.model.service;

import com.nocountry.backend.model.dto.UserDTO;
import com.nocountry.backend.model.dto.request.PasswordRequest;
import com.nocountry.backend.model.dto.request.ProfileRequest;
import com.nocountry.backend.model.dto.response.UserResponse;

import lombok.NonNull;
import java.util.List;
import org.springframework.security.core.Authentication;

public interface UserService {
    List<UserDTO> findAll();
    UserDTO findByUsername(String username);
    UserDTO findByEmail(String email);
    UserResponse getCurrentUser(Authentication auth);
    void updatePassword(PasswordRequest request);
    void deleteUser(@NonNull Long id);
    void profileUpdate(ProfileRequest request);
}
