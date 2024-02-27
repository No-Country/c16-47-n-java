package com.nocountry.backend.model.service;

import com.nocountry.backend.model.entity.Image;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface CloudinaryService {
    Image upload(MultipartFile multipartFile) throws IOException;
}
