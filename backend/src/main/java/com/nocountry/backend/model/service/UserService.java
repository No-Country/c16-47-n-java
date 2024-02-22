package com.nocountry.backend.model.service;

import com.nocountry.backend.model.dto.UserDTO;
import com.nocountry.backend.model.entity.UserEntity;
import java.util.List;

public interface UserService {
    List<UserDTO> findAll();
    UserEntity findByUsername(String username);
    UserEntity findByEmail(String email);

}
