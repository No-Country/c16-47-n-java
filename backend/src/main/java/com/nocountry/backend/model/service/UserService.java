package com.nocountry.backend.model.service;

import com.nocountry.backend.model.dto.UserDTO;
import com.nocountry.backend.model.dto.Request.UsernameDTO;
import java.util.List;

public interface UserService {
    List<UserDTO> findAll();
    UserDTO findByUsername(String username);
    UserDTO findByEmail(String email);
    void updateUsername(UsernameDTO request);
}
