package com.nocountry.backend.model.service;

import com.nocountry.backend.model.dto.UserDTO;

import java.util.List;

public interface UserService {
<<<<<<< HEAD
    List<UserDTO> findAll();
    UserDTO save(UserDTO userDTO);
=======
    List<UserDTO> getUsers();
    List<UserEntity> findAll();
    UserDTO saveUser(NewUserRequest request, MultipartFile file) throws IOException;
    UserDTO updateById(NewUserRequest request, Long id);
    void deleteById(Long id);
    UserDTO findById(Long id) throws UserNotFoundException;
    UserDTO updateUsername(Long id, String username);
    UserDTO updateEmail(Long id, String email);
    UserDTO updatePassword(Long id, String password);
>>>>>>> 1b218b5f2d27ae3dca2d0b3994ec528d5cb27f0e
}
