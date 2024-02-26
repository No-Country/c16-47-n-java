package com.nocountry.backend.model.repository;

import com.nocountry.backend.model.enums.ECategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.nocountry.backend.model.entity.Product;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long>{
    Product findByName(String name);
    List<Product> findByCategory(ECategory category);
    List<Product> findByPrice(double price);
    List<Product> findBy Price GreaterThan(double price);
    List<Product> findByPriceLessThan(double price);
    List<Product> findByPriceBetween(double price1, double price2);
}
