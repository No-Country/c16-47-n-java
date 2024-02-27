package com.nocountry.backend.model.service.impl;

import com.nocountry.backend.model.entity.Image;
import com.nocountry.backend.model.repository.ImageRepository;
import com.nocountry.backend.model.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {
    private final ImageRepository imageRepository;

    @Override
    public Image save(Image image) {
       return imageRepository.save(image);
    }
}
