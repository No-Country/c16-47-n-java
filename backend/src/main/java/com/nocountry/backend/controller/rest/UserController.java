package com.nocountry.backend.controller.rest;

import com.nocountry.backend.model.dto.Request.ImageRequest;
import com.nocountry.backend.model.dto.Request.PasswordRequest;
import com.nocountry.backend.model.dto.Request.ProfileRequest;
import com.nocountry.backend.model.dto.Response.UserResponse;
import com.nocountry.backend.model.entity.UserEntity;
import com.nocountry.backend.model.repository.UserRepository;
import com.nocountry.backend.model.service.CloudinaryService;
import com.nocountry.backend.model.service.ImageService;
import com.nocountry.backend.model.service.UserService;
import lombok.RequiredArgsConstructor;
import java.io.IOException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService US;
    private final ImageService imageService;
    private final CloudinaryService cloudinaryService;
    private final UserRepository UR;

    // traer usuario local USER
    @GetMapping(value = "/user")
    public ResponseEntity<UserResponse> findUser(Authentication auth) {
        return ResponseEntity.ok().body(US.getCurrentUser(auth));
    }

    // modificar password USER
    @PutMapping(value = "/updatepassword")
    public ResponseEntity<?> updatePassword(@RequestBody PasswordRequest request) {
        US.updatePassword(request);
        return ResponseEntity.ok().body(null);
    }

    // setear imagen
    @PostMapping("/updateImage")
    public ResponseEntity<Void> upload(@RequestBody ImageRequest request) throws IOException {
        var image = imageService.save(cloudinaryService.upload(request.getFile()));
        UserEntity usuario = UR.findById(request.getId()).orElseThrow();
        usuario.setImageUrl(image.getUrl());
        return ResponseEntity.ok().body(null);
    }

    @PutMapping(value = "/profileUpdate")
    public ResponseEntity<?> profileUpdate(@RequestBody ProfileRequest request) {
        US.profileUpdate(request);
        return ResponseEntity.ok().body(null);
    }

}
