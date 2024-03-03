package com.nocountry.backend.model.service;

import com.nocountry.backend.model.dto.UserDTO;
import com.nocountry.backend.model.dto.Request.AddressRequest;
import com.nocountry.backend.model.dto.Request.CellphoneRequest;
import com.nocountry.backend.model.dto.Request.EmailRequest;
import com.nocountry.backend.model.dto.Request.ImageRequest;
import com.nocountry.backend.model.dto.Request.PasswordRequest;
import com.nocountry.backend.model.dto.Request.ProfileRequest;
import com.nocountry.backend.model.dto.Request.UsernameRequest;
import com.nocountry.backend.model.dto.Response.UserResponse;

import lombok.NonNull;
import java.util.List;
import org.springframework.security.core.Authentication;

public interface UserService {
    List<UserDTO> findAll();
    UserDTO findByUsername(String username);
    UserDTO findByEmail(String email);
    UserResponse getCurrentUser(Authentication auth);
    void updateUsername(UsernameRequest request);
    void updateEmail(EmailRequest request);
    void updatePassword(PasswordRequest request);
    void updateCellphone(CellphoneRequest request);
    void updateAddress(AddressRequest request);
    void deleteUser(@NonNull Long id);
    void setImage(ImageRequest request);
    void progileUpdate(ProfileRequest request);
}
