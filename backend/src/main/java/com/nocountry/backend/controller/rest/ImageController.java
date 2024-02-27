package com.nocountry.backend.controller.rest;

import com.nocountry.backend.model.entity.Image;
import com.nocountry.backend.model.service.impl.CloudinaryServiceImpl;
import com.nocountry.backend.model.service.impl.ImageServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/image")
@RequiredArgsConstructor
public class ImageController {
    private final CloudinaryServiceImpl cloudinaryService;

    private final ImageServiceImpl imageService;


    @PostMapping("/upload")
    public ResponseEntity<Image> upload(@RequestParam("image") MultipartFile multipartFile) throws IOException {
        return ResponseEntity.ok().body(imageService.save(cloudinaryService.upload(multipartFile)));
    }
}
