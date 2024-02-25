package com.nocountry.backend.model.service;

import com.nocountry.backend.model.dto.UserDTO;
import com.nocountry.backend.model.dto.Request.AddressRequest;
import com.nocountry.backend.model.dto.Request.CellphoneRequest;
import com.nocountry.backend.model.dto.Request.EmailRequest;
import com.nocountry.backend.model.dto.Request.PasswordRequest;
import com.nocountry.backend.model.dto.Request.UsernameRequest;
import com.nocountry.backend.model.entity.UserEntity;

import lombok.NonNull;

import java.util.List;

public interface UserService {
    List<UserDTO> findAll();
    UserDTO findByUsername(String username);
    UserDTO findByEmail(String email);
    UserDTO getOne(UserEntity userDB);
    void updateUsername(UsernameRequest request);
    void updateEmail(EmailRequest request);
    void updatePassword(PasswordRequest request);
    void updateCellphone(CellphoneRequest request);
    void updateAddress(AddressRequest request);
    void deleteUser(@NonNull Long id);
}
