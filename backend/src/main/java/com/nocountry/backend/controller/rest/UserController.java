package com.nocountry.backend.controller.rest;

import com.nocountry.backend.model.dto.UserDTO;
import com.nocountry.backend.model.dto.Request.UsernameDTO;
import com.nocountry.backend.model.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(value = "/user")
@RequiredArgsConstructor
public class UserController {

    private final UserServiceImpl US;

    // listar usuarios
    @GetMapping(value = "/findall")
    public ResponseEntity<List<UserDTO>> findAll() {
        return ResponseEntity.ok().body(US.findAll());
    }

    // buscar por username
    @GetMapping(value = "/findusername")
    public ResponseEntity<UserDTO> findByUsername(@RequestParam String username) {
        return ResponseEntity.ok().body(US.findByUsername(username));
    }

    // buscar por email
    @GetMapping(value = "/findemail")
    public ResponseEntity<UserDTO> findByEmail(@RequestParam String email) {
        return ResponseEntity.ok().body(US.findByEmail(email));
    }

    @PutMapping(value = "/updateusename")
    public ResponseEntity<Object> updateUsername(@RequestBody UsernameDTO request) {
        // US.updateUsername(request); // hay que arreglar lo que dije de las exceptions
        return ResponseEntity.status(HttpStatus.UPGRADE_REQUIRED).body(null);
    }

}
