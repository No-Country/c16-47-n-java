package com.nocountry.backend.controller.rest;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.nocountry.backend.model.dto.UserDTO;
import com.nocountry.backend.model.dto.Response.UserResponse;
import com.nocountry.backend.model.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(value = "/admin")
@RequiredArgsConstructor
public class AdminController {

    private final UserServiceImpl US;

    // traer usuario local ADMIN
    @GetMapping(value = "/user")
    public ResponseEntity<UserResponse> findUser(Authentication auth) {
        return ResponseEntity.ok().body(US.getCurrentUser(auth));
    }

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

    // borrar usuario ADMIN
    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        US.deleteUser(id);
        return ResponseEntity.ok().body(null);
    }
    
}
