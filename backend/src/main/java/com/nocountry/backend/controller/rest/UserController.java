package com.nocountry.backend.controller.rest;

import com.nocountry.backend.model.dto.Request.AddressRequest;
import com.nocountry.backend.model.dto.Request.CellphoneRequest;
import com.nocountry.backend.model.dto.Request.EmailRequest;
import com.nocountry.backend.model.dto.Request.PasswordRequest;
import com.nocountry.backend.model.dto.Request.ProfileRequest;
import com.nocountry.backend.model.dto.Request.UsernameRequest;
import com.nocountry.backend.model.dto.Response.UserResponse;
import com.nocountry.backend.model.entity.Image;
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
import org.springframework.web.multipart.MultipartFile;

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
    public ResponseEntity<?> updatePassword(@RequestBody PasswordRequest request) {
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

    // setear imagen
    @PostMapping("/updateimage/{id}")
    public ResponseEntity<Void> upload(@RequestParam("image") MultipartFile multipartFile, @PathVariable Long id) throws IOException {
        var image = imageService.save(cloudinaryService.upload(multipartFile));
        UserEntity usuario = UR.findById(id).orElseThrow();
        usuario.setImageUrl(image.getUrl());
        return ResponseEntity.ok().body(null);
    }

    @PutMapping(value = "/profileupdate")
    public ResponseEntity<?> profileUpdate(@RequestBody ProfileRequest request) {
        US.progileUpdate(request);
        return ResponseEntity.ok().body(null);
    }

}
