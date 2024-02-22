package com.nocountry.backend.model.service.impl;

import com.nocountry.backend.common.exception.MyException;
import com.nocountry.backend.model.dto.UserDTO;
import com.nocountry.backend.model.dto.Request.AddressDTO;
import com.nocountry.backend.model.dto.Request.CellphoneDTO;
import com.nocountry.backend.model.dto.Request.EmailDTO;
import com.nocountry.backend.model.dto.Request.PasswordDTO;
import com.nocountry.backend.model.dto.Request.UsernameDTO;
import com.nocountry.backend.model.entity.UserEntity;
import com.nocountry.backend.model.repository.UserRepository;
import com.nocountry.backend.model.service.JwtService;
import com.nocountry.backend.model.service.UserService;
import jakarta.transaction.Transactional;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final JwtService JWTS;
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
    public UserEntity findByUsername(String username) {
        return UR.findByUsername(username);
    }

    @Override // ADMIN
    public UserEntity findByEmail(String email) {
        return UR.findByEmail(email);
    }

    // actualizar datos del usuario
    @Transactional // USER
    public void updateUsername(UsernameDTO request) throws MyException {
        UserDetails user = JWTS.getCurrentUser();
        UserEntity usuario = UR.findById(request.getId()).orElseThrow();

        if (request.getUsername().equals(user.getUsername())) {
            throw new MyException("El nombre de usuario ya existe");
        }

        usuario.setUsername(request.getUsername());
        UR.save(usuario);
    }

    @Transactional // USER
    public void updateEmail(EmailDTO request) throws MyException{
        UserEntity usuario = UR.findById(request.getId()).orElseThrow();
        
        List<UserEntity> usuarios = UR.findAll();
        for (UserEntity u : usuarios) {
            if(u.getEmail().equals(request.getEmail())) {
                throw new MyException("El correo electrónico ya existe");
            }
        }
         
        usuario.setEmail(request.getEmail());
        UR.save(usuario);
    }

    @Transactional // USER
    public void updatePassword(PasswordDTO request) {
        UserEntity usuario = UR.findById(request.getId()).orElseThrow();
        usuario.setPassword(passwordEncoder.encode(request.getPassword()));        
        UR.save(usuario);
    }

    @Transactional //USER
    public void updateCellphone(CellphoneDTO request) {
        UserEntity usuario = UR.findById(request.getId()).orElseThrow();
        usuario.setCellphone(request.getCellphone());
        UR.save(usuario);
    }

    @Transactional // USER
    public void updateAddress(AddressDTO request) {
        UserEntity usuario = UR.findById(request.getId()).orElseThrow();
        usuario.setAddress(request.getAddress());
        UR.save(usuario);
    }

    // eliminación del usuario
    @Transactional // ADMIN
    public void deleteUser(@NonNull Long id) {
        Optional<UserEntity> res = UR.findById(id);
        if (res.isPresent()) {
            UserEntity usuario = res.get();
            UR.delete(usuario);
        }
    }

}
