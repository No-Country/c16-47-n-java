package com.nocountry.backend.model.service;

import com.nocountry.backend.model.entity.ImageData;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;

public interface ImageDataService {

    ImageData uploadImageData(MultipartFile file) throws IOException;
}
