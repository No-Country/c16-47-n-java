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

    @Override
    public List<UserDTO> findAll() {
        List<UserEntity> usersDB = userRepository.findAll();
        // mapeamos cada UserEntity a un UserDTO
        return usersDB.stream().map(user -> modelMapper.map(user, UserDTO.class)).toList();
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

}
