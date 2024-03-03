package com.nocountry.backend.model.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.nocountry.backend.model.entity.Image;
import com.nocountry.backend.model.service.CloudinaryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class CloudinaryServiceImpl implements CloudinaryService {

    private final Cloudinary cloudinary;

    public CloudinaryServiceImpl() {
        this.cloudinary = new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "dkmme98fh",
                "api_key", "317988625797814",
                "api_secret", "ly-9EtJ2fKjtG4gc_NOr9U7RI1A"
        ));
    }

    @Override
    public Image upload(MultipartFile multipartFile) throws IOException {
        var uploadResult = cloudinary.uploader().upload(multipartFile.getBytes(), ObjectUtils.asMap("folder", "backend/"));
        Image image = new Image();
        image.setUrl((String)uploadResult.get("url"));
        return image;
    }
}
