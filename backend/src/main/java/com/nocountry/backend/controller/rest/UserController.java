package com.nocountry.backend.controller.rest;

import com.nocountry.backend.common.exception.UserNotFoundException;
import com.nocountry.backend.model.dto.UserDTO;
import com.nocountry.backend.model.dto.response.GenericReponseDTO;
import com.nocountry.backend.model.dto.request.NewUserRequest;
import com.nocountry.backend.model.dto.response.UserResponseDTO;
import com.nocountry.backend.model.service.impl.UserServiceImpl;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@RestController
@RequestMapping(value = "/user")
public class UserController {
    private final UserServiceImpl userService;

    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<UserResponseDTO<UserDTO>> getUsers() {
        return ResponseEntity.ok().body(new UserResponseDTO(
                true,
                userService.getUsers().size(),
                userService.getUsers()
        ));
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> findById(@PathVariable Long id) throws UserNotFoundException {
        System.out.println("id : " + id);
        return ResponseEntity.ok().body(userService.findById(id));
    }

    // falta terminar esto para que acepte una imagen
    @PostMapping
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
                , HttpStatus.CREATED);
    }

}
