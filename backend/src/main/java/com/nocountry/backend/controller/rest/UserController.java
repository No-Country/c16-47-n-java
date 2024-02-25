package com.nocountry.backend.controller.rest;

import com.nocountry.backend.model.dto.UserDTO;
import com.nocountry.backend.model.dto.Request.AddressRequest;
import com.nocountry.backend.model.dto.Request.CellphoneRequest;
import com.nocountry.backend.model.dto.Request.EmailRequest;
import com.nocountry.backend.model.dto.Request.PasswordRequest;
import com.nocountry.backend.model.dto.Request.UsernameRequest;
import com.nocountry.backend.model.entity.UserEntity;
import com.nocountry.backend.model.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(value = "/user")
@RequiredArgsConstructor
public class UserController {

    private final UserServiceImpl US;

    // listar usuarios ADMIN
    @GetMapping(value = "/findall")
    public ResponseEntity<List<UserDTO>> findAll() {
        return ResponseEntity.ok().body(US.findAll());
    }

    // buscar por username ADMIN
    @GetMapping(value = "/findusername")
    public ResponseEntity<UserDTO> findByUsername(@RequestParam String username) {
        return ResponseEntity.ok().body(US.findByUsername(username));
    }

    // buscar por email ADMIN
    @GetMapping(value = "/findemail")
    public ResponseEntity<UserDTO> findByEmail(@RequestParam String email) {
        return ResponseEntity.ok().body(US.findByEmail(email));
    }

    // traer usuario USER
    @GetMapping(value = "/user")
    public ResponseEntity<UserDTO> findUser(@RequestBody UserEntity user) {
        return ResponseEntity.ok().body(US.getOne(user));
    }

    // modificar username USER
    @PutMapping(value = "/updateusename")
    public ResponseEntity<?> updateUsername(@RequestBody UsernameRequest request) {
        US.updateUsername(request);
        return ResponseEntity.ok().body(null);
    }

    // modificar email USER
    @PutMapping(value = "/updateemail")
    public ResponseEntity<?> updateEmail(@RequestBody EmailRequest request) {
        US.updateEmail(request);
        return ResponseEntity.ok().body(null);
    }

    // modificar password USER
    @PutMapping(value = "/updatepassword")
    public ResponseEntity<?> updatePasswrod(@RequestBody PasswordRequest request) {
        US.updatePassword(request);
        return ResponseEntity.ok().body(null);
    }

    // modificar cellphone USER
    @PutMapping(value = "/updatecellphone")
    public ResponseEntity<?> updateCellphone(@RequestBody CellphoneRequest request) {
        US.updateCellphone(request);
        return ResponseEntity.ok().body(null);
    }

    // modificar address USER
    @PutMapping(value = "/updateaddress")
    public ResponseEntity<?> updateAddress(@RequestBody AddressRequest request) {
        US.updateAddress(request);
        return ResponseEntity.ok().body(null);
    }

    // borrar usuario ADMIN
    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        US.deleteUser(id);
        return ResponseEntity.ok().body(null);
    }

}
