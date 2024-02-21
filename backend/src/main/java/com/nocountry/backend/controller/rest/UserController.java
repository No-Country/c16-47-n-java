package com.nocountry.backend.controller.rest;

import com.nocountry.backend.model.dto.UserDTO;
import com.nocountry.backend.model.service.impl.UserServiceImpl;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/user")
@RequiredArgsConstructor
public class UserController {

    private final UserServiceImpl userService;

    // listar usuarios
    @GetMapping
    public ResponseEntity<List<UserDTO>> findAll(){
        return ResponseEntity.ok().body(userService.findAll());
    }
    // endpoint para guardar un usuario
    @PostMapping
<<<<<<< HEAD
    public ResponseEntity<UserDTO> save(@Valid @RequestBody UserDTO userDTO){
        return new ResponseEntity<>(userService.save(userDTO), HttpStatus.CREATED);
=======
    public ResponseEntity<GenericReponseDTO<UserDTO>> saveUser(
            @Valid
            @RequestBody NewUserRequest newUserRequest,
            @RequestParam("image") MultipartFile file
    ) throws IOException {
        return new ResponseEntity(
                new GenericReponseDTO(
                        true,
                        "user saved successfully",
                        userService.saveUser(newUserRequest, file
                        ))
                , HttpStatus.CREATED).ok().body(null);
>>>>>>> 1b218b5f2d27ae3dca2d0b3994ec528d5cb27f0e
    }

}
