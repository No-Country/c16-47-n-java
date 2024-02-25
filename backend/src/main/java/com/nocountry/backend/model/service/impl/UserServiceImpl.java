package com.nocountry.backend.model.service.impl;

import com.nocountry.backend.model.dto.UserDTO;
import com.nocountry.backend.model.dto.Request.AddressRequest;
import com.nocountry.backend.model.dto.Request.CellphoneRequest;
import com.nocountry.backend.model.dto.Request.EmailRequest;
import com.nocountry.backend.model.dto.Request.PasswordRequest;
import com.nocountry.backend.model.dto.Request.UsernameRequest;
import com.nocountry.backend.model.entity.UserEntity;
import com.nocountry.backend.model.repository.UserRepository;
import com.nocountry.backend.model.service.UserService;
import jakarta.transaction.Transactional;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository UR;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;

    @Override // ADMIN
    public List<UserDTO> findAll() {
        List<UserEntity> usersDB = UR.findAll();
        // mapeamos cada UserEntity a un UserDTO
        return usersDB.stream().map(user -> modelMapper.map(user, UserDTO.class)).toList();
    }

    @Override // ADMIN
    public UserDTO findByUsername(String username) {
        UserEntity userDB = UR.findByUsername(username);
        return modelMapper.map(userDB, UserDTO.class);
    }

    @Override // ADMIN
    public UserDTO findByEmail(String email) {
        UserEntity userDB = UR.findByEmail(email);
        return modelMapper.map(userDB, UserDTO.class);
    }

    @Override // USER
    public UserDTO getOne(UserEntity userDB){
        return modelMapper.map(userDB, UserDTO.class);
    }

    // actualizar datos del usuario
    @Override
    @Transactional // USER
    public void updateUsername(UsernameRequest request) {
        UserEntity userDB = UR.findById(request.getId()).orElseThrow();
        userDB.setUsername(request.getUsername());
        UR.save(userDB);
    }

    @Override
    @Transactional // USER
    public void updateEmail(EmailRequest request) {
        UserEntity usuario = UR.findById(request.getId()).orElseThrow();
        usuario.setEmail(request.getEmail());
        UR.save(usuario);
    }

    @Override
    @Transactional // USER
    public void updatePassword(PasswordRequest request) {
        UserEntity usuario = UR.findById(request.getId()).orElseThrow();
        usuario.setPassword(passwordEncoder.encode(request.getPassword()));
        UR.save(usuario);
    }

    @Override
    @Transactional // USER
    public void updateCellphone(CellphoneRequest request) {
        UserEntity usuario = UR.findById(request.getId()).orElseThrow();
        usuario.setCellphone(request.getCellphone());
        UR.save(usuario);
    }

    @Override
    @Transactional // USER
    public void updateAddress(AddressRequest request) {
        UserEntity usuario = UR.findById(request.getId()).orElseThrow();
        usuario.setAddress(request.getAddress());
        UR.save(usuario);
    }

    // eliminación del usuario
    @Override
    @Transactional // ADMIN
    public void deleteUser(@NonNull Long id) {
        Optional<UserEntity> usuario = UR.findById(id);
        UR.delete(usuario.get());
    }

}
