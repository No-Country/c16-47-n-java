package com.nocountry.backend.model.service;

import com.nocountry.backend.common.exception.UserNotFoundException;
import com.nocountry.backend.model.dto.UserDTO;
import com.nocountry.backend.model.dto.request.NewUserRequest;
import com.nocountry.backend.model.entity.UserEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface UserService {
    List<UserDTO> getUsers();
    List<UserEntity> findAll();
    UserDTO saveUser(NewUserRequest request, MultipartFile file) throws IOException;
    UserDTO updateById(NewUserRequest request, Long id);
    void deleteById(Long id);
    UserDTO findById(Long id) throws UserNotFoundException;
}
