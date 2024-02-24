package com.nocountry.backend.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.nocountry.backend.model.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long>{
    Product fyndByName(String name);
}
