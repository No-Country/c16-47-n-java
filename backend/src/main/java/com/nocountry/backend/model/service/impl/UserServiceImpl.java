package com.nocountry.backend.model.service.impl;

import com.nocountry.backend.model.dto.UserDTO;
import com.nocountry.backend.model.entity.UserEntity;
import com.nocountry.backend.model.enums.ERole;
import com.nocountry.backend.model.repository.UserRepository;
import com.nocountry.backend.model.service.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

<<<<<<< HEAD
    @Override
    public List<UserDTO> findAll() {
        List<UserEntity> usersDB = userRepository.findAll();
        // mapeamos cada UserEntity a un UserDTO
        return usersDB.stream().map(user -> modelMapper.map(user, UserDTO.class)).toList();
=======
    public UserServiceImpl(UserRepository userRepository, ImageDataServiceImpl imageDataService,
            ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.imageDataService = imageDataService;
        this.modelMapper = modelMapper;
>>>>>>> 1b218b5f2d27ae3dca2d0b3994ec528d5cb27f0e
    }


    @Override
    public UserDTO save(UserDTO userDTO) {
        UserEntity user = UserEntity.builder()
                .username(userDTO.getUsername())
                .email(userDTO.getEmail())
                .password(userDTO.getPassword())
                .address(userDTO.getAddress())
                .cellphone(userDTO.getCellphone())
                // usuario role USER por defecto
                .role(ERole.USER)
                .build();

        UserEntity userDB = userRepository.save(user);

        // mapeamos de UserEntity a un UserDTO
        return modelMapper.map(userDB, UserDTO.class);
    }
<<<<<<< HEAD
=======

    @Override
    public UserDTO updateById(NewUserRequest request, Long id) {
        Optional<UserEntity> res = userRepository.findById(id);
        if (res.isPresent()) {
            UserEntity user = UserEntity.builder()
                    .username(request.getUsername())
                    .email(request.getEmail())
                    .password(request.getPassword())
                    .build();
            UserEntity userDB = userRepository.save(user);
            return modelMapper.map(userDB, UserDTO.class);
        }
        return null;
    }

    @Override
    public void deleteById(Long id) {
        Optional<UserEntity> res = userRepository.findById(id);
        if (res.isPresent()) {
            UserEntity user = res.get();
            userRepository.delete(user);
        }
    }

    // id image not found
    @Override
    public UserDTO findById(Long id) throws UserNotFoundException {
        Optional<UserEntity> userDB = userRepository.findById(id);
        if (userDB.isEmpty()) {
            throw new UserNotFoundException("user not found with id : " + id);
        }
        return modelMapper.map(userDB.get(), UserDTO.class);
    }

    @Override
    public UserDTO updateUsername(Long id, String username) {
        Optional<UserEntity> res = userRepository.findById(id);
        if(res.isPresent()){
            UserEntity user = res.get();
            user.setUsername(username);
            UserEntity userDB = userRepository.save(user);
            return modelMapper.map(userDB, UserDTO.class);
        }
        return null;
    }

    @Override
    public UserDTO updateEmail(Long id, String email) {
        Optional<UserEntity> res = userRepository.findById(id);
        if(res.isPresent()){
            UserEntity user = res.get();
            user.setEmail(email);
            UserEntity userDB = userRepository.save(user);
            return modelMapper.map(userDB, UserDTO.class);
        }
        return null;
    }

    @Override
    public UserDTO updatePassword(Long id, String password) {
        Optional<UserEntity> res = userRepository.findById(id);
        if(res.isPresent()){
            UserEntity user = res.get();
            user.setPassword(password);
            UserEntity userDB = userRepository.save(user);
            return modelMapper.map(userDB, UserDTO.class);
        }
        return null;
    }
>>>>>>> 1b218b5f2d27ae3dca2d0b3994ec528d5cb27f0e
}
