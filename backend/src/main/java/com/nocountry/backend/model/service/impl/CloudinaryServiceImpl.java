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
                "cloud_name", "dbqelo1vd",
                "api_key", "589991622699799",
                "api_secret", "WC0heTCKa4m-vqrBoOURgbDLd90"
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
