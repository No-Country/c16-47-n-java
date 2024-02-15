package com.nocountry.backend.model.repository;

import com.nocountry.backend.model.entity.ImageData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<ImageData, Long> {
    ImageData findByName(String fileName);
}
