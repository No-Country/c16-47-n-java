package com.nocountry.backend.controller.rest;

import com.nocountry.backend.model.dto.UserDTO;
import com.nocountry.backend.model.service.impl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping(value = "/user")
@RequiredArgsConstructor
public class UserController {

    private final UserServiceImpl userService;

    // listar usuarios
    @GetMapping(value = "/findall")
    public ResponseEntity<List<UserDTO>> findAll() {
        return ResponseEntity.ok().body(userService.findAll());
    }

}
