package com.nocountry.backend.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.nocountry.backend.model.entity.Calification;

@Repository
public interface CalificationRepository extends JpaRepository<Calification,Long>{    
}
