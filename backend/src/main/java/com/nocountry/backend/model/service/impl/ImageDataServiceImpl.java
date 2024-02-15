package com.nocountry.backend.model.service.impl;

import com.nocountry.backend.common.utils.ImageUtil;
import com.nocountry.backend.model.entity.ImageData;
import com.nocountry.backend.model.repository.ImageRepository;
import com.nocountry.backend.model.service.ImageDataService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class ImageDataServiceImpl implements ImageDataService {

    private final ImageRepository imageRepository;

    public ImageDataServiceImpl(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    @Override
    public ImageData uploadImageData(MultipartFile file) throws IOException{
        ImageData imageData = imageRepository.save(ImageData.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .imageData(ImageUtil.compressImage(file.getBytes()))
                .build());
        System.out.println("image service impl : " + imageData.getName());
//        if(imageData != null){
//            return "file uploaded successfully : " + file.getOriginalFilename();
//        }
        return imageData;
    }
}
