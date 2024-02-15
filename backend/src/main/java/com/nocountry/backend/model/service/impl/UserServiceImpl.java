package com.nocountry.backend.model.service.impl;

import com.nocountry.backend.common.exception.UserNotFoundException;
import com.nocountry.backend.model.dto.UserDTO;
import com.nocountry.backend.model.dto.request.NewUserRequest;
import com.nocountry.backend.model.entity.ImageData;
import com.nocountry.backend.model.entity.UserEntity;
import com.nocountry.backend.model.repository.UserRepository;
import com.nocountry.backend.model.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ImageDataServiceImpl imageDataService;
    private final ModelMapper modelMapper;

    public UserServiceImpl(UserRepository userRepository, ImageDataServiceImpl imageDataService, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.imageDataService = imageDataService;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<UserDTO> getUsers() {
        List<UserEntity> listUsers = userRepository.findAll();
        return listUsers.stream().map(user -> modelMapper.map(user, UserDTO.class)).toList();
    }

    @Override
    public List<UserEntity> findAll() {
        return userRepository.findAll();
    }

    @Override
    public UserDTO saveUser(NewUserRequest request, MultipartFile file) throws IOException {
        ImageData imageData = imageDataService.uploadImageData(file);
        System.out.println(imageData.getName());
        System.out.println("entrando a builder");
        UserEntity user = UserEntity.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(request.getPassword())
                .imageData(imageData)
                .build();
        UserEntity userDB = userRepository.save(user);
        return modelMapper.map(userDB, UserDTO.class);
    }

    @Override
    public UserDTO updateById(NewUserRequest request, Long id) {
        return null;
    }

    @Override
    public void deleteById(Long id) {

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
}
