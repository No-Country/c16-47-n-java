package com.nocountry.backend.model.service;

import com.nocountry.backend.model.dto.UserDTO;

import java.util.List;

public interface UserService {
    List<UserDTO> findAll();
    UserDTO save(UserDTO userDTO);
}
